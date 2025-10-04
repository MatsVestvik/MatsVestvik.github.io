document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine');
    const contentArea = document.getElementById('contentArea');
    const titleElement = document.querySelector('.leftMainHead h1');

    // Store the original content
    const originalTitle = titleElement.textContent;
    const originalContent = contentArea.innerHTML;

    // Track active box
    let activeBox = null;

    // Content data for each numbered div
    const contentData = {
        1: {
            title: "Welcome",
            content: `Welcome to my portfolio. you can navigate my projects
                     by hovering over the green containers`
        },
        2: {
            title: "2",
            content: "something 2"
        },
        3: {
            title: "3",
            content: "something 3"
        },
        4: {
            title: "4",
            content: "something 4"
        },
        5: {
            title: "5",
            content: "something 5"
        },
        6: {
            title: "6",
            content: "something 6"
        },
        7: {
            title: "7",
            content: "something 7"
        },
        8: {
            title: "8",
            content: "something 8"
        },
        9: {
            title: "9",
            content: "something 9"
        }
    };

    // Add hover event listeners to each box
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            // Reset all boxes to default state (only visual)
            boxes.forEach(b => {
                b.style.width = '5%';
                b.style.opacity = '0.5';
            });
            
            // Expand current box
            this.style.width = '80%';
            this.style.opacity = '0.8';

            // Get content ID from the box class
            const boxNumber = this.className.match(/(one|two|three|four|five|six|seven|eight|nine)/)[0];
            const numberMap = {
                'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
                'six': 6, 'seven': 7, 'eight': 8, 'nine': 9
            };
            const contentId = numberMap[boxNumber];
            const content = contentData[contentId];
            
            if (content) {
                // Update the title and content
                titleElement.textContent = content.title;
                contentArea.innerHTML = `<p style="font-size: larger; white-space: pre-line;">${content.content}</p>`;
                
                activeBox = this;
            }
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