const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));
let currentSlide = 0;

function showSlide(index) {
  if (!slides.length || !dots.length) return;

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

if (slides.length) {
  setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 5200);
}