import { getUsuario, updateUsuario } from "../services/client-service.js";

const url = new URL(window.location);
let id = url.searchParams.get("id");

let $nombre = document.querySelector("input[name='nombreUsuario']");
let $mail = document.querySelector("input[name='email']");
let $clave = document.querySelector("input[name='password']");
let $claveRepetida = document.querySelector("input[name='password-repeat']");

