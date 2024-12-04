import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-10 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-blue-600 text-lg font-bold">Rental & Material</Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link to="/rental" className="text-gray-800 hover:text-blue-600">Rental</Link>
            <Link to="/material" className="text-gray-800 hover:text-blue-600">Material</Link>
            <Link to="/tentang" className="text-gray-800 hover:text-blue-600">Tentang</Link>
          </div>

          <div className="hidden md:flex items-center">
            <a
              href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20Crane%20yang%20Anda%20sewakan.%20Bisa%20tolong%20berikan%20informasi%20lebih%20lanjut?"
              className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Hubungi
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block text-center text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">Home</Link>
              <Link to="/rental" className="block text-center text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">Rental</Link>
              <Link to="/material" className="block text-center text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">Material</Link>
              <Link to="/tentang" className="block text-center text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">Tentang</Link>
              <a
                href="https://wa.me/628123456789?text=Halo,%20saya%20tertarik%20dengan%20Crane%20yang%20Anda%20sewakan.%20Bisa%20tolong%20berikan%20informasi%20lebih%20lanjut?"
                className="block text-center text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md"
              >
                Hubungi
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
