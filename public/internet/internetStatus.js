// ~~ Validacion de conexion a internet
setInterval(() => {
    if (navigator.onLine) {
        console.log("El dispositivo está conectado a Internet");
    } else {
        console.log("El dispositivo no está conectado a Internet");
    }
}, 50000);
