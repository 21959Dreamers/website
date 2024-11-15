document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const languageModal = document.getElementById('language-modal');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            navLinks.classList.remove('active');
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function revealOnScroll() {
        const reveals = document.querySelectorAll('.section');
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    const userLang = localStorage.getItem('preferredLanguage');
    if (!userLang) {
        languageModal.style.display = 'block';
    } else {
        setLanguage(userLang);
    }

    document.getElementById('en-btn').addEventListener('click', () => {
        localStorage.setItem('preferredLanguage', 'en');
        setLanguage('en');
        languageModal.style.display = 'none';
    });

    document.getElementById('cn-btn').addEventListener('click', () => {
        localStorage.setItem('preferredLanguage', 'cn');
        setLanguage('cn');
        languageModal.style.display = 'none';
    });

    // Add event listeners for the navigation bar language buttons
    document.getElementById('toggle-en-btn').addEventListener('click', () => {
        localStorage.setItem('preferredLanguage', 'en');
        setLanguage('en');
    });

    document.getElementById('toggle-cn-btn').addEventListener('click', () => {
        localStorage.setItem('preferredLanguage', 'cn');
        setLanguage('cn');
    });

    function setLanguage(lang) {
        document.querySelectorAll('[data-' + lang + ']').forEach(el => {
            el.textContent = el.getAttribute('data-' + lang);
        });
    }
});