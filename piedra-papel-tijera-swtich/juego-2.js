var piedra= "piedra";
var papel ="papel";
var tijera= "tijera";
var pc;

function jugar(humanoSeleccion){

    pc=tijera //le asigno por default un valor con el que va a jugar la maquina

    switch(true){
        case (humanoSeleccion===piedra &&  pc === tijera):
            console.log("Eres el ganador humano");
            break;
        case (humanoSeleccion== tijera && pc === papel):
            console.log("Eres el ganador humano");
            break;
        case (humanoSeleccion== papel && pc === piedra):
            console.log("Eres el ganador humano");
            break;
        case (pc===humanoSeleccion):
            console.log("EMPATE");
            break;
        default:
            console.log("Gano la maquina");
            break;
    }
}

jugar("piedra")