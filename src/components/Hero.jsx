import React, { useRef, useState } from 'react';
import Portfolio from './Portfolio.jsx';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';

import { Link } from 'react-router-dom';
import HeroIntro from './HeroIntro.jsx';

export default function Hero() {
  const portfolioRef = useRef(null); 

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const playingRef = useRef({});

  return (
    <div className=''>
      <Nav />
      <div className="padding relative w-full">
      <div className='pt-32 pb-32 flex flex-col gap-8'>
        <h5>[Product • Motion • UI/UX]</h5>
        <div className='w-full '>
         <HeroIntro />
        </div>
        <div className='flex flex-col gap-8'>
          <p className='md:w-[60%] w-[90%]'>
            I'm an engineer + designer, passionate about creating experiences at the intersection of technology and design. In my free time, I love painting, creating music video animations, and swimming! 
          </p>

          <p className='md:w-[60%] w-[90%]'>
            
          </p>
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