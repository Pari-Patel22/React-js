import React from 'react'

export default function Project() {
  return (
    <div>
      <section id="projects" class="py-24 px-6 bg-white text-black">
  <h2 class="text-4xl font-bold text-center mb-12">Projects</h2>
  <div class="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {/* <!-- Gucci Project --> */}
    <div class="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-xl transition">
      <img src="./Gucci.png" alt="project" class="rounded-lg mb-4" />
      <h3 class="text-xl font-semibold mb-2">Gucci</h3>
      <p class="text-gray-600 text-sm mb-4">A website are create using HTML and Tailwindcss. A full-featured online shopping site with product pages, cart.</p>
      <div class="flex space-x-4">
        {/* <!-- Get Code --> */}
        <a href="https://github.com/Pari-Patel22/Resume-Project/tree/main/Gucci" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- GitHub Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 mr-2">
            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2c-3.26.7-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.5.12-3.14 0 0 1-.32 3.3 1.2a11.3 11.3 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.64.24 2.84.12 3.14.76.82 1.22 1.86 1.22 3.14 0 4.52-2.74 5.5-5.36 5.8.43.38.81 1.1.81 2.22v3.28c0 .31.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
          </svg>
          Get Code
        </a>
        {/* <!-- Live Demo --> */}
        <a href="https://genuine-manatee-d9411b.netlify.app/" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- External Link Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14 3h7v7m0-7L10 14m-1 7h-7v-7" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>

    {/* <!-- Portfolio Website --> */}
    <div class="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-xl transition">
      <img src="./BCCI.png" alt="project" class="rounded-lg mb-4" />
      <h3 class="text-xl font-semibold mb-2">BCCI</h3>
      <p class="text-gray-600 text-sm mb-4">A website are create using HTML and Tailwindcss. A personal portfolio with responsive design, modern UI, and project showcase.</p>
      <div class="flex space-x-4">
       <a href="https://github.com/Pari-Patel22/Resume-Project/tree/main/BCCI" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- GitHub Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 mr-2">
            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2c-3.26.7-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.5.12-3.14 0 0 1-.32 3.3 1.2a11.3 11.3 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.64.24 2.84.12 3.14.76.82 1.22 1.86 1.22 3.14 0 4.52-2.74 5.5-5.36 5.8.43.38.81 1.1.81 2.22v3.28c0 .31.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
          </svg>
          Get Code
        </a>
        {/* <!-- Live Demo --> */}
        <a href="https://shiny-cranachan-5019f1.netlify.app/" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- External Link Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14 3h7v7m0-7L10 14m-1 7h-7v-7" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>

    {/* <!-- Blog Platform --> */}
    <div class="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-xl transition">
      <img src="./E-Shop.png" alt="project" class="rounded-lg mb-4" />
      <h3 class="text-xl font-semibold mb-2">E-Shop</h3>
      <p class="text-gray-600 text-sm mb-4">A website are create using HTML and Tailwindcss. A blogging application with user authentication and markdown editor support.</p>
      <div class="flex space-x-4">
        <a href="https://github.com/Pari-Patel22/Resume-Project/tree/main/Portfolio/Website/E-Shop" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- GitHub Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 mr-2">
            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2c-3.26.7-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.5.12-3.14 0 0 1-.32 3.3 1.2a11.3 11.3 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.64.24 2.84.12 3.14.76.82 1.22 1.86 1.22 3.14 0 4.52-2.74 5.5-5.36 5.8.43.38.81 1.1.81 2.22v3.28c0 .31.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
          </svg>
          Get Code
        </a>
        {/* <!-- Live Demo --> */}
        <a href="https://darling-clafoutis-7d7db4.netlify.app/" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- External Link Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14 3h7v7m0-7L10 14m-1 7h-7v-7" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>

    {/* <!-- Admin Dashboard --> */}
    <div class="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-xl transition">
      <img src="./Spotify.png" alt="project" class="rounded-lg mb-4" />
      <h3 class="text-xl font-semibold mb-2">Spotify</h3>
      <p class="text-gray-600 text-sm mb-4">A website are create using HTML and Tailwindcss. An analytics dashboard with charts, tables, and user management system.</p>
      <div class="flex space-x-4">
       <a href="https://github.com/Pari-Patel22/Resume-Project/tree/main/Portfolio/Website/Project%20(spotify)" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- GitHub Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 mr-2">
            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2c-3.26.7-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.5.12-3.14 0 0 1-.32 3.3 1.2a11.3 11.3 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.64.24 2.84.12 3.14.76.82 1.22 1.86 1.22 3.14 0 4.52-2.74 5.5-5.36 5.8.43.38.81 1.1.81 2.22v3.28c0 .31.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
          </svg>
          Get Code
        </a>
        {/* <!-- Live Demo --> */}
        <a href="https://boisterous-tapioca-1e8b6d.netlify.app/" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- External Link Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14 3h7v7m0-7L10 14m-1 7h-7v-7" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>

    {/* <!-- Landing Page --> */}
    <div class="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-xl transition">
      <img src="./Software.png" alt="project" class="rounded-lg mb-4" />
      <h3 class="text-xl font-semibold mb-2">Software Company</h3>
      <p class="text-gray-600 text-sm mb-4">A website are create using HTML and Tailwindcss. A modern marketing landing page with call-to-action and smooth animations.</p>
      <div class="flex space-x-4">
       <a href="https://github.com/Pari-Patel22/Resume-Project/tree/main/Software%20Company" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- GitHub Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 mr-2">
            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2c-3.26.7-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.5.12-3.14 0 0 1-.32 3.3 1.2a11.3 11.3 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.64.24 2.84.12 3.14.76.82 1.22 1.86 1.22 3.14 0 4.52-2.74 5.5-5.36 5.8.43.38.81 1.1.81 2.22v3.28c0 .31.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
          </svg>
          Get Code
        </a>
        {/* <!-- Live Demo --> */}
        <a href="https://iridescent-genie-6c3450.netlify.app/" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- External Link Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14 3h7v7m0-7L10 14m-1 7h-7v-7" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>

    {/* <!-- E-commerce App --> */}
    <div class="border border-gray-300 rounded-xl p-5 shadow-sm hover:shadow-xl transition">
      <img src="./photography.png" alt="project" class="rounded-lg mb-4" />
      <h3 class="text-xl font-semibold mb-2">Photography</h3>
      <p class="text-gray-600 text-sm mb-4">A website are create using HTML and Tailwindcss. A complete e-commerce app with product filtering, cart, and Stripe payments.</p>
      <div class="flex space-x-4">
        <a href="https://github.com/Pari-Patel22/Resume-Project/tree/main/Photography" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- GitHub Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 mr-2">
            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2c-3.26.7-3.95-1.57-3.95-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.18.08 1.8 1.22 1.8 1.22 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.32 1.22-3.14-.12-.3-.53-1.5.12-3.14 0 0 1-.32 3.3 1.2a11.3 11.3 0 016 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.64.24 2.84.12 3.14.76.82 1.22 1.86 1.22 3.14 0 4.52-2.74 5.5-5.36 5.8.43.38.81 1.1.81 2.22v3.28c0 .31.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"/>
          </svg>
          Get Code
        </a>
        {/* <!-- Live Demo --> */}
        <a href="https://flourishing-licorice-3d0744.netlify.app/" target="_blank"
           class="flex items-center px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition duration-200">
          {/* <!-- External Link Icon --> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14 3h7v7m0-7L10 14m-1 7h-7v-7" />
          </svg>
          Live Demo
        </a>
      </div>
    </div>

  </div>
</section>

    </div>
  )
}
