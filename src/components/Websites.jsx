import React, { useState } from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import mapofmusic from '../assets/websites/mapofmusic.png';
import intotime from '../assets/websites/IntoTimeCover.png';
import constellation from '../assets/websites/Constellation.png';

const websites = [
  { name: 'Map of Music', description: 'reshaping music visually', href: 'https://mapofmusic.framer.website/', src: mapofmusic },
  { name: 'Into Time', description: 'a journey through time', href: '#', src: intotime },
  { name: 'Constellation', description: 'connecting the dots', href: '#', src: constellation },
];

function WebsiteCard({ name, description, href, src }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="relative border flex items-end p-4 h-64 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className={`relative z-10 transition-colors duration-500 ${hovered ? 'text-white' : 'text-black'}`}>
        <p className="font-bold">{name}</p>
        <p className="text-xs">{description}</p>
      </div>
    </a>
  );
}

export default function Websites() {
  return (
    <div className='p-6'>
      <Nav />
      <div className="min-h-screen mt-24 flex flex-row">
        {/* Sidebar */}
        <div className="w-[20%] p-6 border-l border-b border-r flex flex-col items-center">
          <h1>Index</h1>

          <ul className='w-full'>
            {websites.map((site, i) => (
              <li key={i} className='w-full flex justify-between mb-2 border-b'>
                <p>{String(i + 1).padStart(2, '0')}</p>
                <p>{site.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Website Grid */}
        <div className="p-6 flex-1 border-b border-r">
          <h2>THE WORLD WIDE WEB</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {websites.map((site, i) => (
              <WebsiteCard key={i} {...site} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}