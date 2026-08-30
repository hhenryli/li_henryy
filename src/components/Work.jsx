import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import memocover from '../assets/portfolio/design/Memo/memocover.webp';
import fukaicover from '../assets/portfolio/design/Fukai/thumbnail.jpg';
import tworeelcover from '../assets/portfolio/design/TwoReel/TwoReelCover.png';
import tangcover from '../assets/portfolio/design/Tang/tangcover.webp';
import veilcover from '../assets/portfolio/design/Veil/veilcover.webp';

import fdcover from '../assets/portfolio/design/freshlydropped/cover.png';
import workdaycover from '../assets/portfolio/design/Workday/cover.webp';
import havencover from '../assets/portfolio/design/Haven/cover.webp';

/* posters */
import poster1 from '../assets/portfolio/design/Prints/1.webp';
import poster2 from '../assets/portfolio/design/Prints/2.webp';
import poster3 from '../assets/portfolio/design/Prints/3.webp';
import poster4 from '../assets/portfolio/design/Prints/4.webp';
import poster5 from '../assets/portfolio/design/Prints/5.webp';
import poster6 from '../assets/portfolio/design/Prints/6.webp';


const DESIGN_ITEMS = [
  { type: 'link', route: '/haven', thumbnail: havencover, caption1: 'Haven Mobile App', caption2: 'UI/UX Design', category: 'uiux' },
  { type: 'link', route: '/freshlydropped', thumbnail: fdcover, caption1: 'Freshly Dropped App', caption2: 'UI/UX Design', category: 'uiux' },
  { type: 'link', route: '/workday', thumbnail: workdaycover, caption1: 'Workday Careers Redesign', caption2: 'UI/UX Design', category: 'uiux' },


  { type: 'link', route: '/fukai', thumbnail: fukaicover, caption1: 'Fukai', caption2: 'Branding and Design', category: 'branding' },
  { type: 'link', route: '/memo', thumbnail: memocover, caption1: 'Memo', caption2: 'Branding and Design', category: 'branding' },
  { type: 'link', route: '/tang', thumbnail: tangcover, caption1: 'Tang', caption2: 'Branding and Design', category: 'branding' },
  { type: 'link', route: '/tworeel', thumbnail: tworeelcover, caption1: 'TwoReel', caption2: 'Branding and Design', category: 'branding' },
  { type: 'link', route: '/veil', thumbnail: veilcover, caption1: 'Veil', caption2: 'Branding and Design', category: 'branding' },

  { type: 'image', src: poster1, caption1: 'Wolf Parade', caption2: 'Swiss Design', category: 'poster' },
  { type: 'image', src: poster2, caption1: 'Dominic Fike', caption2: 'Swiss Design', category: 'poster' },
  { type: 'image', src: poster3, caption1: 'Henry Li', caption2: 'Swiss Design', category: 'poster' },
  { type: 'image', src: poster4, caption1: 'Reaching for the Stars', caption2: 'Gradient Design', category: 'poster' },
  { type: 'image', src: poster5, caption1: 'In the Deep', caption2: 'Gradient Design', category: 'poster' },
  { type: 'image', src: poster6, caption1: 'Petal', caption2: 'Gradient Design', category: 'poster' },
];

const FILTERS = [
  { key: 'branding', label: 'PRODUCT' },
  { key: 'uiux', label: 'UI/UX' },
  { key: 'poster', label: 'PRINT' },
];

export default function Work() {
  const [searchParams] = useSearchParams();

  const [activeFilter, setActiveFilter] = useState(searchParams.get('filter') || 'branding')
  const [zoomedItem, setZoomedItem] = useState(null);

  const filteredItems = DESIGN_ITEMS.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const filterFromUrl = searchParams.get('filter');
    if (filterFromUrl) {
      setActiveFilter(filterFromUrl);
    }
  }, [searchParams]);

  return (
    <div className='p-6'>
      <Nav />
      <div className="min-h-[75vh] mt-10 md:mt-24 flex md:flex-row flex-col">
        {/* Filter Buttons */}
        <div className="border-l border-r min-w-60">
          <div className="flex gap-3 flex-wrap flex md:flex-col flex-row items-center">
            <div className='w-full px-6 py-12 flex flex-col border-b gap-4'>
              {FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-8 py-3 rounded-full border text-sm transition-transform duration-200 hover:scale-105 ${
                    activeFilter === filter.key
                      ? 'bg-[#ebebebd9] text-[#1c1c1c]'
                      : ''
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="flex-1 border-r border-l md:border-l-0">
          <div className='p-6 border-b'>
            <h2>{FILTERS.find(f => f.key === activeFilter)?.label}</h2>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500">No items in this category yet</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-6">
              {filteredItems.map((item, index) => (
                <PortfolioCard
                  key={getItemKey(item, index)}
                  item={item}
                  onZoom={setZoomedItem}
                />
              ))}
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
    </div>
  );
}

function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption1}-${index}`;
}