
//punto 4
//Según el siguiente código html, modifique la etiqueta ol por ul, agregue
//un atributo class con su respectivo nombre.
let listaOrdenada = document.querySelector("ol");
let listaDesordenada = document.createElement("ul");
listaDesordenada.setAttribute("class", "lista");

while (listaOrdenada.firstChild) {
    listaDesordenada.appendChild(listaOrdenada.firstChild);
}

  // Reemplazar la lista ordenada por la lista desordenada
listaOrdenada.replaceWith(listaDesordenada);

//punto 5

/*Utilizando el código anterior cree una clase en css con estilos para pintar
el color, y cambiar la letra a cursiva, agregale la clase al elemento h1 y
elimine el ítem “preparar almuerzo”.

solucion:

let item3 = document.querySelector(".item-3")
item3.remove()
let title = document.querySelector("h2")
title.setAttribute("class", "titulo")
*/

// punto 6
/*
6.	Utilizando el código anterior agregue un ítem que tenga como texto “Recoger a los niños” después del item
 “preparar almuerzo”; cree en css 2 clases con nombre cumplido y fallido, 
 en cumplido agregue como estilo color de fondo verde y 
 en fallido color de fondo rojo, agregue la clase cumplido 
 a los ítems ”desayunar, hacer almuerzo y recoger a los niños”, y 
 la clase fallido agregarla a los ítems “ir al banco y recoger a los niños”.
 */

let newli = document.createElement("li");
let content = document.createTextNode("Recoger a los niños");
newli.appendChild(content);
let lastItem = document.querySelector("ul .item-3");
let olElement = lastItem.parentNode;
olElement.insertBefore(newli, lastItem.nextSibling);
let ulElement = document.querySelector("ul");
let primerItem = ulElement.querySelector("li:nth-child(1)");
primerItem.classList.add("cumplido");
let ultimoItem = ulElement.querySelector("li:nth-child(4)");
ultimoItem.classList.add("cumplido");
let secondItem = ulElement.querySelector("li:nth-child(2)")
let thirdItem = ulElement.querySelector("li:nth-child(3)")
secondItem.classList.add("fallido");
thirdItem.classList.add("fallido");

newli = ulElement.querySelector("li:nth-child(5)");
newli.classList.add("cumplido");

