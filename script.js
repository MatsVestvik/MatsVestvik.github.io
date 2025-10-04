document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine');
    const contentArea = document.getElementById('contentArea');
    const titleElement = document.querySelector('.leftMainHead h1');

    // Store the original content
    const originalTitle = titleElement.textContent;
    const originalContent = contentArea.innerHTML;

    // Content data for each numbered div
    const contentData = {
        1: {
            title: "Welcome",
            boxContent: `Welcome to my portfolio. You can navigate my projects
                        by hovering over the containers.`,
            mainContent: `I'm Mats Orpia Vestvik, explore my work by 
                         hovering over the numbered containers to the right.`
        },
        2: {
            title: "2",
            boxContent: "2",
            mainContent: '2'
        },
        3: {
            title: "3",
            boxContent: "3",
            mainContent: `3`
        },
        4: {
            title: "4",
            boxContent: "4",
            mainContent: `4`
        },
        5: {
            title: "5",
            boxContent: "5",
            mainContent: `5`
        },
        6: {
            title: "6",
            boxContent: "6",
            mainContent: `6`
        },
        7: {
            title: "7",
            boxContent: "7",
            mainContent: `7`
        },
        8: {
            title: "8",
            boxContent: "8",
            mainContent: `8`
        },
        9: {
            title: "9",
            boxContent: "9",
            mainContent: `9`
        }
    };

    // Function to activate a box
    function activateBox(box) {
        // Remove active class from all boxes and reset styles
        boxes.forEach(b => {
            b.classList.remove('active');
            b.style.width = '10%';
            b.style.opacity = '0.5';
        });
        
        // Add active class to current box and expand it
        box.classList.add('active');
        box.style.width = '80%';
        box.style.opacity = '1';

        // Get content ID
        const contentId = box.getAttribute('data-content-id');
        const content = contentData[contentId];
        
        if (content) {
            // Update content IN THE BOX (short version)
            const boxContentElement = box.querySelector('.box-content');
            boxContentElement.innerHTML = `
                <h3>${content.title}</h3>
                <p style="white-space: pre-line; margin-top: 10px; font-size: 14px;">${content.boxContent}</p>
            `;

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