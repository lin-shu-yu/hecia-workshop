// ***********
// FACTOR DATA
// ***********
// "title": Appears at Top of Info Panel (And Factor itself)
// "description": Appears below title in Info Panel
// "citation": Appears below description in Info Panel, in gray
// "category": Appears as "tag" below citation in Info Panel
const factorData = {
  // Designed Features Factors
  habitable_volume: {
    title: "Habitable Volume",
    description: `When considering a pressurized system, there are differences between the total pressurized volume (the interior volume determined by the inner physical envelope) and the usable volume by its occupants <span class='quotation'>[Rudisill 2010]</span>. After the equipment, stowage, and outfitting of the interior, the remaining space is typically termed the "sand" volume (i.e., volume if sand could fill all crevices) <span class='quotation'>[Rudisill 2010]</span>. However, not all sand volume is usable or relevant for day-to-day living; for example, consider the volume beneath a couch or inside the fridge. Therefore, a smaller "net habitable volume" is typically the figure of merit for habitat design, and traditionally about 60% of total pressurized volume for space habitats <span class='quotation'>[Rudisill 2010]</span>.`,
    citation: `Rudisill, M., Howard, R., Griffin, B., Green, J., Toups, L., Kennedy, K. (2008). 'Lunar Architecture Team – Phase 2 Habitat Volume Estimation: 'Caution When Using Analogs' ', ASCE Earth and Space Conference, Long Beach, CA.`,
    category: "designed_features",
  },
  environmental_control: {
    title: "Environmental Control",
    description: `Environmental monitoring and control is necessary to maintain a habitable environment inside a confined space. For a spacecraft, the subsystem responsible for regulating the environment is termed "Environmental Control and Life Support Systems", or ECLSS. ECLSS comprises many subcomponents, which are responsible for thermal management, maintaining and monitoring atmospheric content (pressure, partial pressures, moisture, microbes, contaminants), water, and waste. It also typically includes fire detection, suppression, and cleanup systems <span class="quotation">[Broyan 2021]</span>.`,
    citation: `Broyan, J. L., Shaw, L., McKinley, M., Meyer, C., Ewert, M. K., Schneider, W. F., Meyer, M., Ruff, G. A., Owens, A. C., & Gatens, R. L. (2021). NASA Environmental Control and Life Support Technology Development for Exploration: 2020 to 2021 Overview. 50th International Conference on Environmental Systems.`,
    category: "designed_features",
  },
  circulation_paths: {
    title: "Circulation Paths",
    description: `Design and placement of circulation spaces, including hallways, access paths, stairs, entrances, contribute to the formation of friendships and social cohesion <span class='quotation'>[Festinger 1950][Skjaeveland and Garling 1997]</span>. Promotion of interpersonal processes can be designed into circulation spaces, much like common spaces <span class='quotation'>[Adianto 2021]</span>. Importantly, circulation spaces may be neither private or public, and can be flexible to provide the level of privacy needed (as described in Altman's theory of privacy <span class='quotation'>[Alman 1975]</span>).`,
    citation: `Festinger, L., Schachter, S., & Back, K. (1950). Social pressures in informal groups; a study of human factors in housing. Harper. Skjaeveland, O., & Garling, T. (1997). EFFECTS OF INTERACTIONAL SPACE ON NEIGHBOURING. Journal of Environmental Psychology, 17(3), 181–198.
        <br>Adianto, J., Gabe, R. T., Ristanto, D. F., & Sihombing, A. (2021). Circulation Space as "The Fourth Place" in a Private Student Housing Complex in Depok, Indonesia. The International Journal of Design in Society, 15(1), 59–72.
        <br>Altman, I. (1975). The environment and social behavior: Privacy, personal space, territory, crowding. Monterey, CA: Brooks/Cole.`,
    category: "designed_features",
  },
  layout: {
    title: "Layout",
    description: `Layout refers to the arrangement of spaces and the relationships (e.g., spatial, acoustic) between them. Typically, layouts for space habitats are arranged programmatically (i.e., by "programs" or primary activities supported by the space). For instance, one study organized activities that had taken place in space habitats (from Apollo to the International Space Station) into the following programs: sleep, hygiene, food, work, and leisure. Subsystems can also have specific layouts. For example, the International Space Station uses "racks" as a standard unit so systems (e.g., CO2 removal scrubber) and experiments can share standardized interfaces <span class='quotation'>[Pelfrey and Jordan 2008]</span>.`,
    citation: `Pelfrey, J., & Jordan, L. (2008). An EXPRESS Rack overview and support for microgravity research on the International Space Station (ISS). In 46th AIAA Aerospace Sciences Meeting and Exhibit (p. 819).`,
    category: "designed_features",
  },
  lighting: {
    title: "Lighting",
    description: `While natural lighting is important for everyday life, it is limited in extreme environments. Here, we discuss artificial lighting created to support living and working tasks. Some considerations for lighting include color (wavelength on the visible spectrum), color temperature (in degrees Kelvin), and brightness (lumens) <span class='quotation'>[Karlen 2017]</span>. Operationally, additional design features such as dimmability, adjustments throughout the day to support circadian rhythms, and design of lighting layers (daylight, decorative, focal, task, and ambient) can be considered <span class='quotation'>[Karlen 2017]</span>.`,
    citation: `Karlen, M., Spangler, C., & Benya, J. R. (2017). Lighting design basics. John Wiley & Sons.`,
    category: "designed_features",
  },
  privacy: {
    title: "Privacy",
    description: `Most privacy definitions vary in scope: personal privacy, as a state of being private <span class='quotation'>[Bailey 1979]</span>; environmental privacy, as a characteristic of the architecture and built environment <span class='quotation'>[Webster 1979]</span>; and the person-environment relationship of privacy as a transactional and regulated process <span class='quotation>[Altman 1975]</span>. Choice and the ability to regulate privacy is crucial. Components of privacy include the ability to be alone, as well as visual and auditory privacy <span class='quotation'>[Marshall 1972]</span>.`,
    citation: `Bailey, G. W. S. (1979). Privacy and the mental. Amsterdam: Rodopi N.V.
        <br>Webster, N. (1979). Webster's new twentieth century unabridged dictionary. New York: Publishers International.
        <br>Altman, I. (1975). The environment and social behavior: Privacy, personal space, territory, crowding. Monterey, CA: Brooks/Cole.
        <br>Marshall, N. J. (1972). Privacy and environment. Human Ecology, 1(2), 93–110.`,
    category: "designed_features",
  },
  ergonomics: {
    title: "Ergonomics",
    description: `The field of ergonomics integrates knowledge about the human physical and cognitive limitations with the design of interfaces, products, environments, and jobs <span class='quotation'>[Nussbaum and Van Dieën 2005]</span>. Physical ergonomics focuses on the demands placed on the human and the capabilities of the human to fulfill these, to ensure the demands do not exceed the capabilities <span class='quotation'>[Nussbaum and Van Dieën 2005]</span>. One example is anthropometry, which is a science that characterizes the human body and a design tool for physical ergonomics; NASA has published an Anthropometric Source Book based largely on data from the military population <span class='quotation'>[Churchill 1978]</span>. Cognitive ergonomics focuses on the cognitive resources and demands for a given task, environment, and user <span class='quotation'>[Stanton 2005]</span>. The quality of work is affected by the user's understanding of the situation (e.g., situation awareness, mental models, goals), which in turn affects the quality of work <span class='quotation'>[Hollnagel 1997]</span>. One key area of application is in human-robot interaction and joint cognitive systems, where cognitive ergonomics provides a lens of the "fit" of the work and mind in a coupled system, as opposed to simply the effects of one on the other <span class='quotation'>[Hollnagel 1997]</span>.`,
    citation: `Nussbaum, M. A., & Van Dieën, J. H. (2005). Physical Ergonomics. In M. Kutz (Ed.), Mechanical Engineers' Handbook (1st ed., pp. 762–781). Wiley.
        <br> Stanton, N. (Ed.). (2005). Handbook of human factors and ergonomics methods. CRC Press.
        <br> Churchill, E., Laubach, L. L., Mcconville, J. T., & Tebbetts, I. (1978). Anthropometric Source Book—Volume I; Anthropometry for Designers.pdf. NASA. 19790003563
        <br> Hollnagel, E. (1997). Cognitive ergonomics: It's all in the mind. Ergonomics, 40(10), 1170–1182.`,
    category: "designed_features",
  },
  fixtures: {
    title: "Fixtures",
    description: `Here, we define fixtures to include assets of the habitat that are installed, fixed, and/or (semi-)permanent. Some examples include apertures (i.e., openings such as doors, windows, docking ports), signage (e.g., node labels on the International Space Station), stowage (e.g., spaces for personal items and photos), and furniture. Fixtures can serve function and decorative purposes for the habitat. Note that while exercise equipment may fall under "fixtures", but we have defined it separately due to its significance in the space paradigm.`,
    citation: ``,
    category: "designed_features",
  },
  reconfigurability: {
    title: "Reconfigurability",
    description: `The extent to which the habitat can be altered (physically, psychologically, or programmatically) to serve a different purpose. In a study of architectural themes across analogs and space habitats (from Apollo to the International Space Station), "flexibility" (i.e., allowing adjustments according to user requirements) was defined as a key desire, specifically <span class='quotation'>[Häuplik-Meusburger 2011]</span>:
        <br>1. Spatial flexibility (variation in size and locations)
        <br>2. Object flexibility (variation in usage)
        <br>3. Individual flexibility (personalized variations)`,
    citation: `Häuplik-Meusburger, S. (2011). Architecture for astronauts: an activity-based approach. Springer Science & Business Media.`,
    category: "designed_features",
  },
  environmental_monotony: {
    title: "Environmental Monotony",
    description: `Monotony is described by an unchanging environment, repetition of events or situations, and chronic absence of novelty <span class='quotation'>[Das 2015]</span>. Here, environmental monotony is associated with characteristics of the built and natural environment, including layout, lighting, colors, textures, views, and sensory inputs.`,
    citation: `Das, S.K., Barhwal, K., Hota, S.K. (2015). Disrupting monotony during social isolation stress prevents early development of anxiety and depression like traits in male rats. BMC Neurosci 16, 2.`,
    category: "designed_features",
  },

  // Behavioral Health & Performance Outcomes Factors
  anxiety: {
    title: "Anxiety",
    description: `Anxiety is characterized by tension, worried thoughts, and physiological responses (e.g., elevated blood pressure) <span class='quotation'>[Corsini and Ozaki 1994]</span>. Anxiety is both a state and trait, meaning that some people are more disposed to anxious feelings, while others may experience anxiety more acutely <span class='quotation'>[Brown 2021]</span>. Beyond clinical interviews or professional assessments, subjective measures of anxiety exists in the form of surveys; some widely-used ones are the State-Trait Anxiety Inventory (STAI), Beck Anxiety Inventory (BAI), and the Hospital Anxiety and Depression Scale - Anxiety (HADS-A) <span class='quotation'>[Julian 2011]</span>. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a tension-anxiety subconstruct <span class='quotation'>[McNair 1971]</span>.`,
    citation: `Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House.
        <br>Corsini, R. J., & Ozaki, B. D. (1994). Encyclopedia of psychology (Vol. 1). New York: Wiley.
        <br>Julian, L. J. (2011). Measures of anxiety: state‐trait anxiety inventory (STAI), Beck anxiety inventory (BAI), and Hospital anxiety and Depression scale‐anxiety (HADS‐A). Arthritis care & research, 63(S11), S467-S472.
        <br>McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San`,
    category: "behavioral_health",
  },
  stress: {
    title: "Stress",
    description: `Stress refers to any environmental, social, or internal demand which prompts an individual to adjust their usual behavior <span class='quotation'>[Holmes and Rahe 1967][Thoits 1995]</span>. We feel stressed when the demand is beyond our capability to successfully cope <span class='quotation'>[Brown 2021]</span>. Stress also has biological responses, promoting various physical and psychological effects on the body (e.g., neuroendocrine/hormone system, cerebral cortex), as well as adverse cognitive effects (e.g., executive function and task performance) <span class='quotation'>[Cibrian-Llanderal 2018]</span>.`,
    citation: `Holmes, T. H., & Rahe, R. H. (1967). The social readjustment rating scale. Journal of Psychosomatic Research, 11(2), 213–218.
        <br>Thoits, P. A. (1995). Stress, Coping, and Social Support Processes: Where Are We? What Next? Journal of Health and Social Behavior, 35, 53.
        <br>Cibrian-Llanderal, T., Melgarejo-Gutierrez, M., & Hernandez-Baltazar, D. (2018). Stress and cognition: Psychological basis and support resources. Health and academic achievement, 11(10.5772).
        <br>Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House.`,
    category: "behavioral_health",
  },
  fatigue: {
    title: "Fatigue",
    description: `Fatigue is multidimensional, encompassing physical, physiological, and psychological aspects. Fatigue is defined as "the awareness of a decreased capacity for physical and/or mental activity due to an imbalance in the availability, utilization, and/or restoration of resources needed to perform activity" <span class='quotation'>[Aaronson 1999]</span>. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a fatigue-inertia subconstruct <span class='quotation'>[McNair 1971]</span>.`,
    citation: `McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services.
        <br>Aaronson, L. S., Teel, C. S., Cassmeyer, V., Neuberger, G. B., Pallikkathayil, L., Pierce, J., ... & Wingate, A. (1999). Defining and measuring fatigue. Image: the journal of nursing scholarship, 31(1), 45-50.`,
    category: "behavioral_health",
  },
  depression: {
    title: "Depression",
    description: `Depression has been studied as a clinical symptom for over 2,000 years <span class='quotation'>[Beck and Alford 2009]</span>. Depression is a cluster of behaviors that are persistent in time, including lack of interest in activities, loss of appetite, negative self-view, and alteration of mood (e.g., sadness, loneliness, apathy) <span class='quotation'>[Brown 2021][Beck and Alford 2009]</span>. Common scales for measuring depression include the Beck Depression Inventory (BDI) and the Depression Anxiety Stress Scales (DASS) <span class='quotation'>[Beck 1987][Lovibond and Lovibond 1995]</span>. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a depression-dejection subconstruct <span class='quotation'>[McNair 1971]</span>. While sadness is common to depression, it is not a necessary trait of depression <span class='quotation'>[Beck and Alford 2009]</span>. Although we have not defined it explicitly, it is an important component of the human emotional spectrum, with its most salient representation in behavioral health as a symptom of depression. Similarly, grief - composed of feelings of loss and longing – may be associated with 'depressed mood' but is realistically distinct <span class='quotation'>[Brown 2021]</span>.`,
    citation: `Beck, A. T., & Alford, B. A. (2009). Depression: Causes and treatment. University of Pennsylvania Press.
        <br>Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House.
        <br>Beck, A. T., Steer, R. A., & Brown, G. K. (1987). Beck depression inventory. San Antonio, TX.`,
    category: "behavioral_health",
  },
  boredom: {
    title: "Boredom",
    description: `Boredom arises from a lack of stimulation, attention, or arousal <span class='quotation'>[Bench and Lench 2013]</span>. It is defined as the negative experience of wanting, but being unable to, engage in satisfying activity <span class='quotation'>[Eastwood 2012]</span>. The standard measure questionnaire for mood used by NASA, the Profile of Mood States (POMS), encompasses a vigor-activity subconstruct, which may be a close approximate <span class='quotation'>[McNair 1971]</span>.`,
    citation: `Bench, S. W., & Lench, H. C. (2013). On the function of boredom. Behavioral sciences, 3(3), 459-472.
        <br>Eastwood, J. D., Frischen, A., Fenske, M. J., & Smilek, D. (2012). The unengaged mind: Defining boredom in terms of attention. Perspectives on psychological science, 7(5), 482-495.
        <br>McNair, D. M., Lorr, M., & Droppleman, L. F. (1971). Profiles of mood states. San Diego: Educational and Industrial Testing Services.`,
    category: "behavioral_health",
  },
  contentment: {
    title: "Contentment",
    description: `We distinguish contentment here as a low-arousal emotion that may compose feelings of peace, tranquility, satisfaction, and calm <span class='quotation'>[Brown 2021]</span>. Closely related constructs – happiness, joy, and gratitude – are more high-arousal emotions. We choose contentment here as the 'catch-all' for these positive emotions connected to the environment, as a more tangible attribute to promote as a behavioral health outcome. To distinguish from contentment, the state of happiness is a feeling of pleasure related to the immediate environment or circumstances <span class='quotation'>[Brown 2021]</span>. Happiness is more immediate, while other factors (e.g., joy and contentment) may be more chronic, and acute happiness may not necessarily contribute to long-term contentment <span class='quotation'>[Brown 2021]</span>.`,
    citation: `Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House.`,
    category: "behavioral_health",
  },
  crew_performance: {
    title: "Crew Performance",
    description: `Individual-level performance is typically task-related (e.g., accomplishment of task goals, errors, task duration). However, most often tasks are accomplished as a team <span class='quotation'>[Bell 2015]</span>, and overall performance relies on both the individual team members and the team as a whole <span class='quotation'>[Mathieu 2014]</span>. Team performance comprises the health of a team and the individual performances of each member. Based on the input-mediator-output-input model <span class='quotation'>[Ilgen 2005][Grossman 2017]</span>, team performance here encompasses both the accomplishment of tasks and goals as set by mission parameters, and also the cognitive and affective "emergent" states of a team <span class='quotation'>[Grossman 2017][Marks 2001]</span>. Affective states include team cohesion, team confidence, and team trust; cognitive states include team mental models, situational awareness, and team learning <span class='quotation'>[Grossman 2017]</span>. In isolated environments, the effect of team cohesion has an exaggerated relationship with team performance due to the extreme environment <span class='quotation'>[Vessey and Landon 2017]</span>.`,
    citation: `Bell, S. T. et al. (2015). Critical Team Composition Issues for Long-Distance and Long-Duration Space Exploration.
        <br>Mathieu, J. E., Tannenbaum, S. I., Donsbach, J. S., & Alliger, G. M. (2014). A Review and Integration of Team Composition Models: Moving Toward a Dynamic and Temporal Framework. Journal of Management, 40(1), 130-160.
        <br>Ilgen, D. R. et al. (2005). Teams in organizations: From input–process–output models to IMOI models. Annual Review of Psychology, 56, 517–543.`,
    category: "behavioral_health",
  },
  physical_health: {
    title: "Physical Health",
    description: `Health is a large umbrella term. A typical consideration is the length of life, expressed in average life expectancy, mortality rates, and death due to specific causes <span class='quotation'>[NCHS 2024]</span>. Physical health metrics may include physical ability, physical limitations, pain, and health outlook <span class='quotation'>[Ware 1987]</span>. Spaceflight considerations include adverse effects to radiation (e.g., increased cancer risk, degenerative tissue diseases), central nervous system deconditioning, muscle/bone/cardiovascular atrophy due to unloading/migravity, inadequate food and nutrition, lunar dust exposure, and injuries due to extravehicular activities <span class='quotation'>[McPhee and Charles 2009]</span>. On Earth, the United States Center for Disease Control recommends 30 minutes of moderate exercise every day to maintain health <span class='quotation'>[Pate 1995]</span>.`,
    citation: `NCHS: Health. (2024). United States: U.S. Department of Health and Human Services. Accessed May 5, 2024.
        <br>Ware, E. J. (1987). Standards for validating health measures: Definition and content. Journal of Chronic Diseases, 40(6), 473–480.
        <br>McPhee, J. C., & Charles, J. B. (Eds.). (2009). Human health and performance risks of space exploration missions: evidence reviewed by the NASA human research program (Vol. 3405). US National Aeronautics & Space Administration.`,
    category: "behavioral_health",
  },
  situation_awareness: {
    title: "Situation Awareness",
    description: `Situation awareness is the internalized mental model of the current state of one's environments <span class='quotation'>[Endsley 2021]</span>. Formally, it is defined most widely as "the perception of the elements in the environment within a volume of time and space, the comprehension of their meaning and the projection of their status in the near future" <span class='quotation'>[Endsley 1988]</span>. There are three components: 1) perceiving relevant information in the environments, 2) understanding what they mean for one's goals, and 3) predicting what will happen in the system in the near future – defined as levels 1, 2, and 3 situation awareness, respectively <span class='quotation'>[Endsley 2021]</span>.`,
    citation: `Endsley, M. R. (1988). Design and evaluation for situation awareness enhancement. In Proceedings of the Human Factors Society 32nd Annual Meeting (pp. 97–101). Santa Monica, CA: Human Factors Society.
        <br>Endsley, M. R. (2021). Situation awareness. Handbook of human factors and ergonomics, 434-455.`,
    category: "behavioral_health",
  },
  autonomy: {
    title: "Autonomy",
    description: `Autonomy is the ability to make independent decisions, often task-related (how and when to complete a task) in spaceflight settings. Closely related is autonomy, which refers to the capacity to act intentionally and/or the sense of volition (the power to enact one's will) <span class='quotation'>[Schlosser 2015][Goemaere 2016]</span>. Current Low Earth Orbit operational paradigms provide little autonomy to the crewmembers, as work schedules are set by mission control and modifications to procedures or plans are consulted with ground <span class='quotation'>[Goemaere 2016]</span>. However, current autonomy levels will need to change as mission distances and communication delays increase, leading to less ground support <span class='quotation'>[Marquez 2017]</span>. While there are efforts to increase crew autonomy through self-scheduling activities, for example, there are still major unknowns on the balance between crew and ground control <span class='quotation'>[Marquez 2017]</span>.`,
    citation: `Schlosser, M. (2015). Agency. Stanford Encyclopedia of Philosophy. Accessed May 2, 2024.
        <br>Goemaere, S., Vansteenkiste, M., & Van Petegem, S. (2016). Gaining deeper insight into the psychological challenges of human spaceflight: The role of motivational dynamics. Acta Astronautica, 121, 130-143.
        <br>Marquez, J. J., Hillenius, S., Kanefsky, B., Zheng, J., Deliz, I., & Reagan, M. (2017, March). Increasing crew autonomy for long duration exploration missions: self-scheduling. In 2017 IEEE Aerospace Conference (pp. 1-10). IEEE.`,
    category: "behavioral_health",
  },
  trust: {
    title: "Trust",
    description: `Trust is a cognitive assessment about the level of risk of making something valued, vulnerable to someone's (or something's) actions <span class='quotation'>[Feltman 2011]</span>. Some aspects of trust (-building or -maintaining) include respecting boundaries, reliability, accountability, integrity, and non-judgement <span class='quotation'>[Brown 2021]</span>. These may be referred to as the interpersonal or ability-based aspects of trust, important on a personal or team level <span class='quotation'>[Mayor 1995][Hoff and Bashir 2015]</span>. Trust in automation, which is especially relevant in spaceflight contexts, are more heavily reliant on performance-based trust (i.e., performance, process, or purpose) <span class='quotation'>[Lee and Moray 1992]</span>.`,
    citation: `Feltman, C. (2011). The thin book of trust: An essential primer for building trust at work. Thin Book Publishing.
        <br>Mayer R. C., Davis J. H., Schoorman F. D. (1995). An integrative model of organizational trust. Academy of Management Review, 20, 709–734.
        <br>Hoff, K. A., & Bashir, M. (2015). Trust in automation: Integrating empirical evidence on factors that influence trust. Human factors, 57(3), 407-434.
        <br>Lee J. D., Moray N. (1992). Trust, control strategies and allocation of function in human machine systems. Ergonomics, 22, 671–691.`,
    category: "behavioral_health",
  },
  nostalgia_homesickness: {
    title: "Nostalgia/Homesickness",
    description: `Homesickness is the set of feelings that are associated with the loss of known people and places <span class='quotation'>[Brown and Perkins 1992]</span>. Nostalgia is difficult to define precisely, but one interpretation is a primarily positive, context-specific emotion that combines sadness, happiness, yearning, and loss <span class='quotation'>[Brown 2021]</span>. We grouped them here since they are likely to occur in parallel in the context of Isolated, Confined, and Extreme environments.`,
    citation: `Brown, B. B., & Perkins, D. D. (1992). Disruptions in Place Attachment. In I. Altman & S. M. Low (Eds.), Place Attachment (pp. 279–304). Springer US.
        <br>Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House.`,
    category: "behavioral_health",
  },
  curiosity: {
    title: "Curiosity",
    description: `Curiosity can be a state (i.e., a curious person) or a trait (i.e., feel curious in the moment), and has both cognitive and affective components <span class='quotation'>[Brown 2021]</span>. Interest, or the intellectual component of curiosity, is a prerequisite to the eventual recognition of a knowledge gap and investment to fill the gap through exploration and learning <span class='quotation'>[Brown 2021]</span>.`,
    citation: `Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House.`,
    category: "behavioral_health",
  },
  kinship: {
    title: "Kinship",
    description: `During its conception, kinship was used to describe familial or genealogical ties, for example in "next of kin". David Durkheim, the founder of sociology as a formal discipline, sought to explain kinship as "mutual relations of being, participation in one another's existence" <span class='quotation'>[Sahlins 2011]</span>. Kinship, whose definition has been debated in anthropology for over 150 years <span class='quotation'>[Sahlins 2011]</span>, is chosen here to be the encompassing umbrella of mutual relational closeness, which comprises several subconstructs: belonging, connection, and loneliness.
        <br>Belonging – the connection that arises between people and groups without the need to compromise authenticity or values <span class='quotation'>[Brown 2021]</span> – is a core concept to kinship. Meaningful connections, that allows people to feel seen and valued, are psychologically critical <span class='quotation'>[Maslow and Lewis 1987]</span>. Loneliness is the absence of such meaningful connections, and is associated with a greater risk of physiological and psychological illnesses <span class='quotation'>[Brown 2021]</span>.`,
    citation: `Sahlins, M. (2011). What kinship is (part one). Journal of the Royal Anthropological Institute, 17(1), 2-19.
        <br> Brown, B. (2021). Atlas of the heart: Mapping meaningful connection and the language of human experience. Random House.
        <br> Maslow, A., & Lewis, K. J. (1987). Maslow's hierarchy of needs. Salenger Incorporated, 14(17), 987-990.`,
    category: "behavioral_health",
  },
};

