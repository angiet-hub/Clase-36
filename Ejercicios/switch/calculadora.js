//Crear un programa que permita elegir entre las operaciones: SUMA, RESTA, DIVISION y MULTIPLICACION, y 
//luego de elegida, ingresar dos números y hacer dicha operación con ella. Si se ingresa una opción incorrecta 
//debe mostrar un mensaje de error.

const operacion = prompt("Ingrese la operación a realizar");
const number1 = Number(prompt("Ingrese el primer numero"));
const number2 = Number(prompt("Ingrese el segundo numero"));
let resultado = "";

switch(operacion) {
    case "suma":
        resultado = number1 + number2;
        alert(`El resultado es ${resultado}`)
        break;
    case "resta":
        resultado = number1 - number2;
        alert(`El resultado es ${resultado}`)
        break;
    case "division":
        resultado = number1 / number2;
        alert(`El resultado es ${resultado}`)
        break;
    case "multiplicacion":
        resultado = number1 * number2;
        alert(`El resultado es ${resultado}`)
        break;
    default:
        alert("Error")

}