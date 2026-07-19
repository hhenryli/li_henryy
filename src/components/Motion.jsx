import React, { useState } from 'react';
import Nav from './Nav.jsx';
import dropdeadcover from '../assets/motion/dropdeadcover.png';
import collectionscover from '../assets/motion/collectionscover.png';
import projectmonocover from '../assets/motion/projectmonocover.png';

import jazzclip from '../assets/motion/jazz/jazz.mp4';
import cat from '../assets/motion/cat.mp4';
import swim from '../assets/motion/swim.mp4';
import Footer from './Footer.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import MOTION from '../assets/animations/MOTION.gif';

const FEATURED_ITEMS = [
  { type: 'link', route: '/dropdead', thumbnail: dropdeadcover, caption1: 'drop dead', caption2: 'motion lyrics video' },
  { type: 'link', route: '/collections', thumbnail: collectionscover, caption1: 'collections', caption2: 'animated film' },
  { type: 'link', route: '/collections', thumbnail: projectmonocover, caption1: 'collections', caption2: 'animated film' },
];

const CLIP_ITEMS = [
  { type: 'clip', src: jazzclip, poster: dropdeadcover, caption1: 'jazz', caption2: 'motion clip' },
  { type: 'clip', src: cat, poster: dropdeadcover, caption1: 'cat by the fire', caption2: 'motion clip' },
  { type: 'clip', src: swim, poster: dropdeadcover, caption1: 'cat by the fire', caption2: 'motion clip' },
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
        <div className='md:w-[65%] p-6 border-r h-screen overflow-y-auto'>
          <h3 className='mb-4'>Full Pieces</h3>
          <div className="grid grid-cols-2 gap-8">
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
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
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