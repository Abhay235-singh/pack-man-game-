const game = document.getElementById('game');
const width = 14;
const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,1,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,0,1,1,1,0,1,
  1,0,1,0,0,1,0,0,0,1,0,1,0,1,
  1,0,1,0,0,1,1,1,0,1,0,1,0,1,
  1,0,1,0,0,0,0,0,0,1,0,1,0,1,
  1,0,1,1,1,1,1,1,0,1,0,1,0,1,
  1,0,0,0,0,0,0,0,0,1,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];

const squares = [];

// 0 = dot
// 1 = wall

function createBoard() {
  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    if (layout[i] === 1) {
      square.classList.add('wall');
    } else {
      square.classList.add('dot');
    }
    game.appendChild(square);
    squares.push(square);
  }
}

createBoard();

// Initial Pac-Man position
let pacmanCurrentIndex = 15;
squares[pacmanCurrentIndex].classList.add('pacman');

function movePacman(e) {
  squares[pacmanCurrentIndex].classList.remove('pacman');

  switch(e.key) {
    case 'ArrowLeft':
      if (
        pacmanCurrentIndex % width !== 0 &&
        !squares[pacmanCurrentIndex - 1].classList.contains('wall')
      ) {
        pacmanCurrentIndex -= 1;
      }
      break;
    case 'ArrowRight':
      if (
        pacmanCurrentIndex % width < width - 1 &&
        !squares[pacmanCurrentIndex + 1].classList.contains('wall')
      ) {
        pacmanCurrentIndex += 1;
      }
      break;
    case 'ArrowUp':
      if (
        pacmanCurrentIndex - width >= 0 &&
        !squares[pacmanCurrentIndex - width].classList.contains('wall')
      ) {
        pacmanCurrentIndex -= width;
      }
      break;
    case 'ArrowDown':
      if (
        pacmanCurrentIndex + width < width * width &&
        !squares[pacmanCurrentIndex + width].classList.contains('wall')
      ) {
        pacmanCurrentIndex += width;
      }
      break;
  }

  if (squares[pacmanCurrentIndex].classList.contains('dot')) {
    squares[pacmanCurrentIndex].classList.remove('dot');
  }

  squares[pacmanCurrentIndex].classList.add('pacman');
}

document.addEventListener('keydown', movePacman);
