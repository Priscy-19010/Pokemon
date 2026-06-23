import { useState } from 'react'
import './index.css'
import Navbar from './NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {

  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route />
      <Route path='/pokemon/:id' />
    </Routes>

    </BrowserRouter>
  )
}

