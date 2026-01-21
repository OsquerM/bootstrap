const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
    if (confirm("¿Deseas iniciar sesión?")) {
        const usuario = prompt("Usuario:");
        if (usuario) {
            const contraseña = prompt("Contraseña:");
            if (contraseña) {
                alert(`¡Bienvenido, ${usuario}!`);
            } else {
                alert("No ingresaste contraseña.");
            }
        } else {
            alert("No ingresaste usuario.");
        }
    } else {
        alert("Acción cancelada");
    }
});
