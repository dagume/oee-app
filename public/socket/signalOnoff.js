// DOM elements
let machineName = document.getElementById('factor-production')
var modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
modal.style.display = "none";


socket.on('onOff', (data) => {
    console.log(data)
    machineName.innerHTML = data + ` units`
    var modalEstado = modal.style.display;
    switch (modalEstado) {
        case "none":
            modal.style.display = "block";
            break;
        case "block":
            // Aqui se debe registrar en la base de datos la micro parada y el tiempo de duración
            modal.style.display = "none";
            break;
        default:
            // Si el estado no es "none" ni "block", no hacer nada
            break;
    }
})

// Cuando el usuario hace clic en <span> (x), cerrar el modal
span.onclick = function () {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

}
