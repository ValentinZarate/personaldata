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


const typewriterText = "Valentín Zárate - Ph.D. Student";
let index = 0;

function typeWriter() {
    if (index < typewriterText.length) {
        document.getElementById('typewriter').innerHTML += typewriterText.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    }
}

document.addEventListener('DOMContentLoaded', typeWriter);

// Scroll Animation (Fade-In)
const elements = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 }); // Se activará cuando el 10% del elemento esté visible

elements.forEach(element => {
    observer.observe(element);
});

// Slide-In (animación para imágenes y texto)
const slideElements = document.querySelectorAll('.project-wrapper');

const slideObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}, { threshold: 0.2 });

slideElements.forEach(slide => {
    slideObserver.observe(slide);
});
