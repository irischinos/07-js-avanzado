
let camisas = {
  tallas: {
    adulto: 'Talla L',
    niño: 'Talla M',
    bebe: 'Talla S'
  },
  precios: [
    100, 200, 300, 400, 500
  ],
  colores: {
    claros: ['blanco', 'amarillo'],
    oscuros: ['negro', 'guinda'],
    neutros: ['gris', 'beige']
  }
}

console.log(camisas.colores.oscuros[1]); // guinda

// camisa negra
console.log(camisas.colores.oscuros[0]); // negro

