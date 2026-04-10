import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useRef} from 'react';
import Nav from './Nav.jsx';
import Dropdown from './Dropdown.jsx';
import BackToTop from './BackToTop.jsx';
import OneTwentyEs from './projects/120es.jsx';
import PlinkyPlights from './Games/plinkyplights.jsx';
import Spectacles from './projects/spectacles.jsx';
import spectaclespic from '../assets/spectacles/spectacles.png';
import onetwentyespic from '../assets/120/church.jpeg';
import intotimepic from '../assets/IntoTimeCover.png';

export default function Projects() {
  return (
    <div className='min-h-screen'>
    <Nav />
    <Dropdown />
    <h1 className='absolute text-3xl font-garamond ml-8 mt-20'>projects</h1>
    <div className='ml-8 mr-8 pt-36'>
    <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
      <div>
        <Link to="/spectacles" className='relative aspect-square bg-[#fffd93] rounded-2xl overflow-hidden flex items-center justify-center'>
            <img src={spectaclespic} className='max-w-full max-h-full object-contain'></img>
        </Link>
        <p className='mt-4 text-l'>order up: snapchat spectacles</p>
        <p className=' text-l text-gray-500'>a study on social AR</p>
      </div>

      <div>
        <Link to="/120es">
          <img src={onetwentyespic} className='rounded-2xl max-w-full max-h-full object-contain'></img>
        </Link>

        <p className='mt-4 text-l'>one twenty east state</p>
        <p className=' text-l text-gray-500'>a full stack digital archive</p>
      </div>

      <div>
        <a href="https://hhenryli.github.io/IntoTime/" target="_blank">
          <img src={intotimepic} className='rounded-2xl max-w-full max-h-full object-contain'></img>
        </a>
        <p className='mt-4 text-l'>into time</p>
        <p className=' text-l text-gray-500'>a time based interface</p>
      </div>
        <div>

        </div>
      </div>
    </div>
  </div>
  )

}