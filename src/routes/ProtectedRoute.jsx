import React from "react";
import { Children } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import LoadingAnimation from "../components/LoadingAnimation";

function ProtectedRoute({ children }) {
  const { accessToken } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.ui);

  if (isLoading) {
    console.log("loading");
    
    return <LoadingAnimation />;
  }

if (!accessToken && !isLoading) {
    return <Navigate to="/auth/login" />;
  }

  return children;
}

export default ProtectedRoute;
