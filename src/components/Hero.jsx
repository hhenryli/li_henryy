import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Portfolio from './Portfolio.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';
import Typewriter from './Typewriter.jsx';
import {
  Sparkles,
  Pencil,
  Rabbit,
  PackageSearch,
  Shapes,
} from 'lucide-react';
import Me from './Me.jsx';
import HowIWork from './HowIWork.jsx';
import NewNav from './NewNav.jsx';

export default function Hero() {
  const portfolioRef = useRef(null);

  return (
    <div>

      {/* BLUE HERO */}

      <NewNav />
      <section className="w-full h-[calc(100vh)] bg-[var(--primary)]">
        <div className="padding h-full flex flex-col">

          {/* Intro */}
          <div className="flex-1 flex items-end pb-6  max-w-[60%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: 'easeOut',
              }}
              className="w-full"
            >
              <h7 className="text-[var(--text-secondary)] text-[4vw]">
                <div>
                  Hi, I’m{' '}
                  <span >H</span>
                  <span >e</span>
                  <span >n</span>
                  <span >r</span>
                  <span >y</span>!

                  {' '}I’m a{' '}

                  <span className="bold">
                    designer and engineer
                  </span>{' '}

                  creating{' '}

                  <Typewriter
                    words={[
                      'interfaces',
                      'experiences',
                      'brands',
                      'motion',
                      'products',
                    ]}
                    styles={[
                      'digital',
                      'thinserif',
                      'handwritten',
                      'sans',
                      'mono',
                    ]}
  
                    colors={[
                      'text-[#59B73F]',
                      'text-[#EAAA21]',
                      'text-[#CD3B7F]',
                      'text-[#DE6330]',
                      'text-[#D13434]',
                    ]}
                    // icons={[
                    //   Shapes,
                    //   Sparkles,
                    //   Pencil,
                    //   Rabbit,
                    //   PackageSearch,
                    // ]}
                  />
               
                </div>
              </h7>
            </motion.div>
          </div>

        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        ref={portfolioRef}
      >
        <Portfolio />
      </section>

      {/* HOW I WORK */}
      <HowIWork />


      {/* FOOTER */}

    </div>
  );
}