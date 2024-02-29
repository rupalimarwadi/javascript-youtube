setInterval(() => {
    const date = new Date();
    document.getElementById('digiLabel').innerText = `${date.toLocaleTimeString()}`
}, 1000)
