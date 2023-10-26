// src/components/services/registerService.js

const BASE_URL = 'http://localhost:5000'; // Replace with your actual API URL

async function registerUser(userData) {
    try {
      const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      return response.json();
    } catch (error) {
      throw new Error('Registration failed');
    }
  }

export default {
    registerUser,
  };