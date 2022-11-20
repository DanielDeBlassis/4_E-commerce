import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "../services/auth-service.js"

const $signinForm = document.querySelector(".formulario");
const $mail = document.querySelector("input[name='email']");
const $clave = document.querySelector("input[name='password']");

$signinForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {
        const credentials = await signInWithEmailAndPassword(auth, $mail.value, $clave.value);
        // console.log(credentials);
        $signinForm.reset();
        swal("Bienvenido!", "Será redirigido a inicio", "success").then((res) => {
            window.location.href = "../index.html";
        });
    } catch (error) {

        if (error.code === "auth/wrong-password") {
            $clave.style.border = "solid 1px red";
            document.querySelector(".error-message.clave").innerText = "Contraseña errónea"
        } else if (error.code === "auth/user-not-found") {
            swal("Error!", "Usuario no encontrado", "error");
        } else {
            swal("Error!", "Ocurrió un error. Vuelve a intentar", "error");
            console.log(error);
        }


        // swal("Error!", "Ocurrió un error al iniciar sesión", "error");

    }
});

