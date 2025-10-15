import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Read from './Crud/Read'
import add from './Crud/add'

export default function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      {/* Home, Navbar, About */}
      {/* <Route path='/' Component={Home}></Route>
      <Route path='/about/:name' Component={About}></Route> */}
      <Route path='/' Component={Read}></Route>
      <Route path='/add' Component={add}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
