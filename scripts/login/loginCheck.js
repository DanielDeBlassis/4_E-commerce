const $loggOut = document.querySelector(".logg-out");
const $loggIn = document.querySelector(".logg-in");

export const loginCheck = user => {

    if (user) {
        $loggOut.classList.add("oculto");
        $loggIn.classList.remove("oculto");
    } else {
        $loggOut.classList.remove("oculto");
        $loggIn.classList.add("oculto");
    }
}