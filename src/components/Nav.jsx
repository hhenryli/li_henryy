import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Contact from './Contact.jsx';
import TypewriterWord from './Typewriter.jsx';
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
  const instaRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const contactRef = useRef(null);

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
      <ul className={`flex justify-between items-center border z-50 transition-all duration-300 fixed left-6 right-6 top-6 ${showTallNav ? 'h-24' : 'h-10'}`}>
        <Link
          to="/"
          className='flex items-center justify-center md:border-r h-full aspect-square'
          onMouseEnter={() => homeRef.current?.goToAndPlay(0, true)}
        >
          <div className={`transition-all duration-300 ${showTallNav ? 'w-16' : 'w-8'}`}>
            <Lottie
              lottieRef={homeRef}
              animationData={homeicon}
              loop={false}
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Link>

        {/* Desktop: full link row, hidden on mobile */}
        <ul className='hidden md:flex gap-4 px-6'>
          {links.map((link) => (
            <li key={link.key}>
              <Link
                to={link.path}
                className={`flex items-center border border-black rounded-full group overflow-hidden transition-all duration-300 ${showTallNav ? 'p-3' : 'p-1'}`}
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
                <span className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-300 whitespace-nowrap">
                  <span className="px-3">{link.label}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Typewriter tagline: always visible, centered */}
        <div className='flex border-l w-full h-full justify-center items-center px-4'>
          <h5 className='text-center text-xs md:text-base'>
            <TypewriterWord className="italic" words={['Designer', 'Developer', 'Illustrator', 'Animator']} /> creating apps, brands, and graphics <br className='hidden md:block' />
            in the pursuit of creativity
          </h5>
        </div>

        {/* Desktop: about heart + socials + contact, hidden on mobile */}
        <div className='hidden md:flex h-full'>
          <div className='aspect-square flex border-l justify-center items-center'>
            <div
              className='flex gap-2'
              onMouseEnter={() => aboutRef.current?.goToAndPlay(0, true)}
            >
              <Link to="/about">
                <div className="w-8 h-8">
                  <Lottie lottieRef={aboutRef} animationData={hearticon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
              </Link>
            </div>
          </div>

          <div className='border-l flex flex-col h-full'>
            <div className={`flex justify-center items-center w-full gap-2 transition-all duration-300 ${showTallNav ? 'flex h-full' : 'hidden'}`}>
              <a href="https://www.instagram.com/henryli.design/" target='_blank' onMouseEnter={() => instaRef.current?.goToAndPlay(0, true)}>
                <div className="w-8">
                  <Lottie lottieRef={instaRef} animationData={instaicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/henryyli0508/" target='_blank' onMouseEnter={() => linkedinRef.current?.goToAndPlay(0, true)}>
                <div className="w-8">
                  <Lottie lottieRef={linkedinRef} animationData={linkedinicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
              </a>
              <a href="https://github.com/hhenryli" target='_blank' onMouseEnter={() => githubRef.current?.goToAndPlay(0, true)}>
                <div className="w-8">
                  <Lottie lottieRef={githubRef} animationData={githubicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
              </a>
            </div>

            <button
              onClick={() => setContactOpen(true)}
              onMouseEnter={() => contactRef.current?.goToAndPlay(0, true)}
              className={`flex cursor-pointer w-full border-t transition-all duration-300 ${showTallNav ? 'h-full' : 'h-full border-t-0'}`}
            >
              <span className={`aspect-square h-full flex justify-center items-center ${showTallNav ? 'border-r' : ''}`}>
                <div className="w-8">
                  <Lottie lottieRef={contactRef} animationData={contacticon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
              </span>
              <div className={`flex justify-center w-full items-center ${showTallNav ? '' : 'hidden'}`}>
                <p>CONTACT</p>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile: hamburger button, hidden on desktop */}
        <button
          className='flex md:hidden items-center justify-center border-l h-full aspect-square'
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label='Toggle menu'
        >
          <div className='flex flex-col gap-1.5 w-5'>
            <span className={`h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </ul>

      {/* Mobile slide-in menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[50%] p-6 max-w-sm z-[100] bg-[#dddcd3] border-r flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex justify-end p-4'>
          <button onClick={() => setMobileMenuOpen(false)} aria-label='Close menu'>
            <div className='flex flex-col gap-1.5 w-5'>
              <span className='h-[2px] bg-black rotate-45 translate-y-[7px]' />
              <span className='h-[2px] bg-black -rotate-45 -translate-y-[7px]' />
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
          <a href="https://www.linkedin.com/in/henryyli0508/" target='_blank'>
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