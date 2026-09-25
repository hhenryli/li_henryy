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
 
export default function Nav({ compact = false }) {
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
 
  const showTallNav = !compact && (!isSticky || footerVisible);
 
  const links = [
    { key: 'design', src: pencilicon, label: 'Design', path: '/work', ref: designRef },
    { key: 'motion', src: motionicon, label: 'Motion', path: '/motion', ref: motionRef },
    { key: 'websites', src: websitesicon, label: 'Websites', path: '/websites', ref: websitesRef },
    { key: 'play', src: gamesicon, label: 'Play', path: '/play', ref: gamesRef },
  ];

  return (
    <div className={`bg-[var(--background)] sticky border-[var(--border)] padding flex items-center justify-between z-50 transition-all duration-300 sticky top-0 h-fit ${showTallNav ? 'min-h-16' : 'min-h-16'}`}>
      <div className='w-full flex items-start'>
        <Link to="/" className=''>
          <h5>Henry Li is a </h5>
        
        </Link>
        <div className='flex justify-center ml-2'>
          <TypewriterWord words={['designer', 'developer', 'motion artist']} />
        </div>
      </div>
      {/* Desktop nav */}
      <div className="hidden md:flex justify-end gap-8">
        <Link to="/work">
          <h5>WORK</h5>
        </Link>

        <Link to="/about">
          <h5>ABOUT</h5>
        </Link>

        <Link to="/play">
          <h5>PLAY</h5>
        </Link>

        <button onClick={() => setContactOpen(true)}>
          <h5>CONTACT</h5>
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex items-center justify-center ml-auto"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <svg className="w-5 h-5" style={{ color: "var(--foreground)" }} width="205" height="205" viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5.65685" y="170.254" width="232.775" height="41.1379" rx="20.5689" transform="rotate(-45 5.65685 170.254)"     stroke="currentColor" stroke-opacity="1" stroke-width="8"/>
            <rect x="-5.65685" width="232.775" height="41.1379" rx="20.5689" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 195.343 166.254)" stroke="currentColor" stroke-opacity="1" stroke-width="8"/>
          </svg>
        ) : (
        <svg className="w-5 h-5" style={{ color: "var(--foreground)" }} width="196" height="192" viewBox="0 0 196 192" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="188" height="32" rx="16" stroke="currentColor" stroke-opacity="0.85098" stroke-width="8"/>
        <rect x="4" y="80" width="188" height="32" rx="16" stroke="currentColor" stroke-opacity="0.85098" stroke-width="8"/>
        <rect x="4" y="156" width="188" height="32" rx="16" stroke="currentColor" stroke-opacity="0.85098" stroke-width="8"/>
        </svg>

        )}
      </button>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden fixed top-16 right-0 w-full
          bg-[var(--background)]
          border-b border-[var(--border)]
          z-40
          transition-all duration-300
          ${mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col">
          <Link
            to="/work"
            onClick={() => setMobileMenuOpen(false)}
            className="padding py-4 border-b border-[var(--border)]"
          >
            <h5>WORK</h5>
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="padding py-4 border-b border-[var(--border)]"
          >
            <h5>ABOUT</h5>
          </Link>


          {/* <Link
            to="/play"
            onClick={() => setMobileMenuOpen(false)}
            className="padding py-4 border-b border-[var(--border)]"
          >
            <h5>PLAY</h5>
          </Link> */}

          <a
            href="/li_henry_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="padding py-4 border-b border-[var(--border)]"
          >
            <h5>RESUME</h5>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setContactOpen(true);
            }}
            className="padding py-4 text-left"
          >
            <h5>CONTACT</h5>
          </button>
        </div>
      </div>
      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
  }
//   return (
//     <>
//       <div className={`bg-[#FAFAF8] flex items-center z-50 transition-all duration-300 fixed md:left-6 md:right-6 md:top-6 left-3 right-3 top-3 h-16 ${showTallNav ? 'lg:h-24' : 'h-16'}`}>
 
//         {/* Part 1: Home */}
//         <Link
//           to="/"
//           className='cursor-pointer flex items-center justify-center border-r h-full aspect-square'
//           onMouseEnter={() => homeRef.current?.goToAndPlay(0, true)}
//         >
//           <div className={`pointer-events-none transition-all duration-300 ${showTallNav ? 'lg:w-16' : 'w-8'}`}>
//             <Lottie
//               lottieRef={homeRef}
//               animationData={homeicon}
//               loop={false}
//               autoplay
//               style={{ width: '100%', height: '100%' }}
//             />
//           </div>
//         </Link>
 
