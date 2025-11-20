import React from "react";
import moment from "moment";
import { Search, Bell, ChevronDown, Settings } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex bg-linear-to-br from-gray-900 to-black text-white min-h-screen">
      {/* Fixed Sidebar */}
      <div className="w-64 p-6 border-r border-gray-800 bg-linear-to-b from-blue-900 via-black to-black backdrop-blur-lg fixed h-screen ">
        <div className="flex items-center gap-3 mb-8">
          <img
            src="./images/logo.png"
            alt="logo"
            className="h-8 rounded-full"
          />{" "}
          <span className="text-xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Taskulate
          </span>
        </div>

        {/* Navigation items would go here */}
        <nav className="space-y-2">
          <div className="p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all duration-200 cursor-pointer">
            <Sidebar />

            {/* navigate */}
            {pathname === "/" && <Navigate to="/dashboard" />}
          </div>
          {/* Add more nav items */}
        </nav>
      </div>

      {/* Main Content with sidebar offset */}
      <div className="flex-1 relative overflow-hidden ml-64">
        {/* Animated Gradient Blurs */}
        <div className="absolute  left-0 h-[120px] w-[120px] bg-blue-500 blur-[75px]  opacity-75 animate-pulse"></div>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-[140px] w-[140px] bg-purple-500 rounded-full blur-[80px] opacity-65 animate-pulse delay-1000"></div>
        <div className="absolute top-8 right-40 h-[110px] w-[110px] bg-pink-500 rounded-full blur-[65px] opacity-55 animate-pulse delay-2000"></div>

        {/* Content Container */}
        <div className="  h-full flex flex-col fixed">
          {/* Header */}
          <header className="p-6 border-b border-gray-800/50 bg-transparent backdrop-blur-sm">
            <div className="flex items-center justify-between">
              {/* Date */}
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-gray-300">
                  {moment().format("dddd")}
                </span>
                <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                  {moment().format("MMM Do, YYYY")}
                </span>
              </div>

              {/* Search Bar */}
              <div className="flex-1 max-w-md mx-8">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search something..."
                    className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Profile Section */}
              <div className="flex items-center gap-4">
                {/* Notifications */}
                <button className="relative p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200">
                  <Bell className="h-5 w-5 text-gray-300" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Settings */}
                <button className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200">
                  <Settings className="h-5 w-5 text-gray-300" />
                </button>

                {/* Profile */}
                <div className="flex items-center gap-3 pl-4 border-l border-gray-700">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-white">B</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-white">
                      Belema
                    </span>
                    <span className="text-xs text-gray-400">
                      example123@gmail.com
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </header>
          
          {/* Main Content Area */}
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;