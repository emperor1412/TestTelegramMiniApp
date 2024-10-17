import React, { useState, useRef, useEffect } from 'react';
import { List, AutoSizer } from 'react-virtualized';
import './InviteFriends.css';

const InviteFriends = ({ user, onBack, onShowFSLID }) => {
  const [friends, setFriends] = useState([
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
    { name: 'Mom', phone: '+44 888 654 2342', image: 'https://example.com/mom.jpg', selected: false },
    { name: 'Jerry', phone: '+44 888 654 2342', image: 'https://example.com/jerry.jpg', selected: false },
    { name: 'Shiti', phone: '+44 888 654 2342', image: 'https://example.com/shiti.jpg', selected: false },
    { name: 'Yawn', phone: '+44 888 654 2342', image: 'https://example.com/yawn.jpg', selected: false },
  ]);

  const toggleFriendSelection = (index) => {
    const updatedFriends = [...friends];
    updatedFriends[index].selected = !updatedFriends[index].selected;
    setFriends(updatedFriends);
  };

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

  const [listHeight, setListHeight] = useState(200);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateListHeight = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newHeight = window.innerHeight - containerRect.top - 40; // Increased bottom margin to 40px
        setListHeight(Math.max(newHeight, 200)); // Ensure a minimum height of 200px
      }
    };

    updateListHeight();
    window.addEventListener('resize', updateListHeight);

    return () => window.removeEventListener('resize', updateListHeight);
  }, []);

  return (
    <div className="invite-friends-container" ref={containerRef}>
      <div className="invite-friends-header">
        <button onClick={onBack} className="back-button">Back</button>
        <div className="invite-frens">INVITE FRENS</div>
      </div>
      <div className="user-info">
        <div className="username">{user ? user.username : 'Beka'}</div>
        <div className="stats">
          <span className="lightning">⚡3</span>
          <span className="ticket">🎟️3</span>
          <span className="coins">🪙267</span>
        </div>
        <button onClick={onShowFSLID} className="fsl-id-button">FSL ID</button>
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
              rowRenderer={({ index, style }) => {
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
              }}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default InviteFriends;
