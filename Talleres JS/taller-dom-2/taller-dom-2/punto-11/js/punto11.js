document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al elemento del icono de carga
    const loadingIcon = document.getElementById("loading-icon");
    loadingIcon.style.display = "block";

    // Espera 3 segundos y luego oculta el icono de carga
    setTimeout(function () {
    loadingIcon.style.display = "none";
    }, 3000);
});