//         {/* Part 2: Main nav, centered, hidden on mobile */}
//         <ul className='hidden lg:flex flex-1 justify-center gap-4'>
//           {links.map((link) => (
//             <li key={link.key}>
//               <Link
//                 to={link.path}
//                 className={`flex items-center border rounded-full group overflow-hidden transition-all duration-300 ${showTallNav ? 'px-6 py-3' : 'p-1'}`}
//                 onMouseEnter={() => link.ref?.current?.goToAndPlay(0, true)}
//               >
//                 <div className={`flex items-center justify-center transition-all duration-300 ${showTallNav ? 'w-6 h-6' : 'w-4 h-4'}`}>
//                   <Lottie
//                     lottieRef={link.ref}
//                     animationData={link.src}
//                     loop={false}
//                     autoplay
//                     style={{ width: '100%', height: '100%' }}
//                   />
//                 </div>
//                 <span className="overflow-hidden">
//                   <span className="px-3">{link.label}</span>
//                 </span>
//               </Link>
//             </li>
//           ))}
//         </ul>
 
//         {/* Part 3: About + Contact, hidden on mobile */}
//         <div className='hidden lg:flex flex-col h-full border-l'>
//           <Link
//             to="/about"
//             onMouseEnter={() => aboutRef.current?.goToAndPlay(0, true)}
//             className='group flex h-1/2 w-full transition-colors duration-200'
//           >
//             <span className='flex items-center justify-center aspect-square h-full border-r group-hover:bg-current'>
//               <span className='w-5 h-5'>
//                 <Lottie
//                   lottieRef={aboutRef}
//                   animationData={hearticon}
//                   loop={false}
//                   autoplay
//                   style={{ width: '100%', height: '100%' }}
//                 />
//               </span>
//             </span>
//             <span className='flex items-center gap-2 px-4 h-full flex-1'>
//               <p className='italic'>About</p>
//             </span>
//           </Link>
//             <hr />
//           <button
//             onClick={() => setContactOpen(true)}
//             onMouseEnter={() => contactRef.current?.goToAndPlay(0, true)}
//             className="group flex cursor-pointer w-full h-1/2 p-0 border-0 bg-transparent transition-all duration-300"
//           >
//             <span className="flex items-center justify-center aspect-square h-full border-r group-hover:bg-current">
//               <span className="w-5 h-5">
//                 <Lottie
//                   lottieRef={contactRef}
//                   animationData={contacticon}
//                   loop={false}
//                   autoplay
//                   style={{ width: '100%', height: '100%' }}
//                 />
//               </span>
//             </span>

//             <span className="flex items-center gap-2 px-4 h-full flex-1">
//               <p className="italic">Contact</p>
//             </span>
//           </button>
//         </div>
 
//         {/* Mobile: hamburger button, hidden on desktop */}
//         <button
//           className='flex lg:hidden items-center justify-center border-l h-full aspect-square ml-auto'
//           onClick={() => setMobileMenuOpen((prev) => !prev)}
//           aria-label='Toggle menu'
//         >
//           <img src="/icons/hamburger.svg" className='w-4 h-4' />
//         </button>
//       </div>
 
//       {/* Mobile slide-in menu */}
//       <div
//         className={`lg:hidden fixed top-0 left-0 h-full w-[50%] p-6 max-w-sm z-[100] bg-[#1c1c1c] border-r flex flex-col overflow-y-auto transition-transform duration-300 ease-in-out ${
//           mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}
//       >
//         <div className='flex justify-end p-4'>
//           <button onClick={() => setMobileMenuOpen(false)} aria-label='Close menu'>
//             <div className='flex flex-col gap-1.5 w-5'>
//               <img src="/icons/xicon.svg" className='w-5 h-5' />
//             </div>
//           </button>
//         </div>
 
//         {links.map((link) => (
//           <Link
//             key={link.key}
//             to={link.path}
//             onClick={() => setMobileMenuOpen(false)}
//             className='flex items-center gap-3 px-4 py-3 border-b'
//           >
//             <div className="w-5 h-5">
//               <Lottie animationData={link.src} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
//             </div>
//             <span>{link.label}</span>
//           </Link>
//         ))}
//         <Link
//           to="/about"
//           onClick={() => setMobileMenuOpen(false)}
//           className='flex items-center gap-3 px-4 py-3 border-b'
//         >
//           <div className="w-5 h-5">
//             <Lottie animationData={hearticon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
//           </div>
//           <span>ABOUT</span>
//         </Link>
//         <button
//           onClick={() => { setContactOpen(true); setMobileMenuOpen(false); }}
//           className='flex items-center gap-3 px-4 py-3 border-b'
//         >
//           <div className="w-5 h-5">
//             <Lottie animationData={contacticon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
//           </div>
//           <span>CONTACT</span>
//         </button>
 
//         <div className='flex justify-center gap-6 px-4 py-4 mt-auto'>
//           <a href="https://www.instagram.com/henryli.design/" target='_blank'>
//             <div className="w-6 h-6"><Lottie animationData={instaicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} /></div>
//           </a>
//           <a href="https://www.linkedin.com/in/henryli0508/" target='_blank'>
//             <div className="w-6 h-6"><Lottie animationData={linkedinicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} /></div>
//           </a>
//           <a href="https://github.com/hhenryli" target='_blank'>
//             <div className="w-6 h-6"><Lottie animationData={githubicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} /></div>
//           </a>
//         </div>
//       </div>
 
//       <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
//     </>
//   );
// }
 





















