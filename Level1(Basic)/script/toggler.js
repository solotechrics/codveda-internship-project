"use strict";

const hamburger = document.querySelector(".mobile-toggler");
const mobileNav = document.querySelector(".mobile-nav-links");
const icon = document.querySelector(".fa-bars");

hamburger.addEventListener("click", function () {
  // console.log("hamburger was clicked!")
  mobileNav.classList.toggle("is-open");

  if (mobileNav.classList.contains("is-open")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
