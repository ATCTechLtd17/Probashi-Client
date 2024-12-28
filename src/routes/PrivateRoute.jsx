import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // You can replace this with your auth logic

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;