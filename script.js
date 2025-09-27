// Menu-bar slide in
document.addEventListener("DOMContentLoaded", function () {
  const menuBar = document.querySelector(".menu-bar");
  const burger = document.querySelector(".burger");

  // Slide in menu on page load
  setTimeout(() => {
    menuBar.classList.add("active");
  }, 300);

  // Toggle menu on burger click
  burger.addEventListener("click", function () {
    menuBar.classList.toggle("active");
  });
});

// Filter buttons
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    cards.forEach((card) => {
      card.style.display =
        filter === "all" || card.dataset.category === filter ? "block" : "none";
    });
  });
});

// Lightbox modal
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightbox-video");
const closeBtn = document.querySelector(".close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const videoSrc = card.querySelector("video source").src;
    lightboxVideo.src = videoSrc;
    lightbox.classList.remove("hidden");
    lightboxVideo.play();
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  lightboxVideo.pause();
  lightboxVideo.src = "";
});
