import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import UserProfile from './pages/UserProfile'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function NotFound() {
    return <div className='center'>
      <h1 style={{ color: "red", fontSize: "50px" }}>404 - Page not found</h1>
    </div>
  }
  return (
    <BrowserRouter>
      <Navbar /> {/* always visible on every page */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/users/:id' element={<UserProfile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
