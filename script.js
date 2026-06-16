// ======================================
// LPK SAKANG MEDAN SUMATERA UTARA
// script.js - FINAL MODERN VERSION
// ======================================

console.log("LPK SAKANG Website Loaded");

// ================= HEADER SHADOW ON SCROLL =================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,0.25)";
    } else {
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.15)";
    }

});


// ================= SMOOTH SCROLL NAVIGATION =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }

    });

});


// ================= HERO FADE IN EFFECT =================
window.addEventListener("load", () => {

    const heroElements = document.querySelectorAll(".hero h1, .hero p, .btn-merah");

    heroElements.forEach((el, index) => {

        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";

        setTimeout(() => {
            el.style.transition = "0.8s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 200);

    });

});


// ================= GALLERY ANIMATION (UPGRADED) =================
window.addEventListener("load", () => {

    const items = document.querySelectorAll(".galeri-item");

    items.forEach((item, index) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";

        setTimeout(() => {
            item.style.transition = "0.7s ease";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 120);

    });

});


// ================= OPTIONAL: ACTIVE NAV HIGHLIGHT =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});