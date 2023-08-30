function myFunction(){
    let botonCheck = document.querySelector("#myCheck");
    if(botonCheck.checked){
        let text = document.querySelector('#text')
        text.style.display ="block";
    }
    else{
        text.style.display ="none";
    }

}