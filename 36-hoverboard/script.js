const container = document.getElementById('container');

const colors = ['red', 'green', 'blue', 'yellow'];
const SQUARES = 400;

for (let index = 0; index < SQUARES; index++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

const setColor = (el) => {
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (el) => {
  el.style.background = '#1d1d1d';
  el.style.boxShadow = '0 0 2px #000';
};

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
