import React, { useState } from 'react';

import one from '../assets/portfolio/design/Prints/1.webp';
import two from '../assets/portfolio/design/Prints/2.webp';
import three from '../assets/portfolio/design/Prints/3.webp';
import four from '../assets/portfolio/design/Prints/4.webp';
import five from '../assets/portfolio/design/Prints/5.webp';
import six from '../assets/portfolio/design/Prints/6.webp';
import seven from '../assets/portfolio/design/Prints/7.webp';

import { ZoomableImage } from './PortfolioCard.jsx';
import ZoomModal from './ZoomModal.jsx';
import { Link } from 'react-router-dom';
import NewNav from './NewNav';
const posters = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
];

export default function Play() {
  const [zoomedItem, setZoomedItem] = useState(null);

  return (
    <>
      <section className="relative grid grid-cols-1 md:grid-cols-[70%_30%]">

        {/* BLUE BACKGROUND */}
        <div
          className="
            absolute
            inset-0
            bg-[var(--primary)]
            md:static
            md:col-start-1
            md:row-start-1
            md:min-h-full
          "
        />

        {/* STICKY DESKTOP UI */}
        <div
          className="
            relative
            h-[100svh]
            md:col-start-1
            md:row-start-1
            md:col-span-2
            md:sticky
            md:top-0
            md:h-screen
            z-40
            pointer-events-none
            text-[var(--text-secondary)]
          "
        >
          
          <NewNav />

          {/* TITLE */}
          <div className="absolute bottom-0 left-0 padding pb-6">
            <h1>
              posters
            </h1>
          </div>
        </div>

        {/* POSTERS */}
        <main
          className="
            relative
            z-10
            col-start-1
            row-start-2
            md:col-start-2
            md:row-start-1
            padding
            bg-white
          "
        >
          <div className="w-full py-6">
            <div
              className="
                flex
                flex-row
                md:flex-col
                gap-6
                md:gap-8
                overflow-x-auto
                md:overflow-x-visible
                overflow-y-hidden
                scrollbar-hide
              "
            >
              {posters.map((poster, index) => {
                const item = {
                  type: 'image',
                  src: poster,
                  caption: `Poster ${index + 1}`,
                };

                return (
                  <div
                    key={index}
                    className="flex-none w-[65vw] md:w-full"
                  >
                    <ZoomableImage
                      src={poster}
                      caption={`Poster ${index + 1}`}
                      onZoom={setZoomedItem}
                      item={item}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </section>

      {/* ZOOM MODAL */}
      {zoomedItem && (
        <ZoomModal
          src={zoomedItem.src}
          caption={zoomedItem.caption}
          onClose={() => setZoomedItem(null)}
        />
      )}
    </>
  );
}