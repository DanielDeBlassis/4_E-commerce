import { onGetUsuarios, deleteUsuario } from "../../services/client-service.js";

const $cuerpoTabla = document.querySelector(".usuarios__tabla__contenido");

window.addEventListener("DOMContentLoaded", async () => {
    onGetUsuarios((usuarios) => {
        $cuerpoTabla.innerHTML = ``;

        usuarios.forEach(user => {
            const usuario = user.data();
            const fila = document.createElement("tr");
            fila.innerHTML = `<td>${usuario.nombre}</td><td>${usuario.mail}</td><td>${usuario.clave}</td>
            <td>
            <div class="btn-edicion-usuario">
            <a href="../screens/editar-usuario.html?id=${user.id}" title="Editar Usuario"><i class="fas fa-pen btn-editar"></i></a>
            <a href="#" title="Borrar Usuario"><i class="fas fa-trash btn-borrar" data-id="${user.id}"></i></a>
            </div>
            </td>`;
            $cuerpoTabla.appendChild(fila);
        });
});

