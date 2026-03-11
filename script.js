// Menu mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Animation au scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach((element) => {
    const rect = element.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);