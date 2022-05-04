/** Existen dos tipos de funciones */
// 1. declarativas

// palabra reservada function - nombre de la funcion - si necesita parametros
function miFuncion(){ // la funcion va a guardar ciertos valores
    return 3;
}
miFuncion();


// 2. expresion

// las variables tambien pueden guardar otro tipo de valores
// conocida como anonima porque no se sabe el nombre de la funcion

var mifunction= function(a,b){// la funcion tambien puede recibir parametros (a,b) datos que necesita para ejecutarse
    return a + b;
}
mifunction();


/** MAS EJEMPLOS */

function saludarAmigos(amigo){
    console.log(amigo)//funcion que nos da el navegador para imprimir en tiempo real
}
saludarAmigos("Jesús");


function saludarAmigos2(amigo){ //plantilla de cadena de texto
    console.log( `Hola ${estudiante}`);
}

saludarAmigos2("Yola");

function restar(x,y){ //la funcion va a recibir dos parametos
    var result = x-y; // crear una variable 
    return result; // return palabra reservada para regresar información/resultado
    
}

restar(2,4);

function restar2(x,y){ //la funcion va a recibir dos parametos    
    return x-y; // return palabra reservada para regresar información/resultado    
}

restar2(4,5);