// *********
// VARIABLES
// *********

// Indicates what's displayed on Info Panel
const state = {
  selectedFactor: null,
  selectedConnection: null,
};

const elements = {
  // Drop Zone
  dropZone: document.getElementById("drop-zone"),

  // Add Factor Modal
  addFactorModal: document.getElementById("addFactorModal"), // Modal Itself
  addBtn: document.getElementById("addBtn"), // Button that opens modal
  charCount: document.getElementById("charCount"), // Character count for FactorName
  saveFactor: document.getElementById("saveFactor"), // Button within modal saving factor
  cancelAddFactor: document.getElementById("cancelAddFactor"), // Button within modal closing modal
  factorName: document.getElementById("factorName"), // Entry in "Name" Textbox
  factorDescription: document.getElementById("factorDescription"), // Entry in "Description" Textbox
  factorCitation: document.getElementById("factorCitation"), // Entry in "Citation" Textbox
  factorCategory: document.getElementById("factorCategory"), // Entry in "Category" Multiselect
  customCategory: document.getElementById("customCategory"), // Entry in "Custom Category" Textbox (If Applicable)

  // Create Connection Modal
  connectionModal: document.getElementById("createConnectionModal"), // Modal Itself
  connectBtn: document.getElementById("connectBtn"), // Button that opens modal
  factor1Box: document.getElementById("factor1Box"), // Box that holds factor 1
  factor2Box: document.getElementById("factor2Box"), // Box that holds factor 2
  saveConnection: document.getElementById("saveConnection"), // Button within modal saving connection
  cancelConnection: document.getElementById("cancelCreateConnection"), // Button within modal closing modal
  connectionDescription: document.getElementById("connectionDescription"), // Entry in "Description" Textbox

  // Clear Board Button
  clearBoardBtn: document.getElementById("clearBoardBtn"),
};

