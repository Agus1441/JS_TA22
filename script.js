const tamaño = document.getElementById("tamaño");


function actualizarVentana(){
    const ancho = window.innerWidth;
    const largo = window.innerHeight;
    tamaño.innerHTML = "Ancho: " + ancho + " Largo: " + largo;
}

window.addEventListener("resize",actualizarVentana);

actualizarVentana();