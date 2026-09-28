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
import henry from '../assets/me/henry.svg'
import Contact from './Contact.jsx';


export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const footerRef = useRef(null);
  const markerRef = useRef(null);

  const socials = [
    { href: 'https://www.instagram.com/henryli.design/', label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/henryli0508/', label: 'Linkedin' },
    { href: 'https://github.com/hhenryli', label: 'Github' },
    { href: 'https://www.youtube.com/@henryli.design', label: 'Youtube' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(
          new CustomEvent('footerVisibility', { detail: entry.isIntersecting })
        );
      },
      { threshold: 0 }
    );
    if (markerRef.current) observer.observe(markerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
<div ref={footerRef} className='w-full rounded-[16px] px-3 py-3'>
      <div ref={footerRef} className='bg-[var(--footer-bg,#1a1a1a)] rounded-[32px]'>

      {/* top row — columns + CTA, mirrors SHOP / ABOUT / LEGAL / NEWSLETTER */}
      <div className='padding pt-12 pb-16 grid grid-cols-2 md:grid-cols-4 gap-8'>

        <div className='flex flex-col gap-2'>
          <h5 className='opacity-50'>CONTACT</h5>
          <a href="mailto:li.henry0508@gmail.com" className='standard-hover'>
            <p>li.henry0508@gmail.om</p>
          </a>
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

        <div className='flex flex-col gap-2'>
          <h5 className='opacity-50'>FOLLOW</h5>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target='_blank' rel="noopener noreferrer" className='standard-hover'>
              <p>{s.label}</p>
            </a>
          ))}
        </div>

        <div className='flex flex-col gap-2'>
          <h5 className='opacity-50'>EXPLORE</h5>
          <Link to="/work" className='standard-hover'><p>UI/UX</p></Link>
          <Link to="/work" className='standard-hover'><p>Product</p></Link>
          <Link to="/work" className='standard-hover'><p>Motion</p></Link>
        </div>

        <div className='flex flex-col gap-3'>
          <h5 className='opacity-50'>GET IN TOUCH</h5>
          <p className='opacity-80'>Have a project you're working on?</p>
          <button
            onClick={() => setContactOpen(true)}
            className='flex items-center justify-between border-b border-white/30 pb-1 standard-hover w-fit'
          >
            <h5 className="flex items-center gap-1">
              CONTACT ME
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3 13L13 3M6 3H13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h5>
          </button>
        </div>
      </div>
      <div ref={markerRef} />

      {/* full-width wordmark, edge to edge */}
      <div className='w-full px-4 md:px-6 pb-4'>
        <img src={henry} className='w-full h-auto' alt="Henry" />
      </div>
      </div>

      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </div>

  );
}