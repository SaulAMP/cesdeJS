window.addEventListener('scroll', function(){
    let boton = document.querySelector("#myBtn");
    let menu = document.querySelector('div');
    if(window.scrollY > 0){
        menu.style.backgroundColor = "chocolate";
    }
    else{
        menu.style.backgroundColor = "black";
    }
    if (window.scrollY > 200) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
})

//punto 10

boton.addEventListener("click", function(){
    window.scrollTo({top: 0, behavior: "smooth"});

    setTimeout(function(){
        boton.style.display = "none";
        menu.style.backgroundColor = "black";

    }, 1500)

})