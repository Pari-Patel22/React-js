import React from 'react'

export default function Herosection() {
  return (
    <div>
      <section id="home" class="relative h-screen flex flex-col md:flex-row items-center justify-center px-10 bg-white overflow-hidden">
  {/* <!-- Background Big Text --> */}
  <h1 class="absolute text-[5rem] sm:text-[7rem] md:text-[12rem] font-extrabold text-gray-100 select-none tracking-widest z-0">
    DEVELOPER
  </h1>

  {/* <!-- Left Content --> */}
  <div class="flex-1 text-center md:text-left relative z-10">
    {/* <!-- Gradient Line --> */}
    <span class="block w-20 h-1 bg-gradient-to-r from-black to-gray-400 mb-6"></span>
    
    <h2 class="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
      Hi, I'm <span class="underline decoration-4">Pari Sorathiya</span>
    </h2>
    
    <p class="text-base sm:text-lg md:text-xl text-gray-700 max-w-xl mb-8 mx-auto md:mx-0">
      A Professional Web Developer passionate about crafting clean, modern, and high-performing websites.
    </p>
    
    <a href="#projects" 
       class="px-8 py-3 border border-black bg-black text-white rounded-full font-semibold hover:bg-white hover:text-black transition">
      View My Work
    </a>
  </div>

  {/* <!-- Right Image with Black Circle Background --> */}
  <div class="flex-1 mt-10 md:mt-0 flex justify-center relative z-10">
    {/* <!-- Black Circle Background --> */}
    <div class="absolute w-72 h-72 md:w-80 md:h-80 bg-black rounded-full -z-0"></div>
    
    {/* <!-- Profile Image --> */}
    <img src="./Cartoon.webp" 
         alt="Profile Illustration" 
         class="rounded-full shadow-2xl w-64 h-64 md:w-72 md:h-72 object-cover relative z-10"/>
  </div>
</section>




    </div>
  )
}
