
let productionValue = document.getElementById('speed-operation')

socket.on('unitCount', (data) => {
    console.log(data)
    productionValue.innerHTML = data + ` units/min`
})
