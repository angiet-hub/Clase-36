/* for (let index = 0; index < 10; index++) {
    // por index arrancando en 0, 
    // mientras sea menor a 10,
    // incrementar index en 1
    console.log(index);
}

for (valorDeInicio; condicionDeEjecucion; instruccionPorIteracion) {
    //codigo a ejecutar por cada vuelta - iteracion
}

for (let index = 5; index >= 1; index--) {
    console.log(index);
}

for (let i = 0; i <= 100; i += 10) {
    console.log("Vuelta: " + i);
} */


//pregunar gustos de helado, sabores, que nos diga cuantos gustos faltan y mostrar la lista

const cantidadGustos = Number(prompt("Cuantos gustos desea?"));
let gustos = "";

for (let i = cantidadGustos; i > 0; i--) {
    const gusto = prompt(`Ingrese un gusto, le quedan ${i}`);
    gustos += gusto + "\n";
}

alert(gustos);