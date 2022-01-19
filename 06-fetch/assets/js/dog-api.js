let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () => {

  fetch('https://dog.ceo/api/breeds/image/random')
  .then(resp => resp.json()).then(data => {
    console.log(data);

    // creando etiqueta img
    let imagenGatito = document.createElement('img');
    // asignamos a src la posición de la url que queremos llamar
    // es un objeto y se accede con data.message, siengo message la 'clave' en el objeto al que queremos acceder
    imagenGatito.src = data.message;
    // agrego al body
    document.body.appendChild(imagenGatito);
  })
  
});