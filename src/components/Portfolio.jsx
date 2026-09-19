import React, { useState } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import pplcover from '../assets/portfolio/design/PPL/ppl_cover.webp';
import fdcover from '../assets/portfolio/design/freshlydropped/cover.webp';
import havencover from '../assets/portfolio/design/Haven/cover.webp';
import memocover from '../assets/portfolio/design/Memo/memocover.webp';
import tworeelcover from '../assets/portfolio/design/TwoReel/TwoReelCover.png';
import fukaicover from '../assets/portfolio/design/Fukai/thumbnail.webp';
import tbmockup from '../assets/portfolio/design/ToteBag/Mockup.png';
import mamascover from '../assets/portfolio/design/1.png';
import workdayscover from '../assets/portfolio/design/Workday/cover.webp';

/* animation */
import collectionscover from '../assets/portfolio/animation/collections/collectionscover.png';
import aasaformalcover from '../assets/portfolio/animation/aasaformalcover.png';
import dropdeadcover from '../assets/motion/dropdeadcover.webp';

/* websites */
import retrode from '../assets/websites/retrode.png';

const CATEGORIES = {
  design: [
    // { type: 'link', route: '/haven', thumbnail: havencover, caption1: 'Haven — a concert assistant', caption2: 'UI/UX Design' },
    { type: 'link', route: '/memo', thumbnail: memocover, caption1: 'Memo — creating a unique visual identity', caption2: 'Brand, Product, Creative Direction' },
    { type: 'link', route: '/freshlydropped', thumbnail: fdcover, caption1: 'Freshly Dropped - a fresh, clean app', caption2: 'UI/UX Design' },
    { type: 'link', route: '/PPL', thumbnail: pplcover, caption1: 'PPL — A redesign connecting generations', caption2: 'Brand Redesign' },
    { type: 'link', route: '/workday', thumbnail: workdayscover, caption1: 'Workday — rethinking the user experience', caption2: 'UX Research and UI Design' },
    { type: 'link', route: '/fukai', thumbnail: fukaicover, caption1: 'Fukai — hojicha another way', caption2: 'Branding and Design' },

  ],
};

export default function Portfolio() {
  const [zoomedItem, setZoomedItem] = useState(null);

  // Flatten every category's items into one list, tagged with their category.
  const allItems = Object.entries(CATEGORIES).flatMap(([categoryName, items]) =>
    items.map((item, i) => ({ ...item, _category: categoryName, _key: getItemKey(item, i) }))
  );

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 mb-12">
        {allItems.length === 0 ? (
          <div className="text-center text-gray-500">No items in this category</div>
        ) : (
          <div className="columns-1 md:columns-2 lg:columns-2 gap-6 [column-fill:_balance]">
            {allItems.map((item) => (
              <div key={item._key} className="break-inside-avoid mb-6">
                <PortfolioCard item={item} onZoom={setZoomedItem} />
              </div>
            ))}
          </div>
        )}
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