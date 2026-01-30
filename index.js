let index = 0;

const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function atualizarSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1 ) % totalSlides;
    atualizarSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    atualizarSlide();
});

setInterval(() => {
    index = (index + 1 ) % totalSlides;
    atualizarSlide();
}, 5000);