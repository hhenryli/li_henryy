import React, { useRef, useState } from 'react';
import Nav from './Nav.jsx';
import aboutpic from '../assets/aboutpic.jpg';
import Footer from './Footer.jsx';
import Contact from './Contact.jsx';
import Lottie from 'lottie-react';

import emailicon from '../assets/animations/email.json';
import phoneicon from '../assets/animations/phone.json';
import instaicon from '../assets/animations/insta.json';
import githubicon from '../assets/animations/linkedin.json';
import linkedinicon from '../assets/animations/github.json';

const SOCIAL_ICONS = [
  { key: 'instagram', src: instaicon, href: 'https://www.instagram.com/li_henryy/', label: 'Instagram' },
  { key: 'linkedin', src: linkedinicon, href: 'https://www.linkedin.com/in/henryyli0508/', label: 'LinkedIn' },
  { key: 'github', src: githubicon, href: 'https://github.com/hhenryli', label: 'Github' },
];

export default function About() {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const instaRef = useRef(null);
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const [contactOpen, setContactOpen] = useState(false);

  const socialRefs = {
    instagram: instaRef,
    linkedin: linkedinRef,
    github: githubRef
  };

  return (
    <div className="">
      <Nav />

      <main className="padding lg:mt-24 mt-16">
        {/* INTRO */}
        <section className="">
          <div className="flex lg:flex-row flex-col gap-16 items-start">
            <div className='w-full'>
              <h1>I'm a designer, developer, and artist</h1>

              <div className='flex flex-col gap-8'>
                <p className="mt-6 ">
                  I like making things that are both visually expressive and genuinely useful, whether that means designing a digital product, building an interactive experience, or figuring out how technology can become a creative medium.
                </p>
                <p>
                  Available for freelance and contract work. Contact me if you have any projects you're working on!</p>
              </div>

            </div>
            
            <div className='w-full h-full'>
              <img
                src={aboutpic}
                className="rounded-[16px] h-full"
                alt="Henry"
              />
            </div>

          </div>

          {/* QUICK FACTS */}
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

{/* SKILLS & TOOLS */}

        <section className="py-24">
          <div className="flex flex-col gap-8">
            <h5>SKILLS & TOOLS</h5>
        <div>
          <h2 className='w-[70%]'>
            I work across design and technology, using different tools to bring
            ideas from concept to execution.
          </h2>

          <div className="flex md:flex-row flex-col gap-4 py-16">

            {/* UI/UX */}
            <div className="flex flex-col gap-4 border border-[var(--border)] p-4 rounded-[16px]">
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

            {/* PRODUCT DESIGN */}
            <div className="flex flex-col gap-4 border border-[var(--border)] p-4 rounded-[16px]">
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

            {/* MOTION */}
            <div className="flex flex-col gap-4 border border-[var(--border)] p-4 rounded-[16px]">
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

            {/* ILLUSTRATION */}
            <div className="flex flex-col gap-4 border border-[var(--border)] p-4 rounded-[16px]">
              <h5>ILLUSTRATION</h5>

              <div className="flex flex-col gap-3">
                <p>Procreate</p>
                <p>Photoshop</p>
                <p>Illustrator</p>
              </div>

              <p className="text-secondary">
                Print, digital, environments, icons
              </p>
            </div>

          </div>
        </div>
          </div>
        </section>

        
        {/* EXPERIENCE */}
        <section className="py-24 ">
            <div className="flex flex-col gap-8">
            <h5>EXPERIENCE</h5>

            <div className=''>
              <h2 className='w-[70%]'>
                I spent a lot of my time at Princeton studying computer
                science before discovering how much I love design.
              </h2>

              <div className='w-full '>
                <div className="mt-12 flex md:flex-row flex-col justify-center gap-4">

                  <div className="py-8 px-4 bg-[var(--surface))] flex flex-col gap-6 rounded-[16px]">
                    <h5 >2026—Present</h5>

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

        {/* AWARDS */}
        <section className="py-24 ">
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

        {/* CONTACT */}
        <section className="py-24">
          <div className="flex flex-col gap-8">
            <h5>CONTACT</h5>

            <div className="flex flex-col gap-8">
              <h1>Let's figure it out!</h1>

              <button
                onClick={() => {
                  setContactOpen(true);
                }}
                className="w-fit bg-[var(--foreground)] rounded-[16px] padding py-4 text-left"
              >
                <h5 className='text-[var(--background)] '>CONTACT ME</h5>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <Footer />
    </div>
  );
}