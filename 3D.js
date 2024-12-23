document.addEventListener('DOMContentLoaded', () => {
    const solarSystem = document.querySelector('.solar-system');
    let isDragging = false;
    let startX, startY;
    let rotationX = 45;
    let rotationY = 0;
    let rotationZ = 0;

  
    updateSolarSystemTransform();

    function updateSolarSystemTransform() {
        solarSystem.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;
    }

    solarSystem.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        solarSystem.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        if (e.shiftKey) {
         
            rotationZ += deltaX * 0.5;
        } else {
           
            rotationY += deltaX * 0.5;
            rotationX = Math.max(-90, Math.min(90, rotationX + deltaY * 0.5));
        }

        updateSolarSystemTransform();

        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        solarSystem.style.cursor = 'grab';
    });

    
    solarSystem.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        e.preventDefault();
    });

    document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;

        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;

        rotationY += deltaX * 0.5;
        rotationX = Math.max(-90, Math.min(90, rotationX + deltaY * 0.5));

        updateSolarSystemTransform();

        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        e.preventDefault();
    });

    document.addEventListener('touchend', () => {
        isDragging = false;
    });

    const planets = document.querySelectorAll('.planet img');
    const rotationPeriods = {
        'mercury': 58.6,
        'venus': -243,
        'earth': 1,
        'mars': 1.03,
        'jupiter': 0.41,
        'saturn': 0.45,
        'uranus': -0.72,
        'neptune': 0.67
    };

    planets.forEach(planet => {
        const planetClass = planet.parentElement.classList[1];
        const rotationPeriod = rotationPeriods[planetClass] || 10;
        const duration = Math.abs(rotationPeriod) * 10;
        const direction = rotationPeriod < 0 ? 'reverse' : 'normal';
        
        planet.style.animation = `planetSpin ${duration}s linear infinite ${direction}`;
    });

    solarSystem.addEventListener('wheel', (e) => {
        e.preventDefault();
        const perspective = getComputedStyle(document.body).perspective;
        const currentPerspective = parseInt(perspective);
        const newPerspective = currentPerspective + (e.deltaY * 2);
        
        if (newPerspective >= 500 && newPerspective <= 5000) {
            document.body.style.perspective = `${newPerspective}px`;
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes planetSpin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);