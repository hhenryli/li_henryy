import React, { useState } from 'react';

import {
  motion,
  useReducedMotion,
} from 'framer-motion';

import Me from './Me.jsx';
import NewNav from './NewNav.jsx';

const blocks = [
  {
    id: 'album',
    color: '#005CA3',
    title: 'Music',
    description:
      'Recent albums I’ve been listening to: you seem sad for a girl so in love, PRIMA and Oh yeah?',
  },
  {
    id: 'camera',
    color: '#EAAA21',
    title: 'Photography',
    description:
      'I really love capturing moments and experimenting with photography, video, and film.',
  },
  {
    id: 'cat',
    color: '#59B73F',
    title: 'Momo',
    description:
      "This is my cat, Momo. She's super loud and meows a lot but I love her.",
  },
  {
    id: 'person',
    color: '#DE6330',
    title: 'Me',
    description:
      "I'm curious, passionate, and I love pursuing creative side projects!",
  },
  {
    id: 'coffee',
    color: '#CD3B7F',
    title: 'Coffee',
    description:
      'Matcha and coffee! I love a good drink before the day begins.',
  },
  {
    id: 'painting',
    color: '#D13434',
    title: 'Art',
    description:
      'Painting, illustrating, drawing, etc are all so cool!',
  },
];

export default function About() {
  const [hovered, setHovered] = useState(null);

  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? {}
        : {
            staggerChildren: 0.08,
          },
    },
  };

  const blockVariants = {
    hidden: shouldReduceMotion
      ? {}
      : {
          opacity: 0,
          y: 20,
        },

    show: {
      opacity: 1,
      y: 0,

      transition: shouldReduceMotion
        ? {
            duration: 0,
          }
        : {
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1],
          },
    },
  };

  const toggleBlock = (id) => {
    setHovered((current) =>
      current === id ? null : id
    );
  };

  return (
    <div
      className="
        min-h-dvh
        w-full
        bg-[var(--primary)]
        lg:h-dvh
        lg:overflow-hidden
      "
    >
      <NewNav />

      <div
        className="
          w-full
          grid
          grid-cols-1
          lg:h-full
          lg:grid-cols-[50%_50%]
        "
      >
        {/* LEFT / RIVE */}
        <div
          className="
            relative
            h-[55dvh]
            min-h-0
            flex
            items-center
            justify-center
            lg:h-full
          "
        >
          <div
            className="
              w-full
              h-full
              flex
              items-center
              justify-center
            "
          >
            <Me onHoverChange={setHovered} />
          </div>
        </div>

        {/* RIGHT / GRID */}
        <motion.div
          className="
            padding
            grid
            grid-cols-2
            gap-3
            auto-rows-[minmax(11rem,auto)]
            pt-3
            pb-12
            lg:gap-4
            lg:h-full
            lg:min-h-0
            lg:grid-rows-3
            lg:pt-24
            lg:pb-6
          "
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {blocks.map((block) => {
            const isActive = hovered === block.id;
            const isDimmed = hovered !== null && !isActive;

            return (
              <motion.button
                key={block.id}
                type="button"
                variants={blockVariants}
                onClick={() => toggleBlock(block.id)}
                onPointerEnter={(event) => {
                  if (event.pointerType === 'mouse') {
                    setHovered(block.id);
                  }
                }}
                onPointerLeave={(event) => {
                  if (event.pointerType === 'mouse') {
                    setHovered(null);
                  }
                }}
                className="
                  relative
                  min-h-0
                  overflow-hidden
                  flex
                  flex-col
                  justify-end
                  p-4
                  lg:p-6
                  text-left
                  text-[var(--text-secondary)]
                "
                style={{ backgroundColor: block.color }}
                aria-pressed={isActive}
              >
                {/* Dims the other blocks while one is active */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[var(--primary)]
                    pointer-events-none
                    transition-opacity
                    duration-300
                  "
                  style={{ opacity: isDimmed ? 0.55 : 0 }}
                />

                <h1 className="relative mb-2">
                  {block.title}
                </h1>

                <p
                  className="relative"
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    letterSpacing: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {block.description}
                </p>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}