const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", function () {
    document.body.classList.toggle("dark", this.checked);
});