import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <ul className='fixed left-0 top-0 px-12 py-6 z-30 fixed flex justify-between w-screen'>
        <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
          <li><Link to="/" className="links">Henry Li </Link></li>
          <li><Link to="/about" className="links">About</Link></li>
          <li><Link to="/work" className="links">Work</Link></li>
          <li><Link to="/games" className="links">Games</Link></li>
        </div>

        <div className='flex flex-col gap-2 md:flex-row md:gap-4'>
          <a className="links" href="https://github.com/hhenryli" target='_blank'>Github</a>
          <a className="links" href="https://www.linkedin.com/in/henryli0508/" target='_blank'>Linkedin</a>
          <a className="links" href="https://www.instagram.com/li_henryy/" target='_blank'>Instagram</a>
        </div>
      </ul>
    </div>


  );
}
