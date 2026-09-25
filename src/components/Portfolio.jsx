import React, { useState } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import cuecover from '../assets/portfolio/design/cue/cover.webp';
import cuevideo from '../assets/motion/cue.mp4';
import pplcover from '../assets/portfolio/design/PPL/ppl_cover.webp';
import fdcover from '../assets/portfolio/design/freshlydropped/cover.webp';
import havencover from '../assets/portfolio/design/Haven/cover.webp';
import havenvideo from '../assets/motion/haven.mp4';
import memocover from '../assets/portfolio/design/Memo/memocover.webp';
import fukaicover from '../assets/portfolio/design/Fukai/thumbnail.webp';
import workdayscover from '../assets/portfolio/design/Workday/cover.webp';

/* animation */
import collectionscover from '../assets/portfolio/animation/collections/collectionscover.png';
import aasaformalcover from '../assets/portfolio/animation/aasaformalcover.png';
import dropdeadcover from '../assets/motion/dropdeadcover.webp';

/* websites */
import retrode from '../assets/websites/retrode.png';

const CATEGORIES = {
  design: [
    {
      type: 'clip',
      route: '/cue',
      src: cuevideo,
      poster: cuecover,
      caption1: 'Real-time coordination for a campus help queue',
      caption2: 'UI/UX Design'
    },
    {
      type: 'clip',
      route: '/haven',
      src: havenvideo,
      poster: havencover,
      caption1: 'Turning concert night from a guess into a guide',
      caption2: 'UI/UX Design'
    },
    { type: 'link', route: '/PPL', thumbnail: pplcover, caption1: 'A library rebuilt for four generations at once', caption2: 'Brand Redesign' },
    { type: 'link', route: '/memo', thumbnail: memocover, caption1: 'Visual identity for collaborative travel planning', caption2: 'Brand, Creative Direction' },
    { type: 'link', route: '/freshlydropped', thumbnail: fdcover, caption1: 'Recipe discovery and ordering, built for home cooks', caption2: 'UI/UX Design' },


    { type: 'link', route: '/workday', thumbnail: workdayscover, caption1: 'Job applications, am I right?', caption2: 'UX Research and UI Design' },
    { type: 'link', route: '/fukai', thumbnail: fukaicover, caption1: 'Rethinking hojicha', caption2: 'Branding and Design' },

  ],
};

export default function Portfolio() {
  const [zoomedItem, setZoomedItem] = useState(null);

  // Flatten every category's items into one list, tagged with their category.
  const allItems = Object.entries(CATEGORIES).flatMap(([categoryName, items]) =>
    items.map((item, i) => ({ ...item, _category: categoryName, _key: getItemKey(item, i) }))
  );

  return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
  <div className="flex flex-col gap-12">
    {allItems
      .filter((_, i) => i % 2 === 0)
      .map((item) => (
        <PortfolioCard
          key={item._key}
          item={item}
          onZoom={setZoomedItem}
        />
      ))}
  </div>

  <div className="flex flex-col gap-12">
    {allItems
      .filter((_, i) => i % 2 === 1)
      .map((item) => (
        <PortfolioCard
          key={item._key}
          item={item}
          onZoom={setZoomedItem}
        />
      ))}
  </div>
</div>
  );
}

function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption1 ?? item.caption}-${index}`;
}