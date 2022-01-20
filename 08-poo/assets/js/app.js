// clases, molde que nos permite crear objetos 
// la primer letra de la clase va en mayúscula

// constructor es una función 
class Animal {
  /* nombre = null;
     especie = null; */
  constructor(nombre, especie){
    // this hace referencia al contexto en que se está utilizando
    this.nombre = nombre;
    this.especie = especie;
    
  }

  // <--------- getters y setters --------->

  // uso del método "get"
  get getNombre(){
    return this.nombre;
  }

  set setNombre(nombre){ // siempre debe de llevar un parámetro
    this.nombre = nombre;
  }

  get getEspecie(){
    return this.especie;
  }

  set setEspecie(especie){ // siempre debe de llevar un parámetro
    this.especie = especie;
  }

  // métodos == función
  presentarse(){
    document.write(`Hola soy ${this.nombre} y soy un ${this.especie} <br>`);
    }

    cambiarNombre(nuevoNombre){
      this.nombre = nuevoNombre;
      let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie} <br>`;
      return document.write(mensaje);
    }

    // Métodos estáticos - se usa la palabra reservada static
    // pertenece sólo a la clase pero no se puede llamar fuera de ella
    // no se hereda a los objetos
    static saludar(){
      return console.log("Hola, soy un método estático");
    }
}
// Animal.presentarse()
// console.log(Animal.getNombre);
Animal.saludar();

// creamos un objeto que manda a llamar a otro objeto
// Animal1 manda a llamar a Animal

const Animal1 = new Animal("Scooby", "Perro");
console.log(Animal1);

const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Scrappy"; // notación de punto para cambiar el valor
console.log(Animal1.nombre);
console.log(Animal1);

Animal1.cambiarNombre("Oddie");

// Getters y Setters --> se usan como atributos
// get = obtener el valor de una variable
// set = fijar o cambiar el valor de un atributo 

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
console.log(Animal1);
Animal1.saludar();


