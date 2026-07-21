import React, { useState, useEffect, useRef } from 'react';
import BackToTop from './BackToTop.jsx';
import { Link } from 'react-router-dom';

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

  return <h1>{formatted}</h1>;
}

export default function Footer() {
  const footerRef = useRef(null);
  const markerRef = useRef(null);
  
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
      <div className='h-21'>

      </div>
      <div className='border-b p-6 flex items-end'>
        <img src="/henry.svg" />
      </div>

      <div className=''>

      </div>

      <div className='md:h-[45%] grid grid-cols-1 md:grid-cols-3'>
        <div className='p-6 border-b md:border-b-0 md:border-r flex flex-col gap-6'>
          <div>
            <p className='text-xs tracking-tight mb-2'>CONTACT:</p>
            <h3 className='uppercase font-medium leading-snug'>
              Reach out for collaboration or if you want to say hi!
            </h3>
            <a href="mailto:li.henry0508@gmail.com" 
              className='inline-flex border h-6 mt-2'
            >
              <div className='flex items-center justify-center border-r w-6 h-full'>
                <img src="/icons/email.svg" className='w-4 h-4' />
              </div>
              <p className='flex items-center px-1'>EMAIL</p>
            </a>
          </div>

          <div>
            <p className='text-xs tracking-tight mb-2'>SOCIALS:</p>
            <div className='flex flex-wrap gap-2'>
              {[
                { href: 'https://www.instagram.com/henryli.design/', icon: '/icons/instagram.svg', label: 'INSTAGRAM' },
                { href: 'https://www.linkedin.com/in/henryli0508/', icon: '/icons/linkedin.svg', label: 'LINKEDIN' },
                { href: 'https://github.com/hhenryli', icon: '/icons/github.svg', label: 'GITHUB' },
                { href: 'https://www.youtube.com/@henryli.design', icon: '/icons/youtube.svg', label: 'YOUTUBE' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noreferrer'
                  className='flex border h-6'
                >
                  <div className='flex items-center justify-center border-r w-6 h-full'>
                    <img src={social.icon} className='w-4 h-4' />
                  </div>
                  <p className='flex items-center px-1 text-xs'>{social.label}</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col border-b md:border-b-0 md:border-r'>
          <div className='h-12 border-b flex gap-4 items-center px-6 italic tracking-wide'>
            <Clock />
            <h1>⌀</h1>
            <h1>EST</h1>
          </div>
          <div className='flex-1 p-6'>
            <h4 className='leading-tight'>
              DESIGNER & DEVELOPER <br /> AVAILABLE FOR WORK
            </h4>
            <a
              href="https://drive.google.com/file/d/14hZaPfVeeYZeVkcLLniogw4FRIE5Q4MS/view?usp=sharing"
              target='_blank'
              rel='noreferrer'
              className='inline-block mt-4 pt-2 border-t text-sm'
            >
              CV / RESUME ↗
            </a>
          </div>
          <a
            href="/"
            className='bg-[#0055bd] text-[#dcdbd3] px-6 py-4'
          >
            <p>HENRYLI.ME</p>
          </a>
        </div>

        <div className='p-6 flex flex-col justify-between gap-2'>
          <div className='flex flex-col gap-2'>
            <p className='text-xs tracking-tight'>QUICK LINKS:</p>
            <ul className='flex flex-col gap-2'>
              <li className='flex justify-between border-b pb-1'>
                <img src="/icons/artbox.svg" className='w-4 h-4' />
                <Link to="/artbox">ARTBOX</Link>
              </li>
              <li className='flex justify-between border-b pb-1'>
              <img src="/icons/about.svg" className='w-4 h-4' />
                <Link to="/about">ABOUT</Link>
              </li>
              <li className='flex justify-between border-b pb-1'>
                <img src="/icons/sides.svg" className='w-4 h-4' />
                <Link to="/work">SIDE PROJECTS</Link>
              </li>
            </ul>
          </div>

          <div className='grid grid-cols-3 gap-2 '>
              <div className='pill'>
                <p>UI / UX</p>
              </div>
              <div className='pill'>
                <p>PRODUCT</p>
              </div>
              <div className='pill'>
                <p>MOTION</p>
              </div>
              <div className='pill'>
                <p>GRAPHICS</p>
              </div>
              <div className='pill'>
                <p>FULL STACK</p>
              </div>
              <div className='pill'>
                <p>GAME DEV</p>
              </div>
            </div>
        </div>
      </div>
      <div ref={markerRef} className='' />
      <div className='flex justify-between items-center border-t px-6 py-2 text-xs'>
        <p>ALL RIGHTS RESERVED.</p>
        <BackToTop />
        <p>©DESIGN & DEV BY HENRY LI</p>
      </div>
    </div>
  );
}