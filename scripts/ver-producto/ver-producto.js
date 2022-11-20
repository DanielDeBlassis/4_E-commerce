import { getProducto, getProductos } from "../../services/firestore-service.js"

const url = new URL(window.location);
const id = url.searchParams.get("id");

let filtroCategoria = [];

window.addEventListener("DOMContentLoaded", async () => {

    const doc = await getProducto(id);
    const producto = doc.data();
    let descuento = Math.round(producto.precio * 0.33);

    const $imagenProducto = document.querySelector(".producto__seleccionado__imagen");
    $imagenProducto.innerHTML = `<img src="${producto.urlImagen}" alt="${producto.nombre}"/>`;

    const $descripcion = document.querySelector(".producto__seleccionado__descripcion");

    $descripcion.innerHTML = `<span>${producto.categoria}</span>
    <h1>${producto.nombre}</h1>                                
    ${producto.enPromocion ?
            `<span class="precio-normal">$ ${producto.precio}</span>
<span class="precio-descuento">$ ${(producto.precio - descuento).toFixed(2)} <sup class="descuento">-33%</sup></span>`
            : `<span>$ ${producto.precio}</span>`}
    <p>${producto.descripcion}</p>
    </div>`;

    const todosLosProductos = await getProductos();
    todosLosProductos.forEach(element => {
        const elemento = element.data();

        if (elemento.categoria === producto.categoria && element.id != id) {
            let amalgama = { "id": element.id, elemento };
            filtroCategoria.push(amalgama);
        }
    });

    const $contenedorSimilares = document.querySelector(".categoria_producto__box");
    let contador = 0;

    filtroCategoria.forEach(productoSimilar => {
        if (contador < 6) {
            let contenedor = document.createElement("div");
            contenedor.classList.add("categoria_producto__item");
            contenedor.innerHTML = `<div><img class="imagen__producto" src="${productoSimilar.elemento.urlImagen}" alt="${producto.nombre}"/></div>
            <div class="descripcion__producto">
            <h5 class="descripcion__producto__titulo">${productoSimilar.elemento.nombre}</h5>
            ${productoSimilar.elemento.enPromocion ?
                    `<span class="descripcion__producto__precio precio-normal">$ ${productoSimilar.elemento.precio}</span>
            <span class="descripcion__producto__precio precio-descuento" class="precio-descuento">$ ${(productoSimilar.elemento.precio - descuento).toFixed(2)} <sup class="descuento">-33%</sup></span>`
                    : `<span class="descripcion__producto__precio">$ ${productoSimilar.elemento.precio}</span>`}
            <a class="descripcion__producto__enlace" href="../screens/ver-producto.html?id=${productoSimilar.id}">Ver producto</a>
            </div>`;
            $contenedorSimilares.appendChild(contenedor);
            contador++;
        }
    })


})
