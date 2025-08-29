// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    navMenu.classList.remove("active");
  });
});

const adjustNavbarOnHeight = () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.opacity = "1";
  } else {
    navbar.style.opacity = "0";
  }
}

// Navbar background on scroll
window.addEventListener("scroll", adjustNavbarOnHeight);

window.addEventListener("load", () => {
  adjustNavbarOnHeight();
});
