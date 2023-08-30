//punto 7
//según el siguiente código en HTML seleccionar las etiquetas p 
//que tienen la clase ps y agregarles un color y un tamaño de letra. 

let parrafos = document.querySelectorAll("p.ps");

for (let i = 0; i<parrafos.length;i++){
    parrafos[i].style.color = "red";
    parrafos[i].style.fontSize = "30px";
}



