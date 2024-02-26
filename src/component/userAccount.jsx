

// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from 'reactjs-popup';
import StatusPopup from '../popup/statuspopup';
import api from '../api';

// Create your UserAccount component
function UserAccount() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Function to fetch users from the API
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${api.defaults.baseURL}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    // Call the fetchUsers function when the component mounts
    fetchUsers();
  }, []);

  // Function to handle opening the StatusPopup
  const openStatusPopup = (user) => {
    setSelectedUser(user);
  };

  // Function to update users after changing status
  const updateUser = async () => {
    try {
      const response = await axios.get(`${api.defaults.baseURL}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error updating users:', error);
    }
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">User Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">User Type</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
              <th className="px-4 py-2">View</th>
              <th className="px-4 py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId} className="border-b">
                <td className="px-4 py-2">{user.userId}</td>
                <td className="px-4 py-2">{user.firstname}</td>
                <td className="px-4 py-2">{user.lastname}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.userType}</td>
                <td className="px-4 py-2">{user.status}</td>
                <td>
                  <button onClick={() => openStatusPopup(user)} className="btn">Change Status</button>
                </td>
                <td>
                  <button onClick={() => handleView(user)} className="btn">View</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(user)} className="btn">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedUser && (
        <StatusPopup close={() => setSelectedUser(null)} user={selectedUser} updateUser={updateUser} />
      )}
    </div>
  );
}

export default UserAccount;