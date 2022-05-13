[]//estructura de corchetes

var autos = ["Renault Kwid", "Hyundai Grand i10", "Nissan March", "Suzuki Ignis"]; //forma sintaxica para declarar un array
//acceder a el array
console.log(autos)

//saber si tiene valores, cuantos elementos tiene el array, longitud
console.log(autos.length)
//acceder a cada elemento, en programación la cuenta inicia con 0
console.log(autos[0])
//result "Renault Kwid
console.log(autos[2])
//result "Nissan March

/** cambiar el array */
//Agregar más elementos
var masCarros= autos.push("Nissan V-Drive")
console.log(autos)
// Result: ['Renault Kwid', 'Hyundai Grand i10', 'Nissan March', 'Suzuki Ignis', 'Nissan V-Drive']

//eliminar el ultimo elemento que existe en el array
var ultimo=autos.pop("Nissan V-Drive")
console.log(autos)
// Result: ['Renault Kwid', 'Hyundai Grand i10', 'Nissan March', 'Suzuki Ignis']

//Agregar un elemento al inicio
var nuevaLongitud=autos.unshift("Mercedes");
console.log(autos)
//Result:['Mercedes', 'Renault Kwid', 'Hyundai Grand i10', 'Nissan March', 'Suzuki Ignis']

//elimina el valor que esta al principio
//eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
var primero = autos.shift("Mercedes");
console.log(autos)
//Result:[ 'Renault Kwid', 'Hyundai Grand i10', 'Nissan March', 'Suzuki Ignis']


var posicion = autos.indexOf("Suzuki Ignis");
console.log(posicion)
//Result: 3


/** METODOS PARA MUTAR Y RECORRER  UN ARRAY*/
/*
El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor en los resultados, no verificará los valores restantes en la colección de matriz.

El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los valores de la colección y devolverá los valores coincidentes en una matriz.

*/
var vivero=[
    {nombre:"Alcatras", precio:32.00},
    {nombre:"Bugambilia", precio:42.00},
    {nombre:"Rosa", precio:18.00},
    {nombre:"Gerbera", precio:442.00},
    {nombre:"Azalea", precio:82.00},
    {nombre:"Hibisco", precio:72.00},
    {nombre:"Dalia", precio:172.00},
    {nombre:"lirio", precio:12.00},
    {nombre:"Orquídea", precio:602.00}
]

// METODOS PARA RECORRER

// filter va a validar si algo es verdadero o falso y generara un nuevo array
// Devuelve todos los elementos del array que cumplan con la condición dada
var floresFiltradas= vivero.filter(function(flor){
return flor.precio <=500
})
floresFiltradas;

// map, va a ayudar a mapear cierto articulos, generara un nuevo array de solo strings
var nombreFlores = vivero.map(function(flor){
 return flor.nombre
});
nombreFlores;

// find, nos ayudara a encontrar algo dentro de vivero, no va a modificar si no va a generar un nuevo array, validara un true o false
//Devuelve el primer elemento del array que cumpla con la condición dada
var floresEncontradas= vivero.find(function(flor){
 return flor.nombre === "lirio" //regresame la flor si tienes en vivero que sea igual a lirio
});

floresEncontradas

// foreach, no genera un nuevo array, simplemente va a generar un filtrado
//Ejecuta lo que le definamos una vez por cada elemento de nuestro array
vivero.forEach(function(flor){
 console.log(flor.nombre);
})

//some va a regresar nu verdadero o falso para articulos que coincidan con la validacion
//Comprueba si al menos un elemento del array cumple con la condición que le damos
var floresBaratas = vivero.some(function(flor){
    return flor.precio<=50
})

floresBaratas//retur true


/** ELIMINANDO ELEMTNOS DE UN ARRAY */
