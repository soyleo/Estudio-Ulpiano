document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA PARA LOS TÍTULOS (Intersection Observer) ---
    const secciones = document.querySelectorAll(".section-card");

    const opciones = {
        threshold: 0.2 // Se activa cuando ves el 20% de la sección
    };

    const observador = new IntersectionObserver(function(entradas, observador) {
        entradas.forEach(function(entrada) {
            if (entrada.isIntersecting) {
                // Añade la clase 'visible' para que el CSS muestre el texto
                entrada.target.classList.add("visible");
                observador.unobserve(entrada.target); // Deja de observar una vez animado
            }
        });
    }, opciones);

    secciones.forEach(function(seccion) {
        observador.observe(seccion);
    });

    // --- LÓGICA PARA EL MENÚ (Scroll Nav) ---
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

});