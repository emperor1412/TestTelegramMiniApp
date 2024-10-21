import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import './MarketView.css';

const MarketView = ({ user }) => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const gameRef = useRef({
    snake: [{x: 10, y: 10}],
    food: {x: 15, y: 15},
    dx: 1,
    dy: 0,
    newDirection: null,
    moveCounter: 0,
    moveInterval: 6  // Snake moves every 4 frames
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Game variables
    const gridSize = 10;
    const tileCount = canvas.width / gridSize;
    
    function drawSnakePart(snakePart) {
      ctx.fillStyle = 'lightgreen';
      ctx.fillRect(snakePart.x * gridSize, snakePart.y * gridSize, gridSize - 1, gridSize - 1);
    }
    
    function drawSnake() {
      gameRef.current.snake.forEach(drawSnakePart);
    }
    
    function drawFood() {
      ctx.fillStyle = 'red';
      ctx.fillRect(gameRef.current.food.x * gridSize, gameRef.current.food.y * gridSize, gridSize - 1, gridSize - 1);
    }
    
    function moveSnake() {
      const game = gameRef.current;
      game.moveCounter++;

      if (game.moveCounter < game.moveInterval) {
        return; // Don't move the snake yet
      }

      game.moveCounter = 0; // Reset the counter

      if (game.newDirection) {
        if ((game.newDirection.dx !== 0 && game.dy !== 0) || (game.newDirection.dy !== 0 && game.dx !== 0)) {
          game.dx = game.newDirection.dx;
          game.dy = game.newDirection.dy;
        }
        game.newDirection = null;
      }

      let headX = game.snake[0].x + game.dx;
      let headY = game.snake[0].y + game.dy;

      // Wrap around logic
      if (headX < 0) headX = tileCount - 1;
      if (headX >= tileCount) headX = 0;
      if (headY < 0) headY = tileCount - 1;
      if (headY >= tileCount) headY = 0;

      const head = {x: headX, y: headY};
      game.snake.unshift(head);

      if (head.x === game.food.x && head.y === game.food.y) {
        setScore(prevScore => prevScore + 10);
        generateFood();
      } else {
        game.snake.pop();
      }
    }
    
    function generateFood() {
      gameRef.current.food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
    }
    
    function handleKeyPress(event) {
      const key = event.key;
      const game = gameRef.current;

      switch (key) {
        case 'W':
        case 'w':
        case 'ArrowUp':
          if (game.dy === 0) game.newDirection = { dx: 0, dy: -1 };
          break;
        case 'S':
        case 's':
        case 'ArrowDown':
          if (game.dy === 0) game.newDirection = { dx: 0, dy: 1 };
          break;
        case 'A':
        case 'a':
        case 'ArrowLeft':
          if (game.dx === 0) game.newDirection = { dx: -1, dy: 0 };
          break;
        case 'D':
        case 'd':
        case 'ArrowRight':
          if (game.dx === 0) game.newDirection = { dx: 1, dy: 0 };
          break;
      }
    }

    // Add event listener for keyboard controls
    window.addEventListener('keydown', handleKeyPress);

    function gameLoop() {
      const game = gameRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake();
      drawFood();
      moveSnake();
      
      // Check collision with self
      for (let i = 1; i < game.snake.length; i++) {
        if (game.snake[i].x === game.snake[0].x && game.snake[i].y === game.snake[0].y) {
          alert('Game Over! Score: ' + score);
          game.snake = [{x: 10, y: 10}];
          game.dx = 1;
          game.dy = 0;
          setScore(0);
          break;
        }
      }
      
      setTimeout(gameLoop, 50); // Keep this timing consistent
    }
    
    gameLoop();

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      // Any cleanup if needed
    };
  }, []);

  const handleDirection = (dx, dy) => {
    const game = gameRef.current;
    if ((dx !== 0 && game.dy !== 0) || (dy !== 0 && game.dx !== 0)) {
      game.newDirection = { dx, dy };
    }
  };

  return (
    <div className="tab-content">
      <div className="content-wrapper">
        <h2>Market</h2>
        <canvas ref={canvasRef} width="200" height="200" style={{border: '1px solid black'}}></canvas>
        {/* <p>Use arrow keys or buttons to control the snake</p> */}
        <p>Score: {score}</p>
        <div className="control-buttons">
          <button onClick={() => handleDirection(0, -1)}>Up</button>
          <div className="horizontal-buttons">
            <button onClick={() => handleDirection(-1, 0)}>Left</button>
            <button onClick={() => handleDirection(1, 0)}>Right</button>
          </div>
          <button onClick={() => handleDirection(0, 1)}>Down</button>
        </div>
      </div>
    </div>
  );
};

export default MarketView;
