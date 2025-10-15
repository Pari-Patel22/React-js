import React from 'react'
import Navbar from './Portfolio/Navbar'
import Herosection from './Portfolio/Herosection'
import AboutMe from './Portfolio/AboutMe'
import Skills from './Portfolio/Skills'
import Education from './Portfolio/Education'
import Project from './Portfolio/Project'
import Contact from './Portfolio/Contact'
import Footer from './Portfolio/Footer'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <AboutMe/>
      <Skills/>
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}
