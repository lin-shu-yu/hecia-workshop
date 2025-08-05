// ********************
// EXPORT FUNCTIONALITY
// ********************

// Generate export of workspace
async function exportWorkspace() {
  // Get all factors in the dropzone only
  const dropzoneFactors = [];
  document.querySelectorAll(".factor").forEach((factor) => {
    // If the factor is positioned (meaning it's in the dropzone), add factor to dropzoneFactors
    if (
      factor.style.position === "absolute" ||
      factor.style.position === "fixed"
    ) {
      const factorId = factor.getAttribute("data-factor");
      const factorInfo = factorData[factorId];
      if (factorInfo) {
        dropzoneFactors.push({
          id: factorId,
          title: factorInfo.title,
          description: factorInfo.description,
          citation: factorInfo.citation,
          category: factorInfo.category,
          isCustom: factorInfo.isCustom || false,
          position: {
            left: factor.style.left,
            top: factor.style.top,
          },
        });
      }
    }
  });

  // Get all connections
  const connectionData = connections.map((conn) => ({
    factor1: {
      id: conn.factor1,
      title: factorData[conn.factor1]?.title || conn.factor1,
    },
    factor2: {
      id: conn.factor2,
      title: factorData[conn.factor2]?.title || conn.factor2,
    },
    description: conn.description,
  }));

  // Clear factor/connection selections
  clearFactorOrConnection();

  // Capture dropzone screenshot
  const dropzoneScreenshot = await captureDropzoneScreenshot();

  // Create export data
  const exportData = {
    factors: dropzoneFactors,
    connections: connectionData,
    dropzoneScreenshot: dropzoneScreenshot,
    totalFactors: dropzoneFactors.length,
    totalConnections: connectionData.length,
  };

  // Generate HTML for export
  const exportHTML = await generateExportHTML(exportData);

  // Download the HTML file
  downloadHTMLFile(exportHTML);
}

// Capture screenshot of the dropzone
async function captureDropzoneScreenshot() {
  const dropzone = document.getElementById("drop-zone");
  try {
    // Load html2canvas if not already loaded
    if (typeof html2canvas === "undefined") {
      await loadHtml2Canvas();
    }

    // Temporarily hide the bottom bar (buttons)
    const bottomBar = dropzone.querySelector(".bottom-bar");
    const originalBottomBarDisplay = bottomBar ? bottomBar.style.display : "";
    if (bottomBar) bottomBar.style.display = "none";

    // Get dropzone bounds for capture area
    const dropzoneBounds = dropzone.getBoundingClientRect();
    const captureArea = {
      left: Math.max(0, dropzoneBounds.left),
      top: Math.max(0, dropzoneBounds.top),
      width: dropzoneBounds.width,
      height: dropzoneBounds.height,
    };

    // Capture the entire document to ensure we get all positioned elements
    const canvas = await html2canvas(document.documentElement, { scale: 4 });

    // Create a new canvas with just the dropzone content area
    const croppedCanvas = document.createElement("canvas");
    const ctx = croppedCanvas.getContext("2d");
    croppedCanvas.width = captureArea.width * 4; // Scale for 4x resolution
    croppedCanvas.height = captureArea.height * 4;

    // Draw the cropped area
    ctx.drawImage(
      canvas,
      captureArea.left * 4,
      captureArea.top * 4,
      captureArea.width * 4,
      captureArea.height * 4,
      0,
      0,
      captureArea.width * 4,
      captureArea.height * 4
    );

    // Restore bottom bar visibility
    if (bottomBar) bottomBar.style.display = originalBottomBarDisplay;

    // Convert to data URL
    return croppedCanvas.toDataURL("image/png");
  } catch (error) {
    console.error("Failed to capture screenshot:", error);
    return "";
  }
}

// Load html2canvas library (tool that takes SS of HTML element and renders it into a canvas element)
async function loadHtml2Canvas() {
  return new Promise((resolve, reject) => {
    if (typeof html2canvas !== "undefined") {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Styling for actual HTML Download (Screenshot, Factor Cards, Connection Cards)
async function generateExportHTML(data) {
  // Factor categories map
  const factorCategories = {
    designed_features: "Designed Features",
    behavioral_health: "Behavioral Health & Performance",
    "Designed Features": "Designed Features",
    "Behavioral Health": "Behavioral Health & Performance",
  };

  // Factor Card Styling
  const factorHTML = data.factors
    .map((factor) => {
      const normalizedCategory = (factor.category || "")
        .toLowerCase()
        .replace(/\s/g, "_");
      const categoryDisplay =
        factorCategories[normalizedCategory] || factor.category;

      // To set correct category color for category tag
      const categoryClass =
        normalizedCategory === "designed_features"
          ? "category-df"
          : normalizedCategory === "behavioral_health"
          ? "category-bh"
          : "category-default";

      // To set correct border-left (based on category) for factor item
      const categoryItem =
        normalizedCategory === "designed_features"
          ? "export-item-df"
          : normalizedCategory === "behavioral_health"
          ? "export-item-bh"
          : "export-item-default";

      return `
      <div class="export-item ${categoryItem}">
        <h3>${factor.title}</h3>
        <div class="factor-category ${categoryClass}">${categoryDisplay}</div>
        <p class="description">${
          factor.description || "No definition available."
        }</p>
        ${
          factor.citation
            ? `<div class="factor-citation">${factor.citation}</div>`
            : ""
        }
        ${
          factor.isCustom ? '<div class="custom-badge">Custom Factor</div>' : ""
        }
      </div>
    `;
    })
    .join("");

  // Connection card styling
  const connectionHTML = data.connections
    .map(
      (conn) => `
    <div class="export-item export-item-connection">
      <h3>${conn.factor1.title} → ${conn.factor2.title}</h3>
      <p class="description">${
        conn.description || "No description available."
      }</p>
    </div>
  `
    )
    .join("");

  // Load the template and CSS
  const templateResponse = await fetch("export-template.html");
  let template = await templateResponse.text();

  const cssResponse = await fetch("export.css");
  const cssContent = await cssResponse.text();

  // Replace the CSS link with embedded styles
  template = template.replace(
    '<link rel="stylesheet" href="export.css" />',
    `<style>${cssContent}</style>`
  );

  // Replace placeholders
  template = template.replace("{{totalFactors}}", data.totalFactors);
  template = template.replace("{{totalConnections}}", data.totalConnections);
  template = template.replace("{{factorHTML}}", factorHTML);
  template = template.replace("{{connectionHTML}}", connectionHTML);

  // Get screenshot and replace screenshot placeholder
  const screenshotHTML = data.dropzoneScreenshot
    ? `<img src="${data.dropzoneScreenshot}" alt="Dropzone Screenshot" style="max-width: 100%"/>`
    : "<p>No screenshot available</p>";
  template = template.replace("{{dropzoneScreenshot}}", screenshotHTML);

  return template;
}

// Function to download HTML file
function downloadHTMLFile(htmlContent) {
  // Create blob with HTML content
  const blob = new Blob([htmlContent], { type: "text/html" });

  // Create download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;

  // Generate filename with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, -5);
  a.download = `hecia-export-${timestamp}.html`;

  // Trigger download
  document.body.appendChild(a);
  a.click();

  // Clean up
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
