import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import ScrollTop from './components/ScrollTop.jsx';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Games from './components/Games.jsx'
import Motion from './components/Motion.jsx'
import Work from './components/Work.jsx'
import Contact from './components/Contact.jsx';

import DropDead from './components/Motion/DropDead.jsx';
import FreshlyDropped from './components/projects/FreshlyDropped.jsx';
import Memo from './components/projects/Memo.jsx';
import TwoReel from './components/projects/TwoReel.jsx';
import OneTwentyEs from './components/projects/120es.jsx';
import Collections from './components/projects/Collections.jsx';
import AASAFormal from './components/projects/AASAFormal.jsx';
import Typography from './components/projects/Typography.jsx';
import Spectacles from './components/projects/spectacles.jsx';


import PlinkyPlights from './components/Games/plinkyplights.jsx';
import Mousestopper from './components/Games/Mousestopper.jsx';

import './App.css'
import '../src/styles/styles.css'

function App() {

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/motion" element={<Motion />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dropdead" element={<DropDead />} />
        <Route path="/freshlydropped" element={<FreshlyDropped />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/tworeel" element={<TwoReel />} />
        <Route path="/120es" element={<OneTwentyEs />} />
        <Route path="/aasaformal" element={<AASAFormal />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/spectacles" element={<Spectacles />} />

        <Route path="/plinky" element={<PlinkyPlights />} />
        <Route path="/mousestopper" element={<Mousestopper />} />
      </Routes>
    </>

  )
}

export default App