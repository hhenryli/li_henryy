import React, { useState } from 'react';

import NewNav from './NewNav';
import ZoomModal from './ZoomModal';


import plinkyplights from '../assets/games/plinkyplights/cover.webp';
import constellation from '../assets/websites/Constellation.png';
// POSTERS
import one from '../assets/portfolio/design/Prints/1.webp';
import two from '../assets/portfolio/design/Prints/2.webp';
import three from '../assets/portfolio/design/Prints/3.webp';
import four from '../assets/portfolio/design/Prints/4.webp';
import five from '../assets/portfolio/design/Prints/5.webp';
import six from '../assets/portfolio/design/Prints/6.webp';
import seven from '../assets/portfolio/design/Prints/7.webp';


// MOTION FULL PIECES
import dropdeadcover from '../assets/motion/dropdeadcover.webp';
import collectionscover from '../assets/motion/collectionscover.webp';
import projectmonocover from '../assets/motion/projectmonocover.webp';
import supercutcover from '../assets/motion/supercutcover.webp';
import tworeelcover from '../assets/motion/tworeelcover.webp';
import snoopycover from '../assets/motion/snoopy.webp';
import aasacover from '../assets/motion/aasacover.webp';

// MOTION CLIPS
import jazzclip from '../assets/motion/jazz/jazz.mp4';
import jazzcover from '../assets/motion/jazz/jazz.webp';

import cat from '../assets/motion/cat.mp4';
import catcover from '../assets/motion/cat.webp';

import swim from '../assets/motion/swim.mp4';
import swimcover from '../assets/motion/swimcover.webp';



const ITEMS = [
  {
    type: 'project',
    title: 'PlinkyPlights',
    category: 'game',
    src: plinkyplights,
    href: 'https://benryhenry.itch.io/plinkyplights',
  },

  {
    type: 'project',
    title: 'collections',
    category: 'animated film',
    src: collectionscover,
    href: 'https://www.youtube.com/watch?v=9N1gvXReOBY',
  },

  {
    type: 'project',
    title: 'drop dead',
    category: 'motion lyrics video',
    src: dropdeadcover,
    href: 'https://www.youtube.com/watch?v=xapkzj8-1Lg',
  },
  {
    type: 'poster',
    title: 'wolf parade',
    category: 'swiss',
    src: one,
  },


  {
    type: 'project',
    title: 'tworeel',
    category: 'logo reveal',
    src: tworeelcover,
    href: 'https://www.youtube.com/watch?v=Q5eATvkVntA',
  },


  {
    type: 'clip',
    title: 'jazz',
    category: 'motion clip',
    src: jazzclip,
    poster: jazzcover,
  },
    
  {
    type: 'poster',
    title: 'adobe@princeton',
    category: 'swiss',
    src: seven,
  },
  {
    type: 'project',
    title: 'constellations',
    category: 'website',
    src: constellation,
    href: 'https://hhenryli.github.io/spaces/',
  },
  {
    type: 'project',
    title: 'snooopy',
    category: 'short clip',
    src: snoopycover,
    href: 'https://www.youtube.com/watch?v=rJ3zCO4GGBo',
  },


  {
    type: 'poster',
    title: 'dominic fike',
    category: 'swiss',
    src: two,
  },

  {
    type: 'project',
    title: 'project mono',
    category: 'short animation',
    src: projectmonocover,
    href: 'https://www.instagram.com/reel/DbBuUyyR0T5/?utm_source=ig_web_button_share_sheet&stkn=MzRlODBiNWFlZA==',
  },

  {
    type: 'poster',
    title: 'self?',
    category: 'swiss',
    src: three,
  },

  {
    type: 'clip',
    title: 'cat by the fire',
    category: 'motion clip',
    src: cat,
    poster: catcover,
  },

  {
    type: 'poster',
    title: 'stars',
    category: 'gradient',
    src: four,
  },

  {
    type: 'project',
    title: 'supercut',
    category: 'lyric video',
    src: supercutcover,
    href: 'https://www.youtube.com/watch?v=fUwadhtOiqw',
  },

  {
    type: 'poster',
    title: 'deep',
    category: 'gradient',
    src: five,
  },

  {
    type: 'clip',
    title: 'SWIM',
    category: 'motion clip',
    src: swim,
    poster: swimcover,
  },

  {
    type: 'poster',
    title: 'petal',
    category: 'gradient',
    src: six,
  },

  {
    type: 'project',
    title: 'formals',
    category: 'promotional animation',
    src: aasacover,
    href: 'https://www.youtube.com/watch?v=-fzAv9m9q5k',
  },

];



