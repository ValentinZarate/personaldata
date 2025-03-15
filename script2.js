// Tooltip interactivity
const triggers = document.querySelectorAll('.data-link');

triggers.forEach(trigger => {
    const tooltip = trigger.querySelector('.tooltip');
    
    trigger.addEventListener('mouseover', () => {
        tooltip.style.display = 'block';
    });
    trigger.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});
