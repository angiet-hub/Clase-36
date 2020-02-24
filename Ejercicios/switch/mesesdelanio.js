//Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.

const number = Number(prompt("Ingrese un número"));
let month = "";

switch (number) {
    case 1:
        month = "Enero";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 2:
        month = "Febrero";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 3:
        month = "Marzo";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 4:
        month = "Abril";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 5:
        month = "Mayo";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 6:
        month = "Junio";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 7:
        month = "Julio";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 8:
        month = "Agosto";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 9:
        month = "Septiembre";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 10:
        month = "Octubre";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 11:
        month = "Noviembre";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    case 12:
        month = "Diciembre";
        alert(`El mes correspondiente al número ${number} es ${month}.`);
        break;
    default:
        alert(`Número inválido`);
}