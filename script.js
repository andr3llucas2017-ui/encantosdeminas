document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    
    if (carouselSlide) {
        // Seleciona todas as imagens originais
        const originalImages = document.querySelectorAll('.carousel-slide img');
        
        // Clona cada imagem e adiciona ao final da lista
        originalImages.forEach(img => {
            const clone = img.cloneNode(true);
            carouselSlide.appendChild(clone);
        });

        // --- CORREÇÃO PARA CELULAR (TOUCH) ---
        // Quando encostar o dedo (touchstart), pausa a animação
        carouselSlide.addEventListener('touchstart', () => {
            carouselSlide.style.animationPlayState = 'paused';
        });

        // Quando tirar o dedo (touchend), volta a rodar
        carouselSlide.addEventListener('touchend', () => {
            carouselSlide.style.animationPlayState = 'running';
        });
    }
});