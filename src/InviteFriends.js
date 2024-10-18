import TestSubView from './TestSubView';
import React, { useState, useRef, useEffect } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import './InviteFriends.css';
import './App.css';
import data from './FakeData.js';

const InviteFriends = ({ user, onBack, onShowFSLID }) => {
  const [friends, setFriends] = useState(data);

  const [showTestSubView, setShowTestSubView] = useState(false);
  const containerRef = useRef(null);

  const toggleFriendSelection = (index) => {
    const updatedFriends = [...friends];
    updatedFriends[index].selected = !updatedFriends[index].selected;
    setFriends(updatedFriends);
  };

  const handleShowTestSubView = () => {
    setShowTestSubView(true);
  };

  const handleBackFromTestSubView = () => {
    setShowTestSubView(false);
  };

  useEffect(() => {
    const updateListHeight = () => {
      
    };

    updateListHeight();
    window.addEventListener('resize', updateListHeight);

    return () => window.removeEventListener('resize', updateListHeight);
  }, []);

  if (showTestSubView) {
    return <TestSubView onBack={handleBackFromTestSubView} />;
  }

  const Row = ({ index, style }) => {
    const friend = friends[index];
    return (
      <div style={style} className="friend-item">
        <img src={friend.image} alt={friend.name} className="friend-image" />
        <div className="friend-info">
          <div className="friend-name">{friend.name}</div>
          <div className="friend-phone">{friend.phone}</div>
        </div>
        <div 
          className={`invite-checkbox ${friend.selected ? 'selected' : ''}`}
          onClick={() => toggleFriendSelection(index)}
        ></div>
      </div>
    );
  };

  return (
    // <div className="tab-content">
    //   <div className="content-wrapper">
    <div className="invite-friends-view">
      <div className="invite-friends-content">
        {/* <div className="invite-friends-container" ref={containerRef}> */}
        {showTestSubView ? (
          <TestSubView onBack={handleBackFromTestSubView} />
        ) : (
          <>
            <div className="invite-friends-header">
              <div className="invite-frens">INVITE FRENS</div>
            </div>
            <div className="user-info">
              <div className="username">{user ? user.username : 'Kaka'}</div>
              <div className="stats">
                <span className="lightning">⚡3</span>
                <span className="ticket">🎟️3</span>
                <span className="coins">🪙267</span>
              </div>
              <button onClick={handleShowTestSubView} className="fsl-id-button">Open Sub View</button>
            </div>
            <div className="invite-message">
              Invite your frens and earn tickets!
              For every fren who joins FSL Game Hub
              will give you 1 ticket!
            </div>
            <div className="friends-list-container">
              <AutoSizer>
                {({ height, width }) => (
                  <List
                    height={height}
                    width={width}
                    rowCount={friends.length}
                    rowHeight={60}
                    rowRenderer={Row}
                  />
                )}
              </AutoSizer>
            </div>
          </>
        )}
      {/* </div> */}
      </div>
    </div>
  );
};

export default InviteFriends;
