
socket.on('timer:start', (data) => {
  newRun = false;
  timerRun = setInterval(() => {
    updateRuntime(data);
  }, 1000);
  timerInit = setTimeout(() => {
    newRun = true;
    clearInterval(timerRun);
    timerStop = setInterval(() => {
      updateRuntime(data);
    }, 1000);
  }, 2000);
});


