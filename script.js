// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.padding = '0.5rem 0';
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
    } else {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate stats counting
            if (entry.target.classList.contains('stat-number')) {
                animateValue(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.project-card, .skill-tag, .stat-number').forEach(el => {
    observer.observe(el);
});

// Animate number counting
function animateValue(element) {
    if (element.animated) return;
    element.animated = true;
    
    const value = parseInt(element.textContent);
    const duration = 2000;
    const step = value / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= value) {
            element.textContent = value + element.textContent.replace(/[0-9]/g, '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + element.textContent.replace(/[0-9]/g, '');
        }
    }, 16);
}

// Form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.innerHTML;
        
        // Simulate form submission
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';
        submitButton.disabled = true;
        
        setTimeout(() => {
            submitButton.innerHTML = '<i class="fas fa-check"></i><span>Message Sent!</span>';
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// Add hover effects to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add parallax effect to hero orbs
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add gradient animation to section titles
function animateGradient() {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        const gradient = getComputedStyle(title).backgroundImage;
        // You can add more complex gradient animations here
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add loaded class for initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Add random slight delays to skill tags for staggered animation
    document.querySelectorAll('.skill-tag').forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
    });
});

// Add cursor effect (optional)
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e