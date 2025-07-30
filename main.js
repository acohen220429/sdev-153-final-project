// Mobile accordion menu toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileMenuToggle && mainNav) {
        function updateMenuVisibility() {
            if (window.innerWidth <= 600) {
                mobileMenuToggle.style.display = 'block';
                mainNav.classList.remove('open');
            } else {
                mobileMenuToggle.style.display = 'none';
                mainNav.classList.remove('open');
            }
        }
        updateMenuVisibility();
        window.addEventListener('resize', updateMenuVisibility);
        mobileMenuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open');
            if (mainNav.classList.contains('open')) {
                mobileMenuToggle.setAttribute('aria-label', 'Close menu');
                mobileMenuToggle.textContent = '✕ Close';
            } else {
                mobileMenuToggle.setAttribute('aria-label', 'Open menu');
                mobileMenuToggle.textContent = '☰ Menu';
            }
        });
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 600) {
                    mainNav.classList.remove('open');
                    mobileMenuToggle.setAttribute('aria-label', 'Open menu');
                    mobileMenuToggle.textContent = '☰ Menu';
                }
            });
        });
    }
});
// ...existing code...
// Dark mode toggle
/*
Name: Amit Cohen
Course: SDEV153
Project: Video Game Hobby Website
*/

// Smooth scroll for jump navigation
if (document.querySelectorAll('.jump-link').length) {
    document.querySelectorAll('.jump-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Show/hide back to top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Contact form submission: show all field values in an alert, with email validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        // Error elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        let valid = true;
        // Name validation
        if (!name) {
            nameError.textContent = 'Name is required.';
            valid = false;
        }
        // Email validation
        if (!email) {
            emailError.textContent = 'Email is required.';
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailError.style.color = 'red';
            valid = false;
        } else {
            emailError.textContent = '';
            emailError.style.color = '';
        }
        // Message validation
        if (!message) {
            messageError.textContent = 'Message is required.';
            valid = false;
        }
        if (!valid) {
            return false;
        }
        // Show all fields in alert
        alert(`Thank you for your suggestion!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    });
}
