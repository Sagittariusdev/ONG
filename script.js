// Interacción para el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
    this.reset(); // Limpia el formulario
});
