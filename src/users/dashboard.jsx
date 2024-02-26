import React, { useState } from 'react';
import SideBar from '../component/sidebar';
import RightPanel from '../component/righrPanel';

function ParentComponent() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleComponentSelect = (componentName) => {
    setSelectedItem(componentName);
  };

  return (
    <div className="flex">
      <SideBar handleComponentSelect={handleComponentSelect} />
      <RightPanel selectedItem={selectedItem} />
    </div>
  );
}

export default ParentComponent;
