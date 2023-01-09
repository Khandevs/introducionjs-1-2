//Async / await

function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('descargando clientes esperee...');

        setTimeout(() =>  {
              resolve('Los clientes fueron Descargados')
        }, 5000);               
       

    })
} 


function descargarUltimosPedidos(){
    return new Promise(resolve => {
        console.log('descargando pedidos esperee...');

        setTimeout(() =>  {
              resolve('Los Ultimos Pedidos fueron Descargados')
        }, 5000);               
       

    })
} 



  async function app() {
  try {
     // const clientes = await descargarNuevosClientes();
     // const pedidos = await descargarUltimosPedidos();
     // console.log(clientes);
     // console.log(pedidos);

      const resultado = await Promise.all([descargarNuevosClientes(),descargarUltimosPedidos()]);
      console.log(resultado[0]);
      console.log(resultado[1]);

  } catch (error) {
    console.log('error');
  }
} 


app(); 



//Entonces, eso sí es pregunta para obtener un trabajo, porque te van a decir cómo puedes optimizar
//un llamado a cinco //Async / await.
//Tiene que ser con un punto.
//Recuerda, tiene paréntesis porque es una función, pero es un arreglo de 
//Promises o un arreglo de funciones
//para ir ejecutando una y otra.























