import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Network, 
  Bell, 
  Shield, 
  Settings, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <aside className={`bg-gray-800 text-white transition-all ${isOpen ? 'w-64' : 'w-16'} flex flex-col`}>
      <div className="p-4 flex items-center justify-between">
        {isOpen && <h2 className="font-bold text-lg">Trust Index</h2>}
        <button 
          onClick={toggle} 
          className="p-1 rounded-md hover:bg-gray-700 focus:outline-none"
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 px-2">
          <NavItem to="/dashboard" icon={<Home />} text="Dashboard" isOpen={isOpen} />
          <NavItem to="/teams" icon={<Users />} text="Team View" isOpen={isOpen} />
          <NavItem to="/network" icon={<Network />} text="Network Graph" isOpen={isOpen} />
          <NavItem to="/alerts" icon={<Bell />} text="Trust Alerts" isOpen={isOpen} />
          <NavItem to="/privacy" icon={<Shield />} text="Privacy Settings" isOpen={isOpen} />
        </ul>
      </nav>
      <div className="mt-auto p-4">
        {isOpen && (
          <div className="flex items-center">
            <Settings size={18} className="mr-2" />
            <span className="text-sm">Settings</span>
          </div>
        )}
        {!isOpen && <Settings size={18} />}
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, text, isOpen }) => {
  return (
    <li>
      <NavLink 
        to={to} 
        className={({ isActive }) => 
          `flex items-center p-3 rounded-md ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`
        }
      >
        {icon}
        {isOpen && <span className="ml-3">{text}</span>}
      </NavLink>
    </li>
  );
};

export default Sidebar;