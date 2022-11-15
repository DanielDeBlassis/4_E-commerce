function adaptar() {
    const $buscador = document.querySelector(".container__buscador");

    // if (screen.width <= 500) {
    //     $buscador.style.display = "none";
    // } else if (screen.width > 500 ) {
    //     $buscador.style.display = "flex";
    // }
    adaptarBoton();
}


let opcion = 0;

function mostrarBuscador() {

    const $buscador = document.querySelector(".container__buscador");
    $buscador.style.display = "flex";
    // if (opcion === 0) {
    //     $buscador.style.display = "flex";
    //     opcion = 1;
    // } else if (opcion === 1) {
    //     $buscador.style.display = "none";
    //     opcion = 0;
    // }
    // console.log(`Opción en estado: -> ${opcion}`);
}

function adaptarBoton() {
    let ruta = window.location.pathname;
    if (ruta.indexOf("index") === -1) {
        const $botonLogin = document.querySelector(".btn-login");

        if (ruta.indexOf("agregar-producto") != -1) {
            $botonLogin.innerText = "Menú Administrador";
            $botonLogin.href = "../screens/menu-administrador.html";
        } else {
            $botonLogin.style.display = "none";
        }
    }
}

window.addEventListener("resize", adaptar);
window.addEventListener("DOMContentLoaded", adaptar);

