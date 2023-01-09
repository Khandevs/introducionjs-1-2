//Spreed operator
const producto = {
   
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 500,
    disponible: true,

}


const medidas = {
    pesos: "1kg",
    medida: "1m",

}

const nuevoProducto = {...producto, ...medidas };         //para unir objetos dos


console.log(producto);
console.log(nuevoProducto);
