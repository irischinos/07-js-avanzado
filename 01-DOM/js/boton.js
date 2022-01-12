let name = document.getElementById('name');

function getName() {
  let newName = prompt('Escribe tu nombre');
  name.textContent = 'Hola ' + newName;
}