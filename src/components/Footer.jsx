import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact.jsx';
import henry from '../assets/me/henry.svg';

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const markerRef = useRef(null);

  const socials = [
    {
      href: 'https://www.instagram.com/henryli.design/',
      label: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/in/henryli0508/',
      label: 'LinkedIn',
    },
    {
      href: 'https://github.com/hhenryli',
      label: 'GitHub',
    },
    {
      href: 'https://www.youtube.com/@henryli.design',
      label: 'YouTube',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(
          new CustomEvent('footerVisibility', {
            detail: entry.isIntersecting,
          })
        );
      },
      { threshold: 0 }
    );

    if (markerRef.current) {
      observer.observe(markerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer className="w-full py-8 bg-[var(--primary)]">
        
        {/* Main editorial statement */}
        <div className="w-full padding flex flex-col gap-24">

          <div className='flex justify-between w-full'>
            <button
                  onClick={() => setContactOpen(true)}
                  className="text-[var(--text-secondary)] group flex md:items-center items-end standard-hover gap-2"
                >
                  <p className='meta'>
                    Contact me
                  </p>

                  <span className="meta transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </button>
            <div className="flex md:flex-row flex-col items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta text-[var(--text-secondary)] standard-hover"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>
        
      </footer>

      <Contact
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}