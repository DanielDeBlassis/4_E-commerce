import { onGetProductos } from "../../services/client-service.js";

const $inputBusqueda = document.querySelector(".busqueda");
const $sugerencias = document.querySelector(".sugerencias");
let todosLosProductos = [];
