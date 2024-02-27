import React from 'react';
import UserAccount from './userAccount';
import Crview from './viewCr'
import CreateCr from './createCr'
import AddUser from './addUser';


function RightPanel({ selectedItem }) {

    
  const renderContent = () => {
    switch (selectedItem) {
      case 'dashboard':
        return <DashboardContent />;
      case 'Crview':
        return <Crview />;
      case 'CreateCr':
        return <CreateCr />;
      case 'userAccont':
        return <UserAccount />;
        case 'addUserAccont':
        return <AddUser />;
      case 'Log':
        return <LogContent />;
      case 'Log Out':
        return <LogOutContent />;
      //   default:
      //     return <DefaultContent />;
    }
  };

  return <div className="flex-1 bg-gray-200">{renderContent()}</div>;
}



const DashboardContent = () => <h2>Dashboard Content</h2>;
const CrViewContent = () => <h2>CR View Content</h2>;
const InsertContent = () => <h2>Create New CR Content</h2>;
const LogContent = () => <h2>Log Content</h2>;
const LogOutContent = () => <h2>Log Out Content</h2>;
// const DefaultContent = () => <h2>Select an item to view content</h2>;

export default RightPanel;
