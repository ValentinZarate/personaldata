document.addEventListener('DOMContentLoaded', () => {
    // Chart.js para la sección Data & Insights
    const ctx = document.getElementById('dataChart')?.getContext('2d');

    if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'Population Trend',
                    data: [50, 60, 65, 70, 80],
                    borderColor: '#BB86FC',
                    backgroundColor: 'rgba(187, 134, 252, 0.2)',
                    borderWidth: 2,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        grid: {
                            color: '#333'
                        }
                    },
                    y: {
                        grid: {
                            color: '#333'
                        }
                    }
                }
            }
        });
    }

    // Tooltip Logic for Graph Trigger
    const triggers = document.querySelectorAll('.tooltip-trigger');

    triggers.forEach(trigger => {
        const tooltip = trigger.nextElementSibling;

        trigger.addEventListener('mouseover', () => {
            tooltip.style.display = 'block';
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        });

        trigger.addEventListener('mouseout', () => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 300);
        });
    });
});
