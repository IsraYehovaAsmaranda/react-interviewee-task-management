import LoadingAnimation from "@/components/LoadingAnimation";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

function RedirectIfAuthenticated() {
  const { accessToken } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.ui);

  if (isLoading) return <LoadingAnimation />;

  if (accessToken) return <Navigate to="/home" />;

  return <Outlet />;
}

export default RedirectIfAuthenticated;
