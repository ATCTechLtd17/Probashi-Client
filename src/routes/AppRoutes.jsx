import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Services from '../pages/Services';
import Recruitment from '../pages/Recruitment';
import Government from '../pages/Government';
import Portals from '../pages/Portals';
import Cards from '../pages/Cards';
import PrivateRoute from './PrivateRoute';
import EmigrationClearance from '../pages/EmigrationClearance';
import PDOBooking from '../pages/PDOBooking';
import BMETRegistration from '../pages/BMETRegistration';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
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
        element= {
          
            <Government />
            
        }
      />
      <Route
        path="/Emigration/*"
        element= {
          
            <EmigrationClearance />
            
        }
      />
      <Route
        path="/pdobooking/*"
        element= {
          
            <PDOBooking />
            
        }
      />
       <Route
        path="/bmetregistration/*"
        element= {
          
            <BMETRegistration />
            
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