// ************************************
// DRAG AND DROP FACTORS INTO DROP ZONE
// ************************************

// Dragging within dropzone (move factor itself)
let customDraggingFactor = null;
let customDragOffsetX = 0;
let customDragOffsetY = 0;

// Dragging from sidebar to dropzone (move clone of factor)
let dragClone = null;
let dragCloneOffsetX = 0;
let dragCloneOffsetY = 0;
let originalSidebarFactor = null;

// Drag/click suppression (so we don't click after drag)
let dragJustHappened = false;
let dragStartX = 0;
let dragStartY = 0;
let didDrag = false;
const DRAG_THRESHOLD = 5; // pixels

// Add Factor Click Suppression (if not already added)
if (!window._factorClickSuppressionAdded) {
  document.addEventListener(
    "click",
    function (e) {
      if (dragJustHappened && !isInConnectionMode) {
        dragJustHappened = false;
        if (e.target.closest(".factor")) {
          e.stopImmediatePropagation();
          e.preventDefault();
          return false;
        }
      }
    },
    true
  );
  window._factorClickSuppressionAdded = true;
}

// Handle dragging on a factor
function handleCustomMouseDown(e) {
  const factor = e.target.closest(".factor");
  if (!factor) return;
  e.preventDefault();
  document.body.style.cursor = "grabbing";

  // If sidebar factor, use clone-drag approach
  if (
    factor.style.position !== "absolute" &&
    factor.style.position !== "fixed" &&
    factor.closest(".categories")
  ) {
    originalSidebarFactor = factor;

    // Get mouse offset
    const rect = factor.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    // Create a clone
    dragClone = factor.cloneNode(true);
    dragClone.classList.add("dragging");
    dragClone.style.position = "absolute";
    dragClone.style.left = `${e.clientX - offsetX}px`;
    dragClone.style.top = `${e.clientY - offsetY}px`;
    dragClone.style.pointerEvents = "none";
    document.body.appendChild(dragClone);
    dragCloneOffsetX = offsetX;
    dragCloneOffsetY = offsetY;
    document.addEventListener("mousemove", handleCloneMouseMove);
    document.addEventListener("mouseup", handleCloneMouseUp, { once: true });
  }

  // If in drop zone, use normal custom drag
  else {
    customDraggingFactor = factor;
    const rect = factor.getBoundingClientRect();
    customDragOffsetX = e.clientX - rect.left;
    customDragOffsetY = e.clientY - rect.top;
    factor.classList.add("dragging");
    document.addEventListener("mousemove", handleCustomMouseMove);
    document.addEventListener("mouseup", handleCustomMouseUp, { once: true });
  }

  // Track drag start position
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  didDrag = false;
}

