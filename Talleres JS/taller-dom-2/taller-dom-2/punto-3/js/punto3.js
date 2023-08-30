let openMenu = document.querySelector(".openbtn");
let closeMenu = document.querySelector(".closebtn");
let sidebar = document.querySelector("#mySidebar");
let mainContent = document.querySelector("#main");

openMenu.addEventListener("click", function(){
    sidebar.style.left = "0"; 
    mainContent.style.marginLeft = "400px"; 
});

closeMenu.addEventListener("click", function(){
    sidebar.style.left = "-400px"; 
    mainContent.style.marginLeft = "0";
});

