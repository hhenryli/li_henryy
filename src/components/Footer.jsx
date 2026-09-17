import React, { useState, useEffect, useRef } from 'react';
import BackToTop from './BackToTop.jsx';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import instaicon from '../assets/animations/insta.json';
import linkedinicon from '../assets/animations/linkedin.json';
import githubicon from '../assets/animations/github.json';
import youtubeicon from '../assets/animations/youtube.json';
import hLetter from '../assets/animations/handmade.json';
import eLetter from '../assets/animations/energetic.json';
import nLetter from '../assets/animations/novel.json';
import rLetter from '../assets/animations/risky.json';
import yLetter from '../assets/animations/yours.json';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const formatted = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return <p>{formatted}</p>;
}

export default function Footer() {
  const footerRef = useRef(null);
  const markerRef = useRef(null);

  const emailRef = useRef(null);
  const instaRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const youtubeRef = useRef(null);
  const artboxRef = useRef(null);
  const aboutRef = useRef(null);
  const sidesRef = useRef(null);


  const hRef = useRef(null);
  const eRef = useRef(null);
  const nRef = useRef(null);
  const rRef = useRef(null);
  const yRef = useRef(null);

  const socials = [
    { href: 'https://www.instagram.com/henryli.design/', icon: instaicon, ref: instaRef, label: 'INSTAGRAM' },
    { href: 'https://www.linkedin.com/in/henryli0508/', icon: linkedinicon, ref: linkedinRef, label: 'LINKEDIN' },
    { href: 'https://github.com/hhenryli', icon: githubicon, ref: githubRef, label: 'GITHUB' },
    { href: 'https://www.youtube.com/@henryli.design', icon: youtubeicon, ref: youtubeRef, label: 'YOUTUBE' },
  ];


  const letters = [
    { key: 'h', src: hLetter, ref: hRef },
    { key: 'e', src: eLetter, ref: eRef },
    { key: 'n', src: nLetter, ref: nRef },
    { key: 'r', src: rLetter, ref: rRef },
    { key: 'y', src: yLetter, ref: yRef },
  ];

  const playingRef = useRef({});
  
  const holdOnFirstFrame = (ref) => {
    ref.current?.goToAndStop(0, true);
  };

  const handleHover = (letter) => {
    if (playingRef.current[letter.key]) return;
    playingRef.current[letter.key] = true;
    letter.ref.current?.goToAndPlay(0, true);
  };

  const handleComplete = (key) => {
    playingRef.current[key] = false;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(
          new CustomEvent('footerVisibility', { detail: entry.isIntersecting })
        );
      },
      { threshold: 0 } // fires as soon as the marker itself enters view at all
    );

    if (markerRef.current) observer.observe(markerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={footerRef} className='border-t border-[var(--border)] w-full h-fit flex flex-col text-sm'>
      <div className='padding flex w-full pt-6 pb-12'>
        <div className='flex flex-col w-full'>
          
        <div className="flex w-full h-32 md:h-48">
            {letters.map((letter) => (
              <div
                key={letter.key}
                className="flex-1"
                onMouseEnter={() => handleHover(letter)}
              >
                <Lottie
                  lottieRef={letter.ref}
                  animationData={letter.src}
                  loop={false}
                  autoplay={false}
                  onComplete={() => handleComplete(letter.key)}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            ))}
            </div>
            <div className='grid grid-cols-3 gap-2'>
              <Link to="/work?filter=uiux" className='pill flex justify-between border-b pb-1 standard-hover'>
                <h5>UI/UX</h5>
              </Link>
              <Link to="/work?filter=branding" className='pill flex justify-between border-b pb-1 standard-hover'>
                <h5>PRODUCT</h5>
              </Link>
              <Link to="/motion" className='pill flex justify-between border-b pb-1 standard-hover'>
                <h5>MOTION</h5>
              </Link>
              <Link to="/work?filter=poster" className='pill flex justify-between border-b pb-1 standard-hover'>
               <h5>PRINT</h5>
              </Link>
              <Link to="/websites" className='pill flex justify-between border-b pb-1 standard-hover'>
                <h5>WEBSITES</h5>
              </Link>
              <Link to="/play" className='pill flex justify-between border-b pb-1 standard-hover'>
                <h5>GAMES</h5>
              </Link>
            </div>
        </div>
      </div>
      <div ref={markerRef} className='' />
      <div className='flex md:flex-row flex-col justify-between items-start border-t border-[var(--border)] padding py-6 gap-8'>
        <h5>©DESIGN AND DEVELOPMENT BY HENRY LI</h5>
        <div className='flex md:flex-row flex-col gap-4'>
          <a
            href="/li_henry_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5>RESUME</h5>
          </a>
          <a href='https://www.instagram.com/henryli.design/' target='_blank'>
            <h5>INSTAGRAM</h5>
          </a>
          <a href='https://www.linkedin.com/in/henryli0508/' target='_blank'>
            <h5>LINKEDIN</h5>
          </a>
          <a href='https://github.com/hhenryli' target='_blank'>
            <h5>GITHUB</h5>
          </a>
          <a href='https://www.youtube.com/@henryli.design' target='_blank'>
            <h5>YOUTUBE</h5>
          </a>
        </div>
        <BackToTop />

      </div>
    </div>
  );
}