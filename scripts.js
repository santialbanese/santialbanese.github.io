document.addEventListener("DOMContentLoaded", function() {
    const modeToggle = document.getElementById("mode-toggle");
    const currentMode = localStorage.getItem("theme");

    if (currentMode === "dark") {
        document.body.classList.add("dark-mode");
    }

    modeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        let theme = "light";
        if (document.body.classList.contains("dark-mode")) {
            theme = "dark";
        }
        localStorage.setItem("theme", theme);
    });
});