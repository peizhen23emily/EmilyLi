import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Resume from './pages/Resume'

function AnimatedRoutes() {
  const location = useLocation()
  const mainRef = useRef(null)

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.opacity = '0'
      mainRef.current.style.transform = 'translateY(12px)'
      setTimeout(() => {
        if (mainRef.current) {
          mainRef.current.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
          mainRef.current.style.opacity = '1'
          mainRef.current.style.transform = 'translateY(0)'
        }
      }, 50)
    }
  }, [location.pathname])

  return (
    <main className="flex-1" ref={mainRef}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </main>
  )
}

function App() {
  const basename = import.meta.env.DEV ? '/' : '/EmilyLi/'

  return (
    <Router basename={basename}>
      <div className="min-h-screen flex flex-col bg-cream text-dark font-body">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  )
}

export default App