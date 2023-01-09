// metodos arrays o arreglos


const meses = ["enero", "febrero", "marzo", "Abril", "mayo",];

const carrito =[
      
       {nombre:"Monitor de 20 pulgadas", precio:500},
       {nombre:"Television de 50 pulgadas", precio:700},
       {nombre:"Tablet", precio:300},
       {nombre:"Audifonos", precio:200},
       {nombre:"Teclado", precio:50},
       {nombre:"Celular", precio:500},
       {nombre:"Bocinas", precio:300},
       {nombre:"Laptop", precio:800},
];


// forEach
meses.forEach(function(mes) {

      if(mes == "marzo") {
        console.log("marzo si existe");
      }
});

// includes para arreglos planos 

let resultado = meses.includes("marzo");


// some ideal para objetos   de arreglos

resultado2 = carrito.some(function(producto){
    return producto.nombre === "Tablet"
});

// Reduce

resultado3 = carrito.reduce(function(total, producto){

      return total + producto.precio

},0);

// filter

resultado4 = carrito.filter(function(producto){ 

    return producto.precio > 400

});


resultado4 = carrito.filter(function(producto){ 

    return producto.nombre !== "Celular"

});

console.log(resultado4);