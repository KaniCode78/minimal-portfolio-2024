const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})



const items = document.querySelectorAll('.carousel-item');
const container = document.querySelector('.carousel-container');

items.forEach(item => {
    item.addEventListener('click', () => {
        // Detener la animación del carrusel
        container.style.animationPlayState = 'paused';

        // Mover el ícono seleccionado al centro
        items.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        item.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
});