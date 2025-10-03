document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.one, .two, .three');
    
    boxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            // Reset all boxes
            boxes.forEach(b => {
                b.style.width = '10%';
                b.style.opacity = '0.5';
            });
            // Expand current box
            this.style.width = '80%';
            this.style.opacity = '1';
        });
    });
});