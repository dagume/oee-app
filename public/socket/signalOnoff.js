// DOM elements
let machineName = document.getElementById('factor-production')
// var modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
// modal.style.display = "none";


socket.on('onOff', (data) => {
    console.log(data)
    machineName.innerHTML = data + ` units`
})

// Cuando el usuario hace clic en <span> (x), cerrar el modal
// span.onclick = function () {
//     modal.style.display = "none";
// }

// Cuando el usuario hace clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
