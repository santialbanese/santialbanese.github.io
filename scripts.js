document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollTop = scrollTop;
    });
});

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