import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setShowNav(e.clientY >  window.innerHeight - 100); // show nav if cursor is within 100px from top
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <nav
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 justify-center flex px-8 py-3 bg-gray-200 z-50 transition-transform duration-400 ${
        showNav ? 'translate-y-0' : 'translate-y-30'
      }`}
    >
      <ul className="flex space-x-20 font-garamond">
        <li><Link to="/" className="text-gray-800 hover:underline">henry</Link></li>
        <li><Link to="/about" className="text-gray-800 hover:underline">about</Link></li>
        <li><Link to="/portfolio" className="text-gray-800 hover:underline">portfolio</Link></li>
        <li><Link to="/projects" className="text-gray-800 hover:underline">projects</Link></li>
        <li><Link to="/contact" className="text-gray-800 hover:underline">contact</Link></li>
      </ul>
    </nav>
  );
}
