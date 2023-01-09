// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
// POO

// Object Literal /

const producto = {
    nombre: 'table',
    precio: 500,

}


// Object Constructor              la clase debe ser mayusculas paaaadri
//version "antigua"
function Cliente(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;

}
 
function Producto(nombre,precio,disponible){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible; 
    

}


// Crear funciones que solo se utilizan en un objeto en especifico.   .prototype

Cliente.prototype.formatearCliente = function(){
    
    return `EL Cliente ${this.nombre} ${this.apellido} tiene 10 caballos `;
}


Producto.prototype.formatearProducto = function() { 

return `EL producto ${this.nombre} tiene un precio de 
${this.precio}`;
}


// agregando al objecto 

const producto2 = new Producto("pantalla plasma de 50", 800);
const producto3 = new Producto("Patineta Skate", 500);

const cliente1 = new Cliente("Erick","Arroyo");
const cliente2 = new Cliente("Alex","Arroyo");



//console.log
console.log(cliente1.formatearCliente());
console.log(cliente2.formatearCliente());

console.log(producto2.formatearProducto() );
console.log(producto3.formatearProducto() );