// Mouse dragging within dropzone
function handleCustomMouseMove(e) {
  if (!customDraggingFactor) return;

  // Calculate new position
  const dropZoneRect = elements.dropZone.getBoundingClientRect();
  const factorRect = customDraggingFactor.getBoundingClientRect();
  let x = e.clientX - dropZoneRect.left - customDragOffsetX;
  let y = e.clientY - dropZoneRect.top - customDragOffsetY;

  // Clamp so factor stays within drop zone
  x = Math.max(0, Math.min(x, dropZoneRect.width - factorRect.width));
  y = Math.max(0, Math.min(y, dropZoneRect.height - factorRect.height));
  customDraggingFactor.style.left = `${x + dropZoneRect.left}px`;
  customDraggingFactor.style.top = `${y + dropZoneRect.top}px`;

  // Check if drag distance exceeds threshold to suppress click
  if (
    !didDrag &&
    (Math.abs(e.clientX - dragStartX) > DRAG_THRESHOLD ||
      Math.abs(e.clientY - dragStartY) > DRAG_THRESHOLD)
  ) {
    didDrag = true;
  }

  updateArrows();
}

// Let go of drag within dropzone
function handleCustomMouseUp() {
  if (!customDraggingFactor) return;
  customDraggingFactor.classList.remove("dragging");
  document.body.style.cursor = "";
  customDraggingFactor = null;
  document.removeEventListener("mousemove", handleCustomMouseMove);
  saveWorkspaceState();
  dragJustHappened = didDrag;
}

// Mouse dragging from sidebar to dropzone
function handleCloneMouseMove(e) {
  if (!dragClone) return;
  dragClone.style.left = `${e.clientX - dragCloneOffsetX}px`;
  dragClone.style.top = `${e.clientY - dragCloneOffsetY}px`;

  // Check if drag distance exceeds threshold to suppress click
  if (
    !didDrag &&
    (Math.abs(e.clientX - dragStartX) > DRAG_THRESHOLD ||
      Math.abs(e.clientY - dragStartY) > DRAG_THRESHOLD)
  ) {
    didDrag = true;
  }
}

// Let go of drag from sidebar
function handleCloneMouseUp(e) {
  if (!dragClone || !originalSidebarFactor) return;
  document.body.style.cursor = "";

  // Check if dropped inside drop zone
  const dropZoneRect = elements.dropZone.getBoundingClientRect();
  const cloneRect = dragClone.getBoundingClientRect();
  const fullyInside =
    cloneRect.left >= dropZoneRect.left &&
    cloneRect.right <= dropZoneRect.right &&
    cloneRect.top >= dropZoneRect.top &&
    cloneRect.bottom <= dropZoneRect.bottom;

  if (fullyInside) {
    // Move the real factor to the body at the clone's position
    originalSidebarFactor.style.position = "absolute";
    originalSidebarFactor.style.left = dragClone.style.left;
    originalSidebarFactor.style.top = dragClone.style.top;
    originalSidebarFactor.classList.remove("dragging");
    saveWorkspaceState();
  }

  // Remove the clone
  dragClone.remove();
  dragClone = null;
  originalSidebarFactor = null;
  document.removeEventListener("mousemove", handleCloneMouseMove);
  dragJustHappened = didDrag;
}

// Attach custom drag listener
if (!window._customFactorDragListenersAdded) {
  document.addEventListener("mousedown", handleCustomMouseDown);
  window._customFactorDragListenersAdded = true;
}

// **************************
// FACTOR/CONNECTION CLICKING
// **************************

// Handle factor clicking (showing definition and edit/delete for custom factors)
function selectFactor(factorElement) {
  const factorId = factorElement.getAttribute("data-factor");

  // If we're clicking the currently selected item
  const deselecting = factorId === state.selectedFactor;

  // Clear any selections
  clearFactorOrConnection();

  if (!deselecting) {
    // Select new factor
    state.selectedFactor = factorId;
    factorElement.classList.add("selected");
  }

  updateUI();
}

// Handle connection clicking (showing connection description)
function selectConnection(connection) {
  // If we're clicking the currently selected item
  const deselecting = connection === state.selectedConnection;

  // Clear any selections
  clearFactorOrConnection();

  if (!deselecting) {
    // Select new connection
    state.selectedConnection = connection;
    connection.elements?.group.classList.add("selected");
  }

  updateUI();
}

// Clear any connection or factor
function clearFactorOrConnection() {
  if (state.selectedFactor) {
    document
      .querySelector(`.factor[data-factor="${state.selectedFactor}"]`)
      ?.classList.remove("selected");
    state.selectedFactor = null;
  }
  if (state.selectedConnection) {
    state.selectedConnection.elements?.group.classList.remove("selected");
    state.selectedConnection = null;
  }
}

// ****************
// ADD FACTOR MODAL
// ****************

