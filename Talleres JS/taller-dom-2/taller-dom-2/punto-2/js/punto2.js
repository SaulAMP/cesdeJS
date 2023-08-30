let boton = document.querySelector(".dropbtn");
boton.addEventListener("click", function(){
    let disparador = document.querySelector(".dropdown-content"); 
    disparador.classList.toggle("show"); 
});