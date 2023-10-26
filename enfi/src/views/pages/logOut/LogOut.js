import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Set loading to true initially

  const handleLogout = async () => {
    try {
      // Clear the local storage
      // Remove the specific keys from localStorage
      localStorage.removeItem('FK_MemId');
      localStorage.removeItem('LoginIdExpiration');
      localStorage.removeItem('FirstName');
      localStorage.removeItem('LoginId');

      // Send a POST request to your server's logout API
      const response = await fetch('http://localhost:5000/user-api/log-out', {
        method: 'POST',
        credentials: 'include', // Send cookies if using sessions
      });

      if (response.status === 200) {
        // Logout was successful
        console.log('Logout successful');
        // You can also redirect the user to the login page or perform other actions here
        // Redirect to the login page
        navigate('/');
      } else {
        // Handle errors
        const data = await response.json();
        console.error('Error logging out:', data.message);
      }
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setLoading(false);
    }
  };

  // Use the useEffect hook to automatically trigger handleLogout when the component mounts
  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <p>Logout was successful.</p>
      )}
    </div>
  );
};

export default LogOut;
