import React from 'react';
import './App.css';
import ThreeJsView from './ThreeJsView';

const TasksView = ({ user, onBack }) => {
  return (
    <div className="tab-content" style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <ThreeJsView onBack={onBack} />
    </div>
  );
};

export default TasksView;
