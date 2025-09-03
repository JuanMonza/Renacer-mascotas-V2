// Slider de testimonios
export function initTestimonialSlider() {
    const testimonialsContainer = document.querySelector("#testimonials .slider");
    if (testimonialsContainer) {
        const slides = testimonialsContainer.querySelector(".slides");
        const prevBtn = testimonialsContainer.querySelector(".prev");
        const nextBtn = testimonialsContainer.querySelector(".next");
        const testimonials = slides.querySelectorAll(".testimonial");
        if (testimonials.length > 1) {
            let testimonialIndex = 0;
            const showTestimonial = (index) => {
                slides.style.transform = `translateX(-${index * 100}%)`;
            };
            nextBtn.addEventListener("click", () => {
                testimonialIndex = (testimonialIndex + 1) % testimonials.length;
                showTestimonial(testimonialIndex);
            });
            prevBtn.addEventListener("click", () => {
                testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
                showTestimonial(testimonialIndex);
            });
        }
    }
}
