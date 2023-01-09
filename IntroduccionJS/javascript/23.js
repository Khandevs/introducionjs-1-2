// switch

const metodoPago = 'efectivo';

switch(metodoPago){
    case 'tarjeta':
        console.log('Pagaste con Tarjeta');
        break;
    
    case 'cheque':
        console.log('Has pagado con cheque revisaremos los fondos primero');
        break;
    
    case 'efectivo':
        console.log('Has pagado con efectivo');
        break;
    case 'bitcoin':
        console.log('has pagado con bitcoin');
        break;    

    default:
        console.log('Aun no has pagado');
        break;


}


























