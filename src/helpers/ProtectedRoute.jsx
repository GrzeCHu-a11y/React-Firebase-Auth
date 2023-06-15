import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
