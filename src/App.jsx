import { Outlet } from "react-router";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshToken } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return <Outlet />;
}

export default App;
