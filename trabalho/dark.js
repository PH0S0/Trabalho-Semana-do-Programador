const themeSwitch = document.getElementById("themeSwitch");

// 1. Verifica se já existe uma preferência salva ao carregar a página
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeSwitch.checked = true; // Mantém o botão switch ativado visualmente
}

// 2. Escuta a mudança de clique no botão switch
themeSwitch.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark"); // Salva que o tema escuro está ativado
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light"); // Salva que o tema claro está ativado
    }
});
