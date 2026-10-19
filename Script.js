/* ============================================
   RAFIUL QADOR NAFI
   PERSONAL PORTFOLIO WEBSITE
   INTERACTIVE JAVASCRIPT
============================================ */

"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       01. ELEMENT SELECTION
    ======================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    const header = document.querySelector(".header");
    const currentYear = document.getElementById("currentYear");

    /* ========================================
       02. DYNAMIC COPYRIGHT YEAR
    ======================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    /* ========================================
       03. MOBILE NAVIGATION
    ======================================== */

    function closeMobileMenu() {
        if (!navMenu || !menuToggle) return;

        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");

        const icon = menuToggle.querySelector("i");

        if (icon) {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    }

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navMenu.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-xmark", isOpen);
            }

        });

        navLinks.forEach((link) => {
            link.addEventListener("click", closeMobileMenu);
        });

        document.addEventListener("click", (event) => {

            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                closeMobileMenu();
            }

        });

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                closeMobileMenu();
            }

        });

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {
                closeMobileMenu();
            }

        });

    }

    /* =========================================
   PREMIUM HERO TYPEWRITER ANIMATION
========================================= */

const heroGreeting = document.getElementById("heroGreeting");
const heroName = document.getElementById("heroName");
const typingRole = document.getElementById("typingRole");
const heroSubtitle = document.getElementById("heroSubtitle");

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));


// Type text letter by letter
async function typeWriter(element, text, speed = 75) {

    element.textContent = "";
    element.classList.add("typing-active");

    for (const letter of text) {

        element.textContent += letter;

        await sleep(speed);

    }

    element.classList.remove("typing-active");

}


// Type the name while preserving gradient styling
async function typeName() {

    heroName.textContent = "";

    const firstPart = document.createTextNode("");
    const lastPart = document.createElement("span");

    heroName.append(firstPart, lastPart);

    heroName.classList.add("typing-active");

    const firstName = "Rafiul Qador ";
    const lastName = "Nafi.";

    for (const letter of firstName) {

        firstPart.textContent += letter;

        await sleep(85);

    }

    for (const letter of lastName) {

        lastPart.textContent += letter;

        await sleep(110);

    }

    heroName.classList.remove("typing-active");

}


// Rotating professional identity
async function rotateRoles() {

    const roles = [
        "Computer Science Student",
        "Technology Enthusiast",
        "Flutter & Dart Developer",
        "Data Analysis Enthusiast",
        "AI Automation Explorer",
        "Aspiring AI Engineer",
        "Cybersecurity Enthusiast"
    ];

    let roleIndex = 0;

    while (true) {

        const currentRole = roles[roleIndex];

        typingRole.textContent = "";
        typingRole.classList.add("typing-active");

        // Type role
        for (const letter of currentRole) {

            typingRole.textContent += letter;

            await sleep(65);

        }

        // Keep the role visible
        await sleep(1800);

        // Delete role
        for (let i = currentRole.length; i >= 0; i--) {

            typingRole.textContent =
                currentRole.substring(0, i);

            await sleep(35);

        }

        roleIndex = (roleIndex + 1) % roles.length;

        await sleep(350);

    }

}


// Main animation sequence
async function startPremiumTyping() {

    if (
        !heroGreeting ||
        !heroName ||
        !typingRole ||
        !heroSubtitle
    ) {
        return;
    }

    if (reducedMotion) {
        heroGreeting.textContent = "Hello, I'm";
        heroName.innerHTML = "Rafiul Qador <span>Nafi.</span>";
        typingRole.textContent = "Computer Science Student";
        heroSubtitle.textContent =
            "Technology Enthusiast | Aspiring AI Engineer & Cybersecurity Professional";
        return;
    }

    // Clear text before starting
    heroGreeting.textContent = "";
    heroName.textContent = "";
    typingRole.textContent = "";
    heroSubtitle.textContent = "";

    await sleep(400);

    // Step 1: Greeting
    await typeWriter(
        heroGreeting,
        "Hello, I'm",
        90
    );

    await sleep(350);

    // Step 2: Full name
    await typeName();

    await sleep(450);

    // Step 3: Subtitle
    await typeWriter(
        heroSubtitle,
        "Technology Enthusiast | Aspiring AI Engineer & Cybersecurity Professional",
        30
    );

    await sleep(350);

    // Step 4: Infinite role animation
    rotateRoles();

}

