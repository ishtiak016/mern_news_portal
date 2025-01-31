import React from "react";
import { Outlet, Navigate } from "react-router-dom";
function ProtectRole({ role }) {
  const userInfo = {
    name: "farid",
    role: "writer",
  };
  if (userInfo.role === role) {
    return <Outlet />;
  } else {
    return <Navigate to={"/dashboard/unable-access"} />;
  }
}

export default ProtectRole;
