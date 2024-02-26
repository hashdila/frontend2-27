import React, { useState } from 'react';
import SideBar from './sidebar';

function ParentComponent() {
  const [selectedItem, setSelectedItem] = useState('');

  const handleComponentSelect = (componentName) => {
    setSelectedItem(componentName);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case 'Userdashboard':
        return <UserDashboard />;
      case 'Crview':
        return <CrView />;
      case 'Insert':
        return <Insert />;
      case 'userAccount':
        return <UserAccont />;
      case 'Log':
        return <Log />;
      default:
        return <div>Home Page</div>;
    }
  };

  return (
    <div className="flex">
      <SideBar handleComponentSelect={handleComponentSelect} />
      <div className="p-4 sm:ml-64">{renderComponent()}</div>
    </div>
  );
}

const UserDashboard = () => <div>User Dashboard</div>;
const CrView = () => <div>CR View</div>;
const Insert = () => <div>Create New CR</div>;
const UserAccont = () => <div>Users</div>;
const Log = () => <div>Log</div>;

export default ParentComponent;
