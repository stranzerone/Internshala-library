import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo / Title */}
        <Link to="/" className="text-white text-2xl font-bold tracking-wide">
          Online Library
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white text-lg hover:text-blue-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/browse" className="text-white text-lg hover:text-blue-200 transition">
              Browse Books
            </Link>
          </li>
          <li>
            <Link to="/add" className="text-white text-lg hover:text-blue-200 transition">
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
