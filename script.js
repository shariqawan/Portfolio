let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
};
// Get the header element
const header = document.querySelector('.header');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    // Check if the user has scrolled down
    if (window.scrollY > 0) {
        // Add the 'shrink' class to the header
        header.classList.add('shrink');
    } else {
        // Remove the 'shrink' class from the header
        header.classList.remove('shrink');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');
    const navLinks = navbar.querySelectorAll('a[href^="#"]');
    
    // Shrink header on scroll
    window.addEventListener('scroll', () => {
        header.classList.toggle('shrink', window.scrollY > 0);
    });
    
    // Toggle mobile navigation menu
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
    
    // Close mobile navigation menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

