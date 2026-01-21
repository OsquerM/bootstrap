 // Obtener elementos
    const boton = document.getElementById('confirmBtn');
    const resultado = document.getElementById('resultado');

    // Evento al hacer clic
    boton.addEventListener('click', () => {
        // Mostrar ventana de confirmación
        const respuesta = confirm('¿Estás seguro de realizar esta acción?');

        // Mostrar resultado en la página
        if(respuesta) {
            resultado.innerHTML = '<div class="alert alert-success">¡Has confirmado!</div>';
        } else {
            resultado.innerHTML = '<div class="alert alert-danger">Has cancelado la acción.</div>';
        }
    });