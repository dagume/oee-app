// DOM elements
var floatingSuccess = document.getElementById("floating-success");
var floatingFail = document.getElementById("floating-fail");
var machineInfo = document.getElementById("machine-info");

/**
 * Event listener for when the socket connection is established.
 * Displays a success message and machine information.
 * Hides the fail message.
 */
socket.on('connect', () => {
  floatingSuccess.style.display = "block";
  floatingFail.style.display = "none";
  machineInfo.style.display = "block";
  // socket.emit('machine:init', {
  //   time: now
  // });
  setTimeout(function () {
    floatingSuccess.style.display = "none";
  }, 3000);
})

/**
 * Event listener for when the socket connection attempts to reconnect.
 * Displays a fail message with a red background color.
 * Hides the machine information.
 * Hides the fail message after 3 seconds.
 */
socket.io.on('reconnect_attempt', () => {
  console.log('reconnect_attempt');
  floatingFail.style.backgroundColor = "#a63533";
  floatingFail.style.display = "block";
  machineInfo.style.display = "none";
  setTimeout(function () {
    floatingFail.style.display = "none";
  }, 3000);
})
