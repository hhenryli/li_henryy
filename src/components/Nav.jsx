import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Contact from './Contact.jsx';

export default function Nav() {
  const { pathname } = useLocation();
  const [contactOpen, setContactOpen] = useState(false);
  const isActive = (path) => pathname === path ? 'links-hover' : '';

  return (
    <div>
      <ul className='fixed left-0 top-0 px-12 py-10 z-30 flex justify-between items-center w-screen'>
        {/* Left */}
        <div className='flex flex-col gap-2 md:flex-row md:gap-4 flex-1'>
          <Link to="/" className={`links ${isActive('/')}`}>Henry Li</Link>
          <li><Link to="/about" className={`links ${isActive('/about')}`}>About</Link></li>
          <li><Link to="/work" className={`links ${isActive('/work')}`}>Work</Link></li>
          <li><Link to="/motion" className={`links ${isActive('/motion')}`}>Motion</Link></li>
          <li><Link to="/games" className={`links ${isActive('/games')}`}>Games</Link></li>
        </div>

        {/* Center */}
        <li className='flex-1 text-center'>

        </li>

        {/* Right */}
        <div className='flex flex-col gap-2 md:flex-row md:gap-4 flex-1 text-end justify-end'>
          <button className="links" onClick={() => setContactOpen(true)}>Contact</button>
        </div>
        <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </ul>
    </div>
  );
}