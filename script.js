window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        // Si el usuario bajó más de 100px (ajusta a tu gusto)
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });