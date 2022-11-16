// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBfNGwN-6zRWfX6Co-_a51QunkYibG-_KE",
    authDomain: "ecommerce-alurageek.firebaseapp.com",
    databaseURL: "https://ecommerce-alurageek-default-rtdb.firebaseio.com",
    projectId: "ecommerce-alurageek",
    storageBucket: "ecommerce-alurageek.appspot.com",
    messagingSenderId: "145141151933",
    appId: "1:145141151933:web:08d55db722e5ddaaea9fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const $imagenProducto = document.querySelector('input[name="imagenProducto"]');
let enlace = "";

const $inputURL = document.querySelector('input[name="url-img"]');
const $nombreImagen = document.querySelector("input[name='nombre-img']");

$imagenProducto.addEventListener("change", async (e) => {

    const file = e.target.files[0];

    if ((file.size > 9000 && file.size < 2097152 && file.type === "image/png")
        || (file.size > 9000 && file.size < 2097152 && file.type === "image/jpg")
        || (file.size > 9000 && file.size < 2097152 && file.type === "image/jpeg")
        || (file.size > 9000 && file.size < 2097152 && file.type === "image/svg")
        || (file.size > 9000 && file.size < 2097152 && file.type === "image/svg+xml")) {

        const cleanNombre = Date.now() + (file.name.replace(/\s+/g, "").trim());//quito espacios del nombre del archivo
        const nombreImg = cleanNombre;

        const storageRef = ref(storage, `images/productos/${nombreImg}`);
        
        const $cargaDialogo = document.querySelector(".carga__dialog");
        $cargaDialogo.classList.remove("oculto");

        uploadBytes(storageRef, file).then(async snapshot => {
            enlace = await getDownloadURL(storageRef);
            $cargaDialogo.classList.add("oculto");
            $inputURL.value = enlace;
            $nombreImagen.value = nombreImg;
            swal("Correcto!", "La imagen se subió correctamente", "success");
            // console.log(snapshot);
            // console.log(enlace);
        }).catch(error => {
            $cargaDialogo.classList.add("oculto");
            swal("Error!", "Error al subir la imagen a Firebase", "error");
            console.log("Error al subir la imagen: " + error);
        });

    } else {
        swal("Error!", "Ingrese una imagen entre 9kb y 2mb con formato .png/.jpg./.jpeg/.svg", "error");
    }
});

