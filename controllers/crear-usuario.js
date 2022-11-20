import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "../services/auth-service.js"
import { saveUsuario } from "../services/firestore-service.js"

const $formularioCrear = document.querySelector(".formulario");
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

//escucha evento envío de datos
$formularioCrear.addEventListener("submit", async (e) => {
    e.preventDefault();

    //obtengo los datos
    const $signupNombre = document.querySelector("input[name='nombreUsuario']");
    const $signupEmail = document.querySelector("input[name='email']");
    const $signupClave = document.querySelector("input[name='password']");

    // console.log($signupClave, $signupEmail);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, $signupEmail.value, $signupClave.value);
        const id = userCredentials.user.uid;
        // console.log(id);
        saveUsuario(id, $signupNombre.value, $signupEmail.value, "usuario");
        $formularioCrear.reset();
        swal("Correcto", "Usuario Creado exitosamente!", "success");
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            swal("Error", "Correo ya registrado", "error");
        } else if (error.code === "auth/invalid-email") {
            $signupEmail.style.border = "solid 1px red";
            document.querySelector(".error-message.email").innerText = "E-mail inválido"
        } else if (error.code === "auth/weak-password") {
            $signupClave.style.border = "solid 1px red";
            document.querySelector(".error-message.clave").innerText = "Contraseña inválida. Mínimo 6 caracteres."
        } else {
            swal("Error", "Ocurrió un error. Vuelve a intentar.", "error");
            console.log(error);
            console.log(error.code);
        }

    }
})