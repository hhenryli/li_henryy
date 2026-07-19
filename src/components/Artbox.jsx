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
    <div className='p-6'>
      <Nav />
      <div className="mt-24 md:mt-36 grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr] grid-rows-[auto_auto_auto_auto] md:grid-rows-[auto_1fr_auto] h-auto md:h-[125vh]">

      {/* Row 1 */}
      <div className='hidden md:block' />
      <div className='border-l border-r border-t-0 md:border-t p-6'>
        <h2>ARTBOX</h2>
      </div>
      <div className='hidden md:block' />

      {/* Filter sidebar */}
      <div className='order-1 md:order-none p-8 border-t border-b-0 md:border-b border-l border-r md:border-r-0 flex-col flex justify-between overflow-hidden'>
        <div className="flex gap-3 flex-wrap flex flex-col justify-between items-center">
          <div className='mt-4 w-full flex flex-col gap-4'>
            <h3 className='mb-4'>Sort and filter</h3>
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`w-full flex flex-col mb-1 border-b text-left cursor-pointer ${
                  activeFilter === filter.key
                    ? 'scale-105 hover:translate-x-2 ease-ease-out duration-200'
                    : 'hover:translate-x-2 ease-ease-out duration-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h5 className='mb-2'>Statement</h5>
          <p>In my free time, I find a lot of joy away from my laptop and trying to find other ways to create art. I really try to immerse myself in as many mediums as I can</p>
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="order-2 md:order-none border overflow-y-auto">
        {filteredItems.length === 0 ? (
          <div className="text-center text-gray-500 p-6">No items in this category yet</div>
        ) : (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 p-6 gap-4">
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

      {/* Contact column */}
      <div className='order-3 md:order-none border-t-0 md:border-t border-b border-r border-l md:border-l-0 flex flex-col justify-between'>
        <div className='p-6 h-full border-b flex flex-col'>
          <div>
            <h5>Contact me for <br />
              collaborations or projects!
            </h5>
          </div>
          <div className='flex flex-col gap-2 py-6'>
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.key}
                href={social.href}
                target='_blank'
                rel='noreferrer'
                onMouseEnter={() => socialRefs[social.key].current?.goToAndPlay(0, true)}
                className='w-6 h-6'
              >
                <Lottie
                  lottieRef={socialRefs[social.key]}
                  animationData={social.src}
                  loop={false}
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </a>
            ))}
          </div>
        </div>
        <div className='w-full h-full'>
          <img src='/icons/xicon.svg' />
        </div>
      </div>

      {/* Footer */}
      <div className='order-4 md:order-none col-span-1 md:col-span-3'>
        <Footer />
      </div>
      </div>

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