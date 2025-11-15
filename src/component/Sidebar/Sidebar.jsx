import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Calendar, 
  LayoutList, 
  Users 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className=" h-screen">
      {/* Navigation Links */}
      <nav className="space-y-2">
        <NavLink 
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink 
          to="calender"
          className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
        >
          <Calendar size={20} />
          <span>Calendar</span>
        </NavLink>
        
        <NavLink 
          to="board"
          className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
        >
          <LayoutList size={20} />
          <span>Trello Board</span>
        </NavLink>
        
        <NavLink 
          to="users"
          className="flex items-center gap-3 p-3 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
        >
          <Users size={20} />
          <span>Users</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;