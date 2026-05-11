import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <ul className='fixed left-0 top-0 px-12 py-10 z-30 flex justify-between items-center w-screen'>
        {/* Left */}
        <div className='flex flex-col gap-2 md:flex-row md:gap-4 flex-1'>
          <li><Link to="/about" className="links">About</Link></li>
          <li><Link to="/work" className="links">Work</Link></li>
          <li><Link to="/games" className="links">Games</Link></li>
        </div>

        {/* Center */}
        <li className='flex-1 text-center'>
          <Link to="/" className="links">HL</Link>
        </li>

        {/* Right */}
        <div className='flex flex-col gap-2 md:flex-row md:gap-4 flex-1 justify-end'>
          <a className="links" href="https://github.com/hhenryli" target='_blank'>Github</a>
          <a className="links" href="https://www.linkedin.com/in/henryyli0508/" target='_blank'>Linkedin</a>
          <a className="links" href="https://www.instagram.com/li_henryy/" target='_blank'>Instagram</a>
        </div>
      </ul>
    </div>


  );
}
