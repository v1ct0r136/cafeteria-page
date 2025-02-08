// JavaScript para el carrusel
let indiceActual = 0;

function moverCarrusel(direccion) {
    const carruselInner = document.querySelector('.carrusel-inner');
    const items = document.querySelectorAll('.carrusel-item');
    const totalItems = items.length;

    indiceActual = (indiceActual + direccion + totalItems) % totalItems;
    const desplazamiento = -indiceActual * 100;
    carruselInner.style.transform = `translateX(${desplazamiento}%)`;
}

function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
}