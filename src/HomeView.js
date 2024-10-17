import React from 'react';

const HomeView = ({ user, onOpenGameView, onOpenThreeJsView }) => {
  return (
    <div className="home-view">
      <h2>Welcome, {user ? user.first_name : 'Guest'}!</h2>
      <div className="stats">
        <span className="lightning">⚡3</span>
        <span className="ticket">🎟️3</span>
        <span className="coins">🪙267</span>
      </div>
      <button onClick={onOpenGameView} className="open-game-button">
        Open Unity WebGL View
      </button>
      <button onClick={onOpenThreeJsView} className="open-game-button">
        Open Three.js View
      </button>
      {/* Add more content for the home view */}
    </div>
  );
};

export default HomeView;
