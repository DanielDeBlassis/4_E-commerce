import { getProducto, getProductos } from "../../services/client-service.js"

const url = new URL(window.location);
const id = url.searchParams.get("id");

let filtroCategoria = [];

let urlImagen = localStorage.getItem("imagenSeleccionada");

function guardarProducto(id) {
    localStorage.setItem("imagenSeleccionada", `${imagenesProductos[id - 1]}`);
}


function mostrarProducto() {
    const $imagenProducto = document.querySelector(".producto__seleccionado__imagen");

    if (urlImagen != null) {
        $imagenProducto.style.backgroundImage = `url("../${urlImagen}")`;
    }

}

function cargarProductoSimilares() {
    const $contenedorSimilares = document.querySelector(".productos__similares");
    let contenido = `<div class="categoria_producto__titulo">
                    <h2>Productos Similares</h2>
                    </div>
                    <div class="categoria_producto__box">`;

    let numerosSalidos = [];

    if (urlImagen != null) {
        numerosSalidos.push(imagenesProductos.indexOf(`${urlImagen}`));
    }else {
        numerosSalidos.push(imagenesProductos.indexOf(`assets/images/productos/star-wars/stormtrooper.svg`));
    }

    let contador = 0;

    while (contador < 6) {

        let nroAzar = Math.round(Math.random() * 17);

        if (numerosSalidos.indexOf(nroAzar) === -1) {
            contenido += `<div class="categoria_producto__item">
            <img class="imagen__producto" src="../${imagenesProductos[nroAzar]}" alt="Imagen Producto" />
            <h5>Producto XYZ</h5>
            <p>$ 60.00</p>
            <a  href="../screens/ver-producto.html" onclick="guardarProducto(${nroAzar + 1})">Ver producto</a>
            </div>`;
            numerosSalidos.push(nroAzar);
            contador++;
        }
    }

    contenido += `</div>`;
    $contenedorSimilares.innerHTML = contenido;

}

window.addEventListener("load", () => {
    mostrarProducto();
    cargarProductoSimilares();
})
