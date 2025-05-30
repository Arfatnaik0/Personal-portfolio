const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');
const dropdownBtn = document.querySelector('.dropbtn');
const dropdown = document.querySelector('.dropdown');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Handle dropdown on mobile
if (window.innerWidth <= 1024) {
    dropdownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
    });
}
