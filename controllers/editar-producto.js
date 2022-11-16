import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getProducto, updateProducto } from "../services/client-service.js"
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
import { borrarImagen } from "../services/storage-service.js";

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyBfNGwN-6zRWfX6Co-_a51QunkYibG-_KE",
authDomain: "ecommerce-alurageek.firebaseapp.com",
databaseURL: "https://ecommerce-alurageek-default-rtdb.firebaseio.com",
projectId: "ecommerce-alurageek",
storageBucket: "ecommerce-alurageek.appspot.com",
messagingSenderId: "145141151933",
appId: "1:145141151933:web:08d55db722e5ddaaea9fd4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

// -----------------------------------------------------------------------------------

const $formularioEditar = document.querySelector(".formulario");
const $contenedorImagen = document.querySelector(".contenedor-imagen");

const url = new URL(window.location);
const id = url.searchParams.get("id");
let $nombreImagenAnterior = "";

let $urlImagen = document.querySelector("input[name='url-img']");
let $nombreImagen = document.querySelector("input[name='nombre-img']");
let $categoria = document.querySelector("input[name='categoria']");
let $nombre = document.querySelector("input[name='nombre-producto']");
let $precio = document.querySelector("input[name='precio']");
let $stock = document.querySelector("input[name='stock']");
let $enPromocion = document.querySelector("select[name='promocion']");
let $descripcion = document.querySelector("textarea[name='descripcion']");

window.addEventListener("DOMContentLoaded", async () => {

    const doc = await getProducto(id);

    const producto = doc.data();

    $nombreImagenAnterior = producto.nombreImg;

    $urlImagen.value = producto.urlImagen;
    $nombreImagen.value = producto.nombreImg;
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
