// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuButton = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuButton.setAttribute('aria-expanded', 
        menuButton.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
    );
});

document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.desktop-menu').classList.toggle('hidden');
    document.querySelector('.desktop-menu').classList.toggle('flex');
});

// Enhanced video loading handler
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('video');
    if (video) {
        video.addEventListener('loadeddata', () => {
            video.classList.add('loaded');
            video.play().catch(function(error) {
                console.log("Video autoplay failed:", error);
            });
        });

        video.addEventListener('error', (e) => {
            console.error("Error loading video:", e);
            video.closest('.video-container').classList.add('video-error');
        });
    }
});
