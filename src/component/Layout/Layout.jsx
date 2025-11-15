import React from "react";
import moment from "moment";
import { Search, Bell, ChevronDown, Settings } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const {pathname} = useLocation();
  return (
    <div className="h-screen flex  bg-linear-to-br from-gray-900 to-black text-white">
      {/* Sidebar */}
      <div className="w-64 p-6 border-r border-gray-800 bg-gray-900/50 backdrop-blur-lg">
        <div className="flex items-center gap-3 mb-8">
          <img src="./images/logo.png" alt="logo" className="h-8 rounded-full" />{" "}
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

      {/* Main Content */}
      <div className="flex-1 relative overflow-hidden">
        {/* Animated Gradient Blurs */}
        <div className="absolute top-20 left-10 h-[200px] w-[200px] bg-gray-900 rounded-full blur-[100px] opacity-60 animate-pulse"></div>
        <div className="absolute top-40 left-64 h-[200px] w-[200px] bg-gray-600 rounded-full blur-[110px] opacity-50 animate-pulse delay-1000"></div>
        <div className="absolute top-80 left-96 h-[200px] w-[200px] bg-gray-700 rounded-full blur-[120px] opacity-40 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-32 h-[150px] w-[150px] bg-gray-600 rounded-full blur-[90px] opacity-30 animate-pulse delay-1500"></div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Header */}
          <header className="p-6 border-b border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
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
                  <div className="w-10 h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
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
          <div>
              <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
