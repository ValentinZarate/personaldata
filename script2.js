document.addEventListener('DOMContentLoaded', () => {
    const tooltipTriggers = document.querySelectorAll('.data-link');

    tooltipTriggers.forEach(trigger => {
        const tooltip = trigger.querySelector('.tooltip');
        
        trigger.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
        });
        trigger.addEventListener('mouseout', () => {
            tooltip.style.display = 'none';
        });
    });
});
