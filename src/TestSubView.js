import React from 'react';

const TestSubView = ({ onBack }) => {
  return (
    <div className="test-subview">
      <div className="subview-header">
        <button onClick={onBack} className="back-button">Back</button>
        <h2>Test Subview</h2>
      </div>
      <div className="subview-content">
        <p>This is a test subview within the InviteFriends container.</p>
      </div>
    </div>
  );
};

export default TestSubView;