// Open Add Factor Modal
function openAddFactorModal() {
  elements.addFactorModal.querySelector(".modal-title").textContent =
    "Add Factor"; // Set modal title to 'Add Factor'
  elements.addFactorModal.style.display = "flex";
  elements.factorName.focus();

  // Initialize character count listener for Factor Name
  const factorNameInput = document.getElementById("factorName");
  factorNameInput.addEventListener("input", function () {
    elements.charCount.textContent = this.value.length;
  });
}

// Open Modal when Editing Custom Factor
function editFactor(factorId) {
  const factor = factorData[factorId];

  // Update modal title for editing
  elements.addFactorModal.querySelector(".modal-title").textContent =
    "Edit Factor"; // Set modal title to 'Edit Factor'

  // Populate the add factor modal with existing data
  elements.factorName.value = factor.title || "";
  elements.factorDescription.value = factor.description || "";
  elements.factorCitation.value = factor.citation || "";

  // Initialize character count listener for Factor Name
  // Set character count to current factor title length
  elements.charCount.textContent = factor.title.length;
  const factorNameInput = document.getElementById("factorName");
  factorNameInput.addEventListener("input", function () {
    elements.charCount.textContent = this.value.length;
  });

  // Check the appropriate radio button if category exists
  if (factor.category) {
    // Check if category is DF or BH
    const categoryMap = {
      "Designed Features": "designed_features",
      "Behavioral Health": "behavioral_health",
    };
    const categoryValue = categoryMap[factor.category] || "";

    if (categoryValue) {
      // Check the radio button for the category
      const radio = document.querySelector(
        `input[name="factorCategory"][value="${categoryValue}"]`
      );
      if (radio) radio.checked = true;
    } else if (factor.category !== "None") {
      // Handle custom category
      const customRadio = document.querySelector(
        'input[name="factorCategory"][value="custom"]'
      );
      if (customRadio && elements.customCategory) {
        customRadio.checked = true;
        elements.customCategory.value = factor.category;
        document.querySelector(".custom-category-container").style.display =
          "block";
      }
    }
  }

  // Show the modal
  elements.addFactorModal.dataset.editing = factorId;
  elements.addFactorModal.style.display = "flex";
  elements.factorName.focus();
}

// Close Add Factor Modal
function closeAddFactorModal() {
  // Clear the form
  elements.factorName.value = "";
  elements.factorDescription.value = "";
  elements.factorCitation.value = "";

  // Uncheck all radio buttons
  document.querySelectorAll('input[name="factorCategory"]').forEach((radio) => {
    radio.checked = false;
  });

  // Hide custom category input
  const customContainer = document.querySelector(".custom-category-container");
  if (customContainer) {
    customContainer.style.display = "none";
  }

  // Clear editing state
  delete elements.addFactorModal.dataset.editing;

  // Reset Char Count (of factor name) to 0
  elements.charCount.textContent = 0;

  // Hide the modal
  elements.addFactorModal.style.display = "none";
}

// Delete a custom factor
function deleteFactor(factorId) {
  // Remove from factorData
  delete factorData[factorId];

  // Remove from DOM
  const factorElement = document.querySelector(
    `.factor[data-factor="${factorId}"]`
  );

  if (factorElement) {
    factorElement.remove();
  }

  // Remove any connections that involve this factor
  const connectionsToRemove = connections.filter(
    (conn) => conn.factor1 === factorId || conn.factor2 === factorId
  );

  connectionsToRemove.forEach((connection) => {
    // Remove the SVG elements
    if (connection.elements?.group) {
      connection.elements.group.remove();
    }
  });

  // Remove connections from the connections array
  connections = connections.filter(
    (conn) => conn.factor1 !== factorId && conn.factor2 !== factorId
  );

  // Clear selection if this factor was selected
  if (state.selectedFactor === factorId) {
    state.selectedFactor = null;
  }

  // Update UI and save
  updateUI();
  saveWorkspaceState();
}

// Called when "Save" is clicked in Factor Modal
function handleAddFactor() {
  const name = elements.factorName.value;
  const description = elements.factorDescription.value;
  const citation = elements.factorCitation.value;
  const categoryRadio = document.querySelector(
    'input[name="factorCategory"]:checked'
  );
  const customCategory = elements.customCategory?.value;
  const isEditing = elements.addFactorModal.dataset.editing;

  if (!name) {
    alert("Please enter a factor name");
    return;
  }

  // Determine category
  let category = "None";
  if (categoryRadio && categoryRadio.checked) {
    if (categoryRadio.value === "designed_features") {
      category = "Designed Features";
    } else if (categoryRadio.value === "behavioral_health") {
      category = "Behavioral Health";
    } else if (categoryRadio.value === "custom" && customCategory) {
      category = customCategory;
    }
  }

  let factorId;
  let factorElement = null;

  // Update existing factor
  if (isEditing) {
    factorId = isEditing;

    factorData[factorId] = {
      ...factorData[factorId], // Keep existing properties
      title: name,
      description: description,
      citation: citation,
      category: category,
    };

    // Update the factor element
    factorElement = document.querySelector(
      `.factor[data-factor="${factorId}"]`
    );
    if (factorElement) {
      factorElement.querySelector("span").textContent = name;
      // Update the class based on the new category
      const categoryClass =
        category === "Designed Features"
          ? "gray-df"
          : category === "Behavioral Health"
          ? "gray-bh"
          : "gray";
      factorElement.className = `factor ${categoryClass}`;
    }
  }

  // Create a new factor
  else {
    factorId = "custom_" + Date.now();
    factorData[factorId] = {
      title: name,
      description: description,
      citation: citation,
      category: category,
      isCustom: true,
    };

    // Create and position the new factor in the dropzone
    factorElement = createAndPositionFactor(factorId, factorData[factorId]);

    // Deselect anything
    clearFactorOrConnection();
  }

  // Update the UI and select the factor
  if (factorElement) {
    state.selectedFactor = factorId;
    factorElement.classList.add("selected");
    updateUI();
  }

  // Close the modal
  closeAddFactorModal();
  saveWorkspaceState();
}

// Helper function to create and position a factor in the dropzone
function createAndPositionFactor(factorId, factorData) {
  // Create the factor element
  const factorElement = document.createElement("div");
  // Use different class based on category for custom factors
  const categoryClass =
    factorData.category === "Designed Features"
      ? "gray-df"
      : factorData.category === "Behavioral Health"
      ? "gray-bh"
      : "gray";
  factorElement.className = `factor ${categoryClass}`;
  factorElement.dataset.factor = factorId;

  const span = document.createElement("span");
  span.textContent = factorData.title || factorId;
  factorElement.appendChild(span);

  // Add listeners
  factorElement.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    selectFactor(factorElement);
  });

  // Position the factor on the page
  if (elements.dropZone) {
    // Make the factor position fixed relative to the viewport
    factorElement.style.position = "fixed";
    factorElement.style.zIndex = "1000";

    // Position in the top left with some padding
    factorElement.style.left = "23%";
    factorElement.style.top = "4%";

    // Add to body
    document.body.appendChild(factorElement);
    saveWorkspaceState();
    return factorElement;
  }
  return null;
}

// ****************
// CREATE CONNECTION MODAL
// ****************

// Connection modal variables
let selectedFactor1 = null;
let selectedFactor2 = null;
let isInConnectionMode = false;
let connections = [];
let svg = document.getElementById("arrow-canvas");
let currentConnectionBox = null;
let isDragging = false;

// Open connection modal
function openCreateConnectionModal() {
  // Change Modal Title to "Create Connection"
  document.querySelector("#createConnectionModal .modal-title").textContent =
    "Create Connection";
  elements.connectionModal.style.display = "flex";
}

// Close connection modal
function closeCreateConnectionModal() {
  elements.connectionModal.style.display = "none";

  // Reset
  selectedFactor1 = null;
  selectedFactor2 = null;
  elements.factor1Box.innerHTML =
    '<div class="click-to-select">Click to Select</div>';
  elements.factor2Box.innerHTML =
    '<div class="click-to-select">Click to Select</div>';
  elements.connectionDescription.value = "";
  elements.saveConnection.disabled = true;

  // Clear editing state
  delete elements.connectionModal.dataset.editing;
}

// Handle Connection Modal "Select a Factor" box click (Connection Mode)
function handleFactorBoxClick(boxNumber) {
  // Enter connection mode
  isInConnectionMode = true;
  currentConnectionBox = boxNumber;

  // Hide the modal
  elements.connectionModal.style.display = "none";

  // Add connection mode class to body
  document.body.classList.add("connection-mode-active");

  // Disable buttons and factors outside drop zone
  disableElementsForConnectionMode();

  // Create and show cancel button in connection mode
  const cancelButton = document.createElement("button");
  cancelButton.className = "cancel-connection-btn";
  cancelButton.innerHTML = "Cancel";
  elements.dropZone.appendChild(cancelButton);
  cancelButton.addEventListener("click", (e) => {
    e.stopPropagation();
    exitConnectionMode();
  });

  // Clean up function
  const cleanup = () => {
    document.body.classList.remove("connection-mode-active");
    const cancelBtn = document.querySelector(".cancel-connection-btn");
    if (cancelBtn) cancelBtn.remove();
  };

  // Store cleanup function
  window.cleanupConnectionMode = cleanup;
}

