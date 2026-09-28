import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Portfolio from './Portfolio.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

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

export default function Hero() {
  const portfolioRef = useRef(null);

  const scrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div>
      <div className="padding flex flex-col gap-8">

        {/* Hero */}
        <div className="h-[calc(100vh-150px)] flex flex-col justify-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: 'easeOut',
            }}
            className="flex lg:flex-row flex-col lg:justify-between justify-end align-end gap-4"
          >

            {/* Hero heading */}
            <div className="flex items-end">
              <h1 className="max-w-[800px]">
                <div>
                  Hi, I'm{' '}
                  <span className="text-[#66df9c]">H</span>
                  <span className="text-[#9c46c1]">e</span>
                  <span className="text-[#e49a40]">n</span>
                  <span className="text-[#cb396b]">r</span>
                  <span className="text-[#377ca8]">y</span>!

                  I'm a{' '}

                  <span className="bold">designer</span>{' '}
                  creating{' '}

                  <Typewriter
                    words={[
                      'INTERFACES',
                      'EXPERIENCES',
                      'BRANDS',
                      'MOTION',
                      'PRODUCTS',
                    ]}
                    styles={[
                      'digital',
                      'thinserif',
                      'handwritten',
                      'sans',
                      'mono',
                    ]}
                    pillStyles={[
                      'bg-[#66df9c]/20',
                      'bg-[#9c46c1]/20',
                      'bg-[#e49a40]/20',
                      'bg-[#cb396b]/20',
                      'bg-[#377ca8]/20',
                    ]}
                    icons={[
                      Shapes,
                      Sparkles,
                      Pencil,
                      Rabbit,
                      PackageSearch,
                    ]}
                  />
                </div>
              </h1>
            </div>

            {/* Hero description */}
            <div className="flex flex-col justify-end gap-8">
              <p className="max-w-[20em] leading-relaxed text-justify">
                I'm an engineer + designer, passionate about creating
                experiences at the intersection of technology and design.
              </p>
            </div>

          </motion.div>
        </div>

        {/* Portfolio */}
        <div className="flex flex-col w-full">
          <div
            ref={portfolioRef}
            className="md:w-[100%] w-full"
          >
            <Portfolio />
          </div>
        </div>

      </div>

      {/* About Me */}
      <div>
        <Me />
      </div>

      {/* How I Work */}
      <div>
        <HowIWork />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}