import React from 'react';
import Nav from './Nav.jsx';
import Portfolio from './Portfolio.jsx';
import Links from './Links.jsx';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div>
      <div className="min-h-screen relative">

        <div className='absolute'>
          <Links />
        </div>
        <Portfolio />
      </div>
    </div>

  )
}