document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const currentMode = localStorage.getItem("theme");

    if (currentMode === "dark") {
        document.body.classList.add("dark-mode");
    }

    modeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        let theme = "light";
        if (document.body.classList.contains("dark-mode")) {
            theme = "dark";
        }
        localStorage.setItem("theme", theme);
    });
});


var map = L.map('map').setView([-35.1000, -57.8945], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-34.9214, -57.9545]).addTo(map)
    .bindPopup('La Plata');