startPremiumTyping();

    /* ========================================
       05. HERO CONTENT ENTRANCE ANIMATION
    ======================================== */

    const heroTitle = document.querySelector(".hero-title");
    const heroDescription = document.querySelector(".hero-description");
    const heroButtons = document.querySelector(".hero-buttons");
    const heroSocial = document.querySelector(".hero-social");
    const heroImage = document.querySelector(".hero-image-wrapper");

    const heroElements = [
        heroTitle,
        heroDescription,
        heroButtons,
        heroSocial,
        heroImage
    ].filter(Boolean);

    if (!reduceMotion) {

        heroElements.forEach((element, index) => {

            element.classList.add("hero-animate");

            setTimeout(() => {

                element.classList.add("hero-animate-visible");

            }, 300 + index * 180);

        });

    }

    /* ========================================
       06. SCROLL REVEAL ANIMATION
    ======================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".highlight-card, " +
        ".interest-card, " +
        ".skills-category, " +
        ".project-card, " +
        ".timeline-item, " +
        ".contact-info, " +
        ".contact-form-wrapper"
    );

    if ("IntersectionObserver" in window && !reduceMotion) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.08,
                rootMargin: "0px 0px -30px 0px"
            }
        );

        revealElements.forEach((element) => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    }

    /* ========================================
       07. ACTIVE NAVIGATION ON SCROLL
    ======================================== */

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach((section) => {

            const sectionTop =
                section.getBoundingClientRect().top;

            if (sectionTop <= 160) {

                currentSection = section.id;

            }

        });

        navLinks.forEach((link) => {

            const href = link.getAttribute("href");

            link.classList.toggle(
                "active",
                href === `#${currentSection}`
            );

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();

    /* ========================================
       08. NAVBAR SCROLL EFFECT
    ======================================== */

    function updateHeader() {

        if (!header) return;

        header.classList.toggle(
            "header-scrolled",
            window.scrollY > 30
        );

    }

    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();

    /* ========================================
       09. PROJECT CARD MOUSE EFFECT
    ======================================== */

    const projectCards = document.querySelectorAll(".project-card");

    if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {

        projectCards.forEach((card) => {

            card.addEventListener("mousemove", (event) => {

                const rect = card.getBoundingClientRect();

                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -3;

                const rotateY =
                    ((x - centerX) / centerX) * 3;

                card.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;

            });

            card.addEventListener("mouseleave", () => {

                card.style.transform = "";

            });

        });

    }

    /* ========================================
       10. CONTACT FORM VALIDATION
    ======================================== */

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            const nameInput =
                contactForm.querySelector('input[name="name"]');

            const emailInput =
                contactForm.querySelector('input[name="email"]');

            const messageInput =
                contactForm.querySelector('textarea[name="message"]');

            const formAction = contactForm.getAttribute("action") || "";

            if (formAction.includes("YOUR_FORM_ID")) {

                event.preventDefault();

                alert(
                    "Contact form setup is incomplete. Please add your Formspree Form ID."
                );

                return;

            }

            if (
                !nameInput ||
                !emailInput ||
                !messageInput
            ) {
                return;
            }

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            if (!name || !email || !message) {

                event.preventDefault();

                alert("Please fill in all required fields.");

                return;

            }

            // The browser submits the form to Formspree.
            // JavaScript does not send the email itself.

        });

    }

    /* ========================================
       11. BACK TO TOP BUTTON
    ======================================== */

    const backToTop = document.createElement("button");

    backToTop.className = "back-to-top";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    backToTop.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(backToTop);

    function updateBackToTop() {

        backToTop.classList.toggle(
            "show",
            window.scrollY > 450
        );

    }

    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );

    updateBackToTop();

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? "auto" : "smooth"
        });

    });

});
/* ========================================
   NAVBAR ACTIVE LINK INDICATOR
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((navLink) => {
                navLink.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});