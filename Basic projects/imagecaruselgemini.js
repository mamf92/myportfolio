const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlide(n) {
    const slides = carousel.querySelectorAll('img');
    slideIndex = (n + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`; // Adjust width if needed
}

prevBtn.addEventListener('click', () => showSlide(slideIndex - 1));
nextBtn.addEventListener('click', () => showSlide(slideIndex + 1));

showSlide(slideIndex); // Show the first slide initially