export default function Play() {
  const [zoomedItem, setZoomedItem] = useState(null);
  const [zoomedClip, setZoomedClip] = useState(null);

  return (
    <>
      <section
        className="
          min-h-screen
          bg-[var(--primary)]
          text-[var(--text-secondary)]
        "
      >
        <NewNav />

        <div className="padding pt-28 md:pt-36 pb-24">

          {/* HEADER */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-[1fr_2fr]
              gap-8
              mb-16
              md:mb-24
            "
          >
            <div>
              <h1 className="text-[var(--text-secondary)]">
                play
              </h1>
            </div>

            <div className="max-w-xl">
              <p
                className="
                  text-[var(--text-secondary)]
                  opacity-70
                "
              >
                Experiments in motion, print, image, and everything
                I make when I want to try something new.
              </p>
            </div>
          </div>


          {/* TABLE HEADER */}
          <div
            className="
              hidden
              md:grid
              grid-cols-[60px_minmax(0,1fr)_160px_300px]
              gap-6
              border-b
              border-[var(--text-secondary)]/30
              pb-3
              text-xs
              uppercase
              tracking-wide
              text-[var(--text-secondary)]
            "
          >
            <span className="opacity-60">
              No.
            </span>

            <span className="opacity-60">
              Piece
            </span>

            <span className="opacity-60">
              Type
            </span>

            <span className="text-right opacity-60">
              Preview
            </span>
          </div>


          {/* PROJECT LIST */}
          <div>
            {ITEMS.map((item, index) => (
              <PlayRow
                key={`${item.title}-${index}`}
                item={item}
                index={index}
                setZoomedItem={setZoomedItem}
                setZoomedClip={setZoomedClip}
              />
            ))}
          </div>

        </div>
      </section>


      {/* POSTER FULLSCREEN */}
      {zoomedItem && (
        <ZoomModal
          src={zoomedItem.src}
          caption={zoomedItem.title}
          onClose={() => setZoomedItem(null)}
        />
      )}


      {/* MOTION CLIP FULLSCREEN */}
      {zoomedClip && (
        <VideoZoomModal
          item={zoomedClip}
          onClose={() => setZoomedClip(null)}
        />
      )}
    </>
  );
}



/* --------------------------------
   PROJECT ROW
-------------------------------- */

function PlayRow({
  item,
  index,
  setZoomedItem,
  setZoomedClip,
}) {
  const row = (
    <div
      className="
        grid
        grid-cols-[32px_minmax(0,1fr)]
        md:grid-cols-[60px_minmax(0,1fr)_160px_300px]

        gap-x-4
        md:gap-x-6
        gap-y-4

        items-center

        py-5
        md:py-6

        border-b
        border-[var(--text-secondary)]/30

        text-[var(--text-secondary)]
      "
    >

      {/* NUMBER */}
      <div
        className="
          text-xs
          opacity-60
          self-start
          md:self-center
        "
      >
        {String(index + 1).padStart(2, '0')}
      </div>


      {/* TITLE */}
      <div
        className="
          self-start
          md:self-center
        "
      >
        <h3 className="text-[var(--text-secondary)]">
          {item.title}
        </h3>

        {/* TYPE ON MOBILE */}
        <p
          className="
            md:hidden
            text-xs
            mt-1
            opacity-60
          "
        >
          {item.category}
        </p>
      </div>


      {/* TYPE DESKTOP */}
      <div
        className="
          hidden
          md:block
          text-xs
          opacity-60
        "
      >
        {item.category}
      </div>


      {/* MEDIA */}
      <div
        className="
          col-start-2
          md:col-start-4

          flex
          justify-start
          md:justify-end

          w-full
        "
      >
        <PlayMedia item={item} />
      </div>

    </div>
  );


  /* FULL MOTION PROJECT */
  if (item.type === 'project') {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer"
        className="
          block
          cursor-pointer
        "
      >
        {row}
      </a>
    );
  }


  /* POSTER */
  if (item.type === 'poster') {
    return (
      <button
        type="button"
        className="
          block
          w-full
          text-left
          cursor-pointer
        "
        onClick={() =>
          setZoomedItem({
            src: item.src,
            title: item.title,
          })
        }
      >
        {row}
      </button>
    );
  }


  /* SHORT CLIP */
  if (item.type === 'clip') {
    return (
      <button
        type="button"
        className="
          block
          w-full
          text-left
          cursor-pointer
        "
        onClick={() => setZoomedClip(item)}
      >
        {row}
      </button>
    );
  }


  return null;
}



/* --------------------------------
   MEDIA
-------------------------------- */

function PlayMedia({ item }) {

  /* SHORT VIDEO CLIP */
  if (item.type === 'clip') {
    return (
      <video
        src={item.src}
        poster={item.poster}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        className="
          block

          w-auto
          h-auto

          max-w-[180px]
          sm:max-w-[220px]
          md:max-w-[260px]

          max-h-[180px]

          object-contain
        "
      />
    );
  }


  /* POSTER OR PROJECT COVER */
  return (
    <img
      src={item.src}
      alt={item.title}
      loading="lazy"
      className="
        block

        w-auto
        h-auto

        max-w-[180px]
        sm:max-w-[220px]
        md:max-w-[260px]

        max-h-[180px]

        object-contain
      "
    />
  );
}



/* --------------------------------
   VIDEO ZOOM MODAL
-------------------------------- */

function VideoZoomModal({
  item,
  onClose,
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]

        flex
        items-center
        justify-center

        bg-black/90

        p-4
        md:p-8
      "
      onClick={onClose}
    >
      <div
        className="
          relative

          flex
          items-center
          justify-center

          w-full
          h-full
        "
        onClick={(event) => event.stopPropagation()}
      >

        <video
          src={item.src}
          poster={item.poster}
          autoPlay
          loop
          controls
          playsInline
          className="
            max-w-full
            max-h-[90vh]

            w-auto
            h-auto

            object-contain
          "
        />


        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-0
            right-0

            text-white
            text-sm

            px-3
            py-2
          "
        >
          close
        </button>

      </div>
    </div>
  );
}