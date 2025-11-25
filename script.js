document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DO MENU HAMBURGUER (MOBILE) ---
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (menuIcon && navMenu) {
        // Abrir/Fechar Menu ao clicar no ícone
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Troca o ícone de Barras (fa-bars) para X (fa-times)
            const icon = menuIcon.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Fechar o menu automaticamente ao clicar em um link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    // Volta o ícone para Barras
                    const icon = menuIcon.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- LÓGICA DO CARROSSEL DE PRODUTOS ---
    const carouselSlide = document.querySelector('.carousel-slide');
    
    if (carouselSlide) {
        // Seleciona todas as imagens originais
        const originalImages = document.querySelectorAll('.carousel-slide img');
        
        // Clona cada imagem e adiciona ao final da lista para criar o efeito infinito
        originalImages.forEach(img => {
            const clone = img.cloneNode(true);
            carouselSlide.appendChild(clone);
        });

        // --- PAUSA INTELIGENTE PARA CELULAR (TOUCH) ---
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