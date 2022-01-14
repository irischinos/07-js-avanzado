
let cadena1 = "Hola";
console.log(cadena1);

/* Manera elegante de escribir un objeto */
// propiedades: atributos de un objeto
// todos los objetos tienen métodos y propiedades

let cadena2 = new String("Adiós")
console.log(cadena2);

/* let arreglo = new Array(1);
console.log(arreglo); */

// includes() busca una cadena en otra y regresa true o false si existe o no existe
console.log(cadena2.toLowerCase().includes("a"));
// convierte a minúsculas o mayúsculas
console.log(cadena2.toLowerCase());
console.log(cadena2.toUpperCase());

// coerción y conversión : JS convierte en automático un tipo de dato en otro
console.log(cadena1.toLowerCase());

/* Función que recibe una palabra y la regresa invertida */

// <------------------------------------------------------------------------------->

/* MEJORAR CÓDIGO :P */

let palabra = prompt("Introduce una palabra para invertir el orden de las letras");
let arreglo = palabra.split("");
/* console.log(arreglo);
console.log(arreglo.reverse().join("")); */

function invertirPalabra(cadena) {
  let arreglo = cadena.split(""); // se convierte la cadena en un arreglo
  arreglo.reverse(); // se invierte el arreglo
  let cadenaInvertida = arreglo.join(""); // une los elementos de un arreglo y regresa un string
  document.getElementById("lt-purple").style.color = "purple";
  return document.write(`Tu palabra invertida es: ${cadenaInvertida}`);
}

invertirPalabra(palabra);


function palabraOriginal() {
  arreglo.reverse();
  return document.write(`Insertaste:  ${palabra}`);
}















