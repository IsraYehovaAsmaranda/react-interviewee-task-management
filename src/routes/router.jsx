import { createBrowserRouter, Navigate } from "react-router";
import App from "../App";
import ProtectedRoute from "./ProtectedRoute";
import HomeLayout from "../components/layout/HomeLayout";
import LandingPage from "../features/landing/LandingPage";
import LoginPage from "@/features/auth/login/LoginPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <div>404</div>,
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "auth",
        children: [
          {
            index: true,
            element: <Navigate to="/auth/login" />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
      {
        path: "home",
        element: (
          <ProtectedRoute>
            <HomeLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <div>Dashboard</div>,
          },
        ],
      },
    ],
  },
]);

export default router;
