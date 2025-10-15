import React from 'react'

export default function Contact() {
  return (
    <div>
      <section id="contact" class="py-24 px-6 bg-black text-white">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
    
    {/* <!-- Left Side --> */}
    <div>
      <h2 class="text-5xl font-bold mb-8">Contact</h2>
      <p class=" text-gray-300">
        Charley Knox Is Represented 
       
      </p>
      <p className="mb-6 text-gray-300">
         by United Creatives
      </p>
      <p class="mb-2">Email: <a href="mailto:info@mysite.com" class="underline">sorathiyapari22@gmail.com</a></p>
      <p>Phone: 9313336858  </p>
    </div>
    
    {/* <!-- Right Side Form --> */}
    <form class="space-y-10">
      <div class="grid grid-cols-2 gap-8">
        <div class="relative">
          <label class="block text-sm mb-2">First Name *</label>
          <input type="text" 
                 class="peer w-full bg-black border-b-2 border-gray-600 focus:border-white focus:ring-0 py-2 outline-none transition-all duration-300" />
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 peer-focus:w-full"></span>
        </div>
        <div class="relative">
          <label class="block text-sm mb-2">Last Name *</label>
          <input type="text" 
                 class="peer w-full bg-black border-b-2 border-gray-600 focus:border-white focus:ring-0 py-2 outline-none transition-all duration-300" />
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 peer-focus:w-full"></span>
        </div>
      </div>
      
      <div class="grid grid-cols-2 gap-8">
        <div class="relative">
          <label class="block text-sm mb-2">Email *</label>
          <input type="email" 
                 class="peer w-full bg-black border-b-2 border-gray-600 focus:border-white focus:ring-0 py-2 outline-none transition-all duration-300" />
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 peer-focus:w-full"></span>
        </div>
        <div class="relative">
          <label class="block text-sm mb-2">Phone</label>
          <input type="tel" 
                 class="peer w-full bg-black border-b-2 border-gray-600 focus:border-white focus:ring-0 py-2 outline-none transition-all duration-300" />
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 peer-focus:w-full"></span>
        </div>
      </div>
      
      <div class="relative">
        <label class="block text-sm mb-2">Leave us a message...</label>
        <textarea rows="3" 
                  class="peer w-full bg-black border-b-2 border-gray-600 focus:border-white focus:ring-0 py-2 outline-none transition-all duration-300"></textarea>
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 peer-focus:w-full"></span>
      </div>
      
      <button type="submit" 
              class="px-10 py-3 border border-white bg-black text-white hover:bg-white hover:text-black transition duration-300">
        Submit
      </button>
    </form>
    
  </div>
</section>

    </div>
  )
}
