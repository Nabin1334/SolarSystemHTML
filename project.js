const planetsData = [
  { name: 'Mercury', color: 'red', distance: 150, diameter: 20 },
  { name: 'Venus', color: 'orangered', distance: 220, diameter: 23 },
  { name: 'Earth', color: 'blue', distance: 300, diameter: 23},
  { name: 'Mars', color: 'sandybrown', distance: 400, diameter: 18 },
  { name: 'Jupiter', color: 'brown', distance: 500, diameter: 65 },
  { name: 'Saturn', color: 'rgb(45, 45, 137)', distance: 600, diameter: 35 },
  { name: 'Uranus', color: 'rgb(13, 131, 37)', distance: 700, diameter: 30 },
  { name: 'Neptune', color: '#ed6969', distance: 800, diameter: 28 }
];

const System = document.getElementById('System');
const sun = document.querySelector('.sun');

planetsData.forEach(planetData => {
  const planet = document.createElement('div');
  planet.className = 'planet';
  planet.style.backgroundColor = planetData.color;
  planet.title = planetData.name;
  
  const orbit = document.createElement('div');
  orbit.className = 'orbit';
  orbit.style.transform = `translateZ(-${planetData.distance}px)`;
  
  orbit.appendChild(planet);
  System.appendChild(orbit);
  
  const diameter = planetData.diameter;
  planet.style.width = `${diameter}px`;
  planet.style.height = `${diameter}px`;
});

function rotatePlanets() {
  const planets = document.querySelectorAll('.planet');
  const rotationSpeed = 2346987;
  let angle = 10;
  setInterval(() => {
      angle += rotationSpeed;
      System.style.transform = `rotateY(${angle}deg)`;
  }, 1000 / 60);
}
rotatePlanets(screenright);
