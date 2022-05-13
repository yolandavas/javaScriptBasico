var mascotas= ["Mascara","Canelita","Kachun","Negro"];

//tarea
function saludarMascotas(mascotas){

    console.log(`Hola, ${mascotas}`);
}

for (var  i=0; i < mascotas.length; i++){ //estrcutura del for
    //se genera una variable igual a 0
    //mientras sea menor a la longitud del array de estudiantes, para ver cuantos elementos tienen guardados
    // incrementar de forma numerica el valor de i
    //si la condicion se cumple
    saludarMascotas(mascotas[i])// la primera vez como el i vale 0 nos debe traer "Hola Mascara", y asi sucesivamente 
/**
 *Result:
 *  Hola, Mascara
 Hola, Canelita
 Hola, Kachun
Hola, Negro
 */
}

for(var mascota of mascotas){ //mascota es el singular de mascotas, y se convierte en index
    saludarMascotas(mascota)// mascota se converte en 0 y despues en 1 etc.
}
/**
 *Result:
 *  Hola, Mascara
 Hola, Canelita
 Hola, Kachun
Hola, Negro
 */