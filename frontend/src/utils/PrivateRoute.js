import React, { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log("user:", user);

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
