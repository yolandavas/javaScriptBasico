//funcion que nos ayuda a imprimir en la consola los resultado
// Qué resultado esperas que nos aparezca si corremos este ejemplo? "undefined"
console.log(miNombre);
var miNombre= "Yolanda" //var palabra reservada en javascript

// Lo que sucede con el hoisting (compilador JIT (Just-In-Time))

var miNombre = undefined;
console.log(miNombre + "soy hoisting"); //funcion que nos da el navegdor para imprimir resultados
miNombre = "Diego";

// ===  Hoisting con funciones  ===

hello();// mandando a llamar una funcion

function hello() {// se inicializa antes de que la declare
    console.log("Hola "  + miNombre);
};
var miNombre = 'Yolis'; //inicializo mi variable

//El resultado será : Hola undefined
//el navegador "sube" la funcion y por eso si se puede ejecutar la funcion y la variable igual la sube y la declara pero como undefined
//Por buenas practicas tienes que declararla al inicio del código

// Por ejemplo asi sucede con hoisting 

function hey() {  //La función se declara hasta arriba, y después se declaran las variables.
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Diego';