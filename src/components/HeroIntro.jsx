import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';

import hLetter from '../assets/animations/handmade.json';
import eLetter from '../assets/animations/energetic.json';
import nLetter from '../assets/animations/novel.json';
import rLetter from '../assets/animations/risky.json';
import yLetter from '../assets/animations/yours.json';

const WORDS = [
  { letter: 'H', text: 'Handmade.', color: '#66df9c', src: hLetter },
  { letter: 'E', text: 'Energetic.', color: '#9c46c1', src: eLetter },
  { letter: 'N', text: 'Novel.', color: '#e49a40', src: nLetter },
  { letter: 'R', text: 'Risky.', color: '#cb396b', src: rLetter },
  { letter: 'Y', text: 'Yours.', color: '#377ca8', src: yLetter },
];

const HOLD_TIME = 5000;
const LOTTIE_SCALE = 1.6;

export default function HeroIntro() {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(null);

  const measureRef = useRef(null);
  const lottieRef = useRef(null);

  const current = WORDS[index];

  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.offsetWidth);
    }
  }, [index]);

  useEffect(() => {
    lottieRef.current?.goToAndPlay(0, true);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, HOLD_TIME);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="max-w-[60%]">
      Hi, I'm Henry, a{' '}
      <span className="italic">product designer</span> and{' '}
      <span className="italic">developer</span>.{' '}

      <span className="inline-flex items-center whitespace-nowrap gap-2">
        {/* Animated letter */}
        <span className="relative inline-block md:w-10 md:h-10 w-6 h-6 shrink-0 align-middle">
          <span
            className="absolute inset-0 flex items-center justify-center"
            style={{ transform: `scale(${LOTTIE_SCALE})` }}
          >
            <Lottie
              key={current.letter}
              lottieRef={lottieRef}
              animationData={current.src}
              loop={false}
              autoplay
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </span>
        </span>

        <span>is for</span>{' '}

        {/* Hidden measuring span */}
        <span
          ref={measureRef}
          className="absolute invisible whitespace-nowrap pointer-events-none"
          aria-hidden="true"
        >
          {current.text}
        </span>

        {/* Animated word */}
        <span
          className="inline-block whitespace-nowrap transition-all duration-300 ease-in-out"
          style={{
            color: current.color,
            width: width !== null ? `${width}px` : 'auto',
          }}
        >
          {current.text}
        </span>
      </span>
    </h1>
  );
}