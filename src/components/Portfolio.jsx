import React, { useState } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import BackToTop from './BackToTop.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import ds1 from '../assets/portfolio/design/1.png';
import ds2 from '../assets/portfolio/design/2.png';
import ds3 from '../assets/portfolio/design/3.png';
import ds3pdf from '../assets/portfolio/design/3.pdf';
import ds4 from '../assets/portfolio/design/4.png';
import ds4pdf from '../assets/portfolio/design/4.pdf';

const CATEGORIES = {
  animation: [
    { type: 'youtube', videoId: '9N1gvXReOBY', caption: 'collections- animation film 2026' },
    { type: 'youtube', videoId: 'iN-2GgZQPj0', caption: 'a diorama, 2025' },
    { type: 'youtube', videoId: 'KDwhUD2MsR8', caption: '5 minutes, 2025' },
    { type: 'youtube', videoId: '-fzAv9m9q5k', caption: 'aasa-formals, 2024' },
    { type: 'youtube', videoId: 'rJ3zCO4GGBo', caption: 'snoopy, 2024' },
  ],
  design: [
    { type: 'pdf', src: ds3, caption: 'dots, 2026', pdf: ds3pdf },
    { type: 'image', src: ds2, caption: 'bach, 2026' },
    { type: 'pdf', src: ds4, caption: 'super Frog Saves Tokyo, 2024', pdf: ds4pdf },
    { type: 'image', src: ds1, caption: 'dumplings, 2023' },
  ],
  typography: [
    {
      type: 'vimeo',
      embedUrl:
        'https://player.vimeo.com/video/1144629354?badge=0&autopause=0&player_id=0&app_id=58479',
      caption: 'what is typography? visualizer, 2025',
    },
  ],
};

export default function Portfolio() {
  const categories = ["animation", "design", "typography"];
  const [zoomedItem, setZoomedItem] = useState(null);

  return (
    <div className="min-h-screen flex pb-8">
      <Nav />
      <BackToTop />

      <div className="flex-1 px-8 mt-[50vh] md:mt-20">
        {categories.length === 0 ? (
          <div className="text-center text-gray-500">No items in this category</div>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
          >
            <div> </div>
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

      {zoomedItem && (
          <ZoomModal 
            src={zoomedItem.src} 
            caption={zoomedItem.caption} 
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
  return `${item.type}-${item.caption}-${index}`;
}