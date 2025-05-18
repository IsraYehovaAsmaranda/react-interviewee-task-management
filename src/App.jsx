import { Outlet } from "react-router";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "./features/auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(refreshToken());
    }
  }, [dispatch]);
  return <Outlet />;
}

export default App;
