// Objetos



const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 500,
    disponible: true,
}

// Forma anterior    PH

const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;    

//console.log(precioProducto);
//console.log(nombreProducto);



// Destructuring

const {precio} = producto;
const {disponible} = producto;

console.log(precio);
console.log(disponible);