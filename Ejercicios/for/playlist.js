/* Crear un programa que pida al usuario ingresar el nombre de una playlist y cuántas canciones desea agregar a la 
misma. Luego debe ir pidiendo agregar la cantidad de canciones elegidas de a una. Se debe ir mostrando la 
cantidad de canciones que quedan por agregar y la playlist con los temas hasta el momento a medida que se va 
a actualizando. Al finalizar mostrar un mensaje con el nombre de la playlist y la lista de canciones. */

const nombrePlaylist = prompt("Ingrese el nombre de una playlist");
let canciones = Number(prompt("Cuántas canciones desea agregar?"));
let i = "";
let nombreCanciones = "";

for (i = canciones; i > 0; i--) {
    const nombreCancion = prompt(`Ingrese el nombre de una canción. Le quedan ${i} canciones por agregar`);
    nombreCanciones += nombreCancion + "\n";
    alert(`Las canciones agregadas son: ${nombreCanciones}`);
}

alert(`EL nombre de la playlist es ${nombrePlaylist}. Las canciones agregadas son: ${nombreCanciones}`);