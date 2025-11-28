// data.js
const layoutTemplates = {

    welcome: (content) => `
        <div class="welcome-layout">
        <div class="hero-section">
            <div class="hero-content">
                
                ${content.image ? `
                    <div class="hero-image">
                        <img src="${content.image}" alt="${content.imageAlt || 'Welcome Image'}">
                    </div>
                ` : ''}
                <p>${content.boxContent}</p>
            </div>
        </div>
        

        <div class="cta-buttons">
            <button class="btn-primary"><a href="https://github.com/MatsVestvik" >GitHub</a></button>
            <button class="btn-primary"><a href="https://www.youtube.com/@MatsOrpiaVestvik" >YouTube</a></button>
            <button class="btn-primary"><a href="https://www.linkedin.com/in/mats-vestvik-928066388/" >Linkedin</a></button>
        </div>
    </div>
`,
    
    project: (content) => `
        <div class="project-layout">
            <div class="project-header">
                <h2>${content.title}</h2>
                <div class="project-meta">
                    ${content.tech ? `<span class="tech-badge"><a href="https://github.com/MatsVestvik" >${content.tech}</a></span>` : ''}
                    ${content.duration ? `<span class="duration">${content.duration}</span>` : ''}
                </div>
            </div>
            <div class="project-description">
                <div class="project-image">
                    <img src="${content.image}" alt="${content.imageAlt || 'project image'}">
                </div>
                <p>${content.boxContent}</p>
                
            </div>
            <div class = "project-footer">
                
                ${content.learnings ? `
                <div class="project-learnings">
                    <h4>What I Learned</h4>
                    <ul>
                        ${content.learnings.map(learning => `<li>${learning}</li>`).join('')}
                    </ul>
                </div>
                <div class="project-features">
                    <h4 class="project-keyfeatures">Key Features</h4>
                    <div class="features-grid">
                        ${content.features ? content.features.map(feature => `
                            <div class="feature-item">
                                <span class="feature-icon">✓</span>
                                <span>${feature}</span>
                            </div>
                        `).join('') : ''}
                    </div>
                </div>
            </div>
            
            ` : ''}
        </div>
    `,
    
    skills: (content) => `
        <div class="skills-layout">
            <h2>${content.title}</h2>
            <div class="skills-categories">
                ${content.categories ? content.categories.map(category => `
                    <div class="skill-category">
                        <h4>${category.name}</h4>
                        <div class="skills-list">
                            ${category.skills.map(skill => `
                                <div class="skill-item">
                                    <span class="skill-name">${skill.name}</span>
                                    ${skill.level ? `<div class="skill-level">
                                        <div class="skill-bar" style="width: ${skill.level}%"></div>
                                    </div>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('') : ''}
            </div>
        </div>
    `,
    
    timeline: (content) => `
        <div class="timeline-layout">
            <h2>${content.title}</h2>
            <div class="timeline">
                ${content.events ? content.events.map((event, index) => `
                    <div class="timeline-item ${index % 2 === 0 ? 'left' : 'right'}">
                        <div class="timeline-date">${event.date}</div>
                        <div class="timeline-content">
                            <h4>${event.title}</h4>
                            <p>${event.description}</p>
                        </div>
                    </div>
                `).join('') : ''}
            </div>
        </div>
    `,
    
    default: (content) => `
        <div class="default-layout">
            <h3>${content.title}</h3>
            <p>${content.boxContent}</p>
            <div class="construction-icon">🚧</div>
        </div>
    `
};

// Content data for each numbered div with layouts
const contentData = {
    1: {
        title: "Welcome",
        layout: "welcome",
        boxContent: `Welcome to my portfolio. Connect with me on LinkedIn or explore my 
        GitHub for detailed project information. Navigate by hovering over the project
         containers.`,
        mainContent: `I'm Mats Orpia Vestvik, I enjoy learning and doing new things.`,
        image: "../images/portrait.png",
        imageAlt: "portrait", // Optional alt text
        
    },
    2: {
        title: "LEGO EV3 Turret",
        layout: "project",
        boxContent: `This was a group project where we made a turret system. The system was
         capable of shooting as far as 5 meters, with different methods for wheter you would want to 
         hit the target from above or from the side
          Visit my <a href="https://github.com/MatsVestvik/LegoEV3" style="text-decoration: underline;">github</a> to explore the code
          Or visit my <a href="https://www.youtube.com/watch?v=-ISvwlWxbGg" style="text-decoration: underline;">YouTube</a> channel for a demonstration.
          You can also have a look at the <a href="docs/idatt1004__2025_14_prosjektrapport.pdf" style="text-decoration: underline;">raport</a> here
        `,
        mainContent: `This project was the first project assigned to us 
        when starting my bachelor. It taught me how to work in a team, 
        and how to do new things`,
        image: "../images/LegoRobot.jpeg",
        imageAlt: "lego robot",
        tech: "LEGO Mindstorms",
        duration: "2 months",
        backgroundVideo: "../images/legovideo.mp4",
        features: [
            "Physics calulations",
            "Coordinate to vector calculations",
            "Creative builing",
            "Team collaboration"
        ],
        learnings: [
            "Teamwork and project management",
            "physics integration and calibration",
            "Algorithm optimization",
            "Problem-solving under constraints"
        ]
    },
    3: {
        title: "JAVA Project",
        layout: "project",
        boxContent: `During the first year of my computer science degree we completed 11 java
         assignments not including a final exam program. These where simple tasks that tought me the fundamentals
         of coding and java. Explore these 
         <a href="https://github.com/MatsVestvik/IDATT1003" style="text-decoration: underline;">project</a> or see my
         <a href="https://github.com/NTNU-IDI/mappe-2025-MatsVestvik" style="text-decoration: underline;">final</a>
          project in my github.`,
        mainContent: `As part of my education at NTNU I made a Java project
        for my first semester that involved object-oriented programming principles.`,
        image: "../images/Javalogo.png",
        imageAlt: "java project",
        tech: "Java",
        duration: "3 months",
        backgroundGif: "../images/header.jpg",
        features: [
            "Structure and readablity",
            "Immutable and secure system",
            "Structured code and coding convention",
            "Diary system"
        ],
        learnings: [
            "Creating larger project",
            "Structuring code",
            "Security principles",
            "Constructing clean code"
        ]
    },
    4: {
        title: "My Skills",
        layout: "skills",
        mainContent: `Technical skills and proficiencies across various technologies and tools.`,
        categories: [
            {
                name: "Programming",
                skills: [
                    { name: "Java", level: 80 },
                    { name: "Python", level: 50 },
                    { name: "JavaScript", level: 40 },
                    { name: "HTML/CSS", level: 90 }
                ]
            },
            {
                name: "Frameworks",
                skills: [
                    { name: "React", level: 1 },
                    { name: "Node.js", level: 1 },
                    { name: "Spring Boot", level: 1 }
                ]
            },
            {
                name: "Tools",
                skills: [
                    { name: "Git", level: 80 },
                    { name: "Conda", level: 30 },
                    { name: "VS Code", level: 80 }
                ]
            }
        ]
    },
    5: {
        title: "Experience Timeline",
        layout: "timeline",
        mainContent: `My journey through education and projects.`,
        events: [
            {
                date: "2025",
                title: "Started Bachelor's Degree",
                description: "Began computer science studies at NTNU"
            },
            {
                date: "2022",
                title: "First Programming Projects",
                description: "Started exploring web development and algorithms"
            },
            {
                date: "2021",
                title: "High School Graduation",
                description: "Completed high school with focus on mathematics and technology"
            }
        ]
    },
    6: {
        title: "Coming Soon...",
        layout: "default",
        boxContent: "This area is under construction",
        mainContent: `New projects under way`
    },
    7: {
        title: "Coming Soon...",
        layout: "default",
        boxContent: "This area is under construction",
        mainContent: `New projects under way`
    },
    8: {
        title: "Coming Soon...",
        layout: "default",
        boxContent: "This area is under construction",
        mainContent: `New projects under way`
    },
    9: {
        title: "Coming Soon...",
        layout: "default",
        boxContent: "This area is under construction",
        mainContent: `New projects under way`
    }
};