// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"

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
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
