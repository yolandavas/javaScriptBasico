var flores= ["Rosa", "Tulipan", "Clavel", "Perrito"]

function saludarFloresitas(flor){
    console.log(`Hello, ${flor}`);
}

while(flores.length > 0) //mientras existan valores ene l array va a pasar
{
    console.log(flores);
    var flor = flores.shift(); //sacamos un elemento del array
    saludarFloresitas(flor)
}
/** 
 * Result:
 * (4) ['Rosa', 'Tulipan', 'Clavel', 'Perrito']
Hello, Rosa
 (3) ['Tulipan', 'Clavel', 'Perrito']
 Hello, Tulipan
 (2) ['Clavel', 'Perrito']
 Hello, Clavel
 ['Perrito']
 Hello, Perrito
*/