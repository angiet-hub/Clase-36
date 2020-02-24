/* Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. 
Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que 
se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido. */

const eleccion = prompt("Desea buscar el mayor o el menos numero de un conjunto?");
let numeros = Number(prompt("Entre cuántos numeros desea buscar?"));
let i = "";
let mayor = "";

for (i = numeros; i > 0; i--) {
    const numerosElegidos = Number(prompt("Ingrese un numero"));
}