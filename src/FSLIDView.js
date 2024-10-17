import React from 'react';
import './FSLIDView.css';

const FSLIDView = ({ user }) => {
  return (
    <div className="fsl-id-container">
      <div className="fsl-id-header">
        <div className="fsl-id-title">FSL ID</div>
      </div>
      <div className="user-info">
        <div className="username">{user ? user.username : 'Kaka'}</div>
        <div className="stats">
          <span className="lightning">⚡3</span>
          <span className="ticket">🎟️3</span>
          <span className="coins">🪙267</span>
        </div>
      </div>
      <div className="fsl-id-content">
        <div className="fsl-id-value">FSL-123456</div>
        <p className="fsl-id-description">
          Your unique FSL ID. Share this with friends to connect and play together!
        </p>
      </div>
    </div>
  );
};

export default FSLIDView;