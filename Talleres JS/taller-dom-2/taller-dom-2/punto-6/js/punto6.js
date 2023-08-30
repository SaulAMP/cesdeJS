function mostrarSaboresDeHelado(){
    const seleccion = document.querySelector('.nieve');
    const mensaje = document.querySelector('.resultado');
    
    const sabores = {
        chocolate: "chocolate",
        ron: "ron con pasas",
        vainilla: "vainilla"
    };

    const saborSeleccionado = seleccion.value;

    if (saborSeleccionado !== '') {
        const newp = document.createElement("p");
        const newContent = document.createTextNode(`Te gusta el sabor a ${sabores[saborSeleccionado]}`);
        
        newp.appendChild(newContent);
        mensaje.innerHTML = ''; // Limpiar el mensaje anterior
        mensaje.appendChild(newp);
    } else {
        mensaje.innerHTML = ''; 
    }
}
