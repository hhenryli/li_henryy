import React, { useState } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import memocover from '../assets/portfolio/design/Memo/memocover.webp';
import fukaicover from '../assets/portfolio/design/Fukai/thumbnail.webp';
import tworeelcover from '../assets/portfolio/design/TwoReel/TwoReelCover.png';
import tangcover from '../assets/portfolio/design/Tang/tangcover.webp';
import veilcover from '../assets/portfolio/design/Veil/veilcover.webp';

import fdcover from '../assets/portfolio/design/freshlydropped/cover.webp';
import workdaycover from '../assets/portfolio/design/Workday/cover.webp';
import havencover from '../assets/portfolio/design/Haven/cover.webp';

/* posters */
import poster1 from '../assets/portfolio/design/Prints/1.webp';
import poster2 from '../assets/portfolio/design/Prints/2.webp';
import poster3 from '../assets/portfolio/design/Prints/3.webp';
import poster4 from '../assets/portfolio/design/Prints/4.webp';
import poster5 from '../assets/portfolio/design/Prints/5.webp';
import poster6 from '../assets/portfolio/design/Prints/6.webp';

/* motion */
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

const PRODUCT_ITEMS = [
  { type: 'link', route: '/fukai', thumbnail: fukaicover, caption1: 'Fukai', caption2: 'Branding and Design' },
  { type: 'link', route: '/memo', thumbnail: memocover, caption1: 'Memo', caption2: 'Branding and Design' },
  { type: 'link', route: '/tang', thumbnail: tangcover, caption1: 'Tang', caption2: 'Branding and Design' },
  { type: 'link', route: '/tworeel', thumbnail: tworeelcover, caption1: 'TwoReel', caption2: 'Branding and Design' },
  { type: 'link', route: '/veil', thumbnail: veilcover, caption1: 'Veil', caption2: 'Branding and Design' },
];

const UIUX_ITEMS = [
  { type: 'link', route: '/haven', thumbnail: havencover, caption1: 'Haven- a concert assistant', caption2: 'UI/UX Design' },
  { type: 'link', route: '/freshlydropped', thumbnail: fdcover, caption1: 'Freshly Dropped App', caption2: 'UI/UX Design' },
  { type: 'link', route: '/workday', thumbnail: workdaycover, caption1: 'Workday Careers Redesign', caption2: 'UI/UX Design' },
];

const FEATURED_ITEMS = [
  {
    type: 'link',
    route: '/dropdead',
    thumbnail: dropdeadcover,
    caption1: 'drop dead',
    caption2: 'motion lyrics video'
  },
  {
    type: 'link',
    route: '/collections',
    thumbnail: collectionscover,
    caption1: 'collections',
    caption2: 'animated film'
  },
  {
    type: 'link',
    route: '/projectmono',
    thumbnail: projectmonocover,
    caption1: 'project mono',
    caption2: 'short animation'
  },
  {
    type: 'link',
    route: '/supercut',
    thumbnail: supercutcover,
    caption1: 'supercut',
    caption2: 'lyric video'
  },
];

const CLIP_ITEMS = [
  {
    type: 'clip',
    src: jazzclip,
    poster: jazzcover,
    caption1: 'jazz',
    caption2: 'motion clip'
  },
  {
    type: 'clip',
    src: cat,
    poster: catcover,
    caption1: 'cat by the fire',
    caption2: 'motion clip'
  },
  {
    type: 'clip',
    src: swim,
    poster: swimcover,
    caption1: 'SWIM',
    caption2: 'motion clip'
  },
];


export default function Work() {
  const [zoomedItem, setZoomedItem] = useState(null);
  const [clipsMuted, setClipsMuted] = useState(true);

  const renderItems = (items) => (
    <div className="padding grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <PortfolioCard
          key={getItemKey(item, index)}
          item={item}
          onZoom={setZoomedItem}
        />
      ))}
    </div>
  );

  return (
    <div className="">
      <Nav />

      <div className="min-h-[75vh] py-24 flex flex-col gap-8">

        {/* PRODUCT */}
        <section className='flex flex-col gap-8'>
          <div className="padding py-24 flex md:flex-row flex-col md:gap-64 gap-8">
            <div className='w-full'>
              <h2>Product, Branding, and Marketing</h2>
            </div>

            <p>I approach product design by connecting user needs, visual design, and functionality to solve meaningful problems. I define the goals and context of a product, explore different directions, and develop solutions through research, iteration, and prototyping. Whether shaping a new concept or refining an existing product, I focus on creating systems that are useful, cohesive, and purposeful.</p>

          </div>

          {renderItems(PRODUCT_ITEMS)}
        </section>


        {/* UI/UX */}
        <section className='flex flex-col gap-8'>
          <div className="padding py-24 flex md:flex-row flex-col md:gap-64 gap-8 border-t border-[var(--border)]">
            <div className='w-full'>
              <h2>User Experience, Interface, and Flow</h2>
            </div>

            <p>I design interfaces and experiences that make digital products clear, intuitive, and engaging. I focus on how people navigate, interact, and make decisions within a product, using user flows, visual hierarchy, and interaction design to create thoughtful experiences. From early wireframes to polished interfaces and prototypes, I refine both the larger experience and the details that make it feel effortless.</p>

          </div>

          {renderItems(UIUX_ITEMS)}
        </section>

        {/* MOTION */}
        <section className="flex flex-col gap-8">
          <div className="padding py-24 flex md:flex-row flex-col md:gap-64 gap-8 border-t border-b border-[var(--border)]">
            <div className="w-full">
              <h2>Motion and Animation</h2>
            </div>

            <p>
              I use motion and animation to explore storytelling, rhythm, and visual
              expression. My work ranges from lyric videos and short animations to
              smaller experiments with movement and sound, using animation to bring
              ideas and visual systems to life.
            </p>
          </div>

          <div className="flex flex-col gap-16 border-b border-[var(--border)]">
            
            {/* Full Pieces */}
            <div className="flex flex-col gap-8 padding md:border-r border-b md:border-b-0">
              <h5 className="mb-6">FULL PIECES</h5>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {FEATURED_ITEMS.map((item, index) => (
                  <PortfolioCard
                    key={getItemKey(item, index)}
                    item={item}
                  />
                ))}
              </div>
            </div>

            {/* Quick Clips */}
            <div className="flex flex-col gap-8 padding">
              <div className="flex gap-8 justify-between items-center mb-6">
                <h5>QUICK CLIPS</h5>

                <button
                  onClick={() => setClipsMuted((prev) => !prev)}
                  className="text-xs border px-2 py-1"
                >
                  {clipsMuted ? 'Unmute' : 'Mute'}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
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
        </section>

      </div>

      <Footer />

      {zoomedItem && (
        <ZoomModal
          src={zoomedItem.src}
          onClose={() => setZoomedItem(null)}
        />
      )}
    </div>
  );
}


function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption1}-${index}`;
}