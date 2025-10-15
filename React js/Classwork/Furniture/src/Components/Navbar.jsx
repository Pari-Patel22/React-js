import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       
    <nav className="bg-black text-white shadow-md w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-2xl font-bold text-[#d4a373]">FurniLux</div>

          {/* Menu Links */}
          <div className="hidden md:flex space-x-6 font-medium">
            <Link to={"/"}><a href="#" className="hover:text-[#d4a373] transition">Home</a></Link>
            <a href="#" className="hover:text-[#d4a373] transition">Shop</a>
            <a href="#" className="hover:text-[#d4a373] transition">Living Room</a>
            <a href="#" className="hover:text-[#d4a373] transition">Bedroom</a>
            <a href="#" className="hover:text-[#d4a373] transition">Dining</a>
            <a href="#" className="hover:text-[#d4a373] transition">Contact</a>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center border border-gray-600 rounded-full px-3 py-1 w-64 bg-[#111]">
            <input
              type="text"
              placeholder="Search furniture..."
              className="outline-none w-full text-sm bg-transparent text-white placeholder-gray-400"
            />
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-5 text-white">
            {/* Like Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer hover:text-[#d4a373]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 21l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
              />
            </svg>

            {/* Cart Icon */}
           <Link to ="/Carts"> <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer hover:text-[#d4a373]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1.68 13.39A2 2 0 0117.33 18H6.67a2 2 0 01-1.99-1.61L3 3z"
              />
            </svg></Link>

            {/* Profile Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer hover:text-[#d4a373]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.486 0 4.823.676 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex flex-col items-center space-y-4 py-3 border-t border-gray-700 bg-black text-gray-200 font-medium">
        <a href="#" className="hover:text-[#d4a373] transition">Home</a>
        <a href="#" className="hover:text-[#d4a373] transition">Shop</a>
        <a href="#" className="hover:text-[#d4a373] transition">Living Room</a>
        <a href="#" className="hover:text-[#d4a373] transition">Bedroom</a>
        <a href="#" className="hover:text-[#d4a373] transition">Dining</a>
        <a href="#" className="hover:text-[#d4a373] transition">Contact</a>
      </div>
    </nav>
    </div>
  )
}
