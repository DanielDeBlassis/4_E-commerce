import { deleteProducto, onGetProductos } from "../../services/client-service.js";

const $contenedor = document.querySelector(".categoria_producto__box");

window.addEventListener("DOMContentLoaded", async () => {

    onGetProductos((productos) => {
        productos.forEach(doc => {
            const producto = doc.data();
            const contenido = document.createElement("div");
            contenido.classList.add("categoria_producto__item");

            contenido.innerHTML = `<div class="container__imagen">
                                <img class="imagen__producto" src="${producto.urlImagen}" alt="${producto.nombre}" />
                                <div class="container__btn-edit">
                                    <i class="fas fa-pen btn-editar" data-id="${doc.id}"></i>
                                    <i class="fas fa-trash btn-borrar" data-id="${doc.id}"></i>
                                </div>
                            </div>
                            <div class="descripcion__producto">
                            <h5 class="descripcion__producto__titulo">${producto.nombre}</h5>
                            <span class="descripcion__producto__precio">$ ${producto.precio}</span>
                            ${producto.enPromocion ? `<span><i class="fas fa-tag precio-descuento"></i> 33% Off</span>` : ``}
                            <span class="descripcion__producto__stock">#${producto.stock}</span>
                            </div>`;
            $contenedor.appendChild(contenido);
        });
});

