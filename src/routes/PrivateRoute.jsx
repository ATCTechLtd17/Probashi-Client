/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = true;
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
