import React, { useState } from 'react';
import SideBar from '../component/sidebar';
import RightPanel from '../component/righrPanel';
import Navbar from '../component/Navbar';

function ParentComponent() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleComponentSelect = (componentName) => {
    setSelectedItem(componentName);
  };

  return (
    <div>
      <Navbar/>
      <div className="flex">
        <SideBar handleComponentSelect={handleComponentSelect} />
        <div className="flex-1">
          <RightPanel selectedItem={selectedItem} />
        </div>
        
      </div>
    </div>
      
    
  );
}

export default ParentComponent;
