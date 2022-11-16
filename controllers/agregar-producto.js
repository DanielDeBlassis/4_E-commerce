import { saveProducto } from "../services/client-service.js";

const formularioAgregar = document.querySelector(".formulario");

formularioAgregar.addEventListener("submit", (e) => {
    e.preventDefault();

    const $urlImagen = document.querySelector("input[name='url-img']").value;
    const $nombreImagen = document.querySelector("input[name='nombre-img']").value;//nombre de imagen en Firebase
    const $categoria = document.querySelector("input[name='categoria']").value;
    const $nombre = document.querySelector("input[name='nombre-producto']").value;
    const $precio = document.querySelector("input[name='precio']").value;
    const $stock = document.querySelector("input[name='stock']").value;
    const $enPromocion = document.querySelector("select[name='promocion']").value;
    const $descripcion = document.querySelector("textarea[name='descripcion']").value;

    try {
        saveProducto($categoria, $nombre, $descripcion, parseFloat($precio), parseInt($stock), Boolean(parseInt($enPromocion)), $urlImagen, $nombreImagen);
        swal("Correcto!", "Producto agregado exitosamente", "success");
        formularioAgregar.reset();
    }catch(error){
        swal("Error!", "Ocurrió un error, vuelve a intentarlo", "error");
        console.log("Error al agregar el producto: " + error);
    }
    
});