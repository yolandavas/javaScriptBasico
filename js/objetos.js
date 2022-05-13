/**Como se escribe un objeto en js */

var objeto ={};

var miAuto={ 
    // Se le agregan propiedades, convinacion entre palablas clave y valores
    marca:"Chevrolet",
    modelo:"2019-MOD",
    annio:2019,
    detalleDelAuto:function(){
        console.log(`Auto ${this.modelo} ${this.annio}` ) //this es una variable que hace referencia al objeto
        // "this  es mi auto"
    }
}

// acceder a algo especifico del objeto

miAuto.annio
miAuto.marca

//ingresar al metodo de un objeto
miAuto.detalleDelAuto();
//resultado Auto 2019-MOD 2019

