import React, { useRef, useState } from 'react';
import Portfolio from './Portfolio.jsx';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';

import hLetter from '../assets/animations/handmade.json';
import eLetter from '../assets/animations/energetic.json';
import nLetter from '../assets/animations/novel.json';
import rLetter from '../assets/animations/risky.json';
import yLetter from '../assets/animations/yours.json';
import pplcover from '../assets/portfolio/design/PPL/ppl_cover.webp';

import { Link } from 'react-router-dom';

export default function Hero() {
  const [zoomedItem, setZoomedItem] = useState(null);
  const aboutRef = useRef(null);
  const artboxRef = useRef(null);
  const sidesRef = useRef(null);
  const portfolioRef = useRef(null); 

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
  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
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
    <div className=''>
      <Nav />
      <div className="padding relative w-full">
      <div className='pt-24 pb-32 flex flex-col gap-7'>
        {/* <div className='overflow-hidden'>
          <div className="flex md:py-0 md:w-[75%]">
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
                  autoplay={true}
                  onComplete={() => handleComplete(letter.key)}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            ))}
          </div>
        </div> */}
        <div>
          <h5>[PRODUCT DESIGN · UI/UX · MOTION]</h5>
        </div>
        <div className='w-full '>
         <h1 className='md:w-[50%]'>Product designer who thinks in systems.</h1>
        </div>

        <div className='md:w-[60%]'>
          I design with both research and craft, grounding every decision in a real problem, then following it through to a polished, detailed interface.
        </div>

      </div>

      <div className="pb-6 relative flex justify-center items-center ">
              

      <button
      
          onClick={scrollToPortfolio}
          aria-label="Scroll to portfolio"
          className="animate-bounce hover:opacity-70 transition-opacity duration-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4v16M12 20l-6-6M12 20l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>

      <div className='flex flex-col w-full'>
        <div ref={portfolioRef} className='md:w-[100%] w-full'>
          <Portfolio />
        </div>
      </div>
      </div>

      <div className='flex md:flex-row flex-col padding gap-64 py-12 border-t border-[var(--border)]'>
        <div className='w-full'>
          <h5>How I Work</h5>
        </div>

        <h2>My work spans brand identity, logo design, digital products, and interface design, allowing me to approach problems from both visual and functional perspectives. I define the goals, audience, and context of each project, then develop concepts through research and iteration. From broader visual systems to individual interactions, I create work that is cohesive, purposeful, and responsive to the needs of the project.</h2>
      </div>

      <Footer />
    </div>

  )
}

function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption1}-${index}`;
}