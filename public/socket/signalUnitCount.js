let productionValue = document.getElementById('speed-operation')
let statusCircle = document.getElementById('status-circle')
let machineSatus = document.getElementById('machine-satus')
let timerId = null
var modal = document.getElementById("myModal");
modal.style.display = "none";

/**
 * Updates the production value on the webpage with the received unit count data from the server.
 * Also sets a timer to log a message after 5 seconds of inactivity.
 *
 * @param {Object} data - The unit count data received from the server.
 */

socket.on('unitCount', (data) => {
  console.log(data)
  productionValue.innerHTML = data + ` units/min`
  machineSatus.innerHTML = "Running <span id=\"status-circle\" class=\"status-circle\" style=\"background-color: #39a633;\"></span>";

  if (modal.style.display == "block") {
    modal.style.display = "none";
  }

  const timer = setInterval(() => {
    updateRuntime();
  }, 1000);

  clearTimeout(timerId)
  timerId = setTimeout(() => {
    adminModal(machineSatus, modal, timer);
  }, 5000)
})

function adminModal(machineSatus, modal, timer) {
  console.log("apagado");
  // Detener el intervalo de tiempo timer
  clearInterval(timer);
  machineSatus.innerHTML = "Stopped <span id=\"status-circle\" class=\"status-circle\" style=\"background-color: #a63533;\"></span>";
  modal.style.display = "block";

}