// CONNECTION MODE FUNCTIONS

// Disable buttons and factors during connection mode
function disableElementsForConnectionMode() {
  // Disable Add Factor, Create Connection, Clear Board button
  elements.addBtn.disabled = true;
  elements.connectBtn.disabled = true;
  elements.clearBoardBtn.disabled = true;

  // Find the factor we've already selected to disable choosing same factor
  let alreadySelectedFactor = null;

  // If we're selected on box 1, find the element in box 2 to disable
  if (currentConnectionBox === 1) {
    if (selectedFactor2) {
      alreadySelectedFactor = selectedFactor2;
    }
  }
  // If we're selected on box 2, find the element in box 1 to disable
  else {
    if (selectedFactor1) {
      alreadySelectedFactor = selectedFactor1;
    }
  }

  document.querySelectorAll(".factor").forEach((factor) => {
    // Check if factor is in dropzone and already chosen
    let factorId = factor.getAttribute("data-factor");
    if (alreadySelectedFactor && alreadySelectedFactor === factorId) {
      factor.style.pointerEvents = "none"; // If so, disable
    }

    // Check if factor is in categories box
    if (
      factor.style.position !== "absolute" &&
      factor.style.position !== "fixed" &&
      factor.closest(".categories")
    ) {
      factor.style.pointerEvents = "none"; // If so, disable
    }
  });
}

// Re-enable buttons and factors after connection mode
function enableElementsAfterConnectionMode() {
  // Re-enable Add Factor, Create Connection, Clear Board button
  elements.addBtn.disabled = false;
  elements.connectBtn.disabled = false;
  elements.clearBoardBtn.disabled = false;

  // Re-enable all factors
  document.querySelectorAll(".factor").forEach((factor) => {
    factor.style.pointerEvents = "auto";
  });
}

// Exit connection mode
function exitConnectionMode() {
  if (!isInConnectionMode) return;

  // Clean up event listeners and UI
  if (window.cleanupConnectionMode) {
    window.cleanupConnectionMode();
    delete window.cleanupConnectionMode;
  }

  // Re-enable buttons and factors
  enableElementsAfterConnectionMode();

  // Reset the factor box if no selection was made
  if (currentConnectionBox) {
    const factorBox = document.getElementById(
      `factor${currentConnectionBox}Box`
    );
    if (
      (currentConnectionBox === 1 && !selectedFactor1) ||
      (currentConnectionBox === 2 && !selectedFactor2)
    ) {
      factorBox.innerHTML =
        '<div class="click-to-select">Click to Select</div>';
    }
  }

  // Show the modal again
  if (elements.connectionModal) {
    elements.connectionModal.style.display = "flex";
  }

  // Reset state
  isInConnectionMode = false;
  currentConnectionBox = null;
}

// Function to handle factor selection in connection mode
function selectFactorForConnection(factorElement) {
  if (!isInConnectionMode || !currentConnectionBox) return;

  const factorId = factorElement.getAttribute("data-factor");
  const factor = factorData[factorId];

  // Update the factor box with the selected factor, matching the exact style of the original factors
  const factorBox = elements[`factor${currentConnectionBox}Box`];
  if (factorBox) {
    // Get the factor's category to determine the color class and styling
    const category = factor.category;
    let colorClass;
    // Determine the correct color class based on category
    if (factor.isCustom) {
      // For custom factors, use the gray class and check for specific category borders
      if (category === "Designed Features") {
        colorClass = "gray-df";
      } else if (category === "Behavioral Health") {
        colorClass = "gray-bh";
      } else {
        colorClass = "gray";
      }
    } else {
      // For default factors
      if (category === "designed_features") {
        colorClass = "blue";
      } else if (category === "behavioral_health") {
        colorClass = "yellow";
      }
    }

    // Create the factor element with exact same styling as the originals
    factorBox.innerHTML = `
      <div class="factor-clone ${colorClass}">
        <span>${factor.title}</span>
      </div>
    `;

    // Store the selected factor
    if (currentConnectionBox === 1) {
      selectedFactor1 = factorId;
    } else {
      selectedFactor2 = factorId;
    }

    // Enable save button if both factors are selected
    if (elements.saveConnection && selectedFactor1 && selectedFactor2) {
      elements.saveConnection.disabled = false;
    }
  }

  // Exit connection mode and show the modal
  exitConnectionMode();
  if (elements.connectionModal) {
    elements.connectionModal.style.display = "flex";
  }
}

// Set up event listener for all factor clicks
document.addEventListener("click", function (e) {
  const factorElement = e.target.closest(".factor");
  if (!factorElement) {
    // Check if we're clicking on any buttons
    const interactiveSelectors = [
      ".action-btn",
      ".edit",
      ".delete",
      ".btn",
      ".modal",
      ".modal-content",
    ];
    const isInteractive = interactiveSelectors.some((selector) =>
      e.target.closest(selector)
    );
    if (!isInteractive && !isInConnectionMode) {
      clearFactorOrConnection();
      updateUI();
    }
    return;
  }
  e.stopPropagation();

  // Check if factor is disabled (outside drop zone during connection mode)
  if (factorElement.style.pointerEvents === "none") {
    return;
  }

  if (isInConnectionMode) {
    selectFactorForConnection(factorElement);
  } else {
    selectFactor(factorElement);
  }
});

// DRAWING THE ARROW

// Helper function to find intersection point of a line with a rectangle
function getLineRectIntersection(x1, y1, x2, y2, rect) {
  const corners = [
    [rect.left, rect.top],
    [rect.right, rect.top],
    [rect.right, rect.bottom],
    [rect.left, rect.bottom],
  ];

  let bestIntersection = null,
    minDist = Infinity;

  for (let i = 0; i < 4; i++) {
    const [px1, py1] = corners[i];
    const [px2, py2] = corners[(i + 1) % 4];

    let intersectX, intersectY;

    if (px1 === px2) {
      // Vertical edge
      if (x1 === x2) continue;
      const m = (y2 - y1) / (x2 - x1);
      intersectX = px1;
      intersectY = y1 - m * x1 + m * intersectX;
      if (intersectY < Math.min(py1, py2) || intersectY > Math.max(py1, py2))
        continue;
    } else {
      // Horizontal edge
      if (y1 === y2) continue;
      const m = (y2 - y1) / (x2 - x1);
      intersectY = py1;
      intersectX = (intersectY - (y1 - m * x1)) / m;
      if (intersectX < Math.min(px1, px2) || intersectX > Math.max(px1, px2))
        continue;
    }

    const dist = Math.sqrt((intersectX - x1) ** 2 + (intersectY - y1) ** 2);
    if (dist < minDist) {
      minDist = dist;
      bestIntersection = { x: intersectX, y: intersectY };
    }
  }
  return bestIntersection;
}

// Draw an arrow between two factors
function drawArrow(connection) {
  const factor1 = document.querySelector(
    `.factor[data-factor="${connection.factor1}"]`
  );
  const factor2 = document.querySelector(
    `.factor[data-factor="${connection.factor2}"]`
  );
  if (!factor1 || !factor2) return;

  const rect1 = factor1.getBoundingClientRect();
  const rect2 = factor2.getBoundingClientRect();
  const svgRect = svg.getBoundingClientRect();

  const x1 = rect1.left + rect1.width / 2 - svgRect.left;
  const y1 = rect1.top + rect1.height / 2 - svgRect.top;
  const x2 = rect2.left + rect2.width / 2 - svgRect.left;
  const y2 = rect2.top + rect2.height / 2 - svgRect.top;

  const targetRect = {
    left: rect2.left - svgRect.left,
    top: rect2.top - svgRect.top,
    right: rect2.right - svgRect.left,
    bottom: rect2.bottom - svgRect.top,
  };

  const intersection = getLineRectIntersection(x1, y1, x2, y2, targetRect);
  const { x: endX, y: endY } = intersection;

  // Create arrowhead marker if it doesn't exist
  if (!document.getElementById("arrowhead")) {
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    const marker = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "marker"
    );
    marker.setAttribute("id", "arrowhead");
    marker.setAttribute("markerWidth", "6");
    marker.setAttribute("markerHeight", "6");
    marker.setAttribute("refX", "4.5");
    marker.setAttribute("refY", "3");
    marker.setAttribute("orient", "auto");

    const polygon = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    polygon.setAttribute("points", "0,0 6,3 0,6");
    polygon.setAttribute("fill", "#ffffffff");
    polygon.setAttribute("stroke", "none");

    marker.appendChild(polygon);
    defs.appendChild(marker);
    svg.appendChild(defs);
  }

  // Create line and hit area
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  const hitArea = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );

  [line, hitArea].forEach((el) => {
    el.setAttribute("x1", x1);
    el.setAttribute("y1", y1);
    el.setAttribute("x2", endX);
    el.setAttribute("y2", endY);
  });

  line.setAttribute("marker-end", "url(#arrowhead)");
  line.setAttribute("class", "connection-line");

  hitArea.setAttribute("class", "connection-hit-area");
  hitArea.setAttribute("data-connection-id", connections.indexOf(connection));
  hitArea.style.pointerEvents = "auto";
  hitArea.addEventListener("click", (e) => {
    e.stopPropagation();
    selectConnection(connection);
  });

  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttribute("class", "connection-group");
  group.appendChild(line);
  group.appendChild(hitArea);
  svg.appendChild(group);

  connection.elements = { group, line, hitArea };
}

