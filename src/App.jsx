import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useState } from 'react'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      <Sidebar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rates" element={<div className="p-8">Exchange Rates Page (Coming Soon)</div>} />
            <Route path="/agencies" element={<div className="p-8">Agencies Page (Coming Soon)</div>} />
            <Route path="/contact" element={<div className="p-8">Contact Page (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
