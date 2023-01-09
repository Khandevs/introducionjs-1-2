// Funciones de javascript 

//Declaracion de funcion 

function sumar() {

    console.log(10+10);
}

sumar();             //para llamar la funcion 


// Expresion de la funcion


const sumar2 = function() {
    console.log(3+3);
}

sumar2 ();

// IIFE

(function() {
    console.log("Esto es una funcion IIFE");

})(); 