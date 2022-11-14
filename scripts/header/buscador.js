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
function mostrarCoincidencias() {
    const listaCoincidencias = encontrarCoincidencias(this.value, todosLosProductos);
    if (this.value.length > 0) {
        const html = listaCoincidencias.map(product => {
            const regex = new RegExp(this.value, "gi");
            const nombreProducto = product.producto.nombre.replace(regex, `<span class="sugerencia__item__coincidencia resaltar">${this.value}</span>`);
            const categoriaProducto = product.producto.categoria.replace(regex, `<span class="sugerencia__item__coincidencia resaltar">${this.value}</span>`);
            return `
        <li class="sugerencias__item">
            <a href="../screens/ver-producto.html?id=${product.id}"><span class="sugerencia__item__nombre">${nombreProducto}, ${categoriaProducto}</span></a>
            <div><img class="sugerencias__item__imagen img-search" src="${product.producto.urlImagen}"/></div>
        </li>
        `;
        }).join('');

        if (html.length > 0) {
            $sugerencias.innerHTML = html;
        } else {
            $sugerencias.innerHTML = `<li class="sugerencias__item"><span>No hay coincidencias...</span></li>`;
        }
    } else {
        $sugerencias.innerHTML = `<li class="sugerencias__item"><span>Escriba algo...</span></li>`;
    }

}

document.addEventListener("click", function(e) {
    let $contenedorBuscador = document.querySelector(".container__buscador");
    const clases = e.target.classList;
    const nombreClases = `${clases.toString()}`;

    if(nombreClases.indexOf("sugerencia") === -1 && nombreClases.indexOf("busqueda") === -1){
        ocultarSugerencias();
        $sugerencias.innerHTML = `<li class="sugerencias__item"><span>Escriba algo...</span></li>`;
        $inputBusqueda.value = "";
    }else{
        mostrarSugerencias();
    }
});

