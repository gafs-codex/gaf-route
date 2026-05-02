import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import UserProfile from './pages/UserProfile'
import Login from './pages/Login'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function NotFound() {
    return <div className='center'>
      <h1 style={{ color: "red", fontSize: "50px" }}>404 - Page not found</h1>
    </div>
  }
  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />} {/* always visible on every page */}

      <Routes>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route path='/' element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path='/about' element={isLoggedIn ? <About /> : <Navigate to="/login" />} />
        <Route path='/dashboard' element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path='/users/:id' element={isLoggedIn ? <UserProfile /> : <Navigate to="/login" />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
