import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { FiUsers } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
const SideBar = () => {
  const { pathname } = useLocation();
  const userInfo = {
    role: "writer",
  };

  return (
    <div className="w-64 h-screen fixed left-0 top-0 bg-white text-black">
      {/* Logo */}
      <div className="h-20 flex justify-center items-center">
        <Link to="/">
          <img
            src="https://khulnanews.live/uploads/logo/logo_61652febf2ead.png"
            alt="Logo"
            className="h-12"
          />
        </Link>
      </div>
      {/* Navigation Links */}
      <ul className="px-3 flex flex-col gap-y-1 font-medium">
        {userInfo.role === "admin" ? (
          <>
            <li>
              <Link
                to="/dashboard/admin"
                className={`px-3 py-3 w-full rounded-sm flex gap-y-2 justify-start items-center hover:bg-indigo-500 hover:text-white ${
                  pathname === "/dashboard/admin"
                    ? "bg-indigo-500 text-white"
                    : "bg-red-50 text-[#4040f6]"
                }`}
              >
                <span className="text-xl">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/writter/add"
                className={`px-3 py-3 w-full rounded-sm flex gap-y-2 justify-start items-center hover:bg-indigo-500 hover:text-white ${
                  pathname === "/dashboard/writter/add"
                    ? "bg-indigo-500 text-white"
                    : "bg-red-50 text-[#404040f6]"
                }`}
              >
                <span className="text-xl">
                  <AiOutlinePlus />
                </span>
                <span>Add Writter</span>
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/writter"
                className={`px-3 py-3 w-full rounded-sm flex gap-y-2 justify-start items-center hover:bg-indigo-500 hover:text-white ${
                  pathname === "/dashboard/writter"
                    ? "bg-indigo-500 text-white"
                    : "bg-red-50 text-[#404040f6]"
                }`}
              >
                <span className="text-xl">
                  <FiUsers />
                </span>
                <span>Writters</span>
              </Link>
            </li>
          </>
        ) : (
          <>
          <li>
              <Link
                to="/dashboard/writer"
                className={`px-3 py-3 w-full rounded-sm flex gap-y-2 justify-start items-center hover:bg-indigo-500 hover:text-white ${
                  pathname === "/dashboard/writer"
                    ? "bg-indigo-500 text-white"
                    : "bg-red-50 text-[#4040f6]"
                }`}
              >
                <span className="text-xl">
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>


            <li>
              <Link
                to="/dashboard/create/news"
                className={`px-3 py-3 w-full rounded-sm flex gap-y-2 justify-start items-center hover:bg-indigo-500 hover:text-white ${
                  pathname === "/dashboard/create/news"
                    ? "bg-indigo-500 text-white"
                    : "bg-red-50 text-[#404040f6]"
                }`}
              >
                <span className="text-xl">
                  <FaPlus />
                </span>
                <span>Add News</span>
              </Link>
            </li>
          </>
        )}

        <li>
          <Link
            to="/dashboard/news"
            className={`px-3 py-3 w-full rounded-sm flex gap-y-2 justify-start items-center hover:bg-indigo-500 hover:text-white ${
              pathname === "/dashboard/news"
                ? "bg-indigo-500 text-white"
                : "bg-red-50 text-[#404040f6]"
            }`}
          >
            <span className="text-xl">
              <BiNews />
            </span>
            <span>News</span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/profile"
            className={`px-3 py-3 w-full rounded-sm flex gap-y-2 justify-start items-center hover:bg-indigo-500 hover:text-white ${
              pathname === "/dashboard/profile"
                ? "bg-indigo-500 text-white"
                : "bg-red-50 text-[#404040f6]"
            }`}
          >
            <span className="text-xl">
              <ImProfile />
            </span>
            <span>Profile</span>
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard/logout"
            className={`px-3 py-3 w-full rounded-sm flex gap-y-2 justify-start items-center hover:bg-indigo-500 hover:text-white ${
              pathname === "/dashboard/logout"
                ? "bg-indigo-500 text-white"
                : "bg-red-50 text-[#404040f6]"
            }`}
          >
            <span className="text-xl">
              <AiFillDashboard />
            </span>
            <span>Logout</span>
          </Link>
        </li>
        {/* Add more navigation links here if needed */}
      </ul>
    </div>
  );
};

export default SideBar;
