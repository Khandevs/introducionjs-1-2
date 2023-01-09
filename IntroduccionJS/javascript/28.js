// clases


class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }formatearProducto(){                                                  //esto es una funcion
        return `EL producto ${this.nombre} tiene un precio de ${this.precio}`;

       }formatearPrecio(){
        return `El precio del producto es ${this.precio}`;
       }

}

class Cliente {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.precio = apellido; 

    }formatearCliente(){                                                   //esto es una funcion
        return `El Cliente ${this.nombre} ${this.apellido} tiene mucho dinero`;

       }
}
                                                     //Aqui instanciar la classe
const producto2 = new Producto("TV plasma", 600);
const producto3 = new Producto("Camioneta", 60000);

const cliente1 = new Cliente("Erick", "Arroyo");
const cliente2 = new Cliente("Alex", "Arroyo");




                                           
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto2.formatearPrecio());
console.log(producto3.formatearPrecio());



console.log(cliente1.formatearCliente());
console.log(cliente2.formatearCliente());






















