import { useState } from 'react'
import './index.css'
import Navbar from './NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'

export default function App() {

  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/pokemonlist' element={ <PokemonList /> } />
      <Route path='/pokemon/:id' element={ <PokemonDetail /> } />
    </Routes>

    </BrowserRouter>
  )
}