// Update all arrows (called when factors are dragging)
function updateArrows() {
  connections.forEach((connection) => {
    const factor1 = document.querySelector(
      `.factor[data-factor="${connection.factor1}"]`
    );
    const factor2 = document.querySelector(
      `.factor[data-factor="${connection.factor2}"]`
    );

    const rect1 = factor1.getBoundingClientRect();
    const rect2 = factor2.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();

    const x1 = rect1.left + rect1.width / 2 - svgRect.left;
    const y1 = rect1.top + rect1.height / 2 - svgRect.top;
    const x2 = rect2.left + rect2.width / 2 - svgRect.left;
    const y2 = rect2.top + rect2.height / 2 - svgRect.top;

    const targetRect = {
      left: rect2.left - svgRect.left,
      top: rect2.top - svgRect.top,
      right: rect2.right - svgRect.left,
      bottom: rect2.bottom - svgRect.top,
    };

    const intersection = getLineRectIntersection(x1, y1, x2, y2, targetRect);
    const { x: endX, y: endY } = intersection;

    [connection.elements.line, connection.elements.hitArea].forEach((el) => {
      if (el) {
        el.setAttribute("x1", x1);
        el.setAttribute("y1", y1);
        el.setAttribute("x2", endX);
        el.setAttribute("y2", endY);
      }
    });
  });
}

// Update arrows when window is resized
window.addEventListener("resize", updateArrows);

// Handle saving a connection (create new or update existing)
function handleSaveConnection() {
  const description = document
    .getElementById("connectionDescription")
    .value.trim();

  // Check if we're editing an existing connection
  const isEditingConnection = document.getElementById("createConnectionModal")
    .dataset.editing;

  // If the same factor is both selected factors, alert and return
  if (selectedFactor1 === selectedFactor2) {
    alert("You cannot create a connection between the same factor");
    return;
  }

  // If we're editing, set a connection index
  let connectionIndex = null;
  if (isEditingConnection !== undefined) {
    connectionIndex = parseInt(isEditingConnection);
  }

  // Check if a connection exists (exclude connectionIndex as index if editing)
  const connectionExists = connections.some(
    (conn, index) =>
      index !== connectionIndex && // Skip the connection being edited
      ((conn.factor1 === selectedFactor1 && conn.factor2 === selectedFactor2) ||
        (conn.factor1 === selectedFactor2 && conn.factor2 === selectedFactor1))
  );

  // If a connection between factors already exists, give an alert and return
  if (connectionExists) {
    alert("A connection between these factors already exists");
    return;
  }

  // If we're editing a connection, simply update said connection
  if (isEditingConnection !== undefined) {
    const connectionIndex = parseInt(isEditingConnection);
    const existingConnection = connections[connectionIndex];

    if (existingConnection) {
      // Update the connection data
      existingConnection.factor1 = selectedFactor1;
      existingConnection.factor2 = selectedFactor2;
      existingConnection.description = description;
      existingConnection.timestamp = new Date().toISOString();

      // Remove old SVG elements
      if (existingConnection.elements?.group) {
        existingConnection.elements.group.remove();
      }

      // Redraw the connection
      drawArrow(existingConnection);

      // Update the connection ID in the hit area
      const hitArea = existingConnection.elements?.hitArea;
      if (hitArea) {
        hitArea.setAttribute("data-connection-id", connectionIndex);
      }

      // Clear editing state
      delete elements.connectionModal.dataset.editing;

      // Close the modal and reset the form
      closeCreateConnectionModal();

      // Keep the connection selected after editing
      state.selectedConnection = existingConnection;

      // Add visual selection to the connection
      const group = existingConnection.elements?.group;

      if (group) {
        group.classList.add("selected");
      }

      updateUI();
    }
  }
  // Otherwise, create a new connection
  else {
    const connection = {
      factor1: selectedFactor1,
      factor2: selectedFactor2,
      description: description,
      timestamp: new Date().toISOString(),
    };

    // Add to connections array and draw the arrow
    connections.push(connection);
    drawArrow(connection);

    // Update the connection ID in the hit area after it's added to the array
    const hitArea = connection.elements?.hitArea;
    if (hitArea) {
      hitArea.setAttribute("data-connection-id", connections.length - 1);
    }

    // Close the modal and reset the form
    closeCreateConnectionModal();

    // Automatically select the newly created connection
    selectConnection(connection);
  }
  saveWorkspaceState(); // <--- Save after connection change
}

// Edit a connection
function editConnection(connectionIndex) {
  const connection = connections[connectionIndex];
  if (!connection) return;

  // Populate the connection modal with existing data
  selectedFactor1 = connection.factor1;
  selectedFactor2 = connection.factor2;

  // Update the factor boxes to show the selected factors
  if (elements.factor1Box) {
    const factor1 = factorData[connection.factor1];
    const colorClass1 = factor1?.isCustom
      ? factor1.category === "Designed Features"
        ? "gray-df"
        : factor1.category === "Behavioral Health"
        ? "gray-bh"
        : "gray"
      : factor1?.category === "designed_features"
      ? "blue"
      : "yellow";

    elements.factor1Box.innerHTML = `
      <div class="factor ${colorClass1}">
        <span>${factor1?.title || connection.factor1}</span>
      </div>
    `;
    elements.factor1Box.classList.add("selected");
  }

  if (elements.factor2Box) {
    const factor2 = factorData[connection.factor2];
    const colorClass2 = factor2?.isCustom
      ? factor2.category === "Designed Features"
        ? "gray-df"
        : factor2.category === "Behavioral Health"
        ? "gray-bh"
        : "gray"
      : factor2.category === "designed_features"
      ? "blue"
      : "yellow";

    elements.factor2Box.innerHTML = `
      <div class="factor ${colorClass2}">
        <span>${factor2?.title || connection.factor2}</span>
      </div>
    `;
    elements.factor2Box.classList.add("selected");
  }

  // Set the description
  if (elements.connectionDescription) {
    elements.connectionDescription.value = connection.description || "";
  }

  // Enable the save button
  if (elements.saveConnection) {
    elements.saveConnection.disabled = false;
  }

  document.querySelector("#createConnectionModal .modal-title").textContent =
    "Edit Connection"; // Update modal title for editing

  // Show the modal with a flag indicating this is an edit
  if (elements.connectionModal) {
    elements.connectionModal.dataset.editing = connectionIndex;
    elements.connectionModal.style.display = "flex";
  }
}

// Delete a connection
function deleteConnection(connectionIndex) {
  const connection = connections[connectionIndex];
  if (!connection) return;

  // Remove the connection from the array
  connections.splice(connectionIndex, 1);

  // Remove the SVG elements
  if (connection.elements?.group) {
    connection.elements.group.remove();
  }

  // Clear selection if this connection was selected
  if (state.selectedConnection === connection) {
    state.selectedConnection = null;
  }

  // Update UI
  updateUI();
  saveWorkspaceState(); // <--- Save after delete
}

// ***********
// CLEAR BOARD
// ***********

function clearBoard() {
  if (
    !confirm(
      "Are you sure you want to clear the board? This will remove all custom factors, connections, and reset all factors to their original positions. This action cannot be undone."
    )
  ) {
    return;
  }

  // Remove all custom factors from DOM and factorData
  for (const [id, data] of Object.entries(factorData)) {
    if (data.isCustom) {
      const el = document.querySelector(`.factor[data-factor='${id}']`);
      if (el) el.remove();
      delete factorData[id];
    }
  }

  // Remove all factors from drop zone and move default ones back to their containers
  document.querySelectorAll(".factor").forEach((factor) => {
    const id = factor.dataset.factor;
    const data = factorData[id];
    // Remove inline styles
    factor.style.position = "";
    factor.style.left = "";
    factor.style.top = "";
    factor.style.zIndex = "";
    // Move back to original container
    const category = data.category;
    let container;
    if (category === "designed_features") {
      container = document.querySelector(
        '.box[data-category="designed_features"] .factors-container'
      );
    } else if (category === "behavioral_health") {
      container = document.querySelector(
        '.box[data-category="behavioral_health"] .factors-container'
      );
    }
    if (container) container.appendChild(factor);
  });

  // Remove all connections and their SVG elements
  connections.forEach((conn) => {
    if (conn.elements?.group) conn.elements.group.remove();
  });
  connections.length = 0;

  // Clear selection state
  clearFactorOrConnection();

  // Clear localStorage
  localStorage.removeItem(STORAGE_KEY);

  // Update UI and arrows
  updateUI();
  updateArrows();
}

