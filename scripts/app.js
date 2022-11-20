import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from "../services/auth-service.js"
// import "../controllers/signup.js"
import "../controllers/logout.js"
import { loginCheck } from "../scripts/login/loginCheck.js"

onAuthStateChanged(auth, async (user) => {
    // console.log(user);

    loginCheck(user);
    
    // if(user) {
    //     loginCheck(user);
    // }else {
    // }
});

