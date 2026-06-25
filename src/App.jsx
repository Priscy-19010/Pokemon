import { useState } from 'react'
import './index.css'
import Navbar from './NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetail'
import { PokemonProvider } from './PokemonContext'
import NotFound from './NotFound'

export default function App() {

  return (
    <BrowserRouter>
    <Navbar />

    <PokemonProvider>

      <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/pokemons' element={ <PokemonList /> } />
      <Route path='/pokemon/:name' element={ <PokemonDetail /> } />
      <Route path='*' element={ <NotFound />} />
      </Routes>

    </PokemonProvider>

    </BrowserRouter>
  )
}

