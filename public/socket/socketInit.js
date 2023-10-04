

socket.on('timer:start', (data) => {
  timerStop = setInterval(() => {
    updateRuntime(data);
  }, 1000);
});
