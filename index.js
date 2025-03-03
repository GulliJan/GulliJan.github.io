

/**
 * Toggles the visibility of the navigation menu when the menu button is clicked.
 */
document.querySelector(".menuBtn").addEventListener("click", function () {
    document.querySelector("nav ul").classList.toggle("show");
});

/**
 * Initializes the theme toggle functionality when the DOM content is loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    /**
     * Checks if the user has previously selected dark mode and applies it.
     */
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeIcon.src = "Images/sun.png"; // Switch icon to sun
    }

    /**
     * Toggles between dark mode and light mode when the theme toggle button is clicked.
     */
    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeIcon.src = "Images/sun.png"; // Change to sun icon
            localStorage.setItem("theme", "dark");
        } else {
            themeIcon.src = "Images/moon.png"; // Change to moon icon
            localStorage.setItem("theme", "light");
        }
    });
});


