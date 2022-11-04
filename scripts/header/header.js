const bloqueMenor = `<i onclick="mostrarBuscador()" class="fas fa-search"></i>
<div class="container__form">
        <label>
          <input class="form-control busqueda" type="search" placeholder="Buscar" />
        </label>
        <button class="btn btn-secondary" type="submit" title="Buscar"><i class="fas fa-search"></i></button>
    </div>`;

const bloqueMayor = `<label>
<input class="form-control busqueda" type="search" placeholder="¿Qué deseas buscar?" />
</label>
<button class="btn btn-light" type="submit" title="Buscar"><i class="fas fa-search"></i></button>`;


function adaptar() {
    const $formularioBusqueda = document.querySelector(".formulario-busqueda");
    if (screen.width <= 360) {
        $formularioBusqueda.innerHTML = bloqueMenor;
    } else if (screen.width > 360) {
        $formularioBusqueda.innerHTML = bloqueMayor;
    }
}
