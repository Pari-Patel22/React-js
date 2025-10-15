import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="fixed w-full z-50 bg-black text-white shadow">
  <div class="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center h-16">
    {/* <!-- Logo / Name --> */}
     <a href="#home">
      <img src="./logo.png" alt="PS Logo" class="h-10 w-15"/>
    </a>

    {/* <!-- Desktop Menu --> */}
    <div class="hidden md:flex space-x-8 uppercase text-sm font-medium">
      <a href="#home" class="hover:text-gray-400 transition duration-500 ">Home</a>
      <a href="#about" class="hover:text-gray-400 transition duration-500">About</a>
      <a href="#skills" class="hover:text-gray-400 transition duration-500">Skills</a>
      <a href="#experience" class="hover:text-gray-400 transition duration-500">Education</a>
      <a href="#projects" class="hover:text-gray-400 transition duration-500">Projects</a>
      <a href="#contact" class="hover:text-gray-400 transition duration-500">Contact</a>
    </div>

    {/* <!-- Mobile Hamburger --> */}
    <button id="menu-btn" class="md:hidden text-2xl focus:outline-none">
      <i class="fas fa-bars"></i>
    </button>
  </div>

  {/* <!-- Mobile Menu --> */}
  <div id="menu" class="hidden md:hidden  flex-col items-center bg-black py-6 space-y-6 uppercase text-lg font-medium border-t border-gray-700">
    <a href="#home" class="hover:text-gray-400 transition">Home</a>
    <a href="#about" class="hover:text-gray-400 transition">About</a>
    <a href="#skills" class="hover:text-gray-400 transition">Skills</a>
    <a href="#experience" class="hover:text-gray-400 transition">Experience</a>
    <a href="#projects" class="hover:text-gray-400 transition">Projects</a>
    <a href="#contact" class="hover:text-gray-400 transition">Contact</a>
  </div>
</nav>
    </div>
  )
}
