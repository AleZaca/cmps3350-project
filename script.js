const grid = document.getElementById('grid');
const startButton = document.getElementById('startButton');
const message = document.getElementById('message');

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

let path = [];

startButton.addEventListener('click', startGame);

function startGame() {
  message.textContent = '';
  path = generatePath();
  displayPath(path);
}

function generatePath() {
  const path = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * 3);
    path.push(randomIndex);
  }
  return path;
}

function displayPath(path) {
  grid.innerHTML = '';
  path.forEach(index => {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.backgroundColor = colors[index];
    square.textContent = index + 1;
    grid.appendChild(square);
  });

  setTimeout(() => {
    grid.innerHTML = '';
  }, 2000); // Display path for 2 seconds
}

