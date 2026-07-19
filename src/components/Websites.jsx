import React from 'react';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import mapofmusic from '../assets/websites/mapofmusic.png';
import intotime from '../assets/websites/IntoTimeCover.png';
import constellation from '../assets/websites/Constellation.png';
import scioly from '../assets/websites/scioly.png';

const websites = [
  { name: 'Map of Music', description: 'reshaping music visually', href: 'https://mapofmusic.framer.website/', src: mapofmusic },
  { name: 'Into Time', description: 'a journey through time', href: 'https://hhenryli.github.io/IntoTime/', src: intotime },
  { name: 'Constellation', description: 'connecting the dots', href: 'https://hhenryli.github.io/spaces/', src: constellation },
  { name: 'Princeton SciOly Website', description: 'webmaster', href: 'https://scioly.princeton.edu/', src: scioly },
];

function WebsiteCard({ name, description, href, src }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className="border flex flex-col"
    >
      <img src={src} className="w-full aspect-video object-cover" />
      <div className="p-4">
        <p className="font-bold">{name}</p>
        <p className="text-xs text-gray-500">{description}</p>
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
        <div className="w-[20%] p-6 border-l border-b border-r flex flex-col items-center gap-4">
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
        <div className="p-6 flex-1 border-b border-r flex flex-col gap-4">
          <h2>THE WORLD WIDE WEB</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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