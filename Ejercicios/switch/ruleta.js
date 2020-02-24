/* 
    Crear un programa que simule una apuesta de ruleta. El programa debe mostrar las opciones posibles para apostar 
    y preguntar qué se desea elegir:
    ROJO: gana si el número es rojo
    NEGRO: gana si el número es negro
    PAR: gana si número es par
    IMPAR: gana si el número es impar
    ALTA: gana si el número es menor o igual a 18
    BAJA: gana si el número es mayor a 18
    PRIMERA DOCENA: gana si el número está incluido en la primera docena (del 1 al 12)
    SEGUNDA DOCENA: gana si el número está incluido en la segunda docena (del 13 al 24)
    TERCERA DOCENA: gana si el número está incluido en la tercera docena (del 25 al 36)

Una vez elegida la opción, el programa debe generar aleatoriamente un número entre 1 y 36, de color negro o rojo. 
Mostrar un mensaje con el número que salió y si se ganó o no la apuesta. */

const apuesta = prompt(`Que desea apostar?:
--Rojo
--Negro
--Par
--Impar
--Alta
--Baja
--Primera docena
--Segunda docena
--Tercera docena.`);

const numero = Math.round(Math.random() * 36) + 1;
let color= Math.round(Math.random() * 2) + 1;

if (color === 1) {
    color = "rojo"
} else {
    color = "negro";
}

switch (apuesta) {
    case "rojo":
        if(color = "rojo") {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        }
    break;
    case "negro":
        if(color = "negro") {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        }
    break;
    case "par":
        if (numero % 2 == 0) {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        }
    break;
    case "impar":
        if (numero % 2 == 0) {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        }
    break;
    case "alta":
        if (numero <= 10) {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        }
    break;
    case "baja":
        if (numero > 10) {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        }
    break;
    case "primera docena":
        if (numero >= 1 && numero <= 12) {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        }
    break;
    case "segunda docena":
        if (numero > 12 && numero <= 24) {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        }
    break;
    case "tercera docena":
        if (numero > 25 && numero <= 36) {
            alert(`EL número que salió es ${numero} ${color}. Usted ganó la apuesta.`)
        } else {
            alert(`EL número que salió es ${numero} ${color}. Usted perdió la apuesta.`)
        }
    break;
    default:
        alert(`Error`)
}