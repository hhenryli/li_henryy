import React from 'react';
import PortfolioCard from './PortfolioCard.jsx';

/* design */
import orderupvideo from '../assets/motion/orderup.mp4';
import cuevideo from '../assets/motion/cue.mp4';
import pplcover from '../assets/portfolio/design/PPL/ppl_cover.webp';
import havenvideo from '../assets/motion/haven.mp4';
import memocover from '../assets/portfolio/design/Memo/memocover.webp';
import fukaicover from '../assets/portfolio/design/Fukai/thumbnail.webp';

const CATEGORIES = {
  design: [
    {
      type: 'clip',
      route: '/cue',
      src: cuevideo,
      caption1: 'cue',
      caption2: `Real-time coordination for Princeton’s TA system.`,
      category: 'UI/UX',
    },
    {
      type: 'clip',
      route: '/orderup',
      src: orderupvideo,
      caption1:
        'Order Up!',
      caption2: 'A user research study creating a collaborative AR kitchen game for teamwork training.',
      category: 'Human Computer Interaction',
    },
    {
      type: 'link',
      route: '/PPL',
      thumbnail: pplcover,
      caption1: 'PPL Redesign',
      caption2: 'Modernizing Princeton Public Library while preserving accessibiility and history.',
      category: 'Branding',
    },
    {
      type: 'clip',
      route: '/haven',
      src: havenvideo,
      caption1: 'Haven Mobile App',
      caption2: 'Turning concert night from a guess into a guide.',
      category: 'UI/UX',
    },

    {
      type: 'link',
      route: '/memo',
      thumbnail: memocover,
      caption1: 'Memo',
      caption2: 'Visual identity for collaborative travel planning.',
      category: 'Branding',
    },
    {
      type: 'link',
      route: '/fukai',
      thumbnail: fukaicover,
      caption1: 'Rethinking hojicha',
      caption2: 'Brand identity for a modern and friendly hojicha brand.',
      category: 'Branding',
    },
  ],
};

export default function Portfolio() {
  const allItems = Object.entries(CATEGORIES).flatMap(
    ([categoryName, items]) =>
      items.map((item, i) => ({
        ...item,
        _category: categoryName,
        _key: getItemKey(item, i),
      }))
  );

  return (
    <section className="padding w-full">

      <div className="pt-16 flex flex-col gap-16">

        {/* BIG — CUE */}
        <PortfolioCard
          item={allItems[0]}
          className="w-full aspect-[16/7]"
        />

        {/* TWO COLUMN — HAVEN + PPL */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-2">
            <PortfolioCard
              item={allItems[1]}
              className="w-full"
            />
          </div>

          <PortfolioCard
            item={allItems[2]}
            className="w-full"
          />
        </div>

        {/* BIG — ORDER UP */}
        <PortfolioCard
          item={allItems[3]}
          className="w-full"
        />

        {/* ASYMMETRIC — MEMO + FUKAI */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start">

          <div className="md:col-span-2">
            <PortfolioCard
              item={allItems[4]}
              className="w-full"
            />
          </div>

          <div className="md:col-span-3">
            <PortfolioCard
              item={allItems[5]}
              className="w-full"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;

  return `${item.type}-${item.caption1 ?? item.caption}-${index}`;
}