import React, { useState, useRef } from 'react';
import Nav from './Nav.jsx';
import PortfolioCard from './PortfolioCard.jsx';
import Footer from './Footer.jsx';
import ZoomModal from './ZoomModal.jsx';
import Lottie from 'lottie-react';

/* social/contact lottie icons */
import instaicon from '../assets/animations/insta.json';
import emailicon from '../assets/animations/email.json';
import linkedinicon from '../assets/animations/linkedin.json';

/* misc */
import tbmockup from '../assets/portfolio/design/ToteBag/Mockup.png';
import mamascover from '../assets/portfolio/design/1.png';

/* painting */
import p1 from '../assets/portfolio/painting/1.JPG';
import p2 from '../assets/portfolio/painting/2.JPG';
import p3 from '../assets/portfolio/painting/3.JPG';
import p4 from '../assets/portfolio/painting/4.JPG';
import p5 from '../assets/portfolio/painting/5.JPG';
import p6 from '../assets/portfolio/painting/6.JPG';
import p7 from '../assets/portfolio/painting/7.JPG';
import p8 from '../assets/portfolio/painting/8.JPG';
import p9 from '../assets/portfolio/painting/9.JPG';
import p10 from '../assets/portfolio/painting/10.JPG';
import p11 from '../assets/portfolio/painting/11.JPG';

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

const ARTBOX_ITEMS = [
  { type: 'image', src: p8, caption1: 'Music in Self', caption2: 'Acrylic on Wood, 2026', category: 'painting' },
  { type: 'image', src: p9, caption1: 'A pattern underneath', caption2: 'Oil on Canvas, 2026', category: 'painting' },
  { type: 'image', src: p10, caption1: 'Figure 1', caption2: 'Oil on Canvas, 2026', category: 'painting' },
  { type: 'image', src: p11, caption1: 'Figure 2', caption2: 'Oil on Canvas, 2026', category: 'painting' },
  { type: 'image', src: p1, caption1: 'The Room', caption2: 'Acrylic on Canvas, 2025', category: 'painting' },
  { type: 'image', src: p4, caption1: 'Night', caption2: 'Oil on Canvas, 2025', category: 'painting' },
  { type: 'image', src: p6, caption1: 'Self Portrait', caption2: 'Oil on Panel, 2025', category: 'painting' },
  { type: 'image', src: p5, caption1: 'Day', caption2: 'Oil on Canvas, 2025', category: 'painting' },
  { type: 'image', src: p2, caption1: 'Statues', caption2: 'Acrylic on Panel, 2025', category: 'painting' },
  { type: 'image', src: p3, caption1: 'Foil', caption2: 'Acrylic on Panel, 2025', category: 'painting' },
  { type: 'image', src: p7, caption1: 'Trees', caption2: 'Acrylic on Paper, 2025', category: 'painting' },

  { type: 'image', src: d1, caption1: 'Kite', caption2: 'Procreate, 2026', category: 'digital' },
  { type: 'image', src: d2, caption1: 'camp fire', caption2: 'Procreate, 2026', category: 'digital' },
  { type: 'image', src: d7, caption1: 'The Diner', caption2: '(recreation) Procreate, 2025', category: 'digital' },
  { type: 'image', src: d6, caption1: 'Strange Women', caption2: '(recreation) Procreate, 2024', category: 'digital' },
  { type: 'image', src: d9, caption1: 'Concealed', caption2: 'Procreate, 2024', category: 'digital' },
  { type: 'image', src: d3, caption1: 'strands', caption2: '(recreation) Procreate, 2023', category: 'digital' },
  { type: 'image', src: d4, caption1: 'Dips', caption2: '(recreation) Procreate, 2023', category: 'digital' },
  { type: 'image', src: d8, caption1: 'Rain', caption2: 'Procreate, 2024', category: 'digital' },
];

const FILTERS = [
  { key: 'all', label: 'ALL' },
  { key: 'painting', label: 'PAINTING' },
  { key: 'digital', label: 'DIGITAL' },
  { key: 'misc', label: 'MISC' },
];

const SOCIAL_ICONS = [
  { key: 'instagram', src: instaicon, href: 'https://www.instagram.com/li_henryy/' },
  { key: 'email', src: emailicon, href: 'mailto:youremail@example.com' },
  { key: 'linkedin', src: linkedinicon, href: 'https://www.linkedin.com/in/henryyli0508/' },
];

export default function ArtBox() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [zoomedItem, setZoomedItem] = useState(null);

  const instaRef = useRef(null);
  const emailRef = useRef(null);
  const linkedinRef = useRef(null);
  const socialRefs = { instagram: instaRef, email: emailRef, linkedin: linkedinRef };

  const filteredItems =
    activeFilter === 'all'
      ? ARTBOX_ITEMS
      : ARTBOX_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="mt-24 md:mt-36">

      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2>ARTBOX</h2>
          <p className="mt-2 max-w-md text-[var(--text-secondary)]">
            A collection of paintings, digital work, and things I've made along the way.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`border-b pb-1 transition ${
                activeFilter === filter.key
                  ? 'border-[var(--foreground)]'
                  : 'border-transparent text-[var(--text-muted)]'
              }`}
            >
              <h5>{filter.label}</h5>
            </button>
          ))}
        </div>
      </div>


      {/* Horizontal gallery */}
      <div className="overflow-x-auto overflow-y-hidden no-scrollbar">
        <div className="flex items-start gap-8 md:gap-12 py-12 w-max">

          {filteredItems.map((item, index) => (
            <div
              key={getItemKey(item, index)}
              className={`
                shrink-0
                w-[70vw]
                sm:w-[45vw]
                md:w-[30vw]
                lg:w-[24vw]
                ${index % 4 === 0 ? 'mt-8' : ''}
                ${index % 4 === 1 ? '-mt-4' : ''}
                ${index % 4 === 2 ? 'mt-16' : ''}
                ${index % 4 === 3 ? 'mt-2' : ''}
              `}
              style={{
                transform: `rotate(${
                  [-2, 1.5, -1, 2.5, -1.5, 1, -2.5, 1.5][index % 8]
                }deg)`
              }}
            >
              <button
                onClick={() => setZoomedItem(item)}
                className="block w-full text-left"
              >
                <img
                  src={item.src}
                  alt={item.caption1}
                  className="w-full h-auto object-cover"
                />

                <div className="mt-4">
                  <h2>{item.caption1}</h2>
                  <p className="text-sm text-[var(--text-secondary)] mt-1">
                    {item.caption2}
                  </p>
                </div>
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption1}-${index}`;
}