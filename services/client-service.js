// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  onSnapshot,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js"
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

const db = getFirestore();

export const saveProducto = (categoria, nombre, descripcion, precio, stock, enPromocion, urlImagen, nombreImg) => {
  addDoc(collection(db, "productos"), { categoria, nombre, descripcion, precio, stock, enPromocion, urlImagen, nombreImg })
}

export const getProductos = () => getDocs(collection(db, "productos"));

export const onGetProductos = (callback) => onSnapshot(collection(db, "productos"), callback);

export const deleteProducto = (id) => deleteDoc(doc(db, "productos", id));

export const getProducto = (id) => getDoc(doc(db, "productos", id));

export const updateProducto = (id, newFields) => updateDoc(doc(db, "productos", id), newFields);

// ////////
// USUARIOS
// ////////
export const saveUsuario = (nombre, clave, mail) => {
  addDoc(collection(db, "usuario"), { nombre, clave, mail});
}

export const getUsuarios = () => getDocs(collection(db, "usuario"));

export const onGetUsuarios = (callback) => onSnapshot(collection(db, "usuario"), callback);

export const deleteUsuario = (id) => deleteDoc(doc(db, "usuario", id));

export const getUsuario = (id) => getDoc(doc(db, "usuario", id));

export const updateUsuario = (id, newFields) => updateDoc(doc(db, "usuario", id), newFields);