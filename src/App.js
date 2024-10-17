import React, { useEffect, useState } from 'react';
import './App.css';
import GameView from './GameView';
import ThreeJsView from './ThreeJsView';
import InviteFriends from './InviteFriends';
import FSLIDView from './FSLIDView';

const tg = window.Telegram.WebApp;

function App() {
  const [user, setUser] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const [showThreeJs, setShowThreeJs] = useState(false);
  const [showInviteFriends, setShowInviteFriends] = useState(false);
  const [showFSLID, setShowFSLID] = useState(false);

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

  const launchThreeJs = () => {
    setShowThreeJs(true);
  };

  const launchInviteFriends = () => {
    setShowInviteFriends(true);
  };

  const handleBack = () => {
    setShowGame(false);
    setShowThreeJs(false);
    setShowInviteFriends(false);
    setShowFSLID(false);
  };

  const handleShowFSLID = () =>{
    setShowInviteFriends(false);
    setShowFSLID(true);
  };

  if (showThreeJs) {
    return <ThreeJsView onBack={handleBack} />;
  }

  if (showGame) {
    return <GameView onBack={handleBack} />;
  }

  if (showInviteFriends) {
    return <InviteFriends user={user} onBack={handleBack} onShowFSLID={handleShowFSLID} />;
  }

  if (showFSLID) {
    return <FSLIDView user={user} onBack={() => { setShowFSLID(false); setShowInviteFriends(true); }} />;
  }

  return (
    <div className="App">
      <h1>Test Telegram Mini App (React)</h1>
      <button onClick={showAlert}>Show Alert</button>
      <button onClick={getUserInfo}>Get User Info</button>
      <button onClick={launchGame}>Play Game</button>
      <button onClick={launchThreeJs}>Test Three.js</button>
      <button onClick={launchInviteFriends}>Invite Friends</button>
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
