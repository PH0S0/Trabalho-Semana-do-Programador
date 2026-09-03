const themeSwitch = document.getElementById('themeSwitch');

// Verifica se já existia uma preferência de tema salva
if (localStorage.getItem('tema') === 'dark') {
    document.body.classList.add('dark');
    if (themeSwitch) themeSwitch.checked = true;
}

// Escuta o clique do botão de alternar tema
if (themeSwitch) {
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('tema', 'dark');
        } else {
            document.body.classList.remove('dark');
            localStorage.setItem('tema', 'light');
        }
    });
}
