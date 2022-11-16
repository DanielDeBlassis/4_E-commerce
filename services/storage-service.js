// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js";
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

