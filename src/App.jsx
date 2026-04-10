import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import RPGDev from './components/Devlogs/RPG/RPGDev.jsx'
import RPGPost from './components/Devlogs/RPG/RPGPost.jsx';
import PlinkyDevlog from './components/Devlogs/Plinky/PlinkyDev.jsx';
import PlinkyPost from './components/Devlogs/Plinky/plinkyPost.jsx';
import './App.css'
import '../src/styles/styles.css'

function App() {
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
      <Route path="/devlog/plinky" element={<PlinkyDevlog />} />
      <Route path="/devlog/rpg" element={<RPGDev />} />
      <Route path="/devlog/plinky/:id" element={<PlinkyPost />} />
      <Route path="/devlog/rpg/:id" element={<RPGPost />} />
    </Routes>
  )
}

export default App