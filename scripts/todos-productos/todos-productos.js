import { deleteProducto, onGetProductos } from "../../services/client-service.js";

const $contenedor = document.querySelector(".categoria_producto__box");

window.addEventListener("DOMContentLoaded", async () => {

    onGetProductos((productos) => {
        productos.forEach(doc => {
            const producto = doc.data();
            const contenido = document.createElement("div");
            contenido.classList.add("categoria_producto__item");

            contenido.innerHTML = `<div class="container__imagen">
                                <img class="imagen__producto" src="${producto.urlImagen}" alt="${producto.nombre}" />
                                <div class="container__btn-edit">
                                    <i class="fas fa-pen btn-editar" data-id="${doc.id}"></i>
                                    <i class="fas fa-trash btn-borrar" data-id="${doc.id}" data-nombreimg="${producto.nombreImg}"></i>
                                </div>
                            </div>
                            <div class="descripcion__producto">
                            <h5 class="descripcion__producto__titulo">${producto.nombre}</h5>
                            <span class="descripcion__producto__precio">$ ${producto.precio}</span>
                            ${producto.enPromocion ? `<span><i class="fas fa-tag precio-descuento"></i> 33% Off</span>` : ``}
                            <span class="descripcion__producto__stock">#${producto.stock}</span>
                            </div>`;
            $contenedor.appendChild(contenido);
        });

        const $botonesEditar = document.querySelectorAll(".btn-editar");

        $botonesEditar.forEach(boton => {
            boton.addEventListener("click", async (event) => {
                window.location.href = `../screens/editar-producto.html?id=${event.target.dataset.id}`;
            });
        });

        const $botonesBorrar = document.querySelectorAll(".btn-borrar");
        $botonesBorrar.forEach(boton => {
            boton.addEventListener("click", async (event) => {

                swal({
                    title: "¿Estás seguro de borrar este producto?",
                    text: "(Una vez borrado, el producto no podrá ser recuperado)",
                    icon: "warning",
                    buttons: ["Cancelar", "Aceptar"],
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            try {
                                $contenedor.innerHTML = ``;
                                deleteProducto(event.target.dataset.id);
                                //Borrado de la imagen en Firebase Storage
                                borrarImagen(event.target.dataset.nombreimg);
                                swal("El producto ha sido borrado con éxito!", {
                                    icon: "success",
                                });
                            } catch (error) {
                                swal("Error!", "Ocurrió un error! Vuelve a intentar.", {
                                    icon: "error",
                                });
                                console.log("Error al borrar un producto: " + error);
                            }

                        } else {
                            swal("El producto está a salvo");
                        }
                    });
            })
        })
    });

});

