// Fecht API

async function obtenerEmpleados() {
      const archivo = 'javascript/empleados.json';

     //  fetch(archivo)
     //         .then( resultado => {
     //           return  resultado.json();
     //       })
     //         .then (datos => {
     //           const {empleados} = datos;

     //           empleados.forEach( empleado => {
     //                 console.log(empleado);

     //           })
 
     //       })
       const resultado = await fetch(archivo);
       const datos = await resultado.json();
       console.log(datos);

} 


obtenerEmpleados();



// status: 200             es igual a que si encotro el archivo y esta conectado 
// status: 400              es igual a que no encontro el archivo y no esta conecto


















