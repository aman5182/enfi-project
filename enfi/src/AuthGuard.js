// AuthGuard.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function AuthGuard({ children }) {
  const navigate = useNavigate();

  // Check if the user is authenticated based on the presence of a token in localStorage
  const isAuthenticated = !!localStorage.getItem('FK_MemId'); // Change 'token' to your actual token key

  useEffect(() => {
    if (!isAuthenticated) {
      // If the user is not authenticated, redirect to the login page
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
}

AuthGuard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthGuard;
