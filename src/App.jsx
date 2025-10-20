import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx';
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import './App.css'


function App() {

  return (
    <>
      <div className='bg-[#F8FAFC]'>
        <Router basename={'/li_henryy'}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
