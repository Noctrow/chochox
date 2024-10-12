// Selecciona el botón y el body
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

// Verifica si el usuario ya tiene una preferencia guardada
if (localStorage.getItem('dark-mode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Añade el evento click al botón
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Guarda la preferencia del usuario en el almacenamiento local
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});