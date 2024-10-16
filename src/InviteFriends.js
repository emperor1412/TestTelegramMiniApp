import React, { useState } from 'react';
import './InviteFriends.css';

const InviteFriends = ({ user }) => {
  const [friends, setFriends] = useState([
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

  return (
    <div className="invite-friends">
      <div className="header">
        <div className="tasks">Tasks</div>
        <div className="invite-frens">INVITE FRENS</div>
      </div>
      <div className="user-info">
        <div className="username">{user ? user.username : 'Beka'}</div>
        <div className="stats">
          <span className="lightning">⚡3</span>
          <span className="ticket">🎟️3</span>
          <span className="coins">🪙267</span>
        </div>
        <div className="fsl-id">FSL ID</div>
      </div>
      <div className="invite-message">
        Invite your frens and earn tickets!
        For every fren who joins FSL Game Hub
        will give you 1 ticket!
      </div>
      <div className="friends-list">
        {friends.map((friend, index) => (
          <div key={index} className="friend-item">
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
        ))}
      </div>
    </div>
  );
};

export default InviteFriends;
