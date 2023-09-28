// DOM elements
var floatingSuccess = document.getElementById("floating-success");
var floatingFail = document.getElementById("floating-fail");
var machineInfo = document.getElementById("machine-info");

// Socket connection
socket.on('connect', () => {
  floatingSuccess.style.display = "block";
  floatingFail.style.display = "none";
  machineInfo.style.display = "block";
  setTimeout(function () {
      floatingSuccess.style.display = "none";
  }, 3000);
})

// Socket disconnection try to reconnect
socket.io.on('reconnect_attempt', () => {
    console.log('reconnect_attempt');
    floatingFail.style.backgroundColor = "#a63533";
    floatingFail.style.display = "block";
    machineInfo.style.display = "none";
    setTimeout(function () {
        floatingFail.style.display = "none";
    }, 3000);
})

