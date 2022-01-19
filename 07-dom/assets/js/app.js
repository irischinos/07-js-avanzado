// Buenas prácticas:
// agregar un símbolo de pesos para especificar que es un objeto del DOM


let $titulo = document.getElementById('titulo');
titulo.textContent = 'Titulo escrito desde JS'


// PUEDE SER #id , .clase
/* let $titulo =  document.querySelector('#titulo');
$titulo.textContent = 'Título escrito desde JS'; */

let $parrafo = document.querySelector('p');
console.log($parrafo.textContent); // para seleccionar todos los párrafos

let $parrafos = document.querySelectorAll('p');
console.log($parrafos[1].textContent); // para acceder a la info del segundo párrafo

// creación de un h3 desde js
// se puede modificar incluso antes de crearlo
let subtitulo = document.createElement('h3');
/* subtitulo.textContent = 'Este es un subtítulo desde JS creado con .body.append'; */ // lo coloca en laparte inicial del documento html, pero afuera del body

// document.body.append agrega un elemento al "final" del documento
/* document.body.append(subtitulo); */

$titulo.insertAdjacentElement(afterend",subtitulo);
$titulo.remove();


/* document.body.insertAdjacentElement("beforeBegin", subtitulo); */

let $contenido = document.querySelector('#contenido');
/* console.log($contenido.textContent = 'Hola' ); */ // para reemplazar contenido del div - el <br> se detecta como si fuera un texto por usar "textContent"
/* console.log($contenido.innerHTML = '<br>'); */ // se detecta como texto el <br>, no da el salto de línea 
/* console.log($contenido.outerHTML = 'Hola'); */ // modifica todo el elemento (div y p) , y reemplaza con texto ambos elementos

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo párrafo';
$contenido.appendChild(contenidoParrafo);






























