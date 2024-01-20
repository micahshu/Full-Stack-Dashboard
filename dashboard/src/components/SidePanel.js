import React, { useState } from 'react';
import './SidePanel.css';

const SidePanel = ({ isActive, togglePanel }) => {
  // Determine the class name based on the state
  const sidePanelClass = isActive ? 'panelOpen' : 'panelClosed';

  return (
    <div className={`${sidePanelClass} sidePanel`}>
      ooga booga
    </div>
  );
};

export default SidePanel;
