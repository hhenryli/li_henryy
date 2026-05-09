import React, { useState } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';

/* design */
import fdcover from '../assets/portfolio/design/freshlydropped/cover.png';
import escover from '../assets/portfolio/design/120es/120escover.png';
import memocover from '../assets/portfolio/design/Memo/memocover.png';
import tbmockup from '../assets/portfolio/design/Totebag/mockup.png';
import mamascover from '../assets/portfolio/design/1.png';

/* animation */
import collectionscover from '../assets/portfolio/animation/collections/collectionscover.png';
import aasaformalcover from '../assets/portfolio/animation/aasaformalcover.png';

/* typography */
import typographycover from '../assets/portfolio/typography/1.jpg';

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

/* animation */
import a1 from '../assets/portfolio/animation/1.GIF';
import a2 from '../assets/portfolio/animation/2.gif';
import a3 from '../assets/portfolio/animation/3.gif';
import a4 from '../assets/portfolio/animation/4.gif';

const CATEGORIES = {
  animation: [
    { type: 'link', route: '/collections', thumbnail: collectionscover, caption1: 'Collections', caption2: 'Animation'},
    { type: 'link', route: '/aasaformal', thumbnail: aasaformalcover, caption1: 'AASA Formals', caption2: 'Animation'},
    { type: 'image', src: a1, caption: '5-frame, 2025' },
    { type: 'image', src: a3, caption: 'cup, 2025' },
    { type: 'image', src: a2, caption: 'aasa-jump, 2025' },
    { type: 'image', src: a4, caption: 'aasa-biglittle, 2025' },
  ],
  design: [
    { type: 'link', route: '/freshlydropped', thumbnail: fdcover, caption1: 'Freshly Dropped App', caption2: 'UI/UX Design'},
    { type: 'link', route: '/120es', thumbnail: escover, caption1: '120 East State App', caption2: 'Full Stack Development'},
    { type: 'link', route: '/memo', thumbnail: memocover, caption1: 'Memo', caption2: 'Branding and Design'},
    { type: 'link', route: '/totebag', thumbnail: tbmockup, caption1: 'Bachelor Tote Bag', caption2: 'Branding and Design'},
    { type: 'link', route: '/mamadumpling', thumbnail: mamascover, caption1: 'Mamas Dumplings', caption2: 'Branding and Design'},
  ],
  typography: [
    { type: 'link', route: '/typography', thumbnail: typographycover, caption1: 'Typography Study', caption2: 'Design'},
  ],
  traditional: [
    { type: 'image', src: p1, caption1: 'The Room', caption2: 'Acrylic on Canvas, 2025' },
    { type: 'image', src: p4, caption1: 'Night', caption2: "Oil on Canvas, 2025"  },
    { type: 'image', src: p6, caption1: 'Self Portrait', caption2: "Oil on Panel, 2025" },
    { type: 'image', src: p5, caption1: 'Day', caption2: "Oil on Canvas, 2025" },
    { type: 'image', src: p2, caption1: 'Statues', caption2: "Acrylic on Panel, 2025" },
    { type: 'image', src: p3, caption1: 'Foil', caption2: "Acrylic on Panel, 2025" },
    { type: 'image', src: p7, caption1: 'Trees', caption2: "Acrylic on Paper, 2025" },
  ],
  digital: [
    { type: 'image', src: d1, caption1: 'Kite', caption2: "Procreate, 2026" },
    { type: 'image', src: d2, caption1: 'camp fire', caption2: "Procreate, 2026" },
    { type: 'image', src: d7, caption1: 'The Diner',  caption2: "(recreation) Procreate, 2025" },
    { type: 'image', src: d6, caption1: 'Strange Women', caption2: "(recreation) Procreate, 2024" },
    { type: 'image', src: d9, caption1: 'Concealed', caption2: "Procreate, 2024" },
    { type: 'image', src: d3, caption1: 'strands', caption2: "(recreation) Procreate, 2023" },
    { type: 'image', src: d4, caption1: 'Dips', caption2: "(recreation) Procreate, 2023" },
    { type: 'image', src: d8, caption1: 'Rain', caption2: "Procreate, 2024" },
  ],
};


export default function Work() {
  const allCategories = ["design", "animation", "typography", "digital", "traditional"];
  const [activeFilter, setActiveFilter] = useState("all");
  const [zoomedItem, setZoomedItem] = useState(null);

  // Get categories to display based on filter
  const getFilteredCategories = () => {
    if (activeFilter === "all") return allCategories;
    return [activeFilter];
  };

  const categories = getFilteredCategories();

  return (
    <>   
    <Nav />
      <div className="min-h-screen flex flex-col">
        {/* Filter Buttons */}
        <div className="px-12 mt-[30vh] md:mt-55 mb-12">
          <hr></hr>
          <div className="mt-2 flex gap-4 flex-wrap">
            <div className='flex gap-2'>
              <p>Filter:</p>
              <button
                onClick={() => setActiveFilter("all")}
                className={`links ${
                  activeFilter === "all"
                    ? " links-hover"
                    : ""
                }`}
              >
                All
              </button>
            </div>

            <button
              onClick={() => setActiveFilter("design")}
              className={`links ${
                activeFilter === "design"
                  ? " links-hover"
                  : ""
              }`}
            >
              Design
            </button>
            <button
              onClick={() => setActiveFilter("animation")}
              className={`links ${
                activeFilter === "animation"
                  ? " links-hover"
                  : ""
              }`}
            >
              Animation
            </button>
            <button
              onClick={() => setActiveFilter("digital")}
              className={`links ${
                activeFilter === "digital"
                  ? " links-hover"
                  : ""
              }`}
            >
              Digital
            </button>
            <button
              onClick={() => setActiveFilter("traditional")}
              className={`links ${
                activeFilter === "traditional"
                  ? " links-hover"
                  : ""
              }`}
            >
              Traditional
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="flex-1 px-12 mb-12">
          {categories.length === 0 ? (
            <div className="text-center text-gray-500">No items in this category</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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