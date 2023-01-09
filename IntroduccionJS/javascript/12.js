// "use strict";  //correr js en modo stricto
// Object Methods


const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 500,
    disponible: true,
}

Object.freeze(producto)     // previene agregar como eliminar propiedades a tus objetos  
Object.seal(producto) // te permite modificar propiedades existentes 

//producto.imagen = 'imagen.pgn'


console.log(Object.isFrozen(producto)); //para saber si un objeto se puede modificar

console.log(producto)


