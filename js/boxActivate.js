// app.js
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine');
    const contentArea = document.getElementById('contentArea');
    const titleElement = document.querySelector('.leftMainHead h1');

    // Store the original content
    const originalTitle = titleElement.textContent;
    const originalContent = contentArea.innerHTML;

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
});