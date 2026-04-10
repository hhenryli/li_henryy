import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Splash from './components/Splash.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Illustration from './components/Illustration.jsx'
import Games from './components/Games.jsx'
import Projects from './components/Projects.jsx'
import Misc from './components/Misc.jsx'

import OneTwentyEs from './components/projects/120es.jsx'
import Spectacles from './components/projects/spectacles.jsx';
import PlinkyPlights from './components/Games/plinkyplights.jsx';
import Mousestopper from './components/Games/Mousestopper.jsx';
import './App.css'
import '../src/styles/styles.css'

function App() {
  const [showSplash, setShowSplash] = useState(!sessionStorage.getItem('visited'));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      
      if (showSplash) {
        sessionStorage.setItem('visited', 'true');
        setTimeout(() => setShowSplash(false), 2700);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, [showSplash]);

  if (showSplash || !isLoaded) {
    return <Splash onEnter={() => setShowSplash(false)}/>;
  }
  
  

  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/illustration" element={<Illustration />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/games" element={<Games />} />
      <Route path="/misc" element={<Misc />} />

      <Route path="/120es" element={<OneTwentyEs />} />
      <Route path="/spectacles" element={<Spectacles />} />
      <Route path="/plinky" element={<PlinkyPlights />} />
      <Route path="/mousestopper" element={<Mousestopper />} />
    </Routes>
  )
}

export default App