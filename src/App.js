import React, { useEffect, useState } from 'react';
import './App.css';
import GameView from './GameView';

const tg = window.Telegram.WebApp;

function App() {
  const [user, setUser] = useState(null);
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const showAlert = () => {
    tg.showAlert('Hello from Telegram Mini App!');
  };

  const getUserInfo = () => {
    const user = tg.initDataUnsafe.user;
    setUser(user);
  };

  const launchGame = () => {
    setShowGame(true);
  };

  if (showGame) {
    return <GameView />;
  }

  return (
    <div className="App">
      <h1>Test Telegram Mini App (React)</h1>
      <button onClick={showAlert}>Show Alert</button>
      <button onClick={getUserInfo}>Get User Info</button>
      <button onClick={launchGame}>Play Game</button>
      {user && (
        <div>
          <h2>User Info:</h2>
          <p>User ID: {user.id}</p>
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name || 'N/A'}</p>
          <p>Username: {user.username || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

export default App;