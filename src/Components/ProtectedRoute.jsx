import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component, Permission }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "/signin";
  }
  if (!Permission.includes(String(user.role))) {
    return <Navigate to="/signin" replace />;
  } else {
    return <Component />;
  }
};

export default ProtectedRoute;
