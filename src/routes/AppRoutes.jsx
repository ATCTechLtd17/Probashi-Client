import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Recruitment from '../pages/Recruitment';
import Government from '../pages/Government';
import Portals from '../pages/Portals';
import Cards from '../pages/Cards';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      
      {/* Protected Routes */}
      <Route
        path="/services/*"
        element={
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        }
      />
      <Route
        path="/recruitment/*"
        element={
          <PrivateRoute>
            <Recruitment />
          </PrivateRoute>
        }
      />
      <Route
        path="/government/*"
        element={
          <PrivateRoute>
            <Government />
          </PrivateRoute>
        }
      />
      <Route
        path="/portals/*"
        element={
          <PrivateRoute>
            <Portals />
          </PrivateRoute>
        }
      />
      <Route
        path="/cards/*"
        element={
          <PrivateRoute>
            <Cards />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;