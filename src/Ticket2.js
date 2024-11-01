import React from 'react';
import './FSLIDView.css';  // We'll reuse some styles from FSLIDView
import './Ticket2.css';    // Add new styles

const Ticket2 = ({ onBack }) => {
  // Mock data for scratch items (27 items for 9 rows)
  const scratchItems = Array(27).fill({
    type: 'star',
    revealed: false
  });

  const handleBack = () => {
    onBack();
  };

  return (
    <div className="tab-content">
      <div className="content-wrapper ticket-wrapper">
        {/* Header Section */}
        <div className="ticket-header">
          <button 
            onClick={handleBack}
            className="back-button"
          >
            ←
          </button>
          <div className="header-title">
            <span className="header-text">🎟️</span>
            <span className="header-text">TICKETS</span>
          </div>
        </div>

        {/* Ticket Count Section */}
        <div className="ticket-count-section">
          <div className="ticket-count-content">
            <span className="header-text">🎟️</span>
            <span className="header-text">YOU HAVE 3 TICKETS</span>
          </div>
        </div>

        {/* Scratch Section */}
        <div className="scratch-section">
          <div className="scratch-title">
            SCRATCH
          </div>
          <div className="scratch-grid">
            {scratchItems.map((item, index) => (
              <div 
                key={index}
                className="scratch-item"
              >
                {index < 3 ? '🎟️' : '⭐'}
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="info-section">
          Earn extra tickets by inviting frens or by completing daily tasks. The more you engage, the more rewards you'll unlock.
        </div>
      </div>
    </div>
  );
};

export default Ticket2;
