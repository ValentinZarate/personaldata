document.addEventListener('DOMContentLoaded', () => {
    // TOOLTIP INTERACTIVITY
    const triggers = document.querySelectorAll('.tooltip-trigger');

    triggers.forEach(trigger => {
        const tooltip = trigger.nextElementSibling;

        trigger.addEventListener('mouseenter', () => {
            tooltip.classList.add('tooltip-visible', 'tooltip-right');
            positionTooltip(trigger, tooltip);
        });

        trigger.addEventListener('mouseleave', () => {
            tooltip.classList.remove('tooltip-visible', 'tooltip-right');
        });

        tooltip.addEventListener('mouseenter', () => {
            tooltip.classList.add('tooltip-visible', 'tooltip-right');
        });

        tooltip.addEventListener('mouseleave', () => {
            tooltip.classList.remove('tooltip-visible', 'tooltip-right');
        });
    });

    function positionTooltip(trigger, tooltip) {
        const container = trigger.closest('.pub-container').getBoundingClientRect();
        const triggerRect = trigger.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        let top = triggerRect.top - container.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        let left = container.width + 20; // 20px de espacio entre el tooltip y el contenedor externo

        // Si el tooltip se sale de la pantalla a la derecha, lo ajustamos a la izquierda
        if (left + tooltipRect.width > window.innerWidth) {
            left = -tooltipRect.width - 20;
            tooltip.classList.remove('tooltip-right');
        } else {
            tooltip.classList.add('tooltip-right');
        }

        tooltip.style.top = `${top}px`;
        tooltip.style.left = `${left}px`;
    }

    // ✅ SMOOTH SCROLL (Desplazamiento suave entre secciones)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // ✅ STICKY HEADER (Cambio de color o tamaño en el scroll)
    const header = document.querySelector('.sidebar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
});
