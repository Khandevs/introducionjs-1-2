// Promises en Javascrip 


const usuarioAuntenticado = new Promise( (resolve,reject) => {
       const auth = true;

     
      if(auth){

        resolve('Usario Auntenticado');                                    //El promises se cumple

      }else{
       
        reject('No se pudo iniciar sesion');                                     //EL promises no se cumple

      }
});

usuarioAuntenticado 
    .then( (resultado) => {
      console.log(resultado);

    })
    .catch((error) => {
      console.log(error);
    });


//En el promises existen 3 valores 

// Pending : No se ha cumplido pero tampoco rechazado 
// Fulfilled : Ya se cumplio 
// Rejected : Se ha rechazado o No se pudo cumplir
































