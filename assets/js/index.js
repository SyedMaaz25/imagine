window.onscroll = () => {
  scrollFunction();
};
const scrollFunction = () => {
  const navbar = document.getElementById("navbar");
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  navbar.style.transition =
    "top 0.3s ease, box-shadow 0.3s ease, background 0.3s ease";
  if (scrollTop > 20) {
    navbar.style.top = "0px";
    navbar.style.boxShadow = "4px 0 20px -10px rgba(0, 0, 0, 0.2)";
    navbar.style.background = "#fff";
  } else {
    navbar.style.boxShadow = "none";
    navbar.style.background = "transparent";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    offset: 200,
    duration: 1000,
  });
});

const customodal = document.getElementById("customModal");

const openmodal = () => {
  customodal.style.display = "flex";
};

const closemodal = () => {
  customodal.style.display = "none";
};

const showSlide = (slidesIndex) => {
  document.querySelectorAll(".slide").forEach((slide) => {
    slide.style.display = "none";
  });

  document.getElementById(`slide-${slidesIndex}`).style.display = "block";

  const buttons = document.querySelectorAll(".slides-icon");
  buttons.forEach((button, index) => {
    button.style.background = index + 1 === slidesIndex ? "black" : "";
  });
};

showSlide(1);
