let botones = document.querySelectorAll(".accordion");
for(let i = 0; i<botones.length;i++){
    botones[i].addEventListener("click", function(){
        let paneles = document.querySelectorAll(".panel");
        if(paneles[i].style.display=="block"){
            paneles[i].style.display ="none";
        }else{
            paneles[i].style.display = "block";
        }
    })
}