import React from 'react';
import { Link } from 'react-router-dom';

export default function NewNav() {
  return (
    <nav
      className="
        absolute
        top-0
        left-0
        padding
        py-6
        gap-2
        flex
        flex-col
        items-start
        pointer-events-auto
        text-[var(--text-secondary)]
        z-50
      "
    >
      <Link
        to="/"
        className="hover:opacity-50 transition-opacity"
      >
        <p className='meta'>
          Work
        </p>
      </Link>

      <Link
        to="/about"
        className="hover:opacity-50 transition-opacity"
      >
        <p className='meta'>
          About
        </p>
      </Link>

      <Link
        to="/play"
        className="hover:opacity-50 transition-opacity"
      >
        <p className='meta'>
          Play
        </p>
      </Link>
    </nav>
  );
}