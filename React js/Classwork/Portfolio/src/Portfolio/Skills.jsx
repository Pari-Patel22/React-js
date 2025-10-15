import React from 'react'

export default function Skills() {
  return (
    <div>
       <section id="skills" class="py-24 px-6 bg-white text-black">
  <h2 class="text-4xl font-bold text-center mb-12">Skills</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">

    {/* <!-- HTML5 --> */}
    <div class="flex flex-col items-center p-6 rounded-xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-orange-100 cursor-pointer">
      <i class="fab fa-html5 text-7xl mb-4 text-orange-500"></i>
      <p class="text-lg font-semibold">HTML5</p>
    </div>

    {/* <!-- CSS3 --> */}
    <div class="flex flex-col items-center p-6 rounded-xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-blue-100 cursor-pointer">
      <i class="fab fa-css3-alt text-7xl mb-4 text-blue-500"></i>
      <p class="text-lg font-semibold">CSS3</p>
    </div>

    {/* <!-- JavaScript --> */}
    <div class="flex flex-col items-center p-6 rounded-xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-yellow-100 cursor-pointer">
      <i class="fab fa-js-square text-7xl mb-4 text-yellow-500"></i>
      <p class="text-lg font-semibold">JavaScript</p>
    </div>

    {/* <!-- React --> */}
    <div class="flex flex-col items-center p-6 rounded-xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-cyan-100 cursor-pointer">
      <i class="fab fa-react text-7xl mb-4 text-cyan-500"></i>
      <p class="text-lg font-semibold">React</p>
    </div>

    {/* <!-- Bootstrap --> */}
    <div class="flex flex-col items-center p-6 rounded-xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-purple-100 cursor-pointer">
      <i class="fab fa-bootstrap text-7xl mb-4 text-purple-600"></i>
      <p class="text-lg font-semibold">Bootstrap</p>
    </div>

    {/* <!-- C --> */}
    <div class="flex flex-col items-center p-6 rounded-xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-indigo-100 cursor-pointer">
      <i class="fas fa-code text-7xl mb-4 text-indigo-600"></i>
      <p class="text-lg font-semibold">C</p>
    </div>

    {/* <!-- C++ --> */}
    <div class="flex flex-col items-center p-6 rounded-xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-pink-100 cursor-pointer">
      <i class="fas fa-code text-7xl mb-4 text-pink-600"></i>
      <p class="text-lg font-semibold">C++</p>
    </div>

    {/* <!-- Tailwind CSS --> */}
    <div class="flex flex-col items-center p-6 rounded-xl transition duration-300 transform hover:scale-110 hover:shadow-xl hover:bg-sky-100 cursor-pointer">
      <i class="fab fa-css3-alt text-7xl mb-4 text-sky-500"></i>
      <p class="text-lg font-semibold">Tailwind CSS</p>
    </div>

  </div>
</section>
    </div>
  )
}
