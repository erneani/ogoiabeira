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

// Toggle day cards in programação section
function toggleDay(dayNumber) {
  const content = document.getElementById(`content-${dayNumber}`);
  const icon = document.getElementById(`icon-${dayNumber}`);
  
  // Close all other day contents
  for (let i = 1; i <= 5; i++) {
    if (i !== dayNumber) {
      const otherContent = document.getElementById(`content-${i}`);
      const otherIcon = document.getElementById(`icon-${i}`);
      otherContent.classList.remove('active');
      otherIcon.classList.remove('rotated');
    }
  }
  
  // Toggle current day
  content.classList.toggle('active');
  icon.classList.toggle('rotated');
}
