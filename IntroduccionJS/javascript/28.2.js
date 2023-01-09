// OBJect constructor con HERENCIA PAAAAAAAADREEEEEE


class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }formatearProducto(){                                                  //esto es una funcion
      return `EL producto ${this.nombre} tiene un precio de ${this.precio}`;

       }

}

class Libro extends Producto {
    constructor(nombre,precio,isbn){
        super(nombre,precio);
        this.isbn = isbn;
    }formatearProducto(){
        return `${super.formatearProducto() }  y su ISBN ES ${this.isbn}`;
    }obtenerPrecio(){
        return `SU precio es de ${this.precio}`;
    }
}

const producto2 = new Producto("Botas",500);
const libro3 = new Libro("EL gato",800,"2432534");


console.log(producto2.formatearProducto());
console.log(libro3.formatearProducto());
console.log(libro3.obtenerPrecio());