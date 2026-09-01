import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Contact from './Contact.jsx';
import TypewriterWord from './Typewriter.jsx';
import designxtech from '../assets/animations/designxtech.gif';
import Lottie from 'lottie-react';
import motionicon from '../assets/animations/motion.json';
import pencilicon from '../assets/animations/pencil.json';
import websitesicon from '../assets/animations/websites.json';
import gamesicon from '../assets/animations/games.json';
import homeicon from '../assets/animations/house.json';
import hearticon from '../assets/animations/heart.json';
import instaicon from '../assets/animations/insta.json';
import linkedinicon from '../assets/animations/linkedin.json';
import githubicon from '../assets/animations/github.json';
import contacticon from '../assets/animations/contact.json';
import artboxicon from '../assets/animations/artbox.json';
import sides from '../assets/animations/sides.json';
 
export default function Nav() {
  const [isSticky, setIsSticky] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  const designRef = useRef(null);
  const motionRef = useRef(null);
  const websitesRef = useRef(null);
  const gamesRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const artboxRef = useRef(null);
  const sidesRef = useRef(null);
 
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY >= 25);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 
  useEffect(() => {
    const handleFooterVisibility = (e) => setFooterVisible(e.detail);
    window.addEventListener('footerVisibility', handleFooterVisibility);
    return () => window.removeEventListener('footerVisibility', handleFooterVisibility);
  }, []);
 
  const showTallNav = !isSticky || footerVisible;
 
  const links = [
    { key: 'design', src: pencilicon, label: 'DESIGN', path: '/work', ref: designRef },
    { key: 'motion', src: motionicon, label: 'MOTION', path: '/motion', ref: motionRef },
    { key: 'websites', src: websitesicon, label: 'WEBSITES', path: '/websites', ref: websitesRef },
    { key: 'play', src: gamesicon, label: 'PLAY', path: '/games', ref: gamesRef },
  ];
 
  return (
    <>
      <div className={`bg-[#1c1c1c] flex items-center border z-50 transition-all duration-300 fixed md:left-6 md:right-6 md:top-6 left-3 right-3 top-3 h-16 ${showTallNav ? 'lg:h-24' : 'h-16'}`}>
 
        {/* Part 1: Home */}
        <Link
          to="/"
          className='cursor-pointer flex items-center justify-center border-r h-full aspect-square'
          onMouseEnter={() => homeRef.current?.goToAndPlay(0, true)}
        >
          <div className={`pointer-events-none transition-all duration-300 ${showTallNav ? 'lg:w-16' : 'w-8'}`}>
            <Lottie
              lottieRef={homeRef}
              animationData={homeicon}
              loop={false}
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>
 
        {/* Part 2: Main nav, centered, hidden on mobile */}
        <ul className='hidden lg:flex flex-1 justify-center gap-4'>
          {links.map((link) => (
            <li key={link.key}>
              <Link
                to={link.path}
                className={`flex items-center border rounded-full group overflow-hidden transition-all duration-300 ${showTallNav ? 'px-6 py-3' : 'p-1'}`}
                onMouseEnter={() => link.ref?.current?.goToAndPlay(0, true)}
              >
                <div className={`flex items-center justify-center transition-all duration-300 ${showTallNav ? 'w-6 h-6' : 'w-4 h-4'}`}>
                  <Lottie
                    lottieRef={link.ref}
                    animationData={link.src}
                    loop={false}
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>
                <span className="overflow-hidden">
                  <span className="px-3">{link.label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
 
        {/* Part 3: About + Contact, hidden on mobile */}
        <div className='hidden lg:flex flex-col h-full border-l'>
          <Link
            to="/about"
            onMouseEnter={() => aboutRef.current?.goToAndPlay(0, true)}
            className='group flex h-1/2 border-b w-full transition-colors duration-200'
          >
            <span className='flex items-center justify-center aspect-square h-full border-r text-xs font-mono group-hover:bg-current'>
              <span className='w-5 h-5'>
                <Lottie
                  lottieRef={aboutRef}
                  animationData={hearticon}
                  loop={false}
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </span>
            </span>
            <span className='flex items-center gap-2 px-4 h-full flex-1'>
              <p className='italic'>ABOUT</p>
            </span>
          </Link>
 
          <button
            onClick={() => setContactOpen(true)}
            onMouseEnter={() => contactRef.current?.goToAndPlay(0, true)}
            className={`group flex cursor-pointer w-full transition-all duration-300 h-1/2
            }`}
          >
            <span className='flex items-center justify-center aspect-square h-full border-r text-xs font-mono group-hover:bg-current'>
              <span className='w-5 h-5'>
                <Lottie
                  lottieRef={contactRef}
                  animationData={contacticon}
                  loop={false}
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </span>
            </span>
            <span className='flex items-center gap-2 px-4 h-full flex-1'>
              <p className='italic'>CONTACT</p>
            </span>
          </button>
        </div>
 
        {/* Mobile: hamburger button, hidden on desktop */}
        <button
          className='flex lg:hidden items-center justify-center border-l h-full aspect-square ml-auto'
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label='Toggle menu'
        >
          <img src="/icons/hamburger.svg" className='w-4 h-4' />
        </button>
      </div>
 
      {/* Mobile slide-in menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-[50%] p-6 max-w-sm z-[100] bg-[#1c1c1c] border-r flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex justify-end p-4'>
          <button onClick={() => setMobileMenuOpen(false)} aria-label='Close menu'>
            <div className='flex flex-col gap-1.5 w-5'>
              <img src="/icons/xicon.svg" className='w-5 h-5' />
            </div>
          </button>
        </div>
 
        {links.map((link) => (
          <Link
            key={link.key}
            to={link.path}
            onClick={() => setMobileMenuOpen(false)}
            className='flex items-center gap-3 px-4 py-3 border-b'
          >
            <div className="w-5 h-5">
              <Lottie animationData={link.src} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
            </div>
            <span>{link.label}</span>
          </Link>
        ))}
        <Link
          to="/about"
          onClick={() => setMobileMenuOpen(false)}
          className='flex items-center gap-3 px-4 py-3 border-b'
        >
          <div className="w-5 h-5">
            <Lottie animationData={hearticon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
          </div>
          <span>ABOUT</span>
        </Link>
        <button
          onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }}
          className='flex items-center gap-3 px-4 py-3 border-b'
        >
          <div className="w-5 h-5">
            <Lottie animationData={contacticon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
          </div>
          <span>CONTACT</span>
        </button>
 
        <div className='flex justify-center gap-6 px-4 py-4 mt-auto'>
          <a href="https://www.instagram.com/henryli.design/" target='_blank'>
            <div className="w-6 h-6"><Lottie animationData={instaicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} /></div>
          </a>
          <a href="https://www.linkedin.com/in/henryli0508/" target='_blank'>
            <div className="w-6 h-6"><Lottie animationData={linkedinicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} /></div>
          </a>
          <a href="https://github.com/hhenryli" target='_blank'>
            <div className="w-6 h-6"><Lottie animationData={githubicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} /></div>
          </a>
        </div>
      </div>
 
      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
 






























