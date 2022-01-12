let title = document.getElementById('title');

console.log(title);
title.textContent = 'Este texto está escrito desde JS';

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

/* parrafos[1].textContent = 'Párrafo 1 escrito desde JS'; */ // modifica al
//párrafo 2, pues:
// parrafos[0] ---> es el primer párrafo
// parrafos[1] ---> es el segundo párrafo

/* for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].textContent = 'Parrafo ' + i + ' escrito desde JS';
} */

let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
  console.log(email.value);
  console.log(password.value);
}