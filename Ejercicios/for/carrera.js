/* 
    Crear un programa para controlar las vueltas de una deportista. Debe pedir al usuario la cantidad de vueltas 
    que va a realizar e ir preguntando el tiempo en segundos de cada vuelta. Al final, se debe mostrar un mensaje 
    listando los tiempos de cada vuelta y el promedio del tiempo de las vueltas (suma de las vueltas / cantidad 
        de vueltas). Ejemplo:

    Cantidad de vueltas: 3
    Vuelta 1: 133s
    Vuelta 2: 145s
    Vuelta 3: 166s
    ⏱ Promedio: 144.45s
     */

let vueltas = Number(prompt("Ingrese la cantidad de vueltas a realizar"));
let i = "";
let segundosVuelta = "";
let segundosTotales = "";
let promedio = segundosTotales / vueltas;

for(i = vueltas; i > 0; i--) {
    segundosVuelta = Number(prompt("Cuántos segundos ha hecho?"));
    segundosTotales = segundosVuelta;
}
alert(`Cantidad de vueltas: ${vueltas}.
Vuelta 1: ${segundosVuelta}.
Vuelta 2: ${segundosVuelta}.
Promedio: ${promedio}`);