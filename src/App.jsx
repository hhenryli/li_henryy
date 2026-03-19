import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, LazyMotion, domAnimation, m } from "framer-motion";
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

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <LazyMotion features={domAnimation}> 
     <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
            </PageWrapper>
          }
        />
        <Route
          path="/about"
          element={
            <PageWrapper>
              <About />
            </PageWrapper>
          }
        />
        <Route 
          path="/portfolio" 
          element={
            <PageWrapper>
              <Portfolio />
            </PageWrapper>
          }
        />
         <Route 
          path="/projects" 
          element={
            <PageWrapper>
              <ThreeDProjects />
            </PageWrapper>
          }
        />
        <Route 
          path="/devlog" 
          element={
            <PageWrapper>
              <Devlog />
            </PageWrapper>
          }
        />
        <Route 
          path="/contact" 
          element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          }
        />
        <Route 
          path="/devlog/plinky" 
          element={
            <PageWrapper>
              <PlinkyDevlog />
            </PageWrapper>
          }
        />
        <Route 
          path="/devlog/rpg" 
          element={
            <PageWrapper>
              <RPGDev />
            </PageWrapper>
          }
        />
        <Route path="/devlog/plinky/:id" element={<PlinkyPost/>}/>
        <Route path="/devlog/rpg/:id" element={<RPGPost />} />
      </Routes>
      </AnimatePresence>
    </LazyMotion>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
}

function App() {

  return (
    <>
      <div className='bg-[#F8FAFC]'>
          <AnimatedRoutes />
      </div>
    </>
  )
}

export default App
