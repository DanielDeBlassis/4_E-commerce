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

$formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();

    $urlImagen = document.querySelector("input[name='url-img']").value;
    $categoria = document.querySelector("input[name='categoria']").value;
    $nombre = document.querySelector("input[name='nombre-producto']").value;
    $precio = document.querySelector("input[name='precio']").value;
    $stock = document.querySelector("input[name='stock']").value;
    $enPromocion = document.querySelector("select[name='promocion']").value;
    $descripcion = document.querySelector("textarea[name='descripcion']").value;

    try {
        updateProducto(id, { categoria: $categoria, nombre: $nombre, descripcion: $descripcion, precio: parseFloat($precio), stock: parseInt($stock), enPromocion: Boolean(parseInt($enPromocion)), urlImagen: $urlImagen });
        swal("Correcto!", "Producto editado exitosamente", "success");

    } catch (error) {
        swal("Error!", "Ocurrió un error, vuelve a intentarlo", "error");
        console.log("Error al agregar el producto: " + error);
    }

});
