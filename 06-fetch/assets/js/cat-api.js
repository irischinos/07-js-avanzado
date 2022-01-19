// hacer referencia al botón del html con el id btnGato
let $btnGato = document.querySelector('#btnGato');

// añadimos evento al botón con click
// hacemos una petición con "fetch"
// promesas se realizan con .then

// fetch: haz una petición a ese url, se hace una promesa, cuando fetch devuelve algo
$btnGato.addEventListener('click', () => {

  fetch('https://api.thecatapi.com/v1/images/search')
  .then(resp => resp.json()).then(data => {
    console.log(data);

    // creando etiqueta img
    let imagenGatito = document.createElement('img');
    // asignamos a src la posición de la url que queremos llamar
    imagenGatito.src = data[0].url;
    // agrego al body
    document.body.appendChild(imagenGatito);
  });
  
});