document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine');
    const contentArea = document.getElementById('contentArea');
    const titleElement = document.querySelector('.leftMainHead h1');

    // Store the original content
    const originalTitle = titleElement.textContent;
    const originalContent = contentArea.innerHTML;

    // Layout templates
    const layoutTemplates = {
        welcome: (content) => `
            <div class="welcome-layout">
                <div class="hero-section">
                    <h2>${content.title}</h2>
                    <div class="welcome-icon">👋</div>
                </div>
                <div class="content-section">
                    <p>${content.boxContent}</p>
                    <div class="cta-buttons">
                        <button class="btn-primary">Explore Projects</button>
                        <button class="btn-secondary">Get in Touch</button>
                    </div>
                </div>
            </div>
        `,
        
        project: (content) => `
            <div class="project-layout">
                <div class="project-header">
                    <h2>${content.title}</h2>
                    <div class="project-meta">
                        ${content.tech ? `<span class="tech-badge">${content.tech}</span>` : ''}
                        ${content.duration ? `<span class="duration">${content.duration}</span>` : ''}
                    </div>
                </div>
                <div class="project-description">
                    <p>${content.boxContent}</p>
                </div>
                <div class="project-features">
                    <h4>Key Features</h4>
                    <div class="features-grid">
                        ${content.features ? content.features.map(feature => `
                            <div class="feature-item">
                                <span class="feature-icon">✓</span>
                                <span>${feature}</span>
                            </div>
                        `).join('') : ''}
                    </div>
                </div>
                ${content.learnings ? `
                <div class="project-learnings">
                    <h4>What I Learned</h4>
                    <ul>
                        ${content.learnings.map(learning => `<li>${learning}</li>`).join('')}
                    </ul>
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
            boxContent: `Welcome to my portfolio. You can navigate my projects
                        by hovering over the containers.`,
            mainContent: `I'm Mats Orpia Vestvik, explore my work by 
                         hovering over the numbered containers to the right.`
        },
        2: {
            title: "LEGO Robot",
            layout: "project",
            boxContent: `This was a group project where we where given the 
            task of creating a lego robot that could perform various tasks. 
            One such task was making a line following robot that would compete
            in a race.`,
            mainContent: `This project was the first project assigned to us 
            when starting my bachelor. It taught me how to work in a team, 
            and how to do new things`,
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
            boxContent: "A comprehensive Java application with multiple modules including database integration and GUI interface.",
            mainContent: `As part of my education at NTNU I made a Java project
            for my first semester that involved object-oriented programming principles.`,
            tech: "Java + MySQL",
            duration: "3 months",
            features: [
                "Database CRUD operations",
                "Graphical user interface",
                "Multi-threading",
                "File I/O operations"
            ],
            learnings: [
                "Object-oriented design patterns",
                "Database management systems",
                "User interface development",
                "Software testing methodologies"
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
                        { name: "React", level: 80 },
                        { name: "Node.js", level: 75 },
                        { name: "Spring Boot", level: 70 }
                    ]
                },
                {
                    name: "Tools",
                    skills: [
                        { name: "Git", level: 88 },
                        { name: "Docker", level: 65 },
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
                    date: "2023",
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

    // Function to activate a box
    function activateBox(box) {
        // Remove active class from all boxes and reset styles
        boxes.forEach(b => {
            b.classList.remove('active');
            b.style.width = '10%';
            b.style.opacity = '0.3';
        });
        
        // Add active class to current box and expand it
        box.classList.add('active');
        box.style.width = '80%';
        box.style.opacity = '0.6';

        // Get content ID
        const contentId = box.getAttribute('data-content-id');
        
        const content = contentData[contentId];
        if (content) {
            // Update content IN THE BOX using layout template
            const boxContentElement = box.querySelector('.box-content');
            const layoutType = content.layout || 'default';
            const layoutTemplate = layoutTemplates[layoutType] || layoutTemplates.default;
            
            boxContentElement.innerHTML = layoutTemplate(content);

            // Update content IN THE LEFT MAIN AREA (detailed version)
            titleElement.textContent = content.title;
            contentArea.innerHTML = `<p style="font-size: larger; white-space: pre-line;">${content.mainContent}</p>`;
        }
        
    }

    // Activate box one when page loads
    const boxOne = document.querySelector('.one');
    if (boxOne) {
        activateBox(boxOne);
    }
    
    // Add hover event listeners to each box
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            
            activateBox(this);
            
        });
    });
    

    // Initialize clock
    updateClock();
    setInterval(updateClock, 1000);
});

function updateClock() {
    const now = new Date();
    
    // Format time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `[${hours}:${minutes}:${seconds}]`;

    document.getElementById('clock').textContent = timeString;

    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    document.getElementById('date').textContent = "[" + dateString + "]";
}