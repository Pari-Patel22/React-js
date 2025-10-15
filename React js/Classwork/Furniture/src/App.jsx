import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Carts from './Pages/Carts'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Carts' element={<Carts/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
