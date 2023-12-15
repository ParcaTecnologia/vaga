
"use client"


import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex items-center justify-between w-full px-16 py-2 bg-gray-800 text-white">
      <button onClick={toggleSidebar}>
        <Image src="/menu.svg" alt="Menu" height={20} width={20} />
      </button>
      <Link to={"/"}>
      <Image src="/logo.svg" alt="" height={32} width={32} />
      </Link>
      <div className="flex items-center gap-4 max-md:hidden cursor-pointer">
        <Image src="/notifications.svg" alt="notifications" height={16} width={16} />
        <Image src="/plus.svg" alt="plus" height={21} width={27} />
      <DarkModeToggle />
      </div>

      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />}
    </div>
  );
};

export default Navbar;
