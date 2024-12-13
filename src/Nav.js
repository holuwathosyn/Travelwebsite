import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-sky-400 to-teal-600 text-white fixed w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
      
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-1xl font-extrabold tracking-wide flex items-center"
        >
          <img
            src="aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration.jpg"
            alt="Logo"
            className="w-12 h-12 rounded-xl object-cover"
          />
          <span className="ml-2">0399</span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <Link
            to="/"
            className="text-lg font-medium hover:text-teal-300 hover:underline transition"
          >
            Home
          </Link>
          <Link
            to="/Destination"
            className="text-lg font-medium hover:text-teal-300 hover:underline transition"
          >
            Destinations
          </Link>
          <Link
            to="About"
            className="text-lg font-medium hover:text-teal-300 hover:underline transition"
          >
            About
          </Link>
          <Link
            to="/Contact"
            className="text-lg font-medium hover:text-teal-300 hover:underline transition"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-gradient-to-r from-blue-600 to-teal-600 p-6 shadow-lg lg:hidden`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-lg font-medium hover:text-teal-300 transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/Destination"
              className="text-lg font-medium hover:text-teal-300 transition"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              to="About"
              className="text-lg font-medium hover:text-teal-300 transition"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/Contact"
              className="text-lg font-medium hover:text-teal-300 transition"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Navbar;
