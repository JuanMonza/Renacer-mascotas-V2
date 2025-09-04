// Mostrar info de plan al hacer clic en la etiqueta
document.querySelectorAll('.plan-label').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.plan-info-box').forEach(box => box.classList.remove('active'));
        const plan = btn.getAttribute('data-plan');
        const infoBox = document.getElementById('info-' + plan);
        if (infoBox) infoBox.classList.add('active');
    });
});
// Scroll-to-top button
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Archivo principal para inicializar todos los módulos
import { initMenu } from './menu.js';
import { initTestimonialSlider } from './slider.js';
import { initLightbox } from './lightbox.js';
import { initContactForm } from './form.js';
import { initReveal } from './reveal.js';
import { initHeroCarousel } from './hero-carousel.js';



document.addEventListener('DOMContentLoaded', () => {
    // initLoader(); // loader eliminado
    initMenu();
    initTestimonialSlider();
    initLightbox();
    initContactForm();
    initReveal();
    initHeroCarousel();
});
