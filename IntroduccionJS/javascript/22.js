// Estructuras  de control   if y else if y else 

                                          //!== diferente al dato o numero   
                                          // == que sea igual al dato o numero
                                          // === que sea el mismo tipo de dato
                                          // > mayor que
                                          // < menor que

// const puntaje = 1000;

// if(puntaje !== 1000){
    
//    console.log('No es igual');
//  } else {

 //   console.log('Si el puntaje es 1000');

// }
               
//const efectivo = 1000;
//const carrito = 800;

//if(efectivo > carrito) {
//    console.log('El usario si puede pagar');
//}else {
//   console.log('Fondos insuficientes');
//}


const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR'){
  
    console.log('Acceso a todo el sistema');

} else if(rol === 'EDITOR'){

     console.log('Acceso al sistema con restrinciones editor ')
}else{
   console.log('No tienes acceso');
}

























