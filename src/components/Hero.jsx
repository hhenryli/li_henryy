import React, { useRef, useState } from 'react';
import Portfolio from './Portfolio.jsx';
import Nav from './Nav.jsx';
import Shelf from './Shelf.jsx';
import SkillsLine from './Skillsline.jsx';
import TypewriterWord from './Typewriter.jsx';
import PortfolioCard from './PortfolioCard.jsx';
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

/* painting */
import p4 from '../assets/portfolio/painting/4.JPG';
import p5 from '../assets/portfolio/painting/5.JPG';
import p6 from '../assets/portfolio/painting/6.JPG';
import p8 from '../assets/portfolio/painting/8.JPG';
import p10 from '../assets/portfolio/painting/10.JPG';
/* digital */
import d1 from '../assets/portfolio/digital/1.png';
import d2 from '../assets/portfolio/digital/2.png';
import d6 from '../assets/portfolio/digital/6.png';

const ARTBOX_ITEMS = [
  { type: 'image', src: p8, caption1: 'Music in Self', caption2: 'Acrylic on Wood, 2026', category: 'painting' },
  { type: 'image', src: p10, caption1: 'Figure 1', caption2: 'Oil on Canvas, 2026', category: 'painting' },


  { type: 'image', src: d1, caption1: 'Kite', caption2: 'Procreate, 2026', category: 'digital' },
  { type: 'image', src: d6, caption1: 'Strange Women', caption2: '(recreation) Procreate, 2024', category: 'digital' },
];

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
    <div className='padding'>
      <div className="min-h-screen relative w-full">
      <Nav />
      <div className='border-l border-r md:px-12 py-32 px-6'>
        <div className='overflow-hidden'>
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
        </div>
        <div className='w-full '>
         <h1 className='italic md:w-[50%]'>Product. UI/UX. Motion.</h1>
        </div>

        <div className='md:w-[50%]'>
          <TypewriterWord className="italic" words={['Designer', 'Developer', 'Illustrator', 'Animator']} /> <p></p>
        </div>

      </div>

      <div className="relative w-full flex items-center ">
        <div className="flex-1 border-t" />
        <div className="w-10 flex-shrink-0" />
        <div className="flex-1 border-t" />

        <button
          onClick={scrollToPortfolio}
          aria-label="Scroll to portfolio"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce hover:opacity-70 transition-opacity duration-200"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4v16M12 20l-6-6M12 20l6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      
      <div className='flex flex-col w-full border-l border-r'>
        <div ref={portfolioRef} className='md:w-[100%] w-full border-b'>
          <Portfolio />
        </div>
        
        <div className='w-full flex flex-col lg:flex-row'>
          <div className='w-full lg:flex-1 lg:basis-0 min-w-0 h-64 flex gap-2'>
            <div className='w-full py-12 px-6 flex flex-col justify-between'>
              <ul className='flex flex-col gap-4'>
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
              <h5>Based in New York, NYC</h5>
            </div>
            <div className="relative h-full flex flex-col items-center ">
              {/* Changed flex-1 to h-1/4 (25% from the top) */}
              <div className="h-1/4 border-l" />
              <div className="h-10 flex-shrink-0" />
              <div className="h-full border-l" />
              
              {/* Changed top-1/2 to top-1/4 to match the gap */}
              <div className='absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 12h16M20 12l-6-6M20 12l-6 6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div className='w-full py-12 px-6 flex flex-col gap-4 border-r-0 lg:border-r min-w-0'>
              <h3>Sample Artwork</h3>
              <div className="overflow-hidden w-full ">
                <div className="flex gap-2 w-max animate-marquee">
                  {[...ARTBOX_ITEMS, ...ARTBOX_ITEMS].map((item, index) => (
                    <button
                      key={`${getItemKey(item, index)}-${index}`}
                      onClick={() => setZoomedItem(item)}
                      className="h-24 w-24 flex-shrink-0 overflow-hidden hover:opacity-80 transition-opacity"
                    >
                      <img
                        src={item.thumbnail ?? item.src}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:flex-1 lg:basis-0 min-w-0 py-12 px-6 lg:border-t-0 border-t'>
            <Shelf />
          </div>
        </div>


      </div>


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