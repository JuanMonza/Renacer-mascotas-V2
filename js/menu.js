// Menú móvil accesible
export function initMenu() {
    const navToggle = document.querySelector(".nav-toggle");
    const menu = document.querySelector(".menu");
    if (navToggle && menu) {
        navToggle.addEventListener("click", () => {
            menu.classList.toggle("show");
            const isExpanded = menu.classList.contains("show");
            navToggle.setAttribute("aria-expanded", isExpanded);
        });
        menu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("show");
                navToggle.setAttribute("aria-expanded", "false");
            });
        });
    }
}
