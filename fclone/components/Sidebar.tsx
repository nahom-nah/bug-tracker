import React from "react";
import { MenuIcon } from "@heroicons/react/solid";
interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-72 bg-gray-900 h-screen px-2 py-1">
        <div className="flex items-center justify-between">
          <img className="h-12" src="logo.png" alt="logo" />
          <button>
            <MenuIcon className="h-7 text-gray-300 hover:text-white" />
          </button>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
