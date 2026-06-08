// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when link clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==========================
// TYPING ANIMATION
// ==========================

const words = [
    "Java",
    "Spring Boot",
    "Python",
    "Flask",
    "Web Development"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {

    reveals.forEach(section => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();


// ==========================
// PARTICLE BACKGROUND
// ==========================

tsParticles.load("tsparticles", {
    fpsLimit: 60,

    particles: {
        number: {
            value: 70
        },

        color: {
            value: "#00D4FF"
        },

        links: {
            enable: true,
            distance: 150,
            color: "#38BDF8",
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 1
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: {
                min: 1,
                max: 4
            }
        }
    },

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "repulse"
            },

            resize: true
        },

        modes: {
            repulse: {
                distance: 120
            }
        }
    },

    detectRetina: true
});


// ==========================
// NAVBAR SHADOW ON SCROLL
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("header");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 0 20px rgba(0,212,255,0.15)";

    } else {

        navbar.style.boxShadow = "none";
    }
});


// ==========================
// SMOOTH ACTIVE LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("current");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("current");
        }
    });
});


// ==========================
// HERO FADE-IN
// ==========================

window.addEventListener("load", () => {

    document.querySelector(".hero").style.opacity = "1";
    document.querySelector(".hero").style.transform =
        "translateY(0)";
});

