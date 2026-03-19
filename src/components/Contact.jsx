import React from 'react';
import Nav from './Nav.jsx';

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen flex flex-col justify-center items-center font-garamond text-center space-y-4 text-gray-800 bg-[#EEEEEE]">
        <h1 className="text-7xl">contact</h1>
        <div className="w-24 border-t border-gray-400"></div>
        <p className="text-lg italic max-w-md">
          For collaborations, inquiries, or just to say hi —
        </p>
        <a href="mailto:li.henry0508@gmail.com" className="text-2xl hover:underline">
          li.henry0508@gmail.com
        </a>
        <div className="flex space-x-6 mt-4 text-sm uppercase tracking-wide">
          <a href="https://www.instagram.com/li_henryy/" target="_blank" className="hover:underline">Instagram</a>
          <a href="https://www.linkedin.com/in/henryli0508/" target="_blank" className="hover:underline">LinkedIn</a>
          <a href="https://github.com/hhenryli" target='_blank' className="hover:underline">GitHub</a>
        </div>
      </div>
    </div>

  );
}