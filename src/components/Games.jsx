import React from 'react';
import Nav from './Nav.jsx';
import plinkycover from '../assets/games/plinkyplights/cover.webp';
import rpgcover from '../assets/games/mousestopper/cover.webp';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

export default function Games() {
  return (
    <div className='padding lg:mt-24 mt-16 min-h-screen '>
      <Nav />
      <div className='p-6 border-l border-r'>
        <h2 className=''>GAMES</h2>
      </div>

      <div className='p-6 border-r border-l border-t'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/plinky">
              <img
                src={plinkycover}
                alt="Plinky cover"
                className=" w-full object-contain hover:scale-102 transition"
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
                className="w-full object-contain hover:scale-102 transition"
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
      <Footer />
    </div>
  )
}