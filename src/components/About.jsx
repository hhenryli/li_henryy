import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Me from './Me.jsx';
import Contact from './Contact.jsx';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const blockVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  const [contactOpen, setContactOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

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
        "I'm a curious, driven, and optimistic learner. I have many hobbies and interests, and I love pursuing side passions and projects!",
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

  return (
    <div className="h-dvh w-full overflow-hidden bg-[var(--primary)]">

      <div
        className="
          h-full
          w-full
          grid
          grid-cols-1
          grid-rows-[50%_50%]
          lg:grid-rows-1
          lg:grid-cols-[58%_42%]
        "
      >

        {/* LEFT / RIVE */}
        <div
          className="
            relative
            h-full
            min-h-0
            flex
            flex-col
          "
        >

          {/* Navigation */}
          <nav
            className="
            absolute
            top-0
            left-0
            padding
            py-6
            gap-2
            flex
            flex-col
            items-start
            pointer-events-auto
            text-[var(--text-secondary)]
            z-50
            "
          >
            <Link
              to="/"
              className="hover:opacity-50 transition-opacity"
            >
              <p className='meta'>
                Work
              </p>
            </Link>

            <Link
              to="/play"
              className="hover:opacity-50 transition-opacity"
            >
              <p className='meta'>
                Play
              </p>
            </Link>

            <button
              onClick={() => setContactOpen(true)}
              className="hover:opacity-50 transition-opacity"
            >
              <p className='meta'>
                Contact
              </p>
            </button>

            <a
              href="/li_henry_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              <p className='meta'>
                Resume
              </p>
            </a>
          </nav>

          {/* Rive */}
          <div
            className="
              flex-1
              min-h-0
              flex
              items-center
              justify-center
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

        </div>


        {/* RIGHT / OUTLINE GRID */}
        <motion.div
          className="
            h-full
            min-h-0
            grid
            grid-cols-2
            grid-rows-3
            gap-3
            p-3
            lg:gap-4
            lg:p-6
          "
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

          {blocks.map((block, i) => {
            const isHovered = hovered === block.id;

            return (
              <motion.div
                key={block.id}
                variants={blockVariants}
                className="
                  relative
                  min-h-0
                  overflow-hidden
                  border
                  border-white/20
                  text-[var(--text-secondary)]
                "
              >

                {/* Color fill wipes up from the bottom on hover */}
                <div
                  className={`
                    absolute
                    inset-0
                    transition-[clip-path]
                    duration-500
                    ease-out
                    ${
                      isHovered
                        ? '[clip-path:inset(0)]'
                        : '[clip-path:inset(100%_0_0_0)]'
                    }
                  `}
                  style={{ backgroundColor: block.color }}
                />

                {/* Resting state: just a quiet index */}
                <span className="meta absolute top-3 left-3">
                  0{i + 1}
                </span>

                {/* Hover state: text sits inside the cell, bottom-left */}
                <div
                  className={`
                    absolute
                    inset-0
                    p-4
                    lg:p-6
                    flex
                    flex-col
                    justify-end
                    transition-all
                    duration-300
                    ${
                      isHovered
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-3'
                    }
                  `}
                >
                  <h2 className="mb-2">
                    {block.title}
                  </h2>

                  <p>
                    {block.description}
                  </p>
                </div>

              </motion.div>
            );
          })}

        </motion.div>

      </div>

      <Contact
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

    </div>
  );
}