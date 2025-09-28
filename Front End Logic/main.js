// Menu-bar slide in
document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector(".menu-bar");
  const burger = document.querySelector(".burger");
  const documentation = document.querySelector("#document");
  const overlay = document.querySelector(".overlay");

  // Slide in menu on page load
  setTimeout(() => {
    menuBar.classList.add("active");
  }, 300);

  // Toggle menu on burger click
  burger.addEventListener("click", function () {
    menuBar.classList.toggle("active");
  });

  //Toggle Documentation on click
  documentation.addEventListener("click", function () {
    console.log("clicked");
    overlay.classList.toggle("active");
  });
});
