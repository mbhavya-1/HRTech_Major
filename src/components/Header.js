import React from 'react';
import { Menu, Bell, User } from 'lucide-react';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className="bg-white p-4 shadow-sm flex items-center justify-between">
      <div className="flex items-center">
        <button 
          onClick={toggleSidebar} 
          className="mr-4 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold">Organizational Trust Index</h1>
      </div>
      <div className="flex items-center">
        <button className="p-2 mx-2 rounded-md hover:bg-gray-100">
          <Bell size={20} />
        </button>
        <div className="flex items-center ml-4">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
            <User size={16} />
          </div>
          <span className="ml-2 font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;