import React, { useState } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import fdcover from '../assets/portfolio/design/freshlydropped/cover.png';
import havencover from '../assets/portfolio/design/haven/cover.webp';
import memocover from '../assets/portfolio/design/Memo/memocover.webp';
import tworeelcover from '../assets/portfolio/design/TwoReel/TwoReelCover.png';
import tangcover from '../assets/portfolio/design/Tang/tangcover.webp';
import tbmockup from '../assets/portfolio/design/ToteBag/Mockup.png';
import mamascover from '../assets/portfolio/design/1.png';

/* animation */
import collectionscover from '../assets/portfolio/animation/collections/collectionscover.png';
import aasaformalcover from '../assets/portfolio/animation/aasaformalcover.png';
import dropdeadcover from '../assets/motion/dropdeadcover.webp';

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
    { type: 'link', route: '/haven', thumbnail: havencover, caption1: 'Haven Mobile App', caption2: 'UI/UX Design'},
    { type: 'link', route: '/freshlydropped', thumbnail: fdcover, caption1: 'Freshly Dropped App', caption2: 'UI/UX Design'},
    { type: 'link', route: '/memo', thumbnail: memocover, caption1: 'Memo', caption2: 'Branding and Design'},
    { type: 'link', route: '/tang', thumbnail: tangcover, caption1: 'Tang', caption2: 'Branding and Design'},

    { type: 'link', route: '/collections', thumbnail: collectionscover, caption1: 'Collections', caption2: 'Animation'},
    { type: 'link', route: '/dropdead', thumbnail: dropdeadcover, caption1: 'Drop Dead', caption2: 'Motion Lyrics Video'},

  ]
};


export default function Portfolio() {
  const categories = ["design", "animation", "typography"];
  const selectedWork = ["painting","digital", "animation"];
  const [zoomedItem, setZoomedItem] = useState(null);

  return (
    <>   
      <div className="min-h-screen flex border-r border-l px-4 py-8">
        <div className="flex-1 mb-12">

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
    </>
  );
}


function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption}-${index}`;
}