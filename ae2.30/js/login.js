const loginBtn = document.getElementById('loginBtn');

// Usuario y contraseña correctos predefinidos
const USUARIO_CORRECTO = "eren";
const CONTRASEÑA_CORRECTA = "1234";

loginBtn.addEventListener('click', () => {
    let loggedIn = false;

    while (!loggedIn) {
        if (!confirm("¿Deseas iniciar sesión?")) {
            alert("Acción cancelada");
            break;
        }

        const usuario = prompt("Usuario:");
        if (!usuario) {
            alert("No ingresaste usuario.");
            continue; // vuelve al inicio del while
        }

        const contraseña = prompt("Contraseña:");
        if (!contraseña) {
            alert("No ingresaste contraseña.");
            continue;
        }

        // Validación de credenciales
        if (usuario === USUARIO_CORRECTO && contraseña === CONTRASEÑA_CORRECTA) {
            alert(`¡Bienvenido, ${usuario}!`);
            loggedIn = true;
            // Redirigir a la página de pedidos
            window.location.href = "pedidos.html"; // Cambia por el nombre real de tu página
        } else {
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
    }
});
