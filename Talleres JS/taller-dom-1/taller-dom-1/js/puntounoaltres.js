// punto 1

let newh1 = document.createElement("h1")
let content = document.createTextNode("my presentation")
newh1.appendChild(content)
let principalDiv = document.querySelector("div")
document.body.insertBefore(newh1, principalDiv)

//punto 2
let newp = document.createElement("p");
let contenido = document.createTextNode("my best friend is mickey");
newp.appendChild(contenido);
let parrafoInicial = document.querySelector("div p"); // Seleccionamos el primer párrafo dentro del div
let divPadre = parrafoInicial.parentNode; // Obtenemos el nodo padre del párrafo
divPadre.insertBefore(newp, parrafoInicial.nextSibling); 

// punto 3
newh1.style.color = "Red"
newp.style.fontWeight = "bold"
newp.style.backgroundColor = "green"