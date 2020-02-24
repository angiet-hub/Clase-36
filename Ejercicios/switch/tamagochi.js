/* 
Crear un programa que simule un Tamagochi (mascota virtual). Debe tener 4 variables: 
salud, felicidad, limpieza, energía, cuyos valores pueden ir entre 1 y 10. El programa debe iniciar 
mostrando un mensaje con el nombre del tamagochi y los valores de cada variable 
(que son asignados aleatoriamente). Luego, debe mostrar las siguientes posibles acciones a realizar, 
que modifican los valores de la siguiente forma:
    ALIMENTAR: +3 energía, +2 felicidad
    JUGAR: +2 felicidad, -2 energía, -1 limpieza
    DORMIR: +5 energía, +2 salud, -2 limpieza
    VACUNAR: +5 salud, -6 felicidad
    BAÑAR: +3 salud
    RETAR: -3 felicidad
    ACARICIAR: +4 felicidad

Cuando el usuario selecciona una, debe mostrar el valor final de las variables. */

let salud = Math.round(Math.random() * 10);
let felicidad = Math.round(Math.random() * 10);
let limpieza = Math.round(Math.random() * 10);
let energia = Math.round(Math.random() * 10);

alert(`Bienvenido, mi nombre es Muralito. Mis valores en este momento son:
--Salud ${salud},
--Felicidad ${felicidad},
--Limpieza ${limpieza},
--Energía ${energia}.`);

const accionARealizar = prompt("Acciones a realizar: alimentar, jugar, dormir, vacunar, bañar, retar o acariciar");

switch (accionARealizar) {
    case "alimentar":
        energia += 3;
        felicidad += 2;
        alert(`Mis valores en este momento son: 
        --Salud ${salud},
        --Felicidad ${felicidad},
        --Limpieza ${limpieza},
        --Energía ${energia}.`);
        break;
    case "jugar":
        felicidad += 2;
        energia -= 2;
        limpieza--;
        alert(`Mis valores en este momento son: 
        --Salud ${salud},
        --Felicidad ${felicidad},
        --Limpieza ${limpieza},
        --Energía ${energia}.`);
        break;
    case "dormir":
        energia += 5;
        salud += 2;
        limpieza -= 2;
        alert(`Mis valores en este momento son: 
        --Salud ${salud},
        --Felicidad ${felicidad},
        --Limpieza ${limpieza},
        --Energía ${energia}.`);
        break;
    case "vacunar":
        salud += 5;
        felicidad -= 6;
        alert(`Mis valores en este momento son: 
        --Salud ${salud},
        --Felicidad ${felicidad},
        --Limpieza ${limpieza},
        --Energía ${energia}.`);
        break;
    case "bañar":
        salud += 3;
        alert(`Mis valores en este momento son: 
        --Salud ${salud},
        --Felicidad ${felicidad},
        --Limpieza ${limpieza},
        --Energía ${energia}.`);
        break;
    case "retar":
        felicidad -= 3;
        alert(`Mis valores en este momento son: 
        --Salud ${salud},
        --Felicidad ${felicidad},
        --Limpieza ${limpieza},
        --Energía ${energia}.`);
        break;
    case "acariciar":
        felicidad += 4;
        alert(`Mis valores en este momento son: 
        --Salud ${salud},
        --Felicidad ${felicidad},
        --Limpieza ${limpieza},
        --Energía ${energia}.`);
        break;
    default:
        alert(`Inválido`);
}