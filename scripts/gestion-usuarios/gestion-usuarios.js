import { onGetUsuarios, deleteUsuario } from "../../services/firestore-service.js";

const $cuerpoTabla = document.querySelector(".usuarios__tabla__contenido");

window.addEventListener("DOMContentLoaded", async () => {
    onGetUsuarios((usuarios) => {
        $cuerpoTabla.innerHTML = ``;

        usuarios.forEach(user => {
            const usuario = user.data();
            const fila = document.createElement("tr");
            fila.innerHTML = `<td>${usuario.nombre}</td><td>${usuario.mail}</td><td>${usuario.rol}</td>`; 
            $cuerpoTabla.appendChild(fila);
        });

        const $botonesBorrar = document.querySelectorAll(".btn-borrar");

        $botonesBorrar.forEach(boton => {
            boton.addEventListener("click", async (event) => {

                swal({
                    title: "¿Estás seguro de borrar este usuario?",
                    text: "(Una vez borrado, el usuario no podrá ser recuperado)",
                    icon: "warning",
                    buttons: ["Cancelar", "Aceptar"],
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            try {
                                $cuerpoTabla.innerHTML = ``;
                                deleteUsuario(event.target.dataset.id);
                                swal("El usuario ha sido borrado con éxito!", {
                                    icon: "success",
                                });
                            } catch (error) {
                                swal("Error!", "Ocurrió un error! Vuelve a intentar.", {
                                    icon: "error",
                                });
                                console.log("Error al borrar un usuario: " + error);
                            }

                        } else {
                            swal("El usuario está a salvo");
                        }
                    });
            });
        });
    })
});

