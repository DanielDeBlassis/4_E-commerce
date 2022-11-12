import { onGetProductos } from "../services/client-service.js"

export let starWars = [];
export let consolas = [];
export let diversos = [];

window.addEventListener("DOMContentLoaded", async () => {

    const $contenedorStarWars = document.querySelector(".categoria_producto__box.starsWars");
    const $contenedorConsolas = document.querySelector(".categoria_producto__box.consolas");
    const $contenedorDiversos = document.querySelector(".categoria_producto__box.diversos");

    const $categoriaTitulo = document.querySelectorAll(".categoria_producto__titulo");

    onGetProductos((productos) => {

        productos.forEach(doc => {
            const producto = doc.data();
            let descuento = Math.round(producto.precio * 0.33);

            if (producto.categoria === "Star Wars") {
                if (starWars.length < 6) {
                    $categoriaTitulo[0].innerHTML = `<h2>${producto.categoria}</h2>
                                                  <a href="screens/ver-categoria.html?categoria=${producto.categoria}" title="Ver todo">Ver todo <i class="fas fa-arrow-right"></a>`;
                    let contenedor = document.createElement("div");
                    contenedor.classList.add("categoria_producto__item");
                    contenedor.innerHTML = `<img class="imagen__producto" src="${producto.urlImagen}" alt="${producto.nombre}" />
                                        <div class="descripcion__producto">
                                        <h5 class="descripcion__producto__titulo">${producto.nombre}</h5>
                                        ${producto.enPromocion ?
                                            `<span class="descripcion__producto__precio precio-normal">$ ${producto.precio}</span>
                                        <span class="descripcion__producto__precio precio-descuento" class="precio-descuento">$ ${(producto.precio - descuento).toFixed(2)} <sup class="descuento">-33%</sup></span>`
                                            : `<span class="descripcion__producto__precio">$ ${producto.precio}</span>`}
                                        <a class="descripcion__producto__enlace" href="screens/ver-producto.html?id=${doc.id}">Ver producto</a>
                                        </div>`;

                    $contenedorStarWars.appendChild(contenedor);
                }
                starWars.push(producto);
            } else if (producto.categoria === "Consolas") {
                if (consolas.length < 6) {
                    $categoriaTitulo[1].innerHTML = `<h2>${producto.categoria}</h2>
                    <a href="screens/ver-categoria.html?categoria=${producto.categoria}" title="Ver todo">Ver todo <i class="fas fa-arrow-right"></a>`;
                    let contenedor = document.createElement("div");
                    contenedor.classList.add("categoria_producto__item");
                    contenedor.innerHTML = `<img class="imagen__producto" src="${producto.urlImagen}" alt="${producto.nombre}" />
                                            <div class="descripcion__producto">
                                            <h5 class="descripcion__producto__titulo">${producto.nombre}</h5>
                                            ${producto.enPromocion ?
                                                `<span class="descripcion__producto__precio precio-normal">$ ${producto.precio}</span>
                                            <span class="descripcion__producto__precio precio-descuento" class="precio-descuento">$ ${(producto.precio - descuento).toFixed(2)} <sup class="descuento">-33%</sup></span>`
                                                : `<span class="descripcion__producto__precio">$ ${producto.precio}</span>`}
                                            <a class="descripcion__producto__enlace" href="screens/ver-producto.html?id=${doc.id}">Ver producto</a>
                                            </div>`;

                    $contenedorConsolas.appendChild(contenedor);
                }
                consolas.push(producto);
            } else if (producto.categoria === "Diversos") {
                $categoriaTitulo[2].innerHTML = `<h2>${producto.categoria}</h2>
                <a href="screens/ver-categoria.html?categoria=${producto.categoria}" title="Ver todo">Ver todo <i class="fas fa-arrow-right"></a>`;
                let contenedor = document.createElement("div");
                if (diversos.length < 6) {
                    contenedor.classList.add("categoria_producto__item");
                    contenedor.innerHTML = `<div><img class="imagen__producto" src="${producto.urlImagen}" alt="${producto.nombre}"/></div>
                                            <div class="descripcion__producto">
                                            <h5 class="descripcion__producto__titulo">${producto.nombre}</h5>
                                            ${producto.enPromocion ?
                                                `<span class="descripcion__producto__precio precio-normal">$ ${producto.precio}</span>
                                            <span class="descripcion__producto__precio precio-descuento" class="precio-descuento">$ ${(producto.precio - descuento).toFixed(2)} <sup class="descuento">-33%</sup></span>`
                                                : `<span class="descripcion__producto__precio">$ ${producto.precio}</span>`}
                                            <a class="descripcion__producto__enlace" href="screens/ver-producto.html?id=${doc.id}">Ver producto</a>
                                            </div>`;

                    $contenedorDiversos.appendChild(contenedor);
                }
                diversos.push(producto);
            }
        })

    })


});
