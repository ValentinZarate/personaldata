// Interactivity for tooltips
const tooltips = document.querySelectorAll('.tooltip-trigger');

tooltips.forEach(trigger => {
    const tooltip = trigger.nextElementSibling;
    trigger.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });
    trigger.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
});
