// Archivo principal para inicializar todos los módulos
import { initLoader } from './loader.js';
import { initMenu } from './menu.js';
import { initTestimonialSlider } from './slider.js';
import { initLightbox } from './lightbox.js';
import { initContactForm } from './form.js';
import { initReveal } from './reveal.js';
import { initHeroCarousel } from './hero-carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    initLoader();
    initMenu();
    initTestimonialSlider();
    initLightbox();
    initContactForm();
    initReveal();
    initHeroCarousel();
});
