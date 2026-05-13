import React, { useState } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import fdcover from '../assets/portfolio/design/freshlydropped/cover.png';
import escover from '../assets/portfolio/design/120es/120escover.png';
import memocover from '../assets/portfolio/design/Memo/memocover.png';
import tbmockup from '../assets/portfolio/design/ToteBag/Mockup.png';
import mamascover from '../assets/portfolio/design/1.png';

/* animation */
import collectionscover from '../assets/portfolio/animation/collections/collectionscover.png';
import aasaformalcover from '../assets/portfolio/animation/aasaformalcover.png';

/* typography */
import typographycover from '../assets/portfolio/typography/1.jpg';

/* paintings */
import p1 from '../assets/portfolio/painting/1.JPG';
import p4 from '../assets/portfolio/painting/4.JPG';

/* digital */
import d1 from '../assets/portfolio/digital/1.png';
import d2 from '../assets/portfolio/digital/2.png';

/* animation */
import a1 from '../assets/portfolio/animation/1.GIF';
import a2 from '../assets/portfolio/animation/2.gif';

const CATEGORIES = {
  misc: [
    { type: 'link', route: '/mamadumpling', thumbnail: mamascover, caption1: 'Mamas Dumplings', caption2: 'Branding and Design'},
    { type: 'link', route: '/totebag', thumbnail: tbmockup, caption1: 'Bachelor Tote Bag', caption2: 'Branding and Design'},
  ],
  animation: [
  ],
  design: [
    { type: 'link', route: '/freshlydropped', thumbnail: fdcover, caption1: 'Freshly Dropped App', caption2: 'UI/UX Design'},
    { type: 'link', route: '/collections', thumbnail: collectionscover, caption1: 'Collections', caption2: 'Animation'},
    { type: 'link', route: '/memo', thumbnail: memocover, caption1: 'Memo', caption2: 'Branding and Design'},
    { type: 'link', route: '/120es', thumbnail: escover, caption1: '120 East State App', caption2: 'Full Stack Development'},
    { type: 'link', route: '/aasaformal', thumbnail: aasaformalcover, caption1: 'AASA Formals', caption2: 'Animation'},
  ],
  typography: [
    { type: 'link', route: '/typography', thumbnail: typographycover, caption1: 'Typography Study', caption2: 'Design'},
  ],
};

const selectedWorkItems = {
  painting: [
    { type: 'image', src: p4, caption1: 'Night', caption2: "Oil on Canvas, 2025"},
    { type: 'image', src: p1, caption1: 'The Room', caption2: "Acrylic on canvas, 2025"},
  ],
  digital: [
    { type: 'image', src: d1, caption1: 'Kite', caption2: "Procreate, 2026"},
    { type: 'image', src: d2, caption1: 'night, 2026', caption2: "Procreate, 2026" },
  ],
  animation: [
    { type: 'image', src: a1, caption1: '5-frame', caption2: "Stop-motion, 2026" },
    { type: 'image', src: a2, caption1: 'aasa-jump', caption2: "2D animation, 2024"},
  ],
}

export default function Portfolio() {
  const categories = ["design", "animation", "typography"];
  const selectedWork = ["painting","digital", "animation"];
  const [zoomedItem, setZoomedItem] = useState(null);

  return (
    <>   
    <Nav />
    <div className='py-12 mt-24 md:mt-12 md:py-24 fraunces-header w-full flex flex-col text-center gap-2 justify-center align-center'>
      <h3>Hi, I'm Henry, I'm a designer,</h3>
      <h3>developer, and animator.</h3>
    </div>

      <div className="min-h-screen flex">
        <div className="flex-1 px-12 mb-12">

          {categories.length === 0 ? (
            <div className="text-center text-gray-500">No items in this category</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((categoryName, categoryIndex) => {
                const items = CATEGORIES[categoryName] || [];
                
                return items.map((item, itemIndex) => (
                  <PortfolioCard
                    key={getItemKey(item, itemIndex)}
                    item={item}
                    onZoom={setZoomedItem}
                  />
                ));
              })}
            </div>
          )}
        </div>
      </div>

      <div className='pb-44 flex ml-12 mr-12 flex flex-col gap-2'>
        <hr></hr>
        <div className='flex justify-between'>
          <h1>Selected Work</h1>
          <a href='#work'>View All</a>
        </div>

        <div>
          {selectedWork.length === 0 ? (
            <div className="text-center text-gray-500">No items in this category</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {selectedWork.map((selectedItem, categoryIndex) => {
                const items = selectedWorkItems[selectedItem] || [];
                
                return items.map((item, itemIndex) => (
                  <PortfolioCard
                    key={getItemKey(item, itemIndex)}
                    item={item}
                    onZoom={setZoomedItem}
                  />
                ));
              })}
            </div>
          )}
        </div>
      </div>
      <Footer />

{/* Zoom modal */}
{zoomedItem && (
  <ZoomModal 
    src={zoomedItem.src} 
    onClose={() => setZoomedItem(null)} 
  />
)}

    </>
  );
}


function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption}-${index}`;
}