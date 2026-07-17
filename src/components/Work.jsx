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

const DESIGN_ITEMS = [
  { type: 'link', route: '/freshlydropped', thumbnail: fdcover, caption1: 'Freshly Dropped App', caption2: 'UI/UX Design', category: 'uiux' },
  { type: 'link', route: '/120es', thumbnail: escover, caption1: '120 East State App', caption2: 'Full Stack Development', category: 'uiux' },
  { type: 'link', route: '/memo', thumbnail: memocover, caption1: 'Memo', caption2: 'Branding and Design', category: 'branding' },
  { type: 'link', route: '/totebag', thumbnail: tbmockup, caption1: 'Bachelor Tote Bag', caption2: 'Branding and Design', category: 'branding' },
  { type: 'link', route: '/mamadumpling', thumbnail: mamascover, caption1: 'Mamas Dumplings', caption2: 'Branding and Design', category: 'branding' },
  // Add poster pieces here as you make them, e.g.:
  // { type: 'image', src: posterImg, caption1: 'Poster Title', caption2: 'Poster Design, 2026', category: 'poster' },
];

const FILTERS = [
  { key: 'branding', label: 'DESIGN & BRANDING' },
  { key: 'uiux', label: 'UI/UX' },
  { key: 'poster', label: 'PRINT' },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('branding');
  const [zoomedItem, setZoomedItem] = useState(null);

  const filteredItems = DESIGN_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className='p-6'>
      <Nav />
      <div className="min-h-screen mt-24 flex flex-row">
        {/* Filter Buttons */}
        <div className="border-l border-b border-r">
          <div className="mt-4 flex gap-3 flex-wrap flex flex-col justify-between items-center">
            <div className='p-12 flex flex-col border-b gap-4'>
              {FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  className={`px-8 py-3 rounded-full border text-sm transition-transform duration-200 hover:scale-105 ${
                    activeFilter === filter.key
                      ? 'bg-black text-white border-black'
                      : 'bg-transparent border-gray-400 text-gray-800'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="flex-1 border-r border-b">
          <div className='p-6 border-b'>
            <h2>DESIGN</h2>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500">No items in this category yet</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-4">
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