import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Favorite from './pages/Favorites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  const movieNumber = 1;

  return (
    <MovieProvider>
      <div>
        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorite />} />

          </Routes>
        </main>
      </div>
    </MovieProvider>
  )
}

export default App
