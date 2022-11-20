import { saveUsuario } from "../services/firestore-service.js"

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

formularioCrear.addEventListener("submit", (e) => {
    e.preventDefault();

    const $nombre = document.querySelector("input[name='nombreUsuario']").value;
    const $mail = document.querySelector("input[name='email']").value;
    const $clave = document.querySelector("input[name='password']").value;
    const $claveRepetida = document.querySelector("input[name='password-repeat']").value;

    try {
        saveUsuario($nombre, $clave, $mail);
        swal("Correcto!", "Usuario creado exitosamente", "success");
        formularioCrear.reset();
    } catch (error) {
        swal("Error!", "Ocurrió un error, vuelve a intentarlo", "error");
        console.log("Error al crear nuevo usuario: " + error);
    }

});