import { getProducto, updateProducto } from "../services/client-service.js"

const $formularioEditar = document.querySelector(".formulario");
const $contenedorImagen = document.querySelector(".contenedor-imagen");

const url = new URL(window.location);
const id = url.searchParams.get("id");

let $urlImagen = document.querySelector("input[name='url-img']");
let $categoria = document.querySelector("input[name='categoria']");
let $nombre = document.querySelector("input[name='nombre-producto']");
let $precio = document.querySelector("input[name='precio']");
let $stock = document.querySelector("input[name='stock']");
let $enPromocion = document.querySelector("select[name='promocion']");
let $descripcion = document.querySelector("textarea[name='descripcion']");

window.addEventListener("DOMContentLoaded", async () => {

    const doc = await getProducto(id);

    const producto = doc.data();

    $urlImagen.value = producto.urlImagen;
    $categoria.value = producto.categoria;
    $nombre.value = producto.nombre;
    $precio.value = producto.precio;
    $stock.value = producto.stock;
    $enPromocion.value = producto.enPromocion ? "1" : "0";
    $descripcion.value = producto.descripcion;

    $contenedorImagen.innerHTML = `<img src="${producto.urlImagen}" alt="${producto.nombre}">`;

})

