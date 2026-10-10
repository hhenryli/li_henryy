import React from 'react';
import PortfolioCard from './PortfolioCard.jsx';

/* Design */
import orderupvideo from '../assets/motion/orderup.mp4';
import cuevideo from '../assets/motion/cue.mp4';

import pplcover from '../assets/portfolio/design/PPL/ppl_cover.webp';

import havencover from '../assets/portfolio/design/Haven/cover.webp';

import memocover from '../assets/portfolio/design/Memo/memocover.webp';

import onetwentycover from '../assets/portfolio/design/120es/cover.png';

import fukaicover from '../assets/portfolio/design/Fukai/thumbnail.webp';

const CATEGORIES = {
  design: [
    {
      type: 'clip',
      route: '/cue',
      src: cuevideo,
      caption1: 'cue',
      caption2:
        'Real time coordination for Princeton’s TA system.',
      category: [
        'Product design',
        'UI/UX',
        'User research',
        'Wireframing',
        'Prototyping',
      ],
    },

    {
      type: 'link',
      route: '/120es',
      thumbnail: onetwentycover,
      caption1: '120EastState',
      caption2:
        'Designing a digital archive for Trenton’s community history',
      category: [
        'Product design',
        'Full stack',
        'End to end engineering',
        'Wireframing',
        'Front end development',
      ],
    },

    {
      type: 'link',
      route: '/haven',
      thumbnail: havencover,
      caption1: 'Haven Mobile App',
      caption2:
        'Turning concert night from a guess into a guide.',
      category: [
        'Product design',
        'UI/UX',
        'User research',
        'Wireframing',
        'Prototyping',
      ],
    },

    {
      type: 'clip',
      route: '/orderup',
      src: orderupvideo,
      caption1: 'Order Up!',
      caption2:
        'A user research study creating a collaborative AR kitchen game for teamwork training.',
      category: [
        'Human computer interaction',
        'AR development',
        'User research',
      ],
    },

    {
      type: 'link',
      route: '/PPL',
      thumbnail: pplcover,
      caption1: 'PPL Redesign',
      caption2:
        'Modernizing Princeton Public Library while preserving accessibility and history.',
      category: [
        'Identity',
        'Branding',
        'Wayfinding and graphics',
        'Digital signage',
        'Merchandise',
      ],
    },

    {
      type: 'link',
      route: '/memo',
      thumbnail: memocover,
      caption1: 'Memo',
      caption2:
        'Visual identity for collaborative travel planning.',
      category: [
        'Human computer interaction',
        'Identity',
        'Merchandise',
      ],
    },

    // {
    //   type: 'link',
    //   route: '/fukai',
    //   thumbnail: fukaicover,
    //   caption1: 'Rethinking hojicha',
    //   caption2:
    //     'A brand identity for a hojicha company.',
    //   category: [
    //     'Identity',
    //     'Branding',
    //     'Wayfinding and graphics',
    //     'Digital signage',
    //     'Merchandise',
    //   ],
    // },
  ],
};

function getItemKey(item, index) {
  if (item.src) {
    return `${item.type}-${item.src}`;
  }

  if (item.videoId) {
    return `${item.type}-${item.videoId}`;
  }

  if (item.embedUrl) {
    return `${item.type}-${item.embedUrl}`;
  }

  return `${item.type}-${item.caption1 ?? item.caption}-${index}`;
}


/*
 * This data never changes, so there is no reason
 * to rebuild it every time Portfolio renders.
 */
const ALL_ITEMS = Object.entries(CATEGORIES).flatMap(
  ([categoryName, items]) =>
    items.map((item, index) => ({
      ...item,
      _category: categoryName,
      _key: getItemKey(item, index),
    }))
);


export default function Portfolio() {
  return (
    <section className="padding w-full">
      <div
        className="
          py-32
          flex
          flex-col
          gap-y-6
          lg:gap-y-24
          items-start
        "
      >
        {ALL_ITEMS.map((item) => (
          <PortfolioCard
            key={item._key}
            item={item}
            className="
              portfolio-item
              w-full
            "
          />
        ))}
      </div>
    </section>
  );
}