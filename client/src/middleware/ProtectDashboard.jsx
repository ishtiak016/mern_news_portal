import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import storeContext from "../context/storeContext";

function ProtectDashboard() {
  const { store } = useContext(storeContext);
  console.log(store);
  const userInfo = {
    name: "farid",
    pass: "1234",
  };
  if (store.userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} />;
  }
  return <div>ProtectDashboard</div>;
}

export default ProtectDashboard;
