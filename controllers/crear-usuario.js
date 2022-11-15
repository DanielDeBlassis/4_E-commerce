import { saveUsuario } from "../services/client-service.js";

const formularioCrear = document.querySelector(".formulario");
const $mostrarClave = document.querySelector("input[name='mostrar']");

$mostrarClave.addEventListener("click", () => {
    const $clave = document.querySelector("input[name='password']");
    const $claveRepetida = document.querySelector("input[name='password-repeat']");
    if ($mostrarClave.checked) {
        $clave.setAttribute("type", "text");
        $claveRepetida.setAttribute("type", "text");
    }else {
        $clave.setAttribute("type", "password");
        $claveRepetida.setAttribute("type", "password");
    }
});
