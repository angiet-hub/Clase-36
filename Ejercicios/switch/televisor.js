/* Hacer un programa que empiece preguntando si se desea prender el televisor. Si elige que no, 
el programa debe terminar. Si elige que sí, debe mostrar un mensaje con el canal actual y el el nivel 
de volumen de un televisor, y debe permitir realizar las siguientes operaciones:
CAMBIAR CANAL: permite ingresar un canal (0 al 99)
CANAL SIGUIENTE: sube un canal
CANAL ANTERIOR: baja un canal
SUBIR VOLUMEN: sube en volumen en 5
BAJAR VOLUMEN: disminuye en volumen en 5
MUTEAR: pone el volumen en 0

Una vez elegida la opción e ingresado el valor si corresponde, debe mostrar un mensaje con el canal y el 
nivel del volumen actual. */

const encenderTelevisor = confirm("Desea prender el televisor?");
let canal = 10;
let volumen = 20;



switch (encenderTelevisor) {
    case true:
    const accion = prompt(`Usted se encuentra viendo el canal ${canal}, el volumen es ${volumen}.
    Qué acción desea realizar? Cambiar canal, canal siguiente, canal anterior, subir volumen, bajar volumen, mutear`);
        switch (accion) {
            case "cambiar canal":
                canal = prompt("Ingrese el canal que desea ver");
                alert(`Usted se encuentra viendo el canal ${canal}, el volumen es ${volumen}.`)
                break;
            case "canal siguiente":
                canal++;
                alert(`Usted se encuentra viendo el canal ${canal}, el volumen es ${volumen}.`)
                break;
            case "canal anterior":
                canal--;
                alert(`Usted se encuentra viendo el canal ${canal}, el volumen es ${volumen}.`)
                break;
            case "subir volumen":
                volumen += 5;
                alert(`Usted se encuentra viendo el canal ${canal}, el volumen es ${volumen}.`);
                break;
            case "bajar volumen":
                volumen -= 5;
                alert(`Usted se encuentra viendo el canal ${canal}, el volumen es ${volumen}.`);
                break;
            case "mutear":
                volumen = 0;
                alert(`Usted se encuentra viendo el canal ${canal}, el volumen es ${volumen}.`);
        }
    default:
        alert(`Hasta luego`);
}