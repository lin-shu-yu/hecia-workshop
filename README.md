# HECIA workshop platform

Access here: https://github.com/lin-shu-yu/hecia-workshop <br>

## Contributing

The project is written in HTML, CSS, and Javascript. <br>

```
customhecia/
├── export-template.html    # Export HTML template file
├── export.css              # Export CSS Styles
├── export.js               # Export JavaScript file
├── index.html              # Main HTML file
├── main.css                # CSS Styles
├── main.js                 # Main JavaScript file
└── README.md               # This file
```

The main page is associated with three files: index.html, main.css, and main.js. <br>
To add a factor: navigate to index.html in either the "Designed Features" factors section or the "Behavioral Health & Performance Factors" section (as needed) and customize your factor name and "data-factor" (id). Then, navigate to main.js and add your factor to the factorData dictionary, using your value of "data-factor" from index.html as your key. Fill out the appropriate title, description, citation, and category (designed_features or behavioral_health). <br>
To change factor definitions or citations, adjust the appropriate entry in the factorData dictionary in main.js.<br>

The exported HTML file based on your main page is associated with three files: export-template.html, export.css, and export.js. <br>
