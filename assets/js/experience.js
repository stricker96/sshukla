document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".experience-slide");
  const carousel = document.querySelector(".experience-carousel");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    const offset = index * -100;
    carousel.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      currentSlide = idx;
      showSlide(currentSlide);
    });
  });

  showSlide(currentSlide);
});
