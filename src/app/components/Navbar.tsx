"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // icons

const myImage = "/logo.png";

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({
  href,
  children,
  onClick,
}) => {
  return (
    <Link
      href={href}
      scroll={true}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-orange-100 transition-colors"
    >
      {children}
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side: Logo + Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src={myImage}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-md"
              />
            </div>
            <Link href="/" className="text-white font-bold text-lg">
              NIORA STAR
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Service</NavLink>
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#team">Team</NavLink>
            <NavLink href="#testimonials">Client Feedback</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="#home" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink href="#about" onClick={closeMenu}>
              About Us
            </NavLink>
            <NavLink href="#services" onClick={closeMenu}>
              Service
            </NavLink>
            <NavLink href="#work" onClick={closeMenu}>
              Work
            </NavLink>
            <NavLink href="#team" onClick={closeMenu}>
              Team
            </NavLink>
            <NavLink href="#testimonials" onClick={closeMenu}>
              Client Feedback
            </NavLink>
            <NavLink href="#calltoaction" onClick={closeMenu}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
