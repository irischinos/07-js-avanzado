let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');
$texto.id = 'texto';
/* $texto.style = 'color: red; font-size: 24px'; */ // es poco común cambiar apariencia por js
$texto.className = 'bg-purple h3';
/* $texto.className = 'h3'; */
$texto.classList.add('text-center') = 'h3';
$texto.classList.remove('bg-purple'); // alimina la 3er clase
