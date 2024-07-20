// MainLayout.js
import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-100">
      <SideBar />
      <div className="ml-[260px] w-[calc(100vw-285px)] min-h-[100vh]">
        <Header />
        <div className="p-4">
          <div className="pt-[85px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
