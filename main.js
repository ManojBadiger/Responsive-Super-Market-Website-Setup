const menuButton = document.getElementById("menu-btn");
const navigationLinks = document.getElementById("nav-links");
const menuButtonIcon = menuButton.querySelector("i");

// Navigation Bar Toggle
menuButton.addEventListener("click", (e) => {
  navigationLinks.classList.toggle("open");

  const isOpen = navigationLinks.classList.contains("open");
  menuButtonIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-2-line");
});

navigationLinks.addEventListener("click", (e) => {
  navigationLinks.classList.remove("open");
  menuButtonIcon.setAttribute("class", "ri-menu-2-line");
});

// Scroll Reveal Animation Effect
