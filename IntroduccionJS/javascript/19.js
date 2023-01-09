// Funciones que Retornan Valores 

// function sumar(n1,n2 ) {

//    return n1 + n2;

//}

// const resultado = sumar(30,30);

// console.log(resultado);



let total = 0;

function agregarcarrito (precio) {

    return total += precio;
}

function Calcularimpuesto (total){
    return 1.15 * total;
}

total = agregarcarrito (300);
total = agregarcarrito (400);
total = agregarcarrito (300);
total = agregarcarrito (200);

console.log(total);

const totalApagar = Calcularimpuesto (total);

console.log(`El total a pagar es:$${totalApagar}`);









