
let productionValue = document.getElementById('speed-operation')
let statusCircle = document.getElementById('status-circle')
let machineSatus = document.getElementById('machine-satus')
let modal = document.getElementById("myModal");
let timerId = null
let timerRun = null
let timerStop = null
modal.style.display = "none";

/**
 * Updates the production value on the webpage with the received unit count data from the server.
 * Also sets a timer to log a message after 5 seconds of inactivity.
 *
 * @param {Object} data - The unit count data received from the server.
 */
socket.on('unitCount', (data) => {
  productionValue.innerHTML = data.count + ` units/min`
  machineSatus.innerHTML = "Running <span id=\"status-circle\" class=\"status-circle\" style=\"background-color: #39a633;\"></span>";
  clearInterval(timerStop);

  if (timerStop !== null) {
    const nowDate = sendDataRedis('machine:history');
    timerRun = setInterval(() => {
      updateRuntime(nowDate);
    }, 1000);
  }

  timerStop = null;

  if (modal.style.display === "block") {
    hideModal(modal);
  }

  clearTimeout(timerId)

  timerId = setTimeout(() => {
    adminModal(machineSatus, modal);
  }, 5000);
})

/**
 * Hides the specified modal by setting its display style to "none".
 * @param {HTMLElement} modal - The modal to be hidden.
 */
function hideModal(modal) {
  modal.style.display = "none";
}

/**
 * Stops the timer and updates the machine status and modal display.
 * @param {HTMLElement} machineStatus - The element that displays the machine status.
 * @param {HTMLElement} modal - The modal element to be displayed.
 */
function adminModal(machineSatus, modal) {
  clearInterval(timerRun);
  timerRun = null;
  const nowDate = sendDataRedis('machine:history');
  timerStop = setInterval(() => {
    updateRuntime(nowDate);
  }, 1000);
  machineSatus.innerHTML = "Stopped <span id=\"status-circle\" class=\"status-circle\" style=\"background-color: #a63533;\"></span>";
  modal.style.display = "block";
}

/**
 * Sends data to Redis and emits a 'machine:history' event with the current time.
 * @returns {number} The current time in milliseconds.
 */
function sendDataRedis(channel) {
  const now = new Date().getTime();
  socket.emit(channel, {
    time: now
  });
  return now;
}
