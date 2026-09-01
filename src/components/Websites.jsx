import React from 'react';
import { WebsiteCard } from './PortfolioCard.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import retrode from '../assets/websites/retrode.png';
import mapofmusic from '../assets/websites/mapofmusic.png';
import constellation from '../assets/websites/Constellation.png';
import Vtone from '../assets/websites/Vtone.png';
import intotime from '../assets/websites/IntoTimeCover.png';
import scioly from '../assets/websites/scioly.png';

const websites = [
  { name: 'retrode', description: 'a blast to the past: games, apps, and more', href: 'https://retrode.vercel.app/', src: retrode },
  { name: 'Map of Music', description: 'reshaping music visually', href: 'https://mapofmusic.framer.website/', src: mapofmusic },
  { name: 'Constellation', description: 'connecting the dots', href: 'https://hhenryli.github.io/spaces/', src: constellation },
  { name: 'VTone Music', description: 'Web Developer', href: 'https://vtonemusic.weebly.com/', src: Vtone },
  { name: 'Into Time', description: 'a journey through time', href: 'https://hhenryli.github.io/IntoTime/', src: intotime },
  { name: 'Princeton SciOly Website', description: 'webmaster', href: 'https://scioly.princeton.edu/', src: scioly },
];

export default function Websites() {
  return (
    <div className='padding'>
      <Nav />
      <div className="min-h-screen lg:mt-24 mt-16 flex md:flex-row flex-col">
        {/* Sidebar */}
        <div className="md:w-[20%] w-full p-6 border-l border-r flex flex-col items-center gap-4">
          <h3>Index</h3>

          <ul className='w-full'>
            {websites.map((site, i) => (
              <li key={i} className='w-full flex justify-between mb-2 border-b'>
                <p>{String(i + 1).padStart(2, '0')}</p>
                <p className='text-end'>{site.name}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Website Grid */}
        <div className="p-6 flex-1 border-r md:border-l-0 border-l flex flex-col gap-4">
          <h1>THE WORLD WIDE WEB</h1>
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