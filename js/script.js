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
            <button class="btn-primary"><a href="https://github.com/MatsVestvik/MatsVestvik.github.io" >GitHub</a></button>
            <button class="btn-primary">Linkdin</button>
        </div>
    </div>
`,
    
    project: (content) => `
        <div class="project-layout">
            <div class="project-header">
                <h2>${content.title}</h2>
                <div class="project-meta">
                    ${content.tech ? `<span class="tech-badge"><a href="https://github.com/MatsVestvik/LegoEV3/blob/main/main.py" >${content.tech}</a></span>` : ''}
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
        boxContent: `Welcome to my portfolio. Bellow you can find 
                    Linkdin if you want to get in touch and my my github if you want
                     more details on my projects. You can navigate my projects
                    by hovering over the containers.`,
        mainContent: `I'm Mats Orpia Vestvik, I enjoy learning and doing new things.`,
        image: "../images/portrait.png",
        imageAlt: "portrait", // Optional alt text
        
    },
    2: {
        title: "LEGO Robot",
        layout: "project",
        boxContent: `This was a group project where we where given the 
        task of creating a lego robot that could perform various tasks. 
        One such task was making a line following robot that would compete
        in a race. Visit my <a href="https://github.com/MatsVestvik/LegoEV3/blob/main/main.py" style="text-decoration: underline;">
        github</a> to explore the code`,
        mainContent: `This project was the first project assigned to us 
        when starting my bachelor. It taught me how to work in a team, 
        and how to do new things`,
        image: "../images/LegoRobot.jpeg",
        imageAlt: "lego robot",
        tech: "LEGO Mindstorms",
        duration: "2 months",
        features: [
            "Line following algorithm",
            "Obstacle detection system",
            "Real-time sensor processing",
            "Team collaboration"
        ],
        learnings: [
            "Teamwork and project management",
            "Sensor integration and calibration",
            "Algorithm optimization",
            "Problem-solving under constraints"
        ]
    },
    3: {
        title: "JAVA Project",
        layout: "project",
        boxContent: `This is a java project where i created a diary. It has no gui and consist of pure JAVA willpower. 
        Creating this product was challenging, because there where no visual representation of what was happening. There where several deep nested 
        if statements that got me lost several times, but we got there in the end. `,
        mainContent: `As part of my education at NTNU I made a Java project
        for my first semester that involved object-oriented programming principles.`,
        image: "../images/uc.png",
        imageAlt: "java project",
        tech: "Java",
        duration: "3 months",
        features: [
            "Viable tool",
            "Immutable and secure system",
            "Structured code",
            "Something"
        ],
        learnings: [
            "Creating larger project",
            "Structuring code",
            "somehting",
            "something"
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
                    { name: "Java", level: 85 },
                    { name: "Python", level: 78 },
                    { name: "JavaScript", level: 90 },
                    { name: "HTML/CSS", level: 95 }
                ]
            },
            {
                name: "Frameworks",
                skills: [
                    { name: "React", level: 8 },
                    { name: "Node.js", level: 25 },
                    { name: "Spring Boot", level: 7 }
                ]
            },
            {
                name: "Tools",
                skills: [
                    { name: "Git", level: 88 },
                    { name: "Conda", level: 65 },
                    { name: "VS Code", level: 92 }
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