// ***********************
// UPDATE UI AFTER CHANGES
// ***********************

// Update the UI based on current state
function updateUI() {
  const factor = state.selectedFactor ? factorData[state.selectedFactor] : null;
  const connection = state.selectedConnection
    ? connections.find((c) => c === state.selectedConnection)
    : null;
  const infoPanel = document.querySelector(".info-panel");
  const infoContent = document.querySelector(".info-content");
  const infoActions = document.querySelector(".info-actions");

  // If we're selected on a connection
  if (connection) {
    // Update the panel title with connection info
    const titleElement = infoPanel.querySelector("h3");
    if (titleElement) {
      const factor1Title = factorData[connection.factor1]?.title;
      const factor2Title = factorData[connection.factor2]?.title;
      titleElement.textContent = `${factor1Title} → ${factor2Title}`;
    }

    // Connection description
    infoContent.innerHTML = `
      <p>${connection.description || "No description available."}</p>
    `;

    // Show action buttons for connections (same styling as custom factors)
    infoActions.style.display = "flex";
    infoActions.innerHTML = `
      <button id="editConnection" class="edit">
        <i class="fas fa-edit"></i> Edit
      </button>
      <button id="deleteConnection" class="delete">
        <i class="fas fa-trash"></i> Delete
      </button>
    `; // Change ID of buttons to connection ID

    // Add event listeners to the buttons
    const editBtn = infoActions.querySelector("#editConnection");
    const deleteBtn = infoActions.querySelector("#deleteConnection");

    if (editBtn) {
      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        editConnection(connections.indexOf(connection));
      });
    }
    if (deleteBtn) {
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        deleteConnection(connections.indexOf(connection));
      });
    }
  }

  // If we're selected on a factor
  else if (factor) {
    // Update the panel title with the factor name
    const titleElement = infoPanel.querySelector("h3");
    if (titleElement) {
      titleElement.textContent = factor.title;
    }

    // Determine category class
    let categoryClass = "category-default";
    const category = factor.category;

    if (category === "Designed Features" || category === "designed_features") {
      categoryClass = "category-df";
    } else if (
      category === "Behavioral Health" ||
      category === "behavioral_health"
    ) {
      categoryClass = "category-bh";
    }

    // Format category name for display
    const displayCategory = category.replace("_", " ");

    // Update the Info Panel content
    infoContent.innerHTML = `
            <p>${factor.description || "No definition available."}</p>
            ${
              factor.citation
                ? `<br><div class="quotation">${factor.citation}</div><br>`
                : ""
            }
            <div class="factor-category ${categoryClass}">
                ${displayCategory}
            </div>
        `;

    // Show/hide action buttons for custom factors
    const isCustomFactor = factor.isCustom;

    if (isCustomFactor) {
      infoActions.style.display = "flex";
      infoActions.innerHTML = `
        <button id="editFactor" class="edit">
          <i class="fas fa-edit"></i> Edit
        </button>
        <button id="deleteFactor" class="delete">
          <i class="fas fa-trash"></i> Delete
        </button>
      `; // Change ID of buttons to factor ID

      // Add event listeners to the buttons
      const editBtn = infoActions.querySelector("#editFactor");
      const deleteBtn = infoActions.querySelector("#deleteFactor");

      if (editBtn) {
        editBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          editFactor(state.selectedFactor);
        });
      }
      if (deleteBtn) {
        deleteBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          deleteFactor(state.selectedFactor);
        });
      }
    } else {
      infoActions.style.display = "none"; // No edit/delete buttons
    }
  } else {
    // Reset the title to default
    const titleElement = document.querySelector(".info-panel h3");
    if (titleElement) {
      titleElement.textContent = "Factor Information";
    }
    infoContent.innerHTML =
      "<p>Click on any factor or connection to see detailed information here.</p>";
    infoActions.style.display = "none"; // No edit/delete buttons
  }
}

// **********
// INITIALIZE
// **********

// Factors and Document
function init() {
  // ADD FACTOR MODAL

  // Show modal when clicking the Add Factor button
  if (elements.addBtn) {
    elements.addBtn.addEventListener("click", (e) => {
      if (elements.addBtn.disabled) return;
      openAddFactorModal();
    });
  }

  // Close modal when clicking cancel
  if (elements.cancelAddFactor) {
    elements.cancelAddFactor.addEventListener("click", closeAddFactorModal);
  }

  // Save factor when clicking save
  if (elements.saveFactor) {
    elements.saveFactor.addEventListener("click", handleAddFactor);
  }

  // Add event listener for custom category radio button
  document.querySelectorAll('input[name="factorCategory"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const customContainer = document.querySelector(
        ".custom-category-container"
      );
      if (e.target.value === "custom") {
        customContainer.style.display = "block";
      } else {
        customContainer.style.display = "none";
      }
    });
  });

  // CREATE CONNECTION MODAL

  // Show modal when clicking the Create Connection button
  if (elements.connectBtn) {
    elements.connectBtn.addEventListener("click", (e) => {
      if (elements.connectBtn.disabled) return;
      openCreateConnectionModal();
    });
  }

  // Save connection when clicking save
  if (elements.saveConnection) {
    elements.saveConnection.addEventListener("click", handleSaveConnection);
  }

  if (elements.cancelConnection) {
    elements.cancelConnection.addEventListener(
      "click",
      closeCreateConnectionModal
    );
  }
  document
    .getElementById("factor1Box")
    ?.addEventListener("click", () => handleFactorBoxClick(1));
  document
    .getElementById("factor2Box")
    ?.addEventListener("click", () => handleFactorBoxClick(2));

  // CLEAR BOARD BUTTON

  // Add Clear Board button handler
  if (elements.clearBoardBtn) {
    elements.clearBoardBtn.addEventListener("click", clearBoard);
  }

  // SVG FOR ARROWS

  if (!svg) {
    svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "arrow-canvas";
    svg.style.position = "absolute";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.width = "100%";
    svg.style.height = "100%";
    svg.style.pointerEvents = "auto";
    svg.style.zIndex = "1";
    elements.dropZone.prepend(svg);
  }

  updateUI();
}

// --- Persistence Helpers ---
const STORAGE_KEY = "hecia_workspace_state_v1";

function saveWorkspaceState() {
  // Save positions of all factors
  const positions = {};
  document.querySelectorAll(".factor").forEach((factor) => {
    const id = factor.dataset.factor;
    positions[id] = {
      left: factor.style.left,
      top: factor.style.top,
      position: factor.style.position,
      zIndex: factor.style.zIndex,
    };
  });

  // Save custom factors (only those with isCustom)
  const customFactors = {};
  for (const [id, data] of Object.entries(factorData)) {
    if (data.isCustom) customFactors[id] = data;
  }

  // Save connections (all)
  const savedConnections = connections.map((conn) => ({
    factor1: conn.factor1,
    factor2: conn.factor2,
    description: conn.description,
    timestamp: conn.timestamp,
  }));

  // Save
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      positions,
      customFactors,
      connections: savedConnections,
    })
  );
}

function loadWorkspaceState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;
  try {
    const {
      positions,
      customFactors,
      connections: savedConnections,
    } = JSON.parse(raw);

    // Restore custom factors
    if (customFactors) {
      for (const [id, data] of Object.entries(customFactors)) {
        factorData[id] = data;
        // If not already in DOM, create it
        if (!document.querySelector(`.factor[data-factor="${id}"]`)) {
          createAndPositionFactor(id, data);
        }
      }
    }

    // Restore positions for all factors
    if (positions) {
      for (const [id, pos] of Object.entries(positions)) {
        const factor = document.querySelector(`.factor[data-factor="${id}"]`);
        if (factor) {
          factor.style.left = pos.left || "";
          factor.style.top = pos.top || "";
          factor.style.position = pos.position || "";
          factor.style.zIndex = pos.zIndex || "";
        }
      }
    }

    // Restore connections
    if (savedConnections) {
      // Remove all current connections from DOM
      connections.forEach((conn) => {
        if (conn.elements?.group) conn.elements.group.remove();
      });
      connections.length = 0;
      // Add saved connections
      savedConnections.forEach((conn) => {
        connections.push({ ...conn });
      });
      // Redraw all arrows
      setTimeout(() => {
        connections.forEach((connection) => drawArrow(connection));
        updateArrows();
      }, 0);
    }
    saveWorkspaceState();
  } catch (e) {
    console.error("Failed to load workspace state:", e);
  }
}

// --- Load state on page load ---
document.addEventListener("DOMContentLoaded", () => {
  loadWorkspaceState();
  init();
});
