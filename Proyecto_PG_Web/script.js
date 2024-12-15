document.addEventListener("DOMContentLoaded", () => {
    console.log("EASYMOVBG - Página cargada correctamente");
});

// Función de inicio de sesión
function login() {
    // Obtener los valores del formulario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si ambos campos tienen valores (no vacíos)
    if (username !== "" && password !== "") {
        // Añadir la clase fade-out para la animación de desvanecimiento
        document.body.classList.add("fade-out");

        // Esperar a que la animación de desvanecimiento termine
        setTimeout(function() {
            // Redirigir a la página principal (index.html)
            window.location.href = "index.html"; // Redirige al usuario a la página principal
        }, 1000); // Espera 1 segundo para que termine la animación de desvanecimiento
        
        return false; // Evitar que se recargue la página
    } else {
        document.getElementById("login-message").textContent = "Por favor, ingresa un nombre de usuario y una contraseña.";
        document.getElementById("login-message").style.color = "red";
        return false; // Evitar que se recargue la página
    }
}

// Función para mostrar/ocultar información adicional
function toggleMoreInfo(infoId) {
    const infoElement = document.getElementById(infoId);
    if (infoElement.style.display === "none" || infoElement.style.display === "") {
        infoElement.style.display = "block"; // Mostrar la información
    } else {
        infoElement.style.display = "none"; // Ocultar la información
    }
}
