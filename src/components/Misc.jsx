import React, { useState } from 'react';
import Nav from './Nav.jsx';
import Dropdown from './Dropdown.jsx';
import BackToTop from './BackToTop.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import ds1 from '../assets/portfolio/design/1.png';
import ds2 from '../assets/portfolio/design/2.png';
import ds4 from '../assets/portfolio/design/4.png';
import ds4pdf from '../assets/portfolio/design/4.pdf';
import ds5 from '../assets/portfolio/design/5.jpg';

/* typography */
import t1 from '../assets/portfolio/typography/1.jpg';
import t1pdf from '../assets/portfolio/typography/1.pdf';
import t2 from '../assets/portfolio/typography/2.jpg';
import t2pdf from '../assets/portfolio/typography/2.pdf';
import t3 from '../assets/portfolio/typography/3.jpg';
import t3pdf from '../assets/portfolio/typography/3.pdf';
import t4 from '../assets/portfolio/typography/4.jpg';
import t4pdf from '../assets/portfolio/typography/4.pdf';
import t5 from '../assets/portfolio/typography/5.jpg';
import t5pdf from '../assets/portfolio/typography/5.pdf';

/* animation */
import a1 from '../assets/portfolio/animation/1.gif';
import a2 from '../assets/portfolio/animation/2.gif';
import a3 from '../assets/portfolio/animation/3.gif';
import a4 from '../assets/portfolio/animation/4.gif';

const CATEGORIES = {
  design: [
    { type: 'image', src: ds2, caption: 'bach, 2026' },
    { type: 'pdf', src: ds4, caption: 'Super Frog Saves Tokyo, 2024', pdf: ds4pdf },
    { type: 'image', src: ds5, caption: 'prom, 2024' },
    { type: 'image', src: ds1, caption: 'dumplings, 2023' },
  ],
  typography: [
    { type: 'pdf', src: t1, caption: 'T-y-p-o-g-r-a-p-h-y, 2025', pdf: t1pdf },
    { type: 'pdf', src: t2, caption: 'The new graphic languages, 2025', pdf: t2pdf },
    { type: 'pdf', src: t3, caption: 'A Reexamination, 2025', pdf: t3pdf },
    { type: 'pdf', src: t4, caption: 'A Reexamination of a Reexamination, 2025', pdf: t4pdf },
    { type: 'pdf', src: t5, caption: 'Adam, why Arial?, 2025', pdf: t5pdf },
    {
      type: 'vimeo',
      embedUrl:
        'https://player.vimeo.com/video/1144629354?badge=0&autopause=0&player_id=0&app_id=58479',
      caption: 'Visualizer, 2025',
    },
  ],
  animation: [
    { type: 'youtube', videoId: '0BhQXyzZz-Q', caption: 'Collections-Draft 1, 2026' },
    { type: 'image', src: a1, caption: '5-frame, 2025' },
    { type: 'youtube', videoId: 'iN-2GgZQPj0', caption: 'A diorama, 2025' },
    { type: 'youtube', videoId: 'KDwhUD2MsR8', caption: '5 Minute, 2025' },
    { type: 'image', src: a3, caption: 'cup, 2025' },
    { type: 'image', src: a2, caption: 'aasa-jump, 2025' },
    { type: 'image', src: a4, caption: 'aasa-biglittle, 2025' },,
  ],
};

export default function Portfolio() {
  const categories = ["design", "typography", "animation"];
  const [zoomedItem, setZoomedItem] = useState(null);

  return (
    <div className="min-h-screen relative pb-8 flex">
      <Nav />
      <Dropdown />
      <BackToTop />
      <h1 className='absolute text-3xl font-garamond ml-8 mt-20'>misc</h1>
      <div className="flex-1 px-8 md:mt-20 mt-36">
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