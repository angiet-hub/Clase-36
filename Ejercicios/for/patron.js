/* 
    Crear un programa que muestre en consola el siguiente patrón

    *
    **
    ***
    ****
    *****
    ******
    *******
    ********
    *********
    **********
    ***********
    ************
    *************
    
     */

let i = 0;
let patron = "*";
let resultado = "";

for ( i = 0; i <= 13; i++) {
    resultado += patron;
    console.log(resultado); 
}


