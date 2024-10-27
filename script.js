// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Awards toggle functionality
const awardButtons = document.querySelectorAll('.awards-toggle button');
const awardContents = document.querySelectorAll('.awards-content');

awardButtons.forEach(button => {
    button.addEventListener('click', () => {
        const year = button.getAttribute('data-year');
        awardButtons.forEach(btn => btn.classList.remove('active'));
        awardContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(year).classList.add('active');
    });
});

// Optional: Add a scroll reveal animation
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    var reveals = document.querySelectorAll('.section');
    
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Optional: Add a dynamic copyright year
document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} FTC Team 21959 Dreamers. All rights reserved.`;