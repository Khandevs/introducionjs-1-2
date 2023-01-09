//Arrays o arreglos

const numeros = [ 10,20,30,40,50];           //si tiene corchetes es un Arrays o arreglo 
 
//console.table(meses);


//acceder a los valores de un arreglo

//console.log(numeros[0]);
//console.log(numeros[1]);
//console.log(numeros[2]);
//console.log(numeros[3]);
//console.log(numeros[4]);

//conocer  la extension de un arreglo 

//console.log(meses.length);


//numeros.forEach( function(numeros) {
//    console.log(numeros);

//}) 


//Para agregar un elemento a un array 

numeros.push(59,60,80,);  // un push agrega al final del arreglo o array

numeros.unshift(-59,-60,-80,);   // un unshift agrega al principio del arreglo o array

console.table(numeros);


// Para eliminar un elemnto del array o arreglo 

const meses = ["enero", "febrero", "marzo", "Abril", "mayo",];

// meses.pop(); //elemina el ultimo elemento 
// meses.shift();  //elimina el primer elemento

// meses.splice(2,1);    // para eleminar un elemnto especifico 
// console.table(meses);
 
//metodo Rest operator  o Spread Operator 


const nuevoArreglo = ["junio",...meses];
console.table(nuevoArreglo);

