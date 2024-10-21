import React, { useEffect, useState } from 'react';
import './App.css';
import GameView from './GameView';
import ThreeJsView from './ThreeJsView';
import InviteFriends from './InviteFriends';
import FSLIDView from './FSLIDView';
import HomeView from './HomeView';
import TasksView from './TasksView';
import MarketView from './MarketView';
import eruda from 'eruda'

// import WebApp from '@twa-dev/sdk'
import { init, initData, miniApp, viewport, swipeBehavior, closingBehavior } from '@telegram-apps/sdk';

eruda.init()

// const tg = window.Telegram.WebApp;

function App() {

  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('home');
  // const swipeBehavior = useSwipeBehavior();

  useEffect(() => {
    console.log('App useEffect called');
    // WebApp.ready();
    // WebApp.expand();
    miniApp.ready();
    
    init();
    miniApp.mount();
    viewport.expand();

    closingBehavior.mount();
    closingBehavior.enableConfirmation();
    // swipeBehavior.mount();
    // swipeBehavior.disableVertical();

    // document.addEventListener('touchstart', function(event) {
    //     if (event.touches.length > 1) {
    //         event.preventDefault();
    //     }
    // }, { passive: false });
    
    // document.addEventListener('touchmove', function(event) {
    //     if (event.scale !== 1) {
    //         event.preventDefault();
    //     }
    // }, { passive: false });

    // tg.ready();
    // tg.expand();   
    
    // Get user info when the app loads
    // const user = tg.initDataUnsafe.user;
    // const temp = WebApp.initDataUnsafe.user;
    initData.restore();
    const temp = initData.user();
    console.log('User:', temp);

    setUser(temp);
  }, []);

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView 
          user={user} 
          onOpenGameView={() => setActiveTab('game')} 
          onOpenThreeJsView={() => setActiveTab('threejs')} 
        />;
      case 'tasks':
        // return <TasksView user={user} />;
        return <ThreeJsView onBack={() => setActiveTab('home')} />
      case 'frens':
        return <InviteFriends user={user} />;
      case 'market':
        return <MarketView user={user} />;
      case 'fslid':
        return <FSLIDView user={user} />;
      case 'game':
        return (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1000 }}>
            <GameView onBack={() => setActiveTab('home')} />
          </div>
        );
      case 'threejs':
        return (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 1000 }}>
            <ThreeJsView onBack={() => setActiveTab('home')} />
          </div>
        );
      default:
        return <HomeView 
          user={user} 
          onOpenGameView={() => setActiveTab('game')} 
          onOpenThreeJsView={() => setActiveTab('threejs')} 
        />;
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
