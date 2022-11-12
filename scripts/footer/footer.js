function adaptar() {
    const $contactoContainer = document.querySelector(".contacto__container");
    let rutaImagen = `assets/images/logo.svg`;

    if (window.location.pathname.indexOf("index") === -1) {
        rutaImagen = `../assets/images/logo.svg`;
    }

    let bloqueNormal = `<div>
<img class="logo__alura-geek" src="${rutaImagen}" alt="Logo Alura Geek">
</div>
<div class="contacto__links">
<ul class="contacto__links__lista">
    <li class="contacto__links__lista--item"><a href="#">Quiénes Somos</a></li>
    <li class="contacto__links__lista--item"><a href="#">Política de Privacidad</a></li>
    <li class="contacto__links__lista--item"><a href="#">Programa de Fidelidad</a></li>
    <li class="contacto__links__lista--item"><a href="#">Nuestras Tiendas</a></li>
    <li class="contacto__links__lista--item"><a href="#">Quiero ser franquiciado</a></li>
    <li class="contacto__links__lista--item"><a href="#">Anuncie aquí</a></li>
</ul>
</div>
<form class="contacto__mensaje">
<h5 class="contacto__mensaje__title">Hable con nosotros</h5>
<label for="nombre" title="Nombre">
    <input class="form-control nombre" type="text" name="nombre" placeholder="Nombre" />
</label>
<label for="mensaje" title="Mensaje">
    <textarea class="form-control mensaje" cols="50" rows="4" name="mensaje"
        placeholder="Mensaje"></textarea>
</label>
<div class="contenedor-btn-enviar"><button class="btn btn-primary" type="submit" title="Enviar">Enviar</button></div>
</form>`;

    let bloqueAdaptado = `<div class="contacto__logo___links">
<img class="logo__alura-geek" src="${rutaImagen}" alt="Logo Alura Geek">
<div class="contacto__links">
<ul class="contacto__links__lista">
    <li class="contacto__links__lista--item"><a href="#">Quiénes Somos</a></li>
    <li class="contacto__links__lista--item"><a href="#">Política de Privacidad</a></li>
    <li class="contacto__links__lista--item"><a href="#">Programa de Fidelidad</a></li>
    <li class="contacto__links__lista--item"><a href="#">Nuestras Tiendas</a></li>
    <li class="contacto__links__lista--item"><a href="#">Quiero ser franquiciado</a></li>
    <li class="contacto__links__lista--item"><a href="#">Anuncie aquí</a></li>
</ul>
</div>
</div>
<form class="contacto__mensaje">
<h5 class="contacto__mensaje__title">Hable con nosotros</h5>
<label for="nombre" title="Nombre">
    <input class="form-control nombre" type="text" name="nombre" placeholder="Nombre" />
</label>
<label for="mensaje" title="Mensaje">
    <textarea class="form-control mensaje" cols="50" rows="4" name="mensaje"
        placeholder="Mensaje"></textarea>
</label>
<div class="contenedor-btn-enviar"><button class="btn btn-primary" type="submit" title="Enviar">Enviar</button></div>
</form>`;

    if (screen.width <= 768) {
        rutaImagen = `../assets/images/logo.svg`;
        $contactoContainer.innerHTML = bloqueAdaptado;
    } else if (screen.width > 768) {
        $contactoContainer.innerHTML = bloqueNormal;
    }
}


window.addEventListener("resize", adaptar);
window.addEventListener("DOMContentLoaded", adaptar);

