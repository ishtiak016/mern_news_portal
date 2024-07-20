// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./dashboard/layout/mainLayout";
import Adminindex from "./dashboard/pages/adminindex";
import Login from "./dashboard/pages/Login";
import ProtectDashboard from "./middleware/ProtectDashboard";
import ProtectRole from "./middleware/ProtectRole";
import Unable from "./dashboard/pages/unable";
import AddWritter from "./dashboard/pages/AddWritter";
import Writters from "./dashboard/pages/Writters";
import News from "./dashboard/pages/News";
import Profile from "./dashboard/pages/Profile";
import WritterIndex from "./dashboard/pages/writterIndex";
import CreateNews from "./dashboard/pages/CreateNews";
function App() {
  const userInfo = {
    role: "writer",
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectDashboard />}>
          <Route path="" element={<MainLayout />}>
            <Route
              path=""
              element={
                userInfo.role === "admin" ? (
                  <Navigate to="/dashboard/admin" />
                ) : (
                  <Navigate to="/dashboard/writer" />
                )
              }
            />
            <Route path="profile" element={<Profile />} />
            <Route path="news" element={<News />} />
            <Route path="unable-access" element={<Unable />} />
            <Route path="" element={<ProtectRole role="admin" />}>
              <Route path="admin" element={<Adminindex />} />
              <Route path="writter/add" element={<AddWritter />} />
              <Route path="writter" element={<Writters />} />
            </Route>

            <Route path="" element={<ProtectRole role="writer" />}>
              <Route path="writer" element={<WritterIndex />} />
              <Route path="create/news" element={<CreateNews />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
