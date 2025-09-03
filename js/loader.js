// Loader: Oculta el loader al cargar la página
export function initLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
        window.addEventListener("load", () => {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 600);
        });
    }
}
