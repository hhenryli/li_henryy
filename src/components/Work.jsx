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

const PRINT_ITEMS = [
  { type: 'image', src: poster1, caption1: 'Wolf Parade', caption2: 'Swiss Design' },
  { type: 'image', src: poster2, caption1: 'Dominic Fike', caption2: 'Swiss Design' },
  { type: 'image', src: poster3, caption1: 'Henry Li', caption2: 'Swiss Design' },
  { type: 'image', src: poster4, caption1: 'Reaching for the Stars', caption2: 'Gradient Design' },
  { type: 'image', src: poster5, caption1: 'In the Deep', caption2: 'Gradient Design' },
  { type: 'image', src: poster6, caption1: 'Petal', caption2: 'Gradient Design' },
];


export default function Work() {
  const [zoomedItem, setZoomedItem] = useState(null);

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

      <div className="min-h-[75vh] py-24">

        {/* PRODUCT */}
        <section className='flex flex-col gap-8'>
          <div className="padding py-24 flex md:flex-row flex-col md:gap-64 gap-8 border-t border-b border-[var(--border)]">
            <div className='w-full'>
              <h2>Product, Branding, and Marketing</h2>
            </div>

            <p>I approach product design by connecting user needs, visual design, and functionality to solve meaningful problems. I define the goals and context of a product, explore different directions, and develop solutions through research, iteration, and prototyping. Whether shaping a new concept or refining an existing product, I focus on creating systems that are useful, cohesive, and purposeful.</p>

          </div>

          {renderItems(PRODUCT_ITEMS)}
        </section>


        {/* UI/UX */}
        <section className='flex flex-col gap-8'>
          <div className="padding py-24 flex md:flex-row flex-col md:gap-64 gap-8  border-t border-b border-[var(--border)]">
            <div className='w-full'>
              <h2>User Experience, Interface, and Flow</h2>
            </div>

            <p>I design interfaces and experiences that make digital products clear, intuitive, and engaging. I focus on how people navigate, interact, and make decisions within a product, using user flows, visual hierarchy, and interaction design to create thoughtful experiences. From early wireframes to polished interfaces and prototypes, I refine both the larger experience and the details that make it feel effortless.</p>

          </div>

          {renderItems(UIUX_ITEMS)}
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