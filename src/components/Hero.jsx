import React, { useRef } from 'react';
import Portfolio from './Portfolio.jsx';
import Nav from './Nav.jsx';
import Shelf from './Shelf.jsx';
import SkillsLine from './Skillsline.jsx';
import Footer from './Footer.jsx';
import Lottie from 'lottie-react';
import design from '../assets/animations/designxtech.gif'
import hearticon from '../assets/animations/heart.json';
import artboxicon from '../assets/animations/artbox.json';
import sides from '../assets/animations/sides.json';
import hLetter from '../assets/animations/handmade.json';
import eLetter from '../assets/animations/energetic.json';
import nLetter from '../assets/animations/novel.json';
import rLetter from '../assets/animations/risky.json';
import yLetter from '../assets/animations/yours.json';

import { Link } from 'react-router-dom';

export default function Hero() {
  const aboutRef = useRef(null);
  const artboxRef = useRef(null);
  const sidesRef = useRef(null);

  const hRef = useRef(null);
  const eRef = useRef(null);
  const nRef = useRef(null);
  const rRef = useRef(null);
  const yRef = useRef(null);

  const letters = [
    { key: 'h', src: hLetter, ref: hRef },
    { key: 'e', src: eLetter, ref: eRef },
    { key: 'n', src: nLetter, ref: nRef },
    { key: 'r', src: rLetter, ref: rRef },
    { key: 'y', src: yLetter, ref: yRef },
  ];

  const playingRef = useRef({});

  const holdOnFirstFrame = (ref) => {
    ref.current?.goToAndStop(0, true);
  };

  const handleHover = (letter) => {
    if (playingRef.current[letter.key]) return;
    playingRef.current[letter.key] = true;
    letter.ref.current?.goToAndPlay(0, true);
  };

  const handleComplete = (key) => {
    playingRef.current[key] = false;
  };

  return (
    <div className='p-6'>
      <div className=" min-h-screen relative">
      <Nav />
      <div className='border-l border-r border-b overflow-hidden mt-24'>
        <div className="flex ">
          {letters.map((letter) => (
            <div
              key={letter.key}
              className="flex-1"
              onMouseEnter={() => handleHover(letter)}
            >
              <Lottie
                lottieRef={letter.ref}
                animationData={letter.src}
                loop={false}
                autoplay={false}
                onDOMLoaded={() => holdOnFirstFrame(letter.ref)}
                onComplete={() => handleComplete(letter.key)}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='flex md:flex-row flex-col w-full border-l border-r border-b'>
        <div className='md:w-[40%] w-full px-6 pt-16 pb-6 flex flex-col justify-between gap-2'>
          <div className='w-[75%] flex flex-col gap-6'>
            <div>
              <h1>is focused on the intersection of</h1>
              <img src={design} />
            </div>

            <ul className='flex flex-col gap-4 w-[75%]'>
              <li className='flex flex-col gap-1'>
                <div
                  className='flex justify-between'
                  onMouseEnter={() => aboutRef.current?.goToAndPlay(0, true)}
                >
                  <div className="w-4 h-4">
                    <Lottie lottieRef={aboutRef} animationData={hearticon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                  </div>
                  <Link to="/about">ABOUT ME</Link>
                </div>
                <hr />
              </li>
              <li className='flex flex-col gap-1'>
                <div
                  className='flex justify-between'
                  onMouseEnter={() => artboxRef.current?.goToAndPlay(0, true)}
                >
                  <div className="w-4 h-4">
                    <Lottie lottieRef={artboxRef} animationData={artboxicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                  </div>
                  <Link to="/artbox">ARTBOX</Link>
                </div>
                <hr />
              </li>
              <li className='flex flex-col gap-1'>
                <div
                  className='flex justify-between'
                  onMouseEnter={() => sidesRef.current?.goToAndPlay(0, true)}
                >
                  <div className="w-4 h-4">
                    <Lottie lottieRef={sidesRef} animationData={sides} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                  </div>
                  <Link to="/sides">SIDES</Link>
                </div>
                <hr />
              </li>
            </ul>
          </div>
          <div className='h-full flex items-center'>
            <SkillsLine />
          </div>
          <h5>Based in New York, NYC</h5>
        </div>

        {/* Right column: Shelf now lives here */}
        <div className='md:w-[60%] md:border-t-0 border-t md:border-l border-l-0 w-full'>
          <Shelf />
        </div>
      </div>

        <Portfolio />
      </div>

      <Footer />
    </div>

  )
}