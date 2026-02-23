document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            // Toggle Nav
            navLinks.classList.toggle('nav-active');

            // Hamburger Animation
            hamburger.classList.toggle('toggle');

            // Prevent scrolling when menu is open
            if (navLinks.classList.contains('nav-active')) {
                document.body.style.overflow = 'hidden';
                navbar.style.background = 'transparent';
                navbar.style.boxShadow = 'none';
                navbar.style.border = 'none';
            } else {
                document.body.style.overflow = '';
                navbar.style.background = 'var(--glass-bg)';
                navbar.style.boxShadow = 'var(--glass-shadow)';
                navbar.style.border = '1px solid var(--glass-border)';
            }
        });
    }

    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Add glass effect on navbar scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50 && !navLinks.classList.contains('nav-active')) {
            navbar.style.background = 'rgba(255, 255, 255, 0.05)';
            navbar.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
        } else if (!navLinks.classList.contains('nav-active')) {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.boxShadow = 'var(--glass-shadow)';
        }
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const zoomableImages = document.querySelectorAll('.zoomable');

    if (lightbox) {
        zoomableImages.forEach(img => {
            img.addEventListener('click', function () {
                lightbox.classList.add('active');
                lightboxImg.src = this.src;
                document.body.style.overflow = 'hidden'; // prevent background scrolling
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});
