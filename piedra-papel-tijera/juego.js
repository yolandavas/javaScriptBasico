var piedra= "piedra";
var papel ="papel";
var tijera= "tijera";
var pc;

function jugar(humanoSeleccion){

    pc=tijera //le asigno por default un valor con el que va a jugar la maquina

    if(humanoSeleccion===piedra &&  pc === tijera){
        console.log("Eres el ganador humano");
    }else if(humanoSeleccion== tijera && pc === papel){
        console.log("Eres el ganador humano");        
    }else if(humanoSeleccion== papel && pc === piedra){
        console.log("Eres el ganador humano");        
    }  
    else if(pc===humanoSeleccion){
        console.log("EMPATE")
    }else{
        console.log("Gano la maquina")
    }
}

jugar("piedra")