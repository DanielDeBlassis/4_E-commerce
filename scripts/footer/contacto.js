const btn = document.getElementById('button');
const formulario = document.getElementById("form");

emailjs.init('KOXja774hIl3M7vPy')

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    btn.textContent = "Enviando...";

    const serviceID = 'service_baubkgr';
    const templateID = 'template_o8p9wzu';

    // emailjs.sendForm(serviceID, templateID, this)
    //   .then(() => {
        // btn.textContent =  'Enviar mensaje';
    //     swal("Mensaje enviado exitosamente!", "Muchas Gracias!", "success");
    //     formulario.reset();
    //   }, (err) => {
    //     btn.value = 'Enviar mensaje';
    //     swal("Ocurrió un error!", "Vuelve a intentarlo", "error");
    //     console.log(JSON.stringify(err));
    //   });
  });
