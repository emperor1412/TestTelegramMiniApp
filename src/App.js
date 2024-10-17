import React, { useEffect, useState } from 'react';
import './App.css';
import GameView from './GameView';
import ThreeJsView from './ThreeJsView';
import InviteFriends from './InviteFriends';
import FSLIDView from './FSLIDView';
import HomeView from './HomeView';
import TasksView from './TasksView';
import MarketView from './MarketView';

const tg = window.Telegram.WebApp;

function App() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    tg.ready();
    tg.expand();
    
    // Get user info when the app loads
    const user = tg.initDataUnsafe.user;
    setUser(user);
  }, []);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView user={user} />;
      case 'tasks':
        return <TasksView user={user} />;
      case 'frens':
        return <InviteFriends user={user} />;
      case 'market':
        return <MarketView user={user} />;
      case 'fslid':
        return <FSLIDView user={user} />;
      default:
        return <HomeView user={user} />;
    }
  };

  return (
    <div className="App">
      <div className="content">
        {renderActiveView()}
      </div>
      <div className="tab-bar">
        <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>Home</button>
        <button onClick={() => setActiveTab('tasks')} className={activeTab === 'tasks' ? 'active' : ''}>Tasks</button>
        <button onClick={() => setActiveTab('frens')} className={activeTab === 'frens' ? 'active' : ''}>Frens</button>
        <button onClick={() => setActiveTab('market')} className={activeTab === 'market' ? 'active' : ''}>Market</button>
        <button onClick={() => setActiveTab('fslid')} className={activeTab === 'fslid' ? 'active' : ''}>FSL ID</button>
      </div>
    </div>
  );
}

export default App;
