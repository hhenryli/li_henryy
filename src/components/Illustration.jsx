import React, { useState } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Dropdown from './Dropdown.jsx';
import BackToTop from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';

/* paintings */
import p1 from '../assets/portfolio/painting/1.JPG';
import p2 from '../assets/portfolio/painting/2.JPG';
import p3 from '../assets/portfolio/painting/3.JPG';
import p4 from '../assets/portfolio/painting/4.JPG';
import p5 from '../assets/portfolio/painting/5.JPG';
import p6 from '../assets/portfolio/painting/6.JPG';
import p7 from '../assets/portfolio/painting/7.JPG';

/* digital */
import d1 from '../assets/portfolio/digital/1.png';
import d2 from '../assets/portfolio/digital/2.png';
import d3 from '../assets/portfolio/digital/3.jpg';
import d4 from '../assets/portfolio/digital/4.jpg';
import d5 from '../assets/portfolio/digital/5.png';
import d6 from '../assets/portfolio/digital/6.png';
import d7 from '../assets/portfolio/digital/7.png';
import d8 from '../assets/portfolio/digital/8.jpg';
import d9 from '../assets/portfolio/digital/9.png';

const CATEGORIES = {
  painting: [
    { type: 'image', src: p1, caption: 'The Room, acrylic on canvas, 2025' },
    { type: 'image', src: p2, caption: 'Statues, acrylic, 2025' },
    { type: 'image', src: p3, caption: 'Foil, acrylic, 2025' },
    { type: 'image', src: p4, caption: 'Night, acrylic/oil, 2025' },
    { type: 'image', src: p5, caption: 'Day, acrylic/oil, 2025' },
    { type: 'image', src: p6, caption: 'self, acrylic/oil, 2025' },
    { type: 'image', src: p7, caption: 'Foil, acrylic, 2025' },
  ],
  digital: [
    { type: 'image', src: d1, caption: 'Kite, 2026' },
    { type: 'image', src: d2, caption: 'night, 2026' },
    { type: 'image', src: d5, caption: 'dessert (recreation), 2024' },
    { type: 'image', src: d6, caption: 'her (recreation), 2024' },
    { type: 'image', src: d7, caption: 'diner (recreation), 2024' },
    { type: 'image', src: d8, caption: 'Rain, 2024' },
    { type: 'image', src: d9, caption: 'covers, 2024' },
    { type: 'image', src: d3, caption: 'strands (recreation), 2023' },
    { type: 'image', src: d4, caption: 'dip (recreation), 2023' },
  ],
};

export default function Illustration() {
  const categories = ["painting", "digital"];
  const [zoomedItem, setZoomedItem] = useState(null);

  return (
    <div className='min-h-screen relative pb-8'>
      <Nav />
      <Dropdown />
      <BackToTop />
      <div className="flex">
        <h1 className='absolute ml-8 mt-20 text-3xl'>Illustrations</h1>

        <div className="flex-1 px-8 mt-36">
          {categories.map((categoryName, categoryIndex) => {
            const items = CATEGORIES[categoryName] || [];
            
            return (
              <div key={categoryName} className="">
                <div
                  className="grid gap-6"
                  style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  }}
                >
                  {items.map((item, itemIndex) => (
                    <PortfolioCard
                      key={getItemKey(item, itemIndex)}
                      item={item}
                      onZoom={setZoomedItem} // Pass whole item
                    />
                  ))}
                </div>
                
                {categoryIndex < categories.length - 1 && (
                  <hr className="my-8 border-gray-300" />
                )}
              </div>
            );
          })}
        </div>

        {zoomedItem && (
          <ZoomModal 
            src={zoomedItem.src} 
            caption={zoomedItem.caption} 
            onClose={() => setZoomedItem(null)} 
          />
        )}
      </div>
    </div>
  );
}

function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption}-${index}`;
}