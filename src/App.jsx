import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Bootup from './components/Bootup.jsx';
import ScrollTop from './components/ScrollTop.jsx';
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Play from './components/Play.jsx'
import Motion from './components/Motion.jsx'
import Work from './components/Work.jsx'
import Websites from './components/Websites.jsx';
import Contact from './components/Contact.jsx';
import Artbox from './components/Artbox.jsx';
import Sides from './components/Sides.jsx';

import Fukai from './components/Design/Fukai.jsx';
import Haven from './components/Design/Haven.jsx';
import FreshlyDropped from './components/Design/FreshlyDropped.jsx';
import Workday from './components/Design/Workday.jsx';
import Memo from './components/Design/Memo.jsx';
import Tang from './components/Design/Tang.jsx';
import Veil from './components/Design/Veil.jsx';
import TwoReel from './components/Design/TwoReel.jsx';

import DropDead from './components/Motion/DropDead.jsx';
import Collections from './components/Motion/Collections.jsx';
import Mono from './components/Motion/Projectmono.jsx';
import Supercut from './components/Motion/Supercut.jsx';
import AASAFormal from './components/Motion/AASAFormal.jsx';

import OneTwentyEs from './components/projects/120es.jsx';
import Spectacles from './components/projects/spectacles.jsx';

import PlinkyPlights from './components/Games/plinkyplights.jsx';
import Mousestopper from './components/Games/Mousestopper.jsx';

import './App.css'
import '../src/styles/styles.css'

function App() {
  const [showBootup, setShowBootup] = useState(
    () => !sessionStorage.getItem('hasSeenBootup')
  );

  const handleBootupComplete = () => {
    sessionStorage.setItem('hasSeenBootup', 'true');
    setShowBootup(false);
  };
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/artbox" element={<Artbox />} />
        <Route path="/work" element={<Work />} />
        <Route path="/motion" element={<Motion />} />
        <Route path="/sides" element={<Sides />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/play" element={<Play />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dropdead" element={<DropDead />} />
        <Route path="/aasaformal" element={<AASAFormal />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/projectmono" element={<Mono />} />
        <Route path="/supercut" element={<Supercut />} />

        <Route path="/haven" element={<Haven />} />
        <Route path="/freshlydropped" element={<FreshlyDropped />} />
        <Route path="/workday" element={<Workday />} />
        <Route path="/fukai" element={<Fukai />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/tang" element={<Tang />} />
        <Route path="/veil" element={<Veil />} />
        <Route path="/tworeel" element={<TwoReel />} />

        <Route path="/120es" element={<OneTwentyEs />} />
        <Route path="/spectacles" element={<Spectacles />} />

        <Route path="/plinky" element={<PlinkyPlights />} />
        <Route path="/mousestopper" element={<Mousestopper />} />
      </Routes>
    </>

  )
}

export default App