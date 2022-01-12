/*
Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un cupón equivocado
*/

// evaluarCupon

let precio = prompt("Introduce el precio");
let evaluarCupon = prompt("Introduce el cupón: Bronce, Plata, Oro, Platino");
let compra = 0;
let descuento = 0;

switch(evaluarCupon) {
  case "Bronce":
    descuento = precio * 0.05;
    compra = precio - descuento;
    document.write("Te corresponde 5% de descuento, ");
    document.write("Te costó: " + "$" + precio + " y con el descuento pagarás " + "$" + compra);
    break;
  case "Plata":
    descuento = precio * 0.10;
    compra = precio - descuento;
    document.write("Te corresponde 10% de descuento, ");
    document.write("te costó: " + "$" + precio + " y con el descuento pagarás "  + "$" + compra);
    break;
  case "Oro":
    descuento = precio * 0.20;
    compra = precio - descuento;
    document.write("Te corresponde 20% de descuento, ");
    document.write("te costó: " + "$" + precio + " y con el descuento pagarás "  + "$" + compra);
    break;
  case "Platino":
    descuento = precio * 0.25;
    compra = precio - descuento;
    document.write("Te corresponde 25% de descuento, ");
    document.write("te costó: " + "$" + precio + " y con el descuento pagarás "  + "$" + compra);
    break;
  default: 
    console.log("Cupón erróneo");
    break;
}
