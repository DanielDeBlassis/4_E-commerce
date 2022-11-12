const bloqueMenor = `<i onclick="mostrarBuscador()" class="fas fa-search"></i>
<div class="container__form">
        <label>
          <input class="form-control busqueda" type="search" placeholder="Buscar" />
        </label>
        <button class="btn btn-secondary btn-search" type="submit" title="Buscar"><i class="fas fa-search"></i></button>
    </div>`;

const bloqueMayor = `<label>
<input class="form-control busqueda" type="search" placeholder="¿Qué deseas buscar?" />
</label>
<button class="btn btn-light" type="submit" title="Buscar"><i class="fas fa-search"></i></button>`;


function adaptar() {
    const $formularioBusqueda = document.querySelector(".formulario-busqueda");
    if (screen.width <= 450) {
        $formularioBusqueda.innerHTML = bloqueMenor;
    } else if (screen.width > 450) {
        $formularioBusqueda.innerHTML = bloqueMayor;
    }
    adaptarBoton();
}
let opcion = 0;

function mostrarBuscador() {

    const $buscador = document.querySelector(".container__form");

    if (opcion === 0) {
        $buscador.style.display = "flex";
        opcion = 1;
    } else if (opcion === 1) {
        $buscador.style.display = "none";
        opcion = 0;
    }
}

function adaptarBoton() {
    let ruta = window.location.pathname;
    if(ruta.indexOf("index") === -1){
        const $botonLogin = document.querySelector(".btn-login");

        if(ruta.indexOf("agregar-producto") != -1){
            $botonLogin.innerText = "Menú Administrador";
            $botonLogin.href = "../screens/productos.html";
        }else{
            $botonLogin.style.display = "none";
        }
    }
}

window.addEventListener("resize", adaptar);
window.addEventListener("DOMContentLoaded", adaptar)
