//Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina.

const estacionDelAnio = prompt("Ingrese una estación del año");

switch (estacionDelAnio) {
    case "Verano":
        alert(`La estación ${estacionDelAnio} comienza el 21 de diciembre y finaliza el 21 de marzo.`);
        break;
    case "Otoño":
        alert(`La estación ${estacionDelAnio} comienza el 21 de marzo y finaliza el 21 de junio.`);
        break;
    case "Invierno":
        alert(`La estación ${estacionDelAnio} comienza el 21 de junio y finaliza el 21 de septiembre.`);
        break;
    case "Primavera":
        alert(`La estación ${estacionDelAnio} comienza el 21 de septiembre y finaliza el 21 de diciembre.`);
        break;
    default:
        alert(`Estación incorrecta`);
}