"use strict";

const tracks = document.querySelectorAll(".carousel-track");
const prevBtn = document.querySelector(".direction a:first-child");
const nextBtn = document.querySelector(".direction a:last-child");

let currentIndex = 0;

function showSlide(index) {
  // Wrap around
  if (index >= tracks.length) currentIndex = 0;
  if (index < 0) currentIndex = tracks.length - 1;

  // Remove active from all, add to current
  tracks.forEach((track) => track.classList.remove("active"));
  tracks[currentIndex].classList.add("active");
}

// Auto-play — setInterval runs ONCE outside showSlide
setInterval(function () {
  currentIndex++;
  showSlide(currentIndex);
}, 5000);

// Arrow buttons
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currentIndex++;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  currentIndex--;
  showSlide(currentIndex);
});
