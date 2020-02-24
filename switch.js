/* switch(color) {
    case "rojo":
        //codigo a ejecutar";
        break;
    case "azul":
        //codigo a ejecutar;
        break;
    case "verde":
        //codigo a ejecutar;
        break;
    default:
        //codigo a ejecutar;
} */

const provincia = prompt("Ingrese una provincia");
switch(provincia) {
    case "buenos aires":
        alert("La capital es La Plata")
        break;
    case "santa fe":
        alert("La capital es Santa Fe")
        break;
    case "cordoba":
        alert("La capital es Córdoba")
        break;
    default:
        alert("Tiene que elegir una opción")
}

switch(animal) {
    case "gato":
    case "vaca":
    case "perro":
        alert("Es un mamifero")
        break;
        
    case "canario":
    case "loro":
    case "paloma":
        alert("Es un ave")
        break;
}