/** tareas o procesos */

/** funcion constructura, template de los nuevo objetos */
function auto(marca, modelo, annio){//propiedades esperadas

    this.marca = marca;
    this.modelo= modelo;
    this.annio= annio;

}

/** construir un objeto */
//new va a generar un objeto nuevo del objeto "instanciar"
var autoNuevo =  new auto("Tesla", "Model 3", 2021)
var autoNuevoDos =  new auto("Ford", "Fiesta", 2015)
/*
Result
autoNuevo;
Object { marca: "Tesla", modelo: "Model 3", annio: 2021 }
​
*/