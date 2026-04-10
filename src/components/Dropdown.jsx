import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import Nav from './Nav';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => isOpen ? setIsOpen(false) : setIsOpen(true)} 
        className="text-gray-600 font-garamond absolute text-xl right-0 justify-center flex mt-6 mr-4 md:mr-8 z-50"
      >
        {isOpen ? '⇃' : '↿'}
      </button>

      {isOpen && (
        <div className='absolute right-0 text-right mr-8'>
          <Links />
        </div>
      )}
    </>
  );
}