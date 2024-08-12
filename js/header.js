document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.remove("-translate-x-full");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.add("-translate-x-full");
  });
});
