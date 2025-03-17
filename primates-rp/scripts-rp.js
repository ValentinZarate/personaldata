// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }); 
});

// Intersection Observer for Section Highlighting
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.sidebar ul li a');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Highlight current section in the sidebar
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });

                // Add fade-in effect to the section when it becomes visible
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.3, // Se activa cuando el 30% de la sección es visible
    }
);

sections.forEach(section => {
    observer.observe(section);
});

// Add class for highlighting sidebar link
document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

