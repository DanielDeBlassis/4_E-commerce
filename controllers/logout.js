import { signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "../services/auth-service.js"

const $logout = document.querySelector("#logout");

$logout.addEventListener("click", async () => {
    console.log("Logged out");
    // await signOut(auth);
    const iconoSalir = document.createElement("i")
    iconoSalir.classList.add("fas");
    iconoSalir.classList.add("fa-sign-out-alt");
    iconoSalir.classList.add("icono-salir");

    swal({
        title: "Seguro que desea cerrar sesión?",
        content: iconoSalir,
        buttons: ["Cancelar","Cerrar"],
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                try {
                    signOut(auth);
                    swal("Se cerró sesión!", {
                        icon: "success",
                    }).then((res)=> {
                        window.location.reload();
                    })
                }catch {
                    swal("Error!", "No se pudo cerrar sesión. Intente nuevamente.", "error");
                }
            } else {
                swal("Canceló cierre de sesión","La sesión cotinúa activa", "info");
            }
        });
});
