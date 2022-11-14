import { onGetProductos } from "../../services/client-service.js";

const $inputBusqueda = document.querySelector(".busqueda");
const $sugerencias = document.querySelector(".sugerencias");
let todosLosProductos = [];

window.addEventListener("DOMContentLoaded", () => {
    onGetProductos((productos) => {
        productos.forEach(doc => {
            const producto = doc.data();
            const id = doc.id;
            todosLosProductos.push({ id: id, producto: producto });
        });
    });
    $sugerencias.style.display = "none";
});

function ocultarSugerencias() {
    $sugerencias.style.display = "none";
}

function mostrarSugerencias() {
    $sugerencias.style.display = "flex";
}

function encontrarCoincidencias(palabraClave, productos) {
    return productos.filter(product => {
        const regex = new RegExp(palabraClave, "gi");
        return product.producto.nombre.match(regex) || product.producto.categoria.match(regex);
    })
}
