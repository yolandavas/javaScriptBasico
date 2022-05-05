if(true){ //estructura real de una condicional if
// to do
}


if(true){ // si no es verdad ; si no es verdadero no pasa nada
    console.log("hola")
}

/** EJEMPLO CON VALIDACION TRUE Y UN VALOR DEFAULT O FALSE */
if(true){
    console.log("Hola soy verdadero")
}else{ // si es false pasara a esta condición, ya no se pone parentesis por que es un paso por default si es false
    console.log("soy falso")
}


/** EJEMPLO DE VALIDACION DONDE PUEDES VALIDAR DOS COSAS */
var edad =18;
if(edad === 18){
    console.log("eres mayor de edad, puedes votar, será tu primera votación")
}
else if( edad > 18 ){
    console.log("Eres mayor de edad, puedes votar de nuevo")
}else{
    console.log("Eres menor de edad; lo siento no puedes votar")
}


/** EJEMPLO DE IF TERNARIO */

//estructura o sintaxis
condicion ? true : false;
//generamos la condicion ? si es verdad pasa esto : si es falso pasa esto

//ejemplo

var numero =1;
var resultado = numero === 1 ? "Sí soy un 1":"No soy 1"
