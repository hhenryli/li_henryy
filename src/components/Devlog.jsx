import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import plinkycover from '../assets/plinkyplights/devlog_page.png';
import rpgcover from '../assets/RPG/devlog_sign.png';
import Nav from './Nav.jsx';

export default function Devlog() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-[#EEEEEE] flex items-center justify-center p-3">
        {/* book container */}
        <div className="w-full max-w-7xl">
          <div className="mx-auto rounded-2xl bg-[#f8f6f2] shadow-xl ring-1 ring-black/10 overflow-hidden">
            {/* spread */}
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              {/* gutter / spine */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-black/10" />
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 bg-gradient-to-r from-black/5 via-transparent to-black/5" />

              {/* left page */}
              <div className="p-4 md:p-10 bg-[#f8f6f2]">
                <div className="aspect-[4/3] w-full rounded-xl ring-1 ring-black/10 bg-white/60 overflow-hidden">
                  <Link to="./plinky">
                  <img
                    src={plinkycover}
                    alt="Plinky cover"
                    className="h-full w-full object-contain"
                  />
                  </Link>
                </div>

                <div className="mt-6 space-y-2 font-garamond">
                  <p>A look into how PlinkyPlights was made!</p>
                </div>
              </div>

              {/* right page */}
              <div className="p-8 md:p-10 bg-[#f8f6f2]">
                <div className="aspect-[4/3] w-full rounded-xl ring-1 ring-black/10 bg-white/60 overflow-hidden">
                  <Link to="./rpg"> 
                    <img
                      src={rpgcover}
                      alt="RPG cover"
                      className="h-full w-full object-contain"
                    />
                  </Link>
                </div>

                <div className="mt-6 space-y-2">
                  <p className="font-garamond">A devlog for my RPG project, made in Unity!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}