//Metodos De Propiedad 

const reproductor = {

    reproducir : function(id) {
        console.log(`Reproduciendo cancion con el ID: ${id}`);
    },

    pausar : function() {
        console.log('Deteniendo la  cancion...');
    },
       
    crearPlaylist : function(nombre) {
        console.log(`Creando playlist : ${nombre} `);
    },

    reproducirPlaylist : function(nombre) {
        console.log(`Reproducir playlist : ${nombre} `);
    }


}


 reproductor.borrarcanciones = function (id){
    console.log(`Borrando cancion con el id: ${id}`);
}




console.log(reproductor);
reproductor.reproducir(3080);
reproductor.pausar();
reproductor.borrarcanciones(40);
reproductor.crearPlaylist('Top corridos Tumbados del nata');
reproductor.reproducirPlaylist('Top corridos Tumbados del nata');




