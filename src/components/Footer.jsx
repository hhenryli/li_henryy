import React, { useState, useEffect, useRef } from 'react';
import BackToTop from './BackToTop.jsx';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import emailicon from '../assets/animations/email.json';
import instaicon from '../assets/animations/insta.json';
import linkedinicon from '../assets/animations/linkedin.json';
import githubicon from '../assets/animations/github.json';
import youtubeicon from '../assets/animations/youtube.json';
import artboxicon from '../assets/animations/artbox.json';
import hearticon from '../assets/animations/heart.json';
import sides from '../assets/animations/sides.json';

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

  const socials = [
    { href: 'https://www.instagram.com/henryli.design/', icon: instaicon, ref: instaRef, label: 'INSTAGRAM' },
    { href: 'https://www.linkedin.com/in/henryli0508/', icon: linkedinicon, ref: linkedinRef, label: 'LINKEDIN' },
    { href: 'https://github.com/hhenryli', icon: githubicon, ref: githubRef, label: 'GITHUB' },
    { href: 'https://www.youtube.com/@henryli.design', icon: youtubeicon, ref: youtubeRef, label: 'YOUTUBE' },
  ];

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
    <div ref={footerRef} className='w-full flex flex-col border text-sm'>
      <div className='h-18'>

      </div>
      <div className='border-b md:px-6 px-3 py-2 flex items-end'>
        <img src="/henry.svg" />
      </div>

      <div className=''>

      </div>

      <div className=' grid grid-cols-1 md:grid-cols-3'>
        <div className='padding border-b md:border-b-0 md:border-r flex flex-col gap-6'>
          <div>
            <p className='text-xs tracking-tight mb-2'>CONTACT:</p>
            <h3 className='uppercase font-medium leading-snug'>
              Reach out for collaboration or if you want to say hi!
            </h3>
            <a
              href="mailto:li.henry0508@gmail.com"
              className='inline-flex border h-6 mt-2 standard-hover'
              onMouseEnter={() => emailRef.current?.goToAndPlay(0, true)}
            >
              <div className='flex items-center justify-center border-r w-6 h-full'>
                <div className='w-4 h-4'>
                  <Lottie lottieRef={emailRef} animationData={emailicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
              <p className='flex items-center px-1'>EMAIL</p>
            </a>
          </div>

          <div>
            <p className='text-xs tracking-tight mb-2'>SOCIALS:</p>
            <div className='flex flex-wrap gap-2'>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noreferrer'
                  className='flex border h-6 standard-hover'
                  onMouseEnter={() => social.ref.current?.goToAndPlay(0, true)}
                >
                  <div className='flex items-center justify-center border-r w-6 h-full'>
                    <div className='w-4 h-4'>
                      <Lottie lottieRef={social.ref} animationData={social.icon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                    </div>
                  </div>
                  <p className='flex items-center px-1 text-xs'>{social.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col border-b md:border-b-0 md:border-r'>
          <div className='h-12 border-b flex gap-4 items-center padding italic tracking-wide'>
            <Clock />
            <p>⌀</p>
            <p>EST</p>
          </div>
          <div className='flex-1 padding'>
            <h4 className='leading-tight'>
              DESIGNER & DEVELOPER <br /> AVAILABLE FOR WORK
            </h4>
            <a
              href="https://drive.google.com/file/d/14hZaPfVeeYZeVkcLLniogw4FRIE5Q4MS/view?usp=sharing"
              target='_blank'
              rel='noreferrer'
              className='inline-block mt-4 pt-2 border-t standard-hover'
            >
              CV / RESUME ↗
            </a>
          </div>
          <a
            href="/"
            className='bg-[#ebebebd9] text-[#1c1c1c] padding '
          >
            <p className='standard-hover'>HENRYLI.ME</p>
          </a>
        </div>

        <div className='padding flex flex-col justify-between gap-2'>
          <div className='flex flex-col gap-2'>
            <p className='text-xs tracking-tight'>QUICK LINKS:</p>
            <ul className='flex flex-col gap-2'>
              <Link
                to="/artbox"
                className='flex justify-between border-b pb-1 standard-hover'
                onMouseEnter={() => artboxRef.current?.goToAndPlay(0, true)}
              >
                <div className='w-4 h-4'>
                  <Lottie lottieRef={artboxRef} animationData={artboxicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
                <p>ARTBOX</p>
              </Link>
              <Link
                to="/about"
                className='flex justify-between border-b pb-1 standard-hover'
                onMouseEnter={() => aboutRef.current?.goToAndPlay(0, true)}
              >
                <div className='w-4 h-4'>
                  <Lottie lottieRef={aboutRef} animationData={hearticon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
                <p>ABOUT</p>
              </Link>
              <Link
                to="/play"
                className='flex justify-between border-b pb-1 standard-hover'
                onMouseEnter={() => sidesRef.current?.goToAndPlay(0, true)}
              >
                <div className='w-4 h-4'>
                  <Lottie lottieRef={sidesRef} animationData={sides} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
                <p>SIDE PROJECTS</p>
              </Link>
            </ul>
          </div>

          <div className='grid grid-cols-3 gap-2 '>
          <Link to="/work?filter=uiux" className='pill flex justify-between border-b pb-1 standard-hover'>
            <p>UI/UX</p>
          </Link>
          <Link to="/work?filter=branding" className='pill flex justify-between border-b pb-1 standard-hover'>
            <p>PRODUCT</p>
          </Link>
          <Link to="/motion" className='pill flex justify-between border-b pb-1 standard-hover'>
            <p>MOTION</p>
          </Link>
          <Link to="/work?filter=poster" className='pill flex justify-between border-b pb-1 standard-hover'>
            <p>PRINT</p>
          </Link>
          <Link to="/websites" className='pill flex justify-between border-b pb-1 standard-hover'>
            <p>WEBSITES</p>
          </Link>
          <Link to="/play" className='pill flex justify-between border-b pb-1 standard-hover'>
            <p>GAMES</p>
          </Link>
            </div>
        </div>
      </div>
      <div ref={markerRef} className='' />
      <div className='flex justify-between items-center border-t md:px-6 px-3 py-2 text-xs'>
        <p>ALL RIGHTS RESERVED.</p>
        <BackToTop />
        <p>©DESIGN BY HENRY LI</p>
      </div>
    </div>
  );
}