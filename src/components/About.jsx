import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Me from './Me.jsx';
import Contact from './Contact.jsx';

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
      className: 'bg-[#005CA3]',
      title: 'Music',
      description:
        'Recent albums I’ve been listening to: you seem sad for a girl so in love, PRIMA and Oh yeah?',
    },
    {
      id: 'camera',
      className: 'bg-[#EAAA21]',
      title: 'Photography',
      description:
        'I really love capturing moments and experimenting with photography, video, and film.',
    },
    {
      id: 'cat',
      className: 'bg-[#59B73F]',
      title: 'Momo',
      description:
        "This is my cat, Momo. She's super loud and meows a lot but I love her.",
    },
    {
      id: 'person',
      className: 'bg-[#DE6330]',
      title: 'Me',
      description:
        "I'm a curious, driven, and optimistic learner. I have many hobbies and interests, and I love pursuing side passions and projects!",
    },
    {
      id: 'coffee',
      className: 'bg-[#CD3B7F]',
      title: 'Coffee',
      description:
        'Matcha and coffee! I love a good drink before the day begins.',
    },
    {
      id: 'painting',
      className: 'bg-[#D13434]',
      title: 'Art',
      description:
        'Painting, illustrating, drawing, etc are all so cool!',
    },
  ];

  return (
    <div className="h-dvh w-full overflow-hidden">

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
              z-10
              padding
              py-6
              flex
              flex-col
              items-start
            "
          >
            <a 
            href="/"
            className="hover:opacity-50 transition-opacity"
            >
              Henry Li</a>

            <button
              onClick={() => setContactOpen(true)}
              className="hover:opacity-50 transition-opacity"
              
            >
              Contact
            </button>

            <a
              href="/li_henry_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              Resume
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


        {/* RIGHT / COLOR GRID */}
        <motion.div
          className="
            h-full
            min-h-0
            grid
            grid-cols-2
            grid-rows-3
          "
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >

          {blocks.map((block) => {
            const isHovered = hovered === block.id;

            return (
              <motion.div
                key={block.id}
                variants={blockVariants}
                className={`
                  ${block.className}
                  min-h-0
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                `}
              >
                <div
                  className={`
                    lg:px-12
                    px-2
                    transition-all
                    duration-200
                    ${
                      isHovered
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-3'
                    }
                  `}
                >
                  <h2 className="mb-2 text-[var(--text-secondary)]">
                    {block.title}
                  </h2>

                  <p className="text-[var(--text-secondary)]">
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


/*
      <main className="padding lg:mt-24 mt-16">
        <section className="">
          <div className="flex lg:flex-row flex-col gap-16 items-start">
            <div className='w-full flex flex-col'>
              <h1>I'm a designer, developer, and artist</h1>

              <div className='flex flex-col gap-8'>
                <p className="mt-6 ">
                  I like making things that are both visually expressive and genuinely useful, whether that means designing a digital product, building an interactive experience, or figuring out how technology can become a creative medium.
                </p>

                <p>
                  Available for freelance and contract work. Contact me if you have any projects you're working on!
                </p>
              </div>

              <div className='mt-8 flex flex-col gap-2'>
                <button
                  onClick={() => {
                    setContactOpen(true);
                  }}
                  className=""
                >
                  <h5 className="flex items-center gap-1">
                    CONTACT ME
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 13L13 3M6 3H13V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </h5>
                </button>

                <a
                  href="/li_henry_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="flex items-center gap-1">
                    RESUME
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 13L13 3M6 3H13V10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </h5>
                </a>
              </div>
            </div>

            <div className="w-full flex items-center justify-center lg:pt-8">
              <div className="w-full max-w-[500px]">
                <Me />
              </div>
            </div>
          </div>

          <div className='flex md:flex-row flex-col gap-8 py-24 '>
            <div className='w-full'>
              <h5 className=''>ME!</h5>
            </div>

            <div className="w-full flex flex-col gap-8">
              <div>
                <h2>01</h2>
                <p className="mt-3">
                  Senior studying computer science at Princeton. Searching for
                  new grad roles!
                </p>
              </div>

              <div>
                <h2>02</h2>
                <p className="mt-3">
                  Big time hobbyist, including painting, swimming, reading,
                  and more.
                </p>
              </div>

              <div>
                <h2>03</h2>
                <p className="mt-3">
                  Part time (not so great) cook, gamer, and acapella singer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="flex flex-col gap-8">
            <h5>SKILLS & TOOLS</h5>

            <div>
              <h2 className='w-[70%]'>
                I work across design and technology, using different tools to bring
                ideas from concept to execution.
              </h2>

              <div className="flex md:flex-row flex-col gap-4 py-16">

                <div className="w-full flex flex-col gap-4 border border-[var(--border)] p-4 rounded-[16px]">
                  <h5>UI/UX</h5>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                      <img src="/icons/logos/figma.webp" className="w-4" />
                      <p>Figma</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <img src="/icons/logos/sketch.webp" className="logoicon" />
                      <p>Sketch</p>
                    </div>
                  </div>

                  <p className="text-secondary">
                    Websites, apps, interfaces, dashboards, digital products
                  </p>
                </div>

                <div className="w-full flex flex-col gap-4 border border-[var(--border)] p-4 rounded-[16px]">
                  <h5>PRODUCT DESIGN</h5>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                      <img src="/icons/logos/illustrator.webp" className="logoicon" />
                      <p>Illustrator</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <img src="/icons/logos/photoshop.webp" className="logoicon" />
                      <p>Photoshop</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <img src="/icons/logos/kittl.webp" className="logoicon" />
                      <p>Kittl</p>
                    </div>
                  </div>

                  <p className="text-secondary">
                    Brands, logos, merchandise, packaging
                  </p>
                </div>

                <div className="w-full flex flex-col gap-4 border border-[var(--border)] p-4 rounded-[16px]">
                  <h5>MOTION</h5>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-center">
                      <img src="/icons/logos/AE.webp" className="logoicon" />
                      <p>After Effects</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <img src="/icons/logos/premiere.webp" className="logoicon" />
                      <p>Premiere Pro</p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <img src="/icons/logos/procreate.webp" className="logoicon" />
                      <p>Procreate & Dreams</p>
                    </div>
                  </div>

                  <p className="text-secondary">
                    Digital media, advertisements, music, film
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="flex flex-col gap-8">
            <h5>EXPERIENCE</h5>

            <div>
              <h2 className='w-[70%]'>
                I spent a lot of my time at Princeton studying computer
                science before discovering how much I love design.
              </h2>

              <div className='w-full'>
                <div className="mt-12 flex md:flex-row flex-col justify-center gap-4">

                  <div className="py-8 px-4 bg-[var(--surface))] flex flex-col gap-6 rounded-[16px]">
                    <h5>2026—Present</h5>

                    <div>
                      <h2>Adobe Campus Ambassador</h2>
                      <ul className="list-disc pl-6 mt-3">
                        <li>
                          As a student ambassador, I represent Adobe on campus
                          by hosting events, workshops and tabling.
                        </li>

                        <li>
                          I also engage in social media and create content to
                          spread the use of Adobe tools.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="py-8 px-4 bg-[var(--surface))] flex flex-col gap-6 rounded-[16px]">
                    <h5>2025–Present</h5>

                    <div>
                      <h2>Lab Digital Designer and Technician</h2>
                      <ul className="list-disc pl-6 mt-3">
                        <li>
                          The digital lab is a print, design, and media-driven
                          lab for students to create whatever they desire.
                        </li>

                        <li>
                          I assisted over 100 students in printing, creating
                          posters, designing digital media, and more.
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="py-8 px-4 bg-[var(--surface))] flex flex-col gap-6 rounded-[16px]">
                    <h5>2024–2025</h5>

                    <div>
                      <h2>E-Club Design Team</h2>
                      <ul className="list-disc pl-6 mt-3">
                        <li>
                          Worked with local agencies, campus clubs, and
                          businesses on branding, logos, and product design.
                        </li>

                        <li>
                          Learned to communicate with clients, iterate on
                          feedback, and improve designs through discussion.
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="flex flex-col gap-8">
            <h5>
              HONORS AND AWARDS
            </h5>

            <div className="flex flex-col gap-12">
              <h2>
                I have been fortunate to receive recognition for my work in
              </h2>

              <div className='w-full flex md:flex-row flex-col gap-16'>

                <div className="flex flex-col gap-8">
                  <h5>2026</h5>

                  <div>
                    <h2>UCHV Short Movie Prize</h2>

                    <a
                      href="https://uchv.princeton.edu/fellowships-funding/undergraduate/short-movie-prize"
                      target="_blank"
                      className="underline"
                    >
                      Honorable Mention — Henry Li, Collections
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <h5>2025</h5>

                  <div>
                    <h2>Tower Club T-Shirt Design Winner</h2>

                    <a
                      href="https://drive.google.com/drive/folders/1pQsPNG-BWEUbBnaylPoExQ37U9kIkK-A?usp=sharing"
                      target="_blank"
                      className="underline"
                    >
                      1st Choice
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
*/ 