// ===================================
// Navigation & Mobile Menu
// ===================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Smooth Scrolling (Enhanced)
// ===================================
document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) {
        return;
    }

    const hash = anchor.getAttribute('href');
    if (!hash || hash === '#') {
        return;
    }

    const target = document.getElementById(hash.slice(1));
    if (!target) {
        return;
    }

    event.preventDefault();

    const navHeight = navbar ? navbar.offsetHeight : 0;
    const targetPosition = Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - navHeight);

    try {
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    } catch (error) {
        window.scrollTo(0, targetPosition);
    }
});

// Footer version based on latest file modification date
const footerVersionNumber = document.getElementById('footer-version-number');
if (footerVersionNumber) {
    const modified = new Date(document.lastModified);
    if (!Number.isNaN(modified.getTime())) {
        const year = modified.getFullYear();
        const month = String(modified.getMonth() + 1).padStart(2, '0');
        const day = String(modified.getDate()).padStart(2, '0');
        footerVersionNumber.textContent = `${year}.${month}.${day}`;
    } else {
        footerVersionNumber.textContent = 'N/D';
    }
}

// ===================================
// Scroll Reveal Animations
// ===================================
const revealElements = document.querySelectorAll('.service-card, .project-card, .contact-item, .about-text, .projects-intro');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('reveal', 'active');
        }
    });
};

// Initial check
revealOnScroll();

// Check on scroll
window.addEventListener('scroll', revealOnScroll);

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Create mailto link
        const subject = encodeURIComponent('Consulta desde el sitio web Grupo +');
        const body = encodeURIComponent(
            `Nombre: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Teléfono: ${data.phone || 'No proporcionado'}\n\n` +
            `Mensaje:\n${data.message}`
        );
        
        // Open email client
        window.location.href = `mailto:inmobiliariaurbanarural@gmail.com?subject=${subject}&body=${body}`;
        
        // Show success message
        showNotification('¡Mensaje preparado! Se abrirá tu cliente de correo.');
        
        // Reset form
        contactForm.reset();
    });
}

// ===================================
// Notification System
// ===================================
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease-out;
        max-width: 400px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => notification.remove(), 500);
    }, 4000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===================================
// Active Navigation Link
// ===================================
const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active-link'));
            if (navLink) {
                navLink.classList.add('active-link');
            }
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// Add active link style
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-menu a.active-link {
        color: var(--accent-color);
    }
    
    .nav-menu a.active-link::after {
        width: 100%;
    }
`;
document.head.appendChild(activeStyle);

// ===================================
// Form Input Animations
// ===================================
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    // Add focus animation
    input.addEventListener('focus', () => {
        input.parentElement.style.transform = 'scale(1.02)';
        input.parentElement.style.transition = 'transform 0.3s ease';
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.style.transform = 'scale(1)';
    });
    
    // Add validation on blur
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            input.style.borderColor = '#e74c3c';
        } else if (input.type === 'email' && input.value && !isValidEmail(input.value)) {
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#27ae60';
        }
    });
    
    // Reset border on input
    input.addEventListener('input', () => {
        input.style.borderColor = '#E0E0E0';
    });
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===================================
// Counter Animation for Stats (Future Enhancement)
// ===================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start);
        
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// ===================================
// Lazy Loading Images (when added)
// ===================================
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// ===================================
// Performance Optimization
// ===================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate positions after resize
        revealOnScroll();
    }, 250);
});

// ===================================
// Preloader (Optional)
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        revealOnScroll();
    }, 100);
});

// ===================================
// Back to Top Button (Auto-created)
// ===================================
const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--accent-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 999;
    `;
    
    document.body.appendChild(button);
    
    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    });
};

createBackToTopButton();

// ===================================
// Console Message
// ===================================
console.log('%cINMOBILIARIA', 'font-size: 42px; font-weight: bold; color: #998675;');
console.log('%cServicio inmobiliario integral', 'font-size: 16px; color: #4D4D4D;');
console.log('%cSitio web desarrollado con ❤️', 'font-size: 12px; color: #6C757D;');