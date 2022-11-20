import { onGetProductos } from "../../services/firestore-service.js";

const $contenedor = document.querySelector(".categoria_producto__box");

window.addEventListener("DOMContentLoaded", async () => {

    onGetProductos((productos) => {
        productos.forEach(doc => {
            const producto = doc.data();
            let descuento = Math.round(producto.precio * 0.33);
            if (producto.enPromocion) {
                const contenido = document.createElement("div");
                contenido.classList.add("categoria_producto__item");
                contenido.innerHTML = `<div><img class="imagen__producto" src="${producto.urlImagen}" alt="${producto.nombre}"/></div>
                <div class="descripcion__producto">
                <h5 class="descripcion__producto__titulo">${producto.nombre}</h5>
                ${producto.enPromocion ?
                        `<span class="descripcion__producto__precio precio-normal">$ ${producto.precio}</span>
                <span class="descripcion__producto__precio precio-descuento" class="precio-descuento">$ ${(producto.precio - descuento).toFixed(2)} <sup class="descuento">-33%</sup></span>`
                        : `<span class="descripcion__producto__precio">$ ${producto.precio}</span>`}
                <a class="descripcion__producto__enlace" href="../screens/ver-producto.html?id=${doc.id}">Ver producto</a>
                </div>`;
                $contenedor.appendChild(contenido);
            }
        });
    });
});