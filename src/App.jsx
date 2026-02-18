import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx';
import Projects from './components/Projects.jsx'
import ThreeDProjects from './components/3DProjects.jsx'
import Devlog from './components/Devlog.jsx'
import Contact from './components/Contact.jsx'
import RPGDev from './components/Devlogs/RPG/RPGDev.jsx'
import RPGPost from './components/Devlogs/RPG/RPGPost.jsx';
import PlinkyDevlog from './components/Devlogs/Plinky/PlinkyDev.jsx';
import PlinkyPost from './components/Devlogs/Plinky/plinkyPost.jsx';
import './App.css'
import '../src/styles/styles.css'



function App() {

  return (
    <>
      <div className='bg-[#F8FAFC]'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/projects" element={<ThreeDProjects />} />
            <Route path="/devlog" element={<Devlog />}/>
            <Route path="/contact" element={<Contact />} />

            {/* RPG Routes*/}
            <Route path="/devlog/plinky" element={<PlinkyDevlog/>}/>
            <Route path="/devlog/plinky/:id" element={<PlinkyPost/>}/>
            <Route path="/devlog/rpg" element={<RPGDev />}/>
            <Route path="/devlog/rpg/:id" element={<RPGPost />} />
          </Routes>
      </div>
    </>
  )
}

export default App
