import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact.jsx';

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/play', label: 'Play' },
];

const pill = `
  pointer-events-auto
  px-4
  py-2
  rounded-full
  border
  border-white/15
  bg-[rgba(22,65,183,0.7)]
  backdrop-blur-md
  text-[var(--text-secondary)]
  transition-all
  duration-300
  ease-out
  hover:bg-[rgba(22,65,183,1)]
  hover:border-white/40
  hover:-translate-y-0.5
  hover:shadow-[0_6px_18px_rgba(22,65,183,0.35)]
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-white
`;

export default function NewNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const openContact = () => {
    setMenuOpen(false);
    setContactOpen(true);
  };

  return (
    <>
      <nav
        className="
          fixed
          top-0
          left-0
          right-0
          padding
          py-6
          z-50
          flex
          justify-between
          items-start
          pointer-events-none
        "
      >
        {/* Left: name */}
        <Link to="/" className={pill} onClick={() => setMenuOpen(false)}>
          <p className="meta !text-[11px]">Henry</p>
        </Link>

        {/* Right, desktop: links in a row */}
        <div className="hidden md:flex items-start gap-2">
          {LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className={pill}>
              <p className="meta">{label}</p>
            </Link>
          ))}
          <button type="button" onClick={openContact} className={pill}>
            <p className="meta">Contact</p>
          </button>
        </div>

        {/* Right, mobile: menu button + stacked pills */}
        <div className="md:hidden flex flex-col items-end gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={pill}
          >
            <p className="meta !text-[11px]">{menuOpen ? 'Close' : 'Menu'}</p>
          </button>

          <div
            id="mobile-menu"
            className={`
              flex flex-col items-end gap-2
              transition-all duration-300 ease-out
              ${
                menuOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none [&>*]:pointer-events-none'
              }
            `}
          >
            {LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={pill}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
              >
                <p className="meta !text-[11px]">{label}</p>
              </Link>
            ))}
            <button
              type="button"
              onClick={openContact}
              className={pill}
              tabIndex={menuOpen ? 0 : -1}
            >
              <p className="meta !text-[11px]">Contact</p>
            </button>
          </div>
        </div>
      </nav>

      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}