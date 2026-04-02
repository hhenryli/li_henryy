import React from 'react';
import Nav from './Nav.jsx';

export default function Hero() {
  return (
    <div>
      <div className="min-h-screen relative">
        <Nav /> {/* absolute navbar will sit on top */}
        <div className="flex flex-col justify-center items-center text-center min-h-screen">
          <h1 className="font-garamond text-8xl md:text-8xl mb-2">henry li</h1>
          <h2 className="font-inter text-xl md:text-2xl">computer science + design</h2>
        </div>
      </div>
    </div>

  )
}