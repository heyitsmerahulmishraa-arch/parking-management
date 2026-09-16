import React from "react";
import { Bell, ChevronDown, Menu, Search, Sun } from "lucide-react";

const Header = () => {
  return (
    <div className="h-14 flex justify-between px-1">
      <div className="flex items-center gap-6">
        <div>
          <Menu />
        </div>
        <div>
          <h1>Dashboard</h1>
          <p>Welcome to Parking Management</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="searchContainer border flex items-center">
            <Search />
          <input type="text" placeholder="Search anything..." />
        </div>
        <div className="themeButton">
          <button>
            <Sun />
          </button>
        </div>
        <div className="notificationButton">
          <button>
            <Bell />
          </button>
        </div>
        <div className="profileContainer flex items-center gap-2">
          <div className="profilePic border w-8 h-8 rounded-full"></div>
          <div className="userDetails">
            <p>Mark</p>
            <p>Area Manager</p>
          </div>
          <div className="profileMenuIcon">
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
