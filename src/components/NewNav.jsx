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
        flex
        flex-col
        items-start
        pointer-events-auto
        text-[var(--text-secondary)]
      "
    >
      <Link
        to="/"
        className="hover:opacity-50 transition-opacity"
      >
        Work
      </Link>

      <Link
        to="/about"
        className="hover:opacity-50 transition-opacity"
      >
        About
      </Link>

      <Link
        to="/play"
        className="hover:opacity-50 transition-opacity"
      >
        Play
      </Link>
    </nav>
  );
}