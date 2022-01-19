/* <----- Código síncrono -----> */

let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona); 


/* <----- Código asíncrono -----> */
let variableAsincrona;

setTimeout(() => {
  variableAsincrona = 10 * 3;
  console.log(variableAsincrona); // 
}, 2000);
// 2000 -> milisegundos = 2 segundos
// se agrega un retardo
// se ejecuta la tarea después de 2s

console.log(variableAsincrona); 