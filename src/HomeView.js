import React from 'react';

const HomeView = ({ user }) => {
  return (
    <div className="home-view">
      <h2>Welcome, {user ? user.first_name : 'Guest'}!</h2>
      <div className="stats">
        <span className="lightning">⚡3</span>
        <span className="ticket">🎟️3</span>
        <span className="coins">🪙267</span>
      </div>
      {/* Add more content for the home view */}
    </div>
  );
};

export default HomeView;