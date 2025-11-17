document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth; // Largura de uma imagem

    // Configura o carrossel para a primeira imagem inicialmente
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // Botão Próximo
    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) return; // Não avança se já estiver na última
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Botão Anterior
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return; // Não retrocede se já estiver na primeira
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Função para slide automático
    const autoSlide = () => {
        if (counter >= carouselImages.length - 1) {
            counter = -1; // Volta para o "início" para reiniciar o ciclo
        }
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };

    let slideInterval = setInterval(autoSlide, 5000); // Muda a cada 5 segundos (5000ms)

    // Pausar o slide automático ao passar o mouse e reiniciar ao tirar
    carouselSlide.addEventListener('mouseover', () => {
        clearInterval(slideInterval);
    });

    carouselSlide.addEventListener('mouseleave', () => {
        slideInterval = setInterval(autoSlide, 5000);
    });

    // Ajusta o tamanho quando a janela é redimensionada
    window.addEventListener('resize', () => {
        const newSize = carouselImages[0].clientWidth;
        carouselSlide.style.transition = "none"; // Desativa a transição para evitar glitch
        carouselSlide.style.transform = 'translateX(' + (-newSize * counter) + 'px)';
    });
});