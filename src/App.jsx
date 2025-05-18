import { Outlet } from "react-router";
import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshTokenAction } from "./features/auth/authSlice";
import { error } from "./redux/slices/uiSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [shouldRefresh, setShouldRefresh] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") && shouldRefresh) {
      dispatch(refreshTokenAction({
        token: localStorage.getItem("token")
      }));
    } else {
      dispatch(error("Please login first"));
    }
    setShouldRefresh(false);
  }, [dispatch]);
  return <Outlet />;
}

export default App;
