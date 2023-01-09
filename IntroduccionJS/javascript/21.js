// Arrow Functions


// Expresion de la funcion
               //parametros
const sumar2 = (n1,n2) => console.log(n1 + n2); 
// si tiene dos o mas parametros se dejan los parentesis


sumar2(25,25);
              //si tiene solo un parametros se puede poner sin los parentesis
const aprendiendo = tecnologia => console.log(`Aprendiendo: ${tecnologia}`);

aprendiendo('Javascript');












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
meses.forEach((mes) => {

      if(mes == "marzo") {
        console.log("marzo si existe");
      }
});


let resultado;

// some ideal para objetos   de arreglos

resultado2 = carrito.some( producto => producto.nombre === "Tablet");

console.log(resultado2);


// Reduce

resultado3 = carrito.reduce( (total, producto) =>  total + producto.precio,0);

console.log(resultado3);



// filter

resultado4 = carrito.filter( producto =>  producto.precio > 400 );

resultado6 = carrito.filter( producto => producto.nombre !== "Celular" );



console.log(resultado6);



















