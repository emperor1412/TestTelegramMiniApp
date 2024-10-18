import React from 'react';
import './App.css';

const TestSubView = ({ onBack }) => {
  return (
    <div className='tab-content'>
      <div className="content-wrapper">
        <div className="subview-header">
          <button onClick={onBack} className="back-button">Back</button>
          <h2>Test Subview</h2>
        </div>
        <div className="subview-content">
          <p>This is a test subview within the InviteFriends container.</p>
        </div>
      </div>
    </div>
  );
};

export default TestSubView;
