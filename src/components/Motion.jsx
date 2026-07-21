import React, { useState } from 'react';
import Nav from './Nav.jsx';
import dropdeadcover from '../assets/motion/dropdeadcover.webp';
import collectionscover from '../assets/motion/collectionscover.webp';
import projectmonocover from '../assets/motion/projectmonocover.webp';
import supercutcover from '../assets/motion/supercutcover.webp';

import jazzclip from '../assets/motion/jazz/jazz.mp4';
import jazzcover from '../assets/motion/jazz/jazz.webp';
import cat from '../assets/motion/cat.mp4';
import catcover from '../assets/motion/cat.webp';
import swim from '../assets/motion/swim.mp4';
import swimcover from '../assets/motion/swimcover.webp';
import Footer from './Footer.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import MOTION from '../assets/animations/MOTION.gif';

const FEATURED_ITEMS = [
  { type: 'link', route: '/dropdead', thumbnail: dropdeadcover, caption1: 'drop dead', caption2: 'motion lyrics video' },
  { type: 'link', route: '/collections', thumbnail: collectionscover, caption1: 'collections', caption2: 'animated film' },
  { type: 'link', route: '/projectmono', thumbnail: projectmonocover, caption1: 'project mono', caption2: 'short animation' },
  { type: 'link', route: '/supercut', thumbnail: supercutcover, caption1: 'project mono', caption2: 'short animation' },
];

const CLIP_ITEMS = [
  { type: 'clip', src: jazzclip, poster: jazzcover, caption1: 'jazz', caption2: 'motion clip' },
  { type: 'clip', src: cat, poster: catcover, caption1: 'cat by the fire', caption2: 'motion clip' },
  { type: 'clip', src: swim, poster: swimcover, caption1: 'SWIM', caption2: 'motion clip' },
];

export default function Motion() {
  const [clipsMuted, setClipsMuted] = useState(true);

  return (
    <div className='p-6'>
      <Nav />
      <div className='mt-[96px] flex border-l border-r justify-between items-center'>
        <div className='w-full p-6 flex flex-col items-center gap-6'>
          <img src={MOTION} />
        </div>
      </div>

      <div className='flex flex-col md:flex-row border-t border-l border-r'>
        <div className='md:w-[65%] p-6 md:border-r border-r-0 border-b md:border-b-0 overflow-y-auto'>
          <h3 className='mb-4'>Full Pieces</h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {FEATURED_ITEMS.map((item, index) => (
              <PortfolioCard
                key={getItemKey(item, index)}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className='md:w-[35%] p-6 h-screen overflow-y-auto'>
          <div className='flex justify-between items-center mb-4'>
            <h3>Quick Clips</h3>
            <button onClick={() => setClipsMuted((prev) => !prev)} className='text-xs border px-2 py-1'>
              {clipsMuted ? 'Unmute' : 'Mute'}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {CLIP_ITEMS.map((item, index) => (
              <PortfolioCard
                key={getItemKey(item, index)}
                item={item}
                muted={clipsMuted}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}-${index}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption1}-${index}`;
}