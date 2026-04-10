import React from 'react';
import Nav from './Nav.jsx';
import Dropdown from './Dropdown.jsx';
import plinkycover from '../assets/plinkyplights/cover.png';
import rpgcover from '../assets/mousestopper/devlog_sign.png';
import { Link } from 'react-router-dom';

export default function Games() {
  return (
    <div className='min-h-screen '>
      <Nav />
      <Dropdown />
      <h1 className='absolute text-3xl font-garamond ml-8 mt-20'>games</h1>
      <div className='ml-8 mr-8 py-36'>
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
          <div>
            <Link to="/plinky">
              <img
                src={plinkycover}
                alt="Plinky cover"
                className="rounded-2xl w-full object-contain hover:opacity-90 transition"
              />
            </Link>
            <p className='mt-4 text-l'>plinky plights</p>
            <p className=' text-l text-gray-500'>vertical platformer!</p>
          </div>
          <div>
            <Link to="/mousestopper">
              <img
                src={rpgcover}
                alt="Plinky cover"
                className="rounded-2xl w-full object-contain hover:opacity-90 transition"
              />
            </Link>
            <p className='mt-4 text-l'>mousestopper</p>
            <p className=' text-l text-gray-500'>in development rpg</p>
          </div>
          <div>

          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}