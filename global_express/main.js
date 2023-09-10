document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".navbar__toogleBtn");
  const menu = document.querySelector(".navbar__menu");
  const icons = document.querySelector(".navbar__icons");
  const headerBack = document.querySelector("header");
  const navbar = document.querySelector(".navbar");

  // close
  const closeToggleMenu = () => {
    menu.classList.remove("active");
    icons.classList.remove("active");
    headerBack.classList.remove("active");
    navbar.classList.remove("active");
  };

  // clicked
  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
    headerBack.classList.toggle("active");
    navbar.classList.toggle("active");
  });

  const closeMenuOnResize = () => {
    if (window.innerWidth > 768) {
      closeToggleMenu();
    }
  };

  window.addEventListener("resize", closeMenuOnResize);
});
