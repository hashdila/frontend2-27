import React, { useState, useEffect } from 'react';
import api from '../api';


function Profile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data using access token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      const fetchData = async () => {
        try {
          const response = await api.get('users/profile', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserProfile(response.data);
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {userProfile ? (
        <div>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Age: {userProfile.age}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
