import { getUsuario, updateUsuario } from "../services/client-service.js";

const url = new URL(window.location);
let id = url.searchParams.get("id");

