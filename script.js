document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    
    if (carouselSlide) {
        // Seleciona todas as imagens originais
        const originalImages = document.querySelectorAll('.carousel-slide img');
        
        // Clona cada imagem e adiciona ao final da lista
        // Isso é necessário para o efeito "infinito" do CSS funcionar sem "pulos"
        originalImages.forEach(img => {
            const clone = img.cloneNode(true);
            carouselSlide.appendChild(clone);
        });
    }
});