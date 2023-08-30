const d = document;
let campoTexto = d.querySelector('.texto');
let botonCrear = d.querySelector('.boton');
let tabla = d.querySelector('.table tbody');

botonCrear.addEventListener("click", function(){
    crearTarea();
});

let contar = 3;
function crearTarea(){
    if(campoTexto.value == ""){
        alert('Debes ingresar datos');
        return;
    }
    let fila = d.createElement("tr");
    fila.innerHTML = `
    <td> ${contar++} </td>
    <td> <span class="contenido">${campoTexto.value}</span> </td>
    <td> <span class= "botonEditar" onclick="editarTarea(this);"> 💻 </span> </td>
    <td> <span class="boton-eliminar" onclick="eliminarTarea()">✖️</span></td>
    
    `
    tabla.appendChild(fila);
    campoTexto.value = " ";
}

//editar la  tarea
let editarTarea = (elemento) => {
    let obtenerFila = elemento.closest("tr");
    //obtener contenido  en la fila
    let contenido = obtenerFila.querySelector(".contenido");
    //pedir nuevo contenido y mostrar el actual
    let agregarNuevoContenido = prompt('Edita la tarea', contenido.textContent);
    if(agregarNuevoContenido !== null){
        contenido.textContent = agregarNuevoContenido;
    }
    else{
        alert("El usuario canceló");
    }
    
}


function eliminarTarea(){
    let botonEliminar = d.querySelector('.boton-eliminar');
    let confirmar = confirm("¿Desea eliminar la tarea? ")
    if(confirmar){
        botonEliminar.parentElement.parentElement.remove();
    
    }
    else{
        alert("El usuario canceló");
    }
}
campoTexto.addEventListener("keyup", function(e){
    if(e.key =="Enter"){
        crearTarea();
    }
})
