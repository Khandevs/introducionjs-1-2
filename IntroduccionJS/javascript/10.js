// Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 500;
const disponible = true;


const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 500,
    disponible: true,
}


//console.log(producto.nombreProducto)
//console.log(producto.precio)
//console.log(producto.disponible)


//Agergar Nuevas Propiedades 

producto.imagen='imagen.jpg';

//Eliminar Propiedades 

delete producto.disponible;

console.log(producto)
