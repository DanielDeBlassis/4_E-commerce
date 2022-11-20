// import { getUsuario, updateUsuario } from "../services/firestore-service.js";

// const url = new URL(window.location);
// let id = url.searchParams.get("id");

// let $nombre = document.querySelector("input[name='nombreUsuario']");
// let $mail = document.querySelector("input[name='email']");
// let $clave = document.querySelector("input[name='password']");
// let $claveRepetida = document.querySelector("input[name='password-repeat']");

// window.addEventListener("DOMContentLoaded", async () => {

//     const doc = await getUsuario(id);
//     const usuario = doc.data();


//     $nombre.value = usuario.nombre;
//     $mail.value = usuario.mail;
//     // $clave.value = usuario.clave;
//     // $claveRepetida.value = usuario.clave;


//     const $mostrarClave = document.querySelector("input[name='mostrar']");

//     $mostrarClave.addEventListener("click", () => {
//         if ($mostrarClave.checked) {
//             $clave.setAttribute("type", "text");
//             $claveRepetida.setAttribute("type", "text");
//         }else {
//             $clave.setAttribute("type", "password");
//             $claveRepetida.setAttribute("type", "password");
//         }
//     });
// });

// const $formularioEditar = document.querySelector(".formulario");

// $formularioEditar.addEventListener("submit", (e) => {
//     e.preventDefault();

//     $nombre = document.querySelector("input[name='nombreUsuario']").value;
//     $mail = document.querySelector("input[name='email']").value;
//     $clave = document.querySelector("input[name='password']").value;
//     $claveRepetida = document.querySelector("input[name='password-repeat']").value;

//     try {
//         // updateUsuario(id, {nombre: $nombre, clave: $clave, mail: $mail});
//         swal("Correcto!", "Usuario editado exitosamente", "success");

//     } catch (error) {
//         swal("Error!", "Ocurrió un error, vuelve a intentarlo", "error");
//         console.log("Error al editar el usuario: " + error);
//     }

// });
