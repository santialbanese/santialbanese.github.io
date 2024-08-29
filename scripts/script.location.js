var map = L.map('map').setView([-35.1000, -57.8945], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.9214, -57.9545]).addTo(map)
    .bindPopup('La Plata');