import React, { useState } from "react";
import ThemeToggleButton from "./ui/theme-toggle-button";
import WrapButton from "./ui/wrap-button";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="main-nav px-6 py-4 rounded-2xl flex items-center justify-between bg-transparent relative">
      {/* Logo */}
      <div className="logo">
        <h1 className="text-2xl font-bold">Sudais</h1>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex nav-bar">
        <ul className="flex space-x-8 text-lg font-medium">
          <li className="cursor-pointer hover:opacity-70 transition">Home</li>
          <li className="cursor-pointer hover:opacity-70 transition">Services</li>
          <li className="cursor-pointer hover:opacity-70 transition">About</li>
        </ul>
      </div>

      {/* Contact + Theme Toggle (Desktop) */}
      <div className="hidden md:flex contact-btn items-center space-x-4">
<InteractiveHoverButton>Contact</InteractiveHoverButton>
        <ThemeToggleButton />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex flex-col space-y-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-gray-600"></span>
        <span className="block w-6 h-0.5 bg-gray-600"></span>
        <span className="block w-6 h-0.5 bg-gray-600"></span>
      </button>

      {/* Mobile Dropdown Menu with Animation */}
      <div
        className={`absolute top-16 left-0 w-full bg-gray-500 text-white shadow-lg rounded-b-2xl md:hidden z-50 transform transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
          <li className="cursor-pointer hover:opacity-70 transition">Home</li>
          <li className="cursor-pointer hover:opacity-70 transition">Services</li>
          <li className="cursor-pointer hover:opacity-70 transition">About</li>
          <li>
            <WrapButton />
          </li>
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
