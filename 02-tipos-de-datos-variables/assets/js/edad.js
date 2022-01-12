/* Almacenar el año actual en una variable. Pedirle al usuario el año en que nació y calcular su edad. */

let anioActual = 2022;
let edad = document.getElementById('edad');

function calcularEdad() {
  año = prompt('¿En qué año naciste?');
  let edadUsuario = anioActual - año;
  edad.textContent = 'Tienes ' + edadUsuario + ' años.';
}