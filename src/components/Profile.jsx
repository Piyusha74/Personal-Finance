import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user data

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        const response = await axios.get('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${token}`, // Add the Authorization header
          },
        });
        console.log(response.data); // Log the response data
        setUser(response.data); // Save the user data in state
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
  
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem('token'); // Get the token from localStorage
      const response = await axios.get('/api/users/profile', {
        headers: {
          'Authorization': `Bearer ${token}`, // Add the Authorization header
        },
      });
      setUser(response.data); // Save the user data in state
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;