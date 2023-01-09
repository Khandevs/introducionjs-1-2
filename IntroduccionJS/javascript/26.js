// This
// this solo se puede utilizar dentro de un objeto y de la function () { console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`) }


const reservacion = {
    nombre: 'Erick',
    apellido: 'Arroyo',
    total: 5000,
    pagando: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
//el function por que hace referencia a las propiedades del objeto
reservacion.informacion();



// Pregunta Cual es el resultado de esta programa

const reservacion2 = {
    nombre: 'Erick',
    apellido: 'Arroyo',
    total: 5000,
    pagando: false,
    informacion: () => {
        console.log(`${this.nombre}`);
    }
}

reservacion2.informacion();

//Respuesta : Error por que el arrow function hace referencia a dis la ventana global, 
//osea ocupas el function por que hace referencia a las propiedades del objeto
//undefined 










































