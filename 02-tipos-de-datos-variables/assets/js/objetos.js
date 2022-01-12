/* let miObjeto = {
  // pares de clave valor
  nombre: 'Iris Ailed'
} */

let nombre = 'Iris Ailed';
let edad = 31;
let direccion = 'CDMX';
let numero = 2132143243;

console.log(nombre);

// agregar propiedades del objeto 'persona' separándolas con comas

// OBJETO: colección de información

let persona = {
  /* nombre --> objeto --> usa { clave : valor} */
  nombre: {
      apellidoPaterno: 'Ramos',
      apellidoMaterno: 'Vivas',
      nombre: 'Iris Ailed'
    },
  edad: 31,
    /* direccion --> objeto --> usa { clave : valor} */
  direccion: {
      ciudad: 'CDMX',
      estado: 'Distrito Federal'
    },
    /* numero --> arreglo --> usa [ valor1 , valor2 ] */
  numero: [
    2132143243,
    2132143242
  ]
};

console.log(persona.nombre);

/* Para acceder a 'Ramos' --> unidos por puntos . */
console.log(persona.nombre.apellidoPaterno); // Ramos