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


function setupModal(buttonOpenId, modalId, buttonCloseId) {
    const buttonOpen = document.getElementById(buttonOpenId);
    const modal = document.getElementById(modalId);
    const buttonClose = document.getElementById(buttonCloseId);

    if(buttonOpen && modal && buttonClose) {
        buttonOpen.addEventListener('click', () => modal.classList.add('active'));
        buttonClose.addEventListener('click', () => modal.classList.remove('active'));
        
        // Fechar ao clicar fora da caixa branca
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
}

setupModal('openMap', 'map', 'closeModal');
setupModal('openFoodCourt', 'food-court', 'closeFoodCourt');