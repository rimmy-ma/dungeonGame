let initialDungeon = [
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W','W','W','W','W','W','W','W','W'],
  ['W', 'W', 'W', 'E', 'E', 'E', 'E', 'B', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'E', 'H','W','W','W','W','W','W','W','W'],
  ['W', 'W', 'W', 'E', 'E', 'E', 'E', 'E', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W','E' , 'E','E','W','W','W','W','W','W','W'],
  ['W', 'W', 'W', 'E', 'E', 'E', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E','E','E','W','W','W','W','W','W'],
  ['W', 'W', 'E', 'E', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'W', 'W', 'E', 'E', 'E', 'E', 'W', 'W','W','W','W','W','W','W','W','W'],
  ['W', 'E', 'W', 'W', 'E', 'W', 'E', 'E', 'E', 'M', 'W', 'W', 'W', 'E', 'W', 'W', 'E', 'E', 'E', 'E', 'W', 'W', 'E', 'E', 'W','W','W','W','W','W','W','W','W'],
  ['W', 'E', 'E', 'E', 'E', 'W', 'E', 'W', 'E', 'E', 'E', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'W', 'W', 'E', 'E', 'E','E','E','E','E','E','E','W','W'],
  ['W', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'W', 'E', 'E', 'T', 'W', 'E', 'W', 'W', 'W', 'E', 'E', 'E', 'E', 'W', 'E', 'E', 'W','W','E','E','E','W','E','W','W'],
  ['W', 'W', 'W', 'E', 'W', 'W', 'W', 'E', 'W', 'W', 'W', 'W', 'W', 'E', 'W', 'E', 'E', 'E', 'W', 'W', 'W', 'W', 'E', 'E', 'W','W','E','E','W','W','E','W','W'],
  ['W', 'E', 'W', 'E', 'W', 'E', 'E', 'E', 'E', 'W', 'W', 'E', 'E', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'W', 'E', 'E', 'E', 'W','W','W','E','E','W','E','W','W'],
  ['W', 'E', 'E', 'E', 'W', 'E', 'W', 'W', 'E', 'E', 'E', 'E', 'W', 'E', 'E', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'W','W','W','E','E','E','E','E','W'],
  ['W', 'E', 'W', 'E', 'E', 'E', 'W', 'E', 'E', 'E', 'W', 'E', 'W', 'E', 'E', 'E', 'W', 'E', 'W', 'W', 'W', 'E', 'E', 'E', 'W','W','W','W','E','M','W','E','W'],
  ['W', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'W', 'E', 'W', 'E', 'W', 'E', 'E', 'E', 'W', 'W', 'E', 'E', 'W','W','W','W','E','E','E','E','W'],
  ['W', 'W', 'E', 'E', 'W', 'W', 'W', 'W', 'W', 'E', 'W', 'E', 'W', 'E', 'W', 'E', 'W', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'W','H','E','W','W','E','T','E','W'],
  ['W', 'W', 'E', 'E', 'W', 'E', 'E', 'E', 'E', 'W', 'E', 'W', 'W', 'E', 'W', 'W', 'W', 'E', 'W', 'E', 'W', 'M', 'W', 'W', 'W','W','E','E','E','W','W','W','W'],
  ['W', 'E', 'E', 'E', 'W', 'E', 'W', 'E', 'E', 'E', 'W', 'W', 'E', 'E', 'W', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'T', 'W','W','W','W','E','W','W','W','W'],
  ['W', 'W', 'E', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'W', 'W', 'E', 'W', 'E', 'W', 'W', 'W', 'W', 'W', 'E', 'W','W','W','W','E','W','W','W','W'],
  ['W', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'M', 'W', 'W', 'W', 'W', 'W', 'E', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E','E','E','E','E','W','W','W','W'],
  ['W', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'E', 'E','W','W','W','W','W','W','W','W'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'T', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W','E' , 'E','E','W','W','W','W','W','W','W'],
  ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W','W','W','W','W','W','W','W','W'],
];

let dungeon = [...initialDungeon.map(row => [...row])];
let playerPos = { x: 1, y: 7 };
let health = 100;
let score = 0;
function resetGame() {
  dungeon = [...initialDungeon.map(row => [...row])]; // Reset the dungeon
  playerPos = { x: 1, y: 7 };
  health = 100;
  score = 0;
  updateHealthBar();
  updateScoreBar(score);
  drawBoard();
}
function updateScoreBar(newScore) {
  let scoreBar = document.getElementById('scoreBar');
  scoreBar.value = newScore;
  scoreBar.max = 400; // Adjust this value as needed
  let scoreDisplay = document.getElementById('scoreDisplay');
  scoreDisplay.innerText = `Score: ${newScore}`;
}

function updateHealthBar() {
  const healthBarInner = document.getElementById('health-inner'); // Change the ID
  healthBarInner.style.width = health + '%';
}

function drawBoard() {
  const gameBoard = document.getElementById('game-board');
  gameBoard.innerHTML = ''; // Clear the previous state
  for (let y = 0; y < dungeon.length; y++) {
    for (let x = 0; x < dungeon[y].length; x++) {
      const tile = document.createElement('div');
      tile.className = 'tile ' + dungeon[y][x];
      gameBoard.appendChild(tile);
    }
  }
}

function movePlayer(dx, dy) {
  const newX = playerPos.x + dx;
  const newY = playerPos.y + dy;

  // Check boundaries and walls
  if (newX < 0 || newY < 0 || newY >= dungeon[0].length || newX >= dungeon.length || dungeon[newX][newY] === 'W') {
    return;
  }

  dungeon[playerPos.x][playerPos.y] = 'E'; // Erase player

  // Check for monster
  if (dungeon[newX][newY] === 'M') {
    health -= 25;
    updateHealthBar();
    if (health <= 0) {
      alert('Game Over');
      resetGame();
      return;
    }
  }
  // Check for health boost
  if (dungeon[newX][newY] === 'H') {
    health = Math.min(100, health + 15);
  }
  // Check for treasure
  if (dungeon[newX][newY] === 'T') {
    score += 100;
    dungeon[newX][newY] = 'E'; // Remove the treasure
    updateScoreBar(score);
  }

  playerPos.x = newX;
  playerPos.y = newY;
  dungeon[playerPos.x][playerPos.y] = 'B'; // Draw player

  // Move the monsters after each player move
  moveMonsters();

  // Check for win condition
  if (score >= 400) {
    alert('Congratulations, you collected all the treasures!');
    resetGame();
    return;
  }

  drawBoard(); // Redraw the board after all updates
  

 
}
function updateScoreBar(newScore) {
 
  let scoreBar = document.getElementById('scoreBar');
  scoreBar.value = newScore;

  // You can set a maximum value to represent the score needed to win or complete a level
  scoreBar.max = 400; // Adjust this value as needed

  // Optionally, you could display the score as a text somewhere on the page
  let scoreDisplay = document.getElementById('scoreDisplay');
  scoreDisplay.innerText = `Score: ${newScore}`;
}

function moveMonsters() {
  let newPositions = [];
  for (let x = 0; x < dungeon.length; x++) {
    for (let y = 0; y < dungeon[x].length; y++) {
      if (dungeon[x][y] === 'M') {
        let dx = 0, dy = 0;
        if (x < playerPos.x) dx = 1;
        if (x > playerPos.x) dx = -1;
        if (y < playerPos.y) dy = 1;
        if (y > playerPos.y) dy = -1;

        const newX = x + dx;
        const newY = y + dy;

        if (newX >= 0 && newY >= 0 && newY < dungeon[0].length && newX < dungeon.length && dungeon[newX][newY] === 'E') {
          newPositions.push({ oldX: x, oldY: y, newX: newX, newY: newY });
        }
      }
    }
  }
  
  // Now update the dungeon with the new positions
  newPositions.forEach(pos => {
    dungeon[pos.oldX][pos.oldY] = 'E';
    dungeon[pos.newX][pos.newY] = 'M';
  });
}

document.addEventListener('keydown', function(e) {
  switch (e.key) {
    case 'ArrowLeft': return movePlayer(0, -1);
    case 'ArrowUp': return movePlayer(-1, 0);
    case 'ArrowRight': return movePlayer(0, 1);
    case 'ArrowDown': return movePlayer(1, 0);
  }
});
window.onload = function() {
  const playerName = localStorage.getItem('playerName') || 'Player';
  document.getElementById('player-name').innerText = `Our hero: ${playerName}`;
}
const resetButton = document.getElementById('restart-button');
resetButton.addEventListener('click', resetGame);

drawBoard(); // Call the function to draw the initial game board