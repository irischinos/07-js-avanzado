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

let precio = prompt("¿Cuál fue el precio que pagaste?");
let evaluarCupon = prompt("¿Qué cupón tienes? (Bronce, Plata, Oro, Platino)");
let porcentajesDescuentos = ["5%", "10%", "20%", "25%"];
let descuento;

switch (evaluarCupon) {
  case "Bronce":
    descuento = precio * 0.95;
    document.write(`Pagaste $${precio}, y gracias al cupón "${evaluarCupon}" tienes un descuento del ${porcentajesDescuentos[0]} y pagarás $${descuento}`);
    break;
  case "Plata":
    descuento = precio * 0.90;
    document.write(`Pagaste $${precio}, y gracias al cupón "${evaluarCupon}" tienes un descuento del ${porcentajesDescuentos[1]} y pagarás $${descuento}`);
    break;
  case "Oro":
    descuento = precio * 0.80;
    document.write(`Pagaste $${precio}, y gracias al cupón "${evaluarCupon}" tienes un descuento del ${porcentajesDescuentos[2]} y pagarás $${descuento}`);
    break;
  case "Platino":
    descuento = precio * 0.75;
    document.write(`Pagaste $${precio}, y gracias al cupón "${evaluarCupon}" tienes un descuento del ${porcentajesDescuentos[3]} y pagarás $${descuento}`);
    break;
  default:
    document.write('ERROR, cupón no válido');
    break;
}
