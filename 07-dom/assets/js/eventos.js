let $titulo = document.querySelector('#titulo');
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje');
let $spanError = document.querySelector('span');

/*  ES LO MISMO QUE ABAJO
$btnMensaje.addEventListener('click', function() {

}); 
*/

// Arrow function
//
$btnMensaje.addEventListener('click', () => {
  console.log('No me presiones');
});

//keydown se activa cuando presiono una tecla
$mensaje.addEventListener('keydown', (e) => {
  console.log(e.target.value);

  if( e.target.value.length < 3 ) {
    $spanError.classList.remove('hide');
    $spanError.classList.add('error');
  } else {
    $spanError.classList.add('hide');
    $spanError.classList.remove('error');

  }
});


/* 

$mensaje.addEventListener('keydown', () => {
  console.log('escribiste algo');
});
 */


/* AQUÍ USAMOS LA FUNCIÓN INVOCADA, ARRIBA USAMOS LA FUNCIÓN ANÓNIMA

$mensaje.addEventListener('keydown', mostrarConsole);

function mostrarConsole() {
  console.log('escribiste algo');
} 

*/