import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Portfolio from './Portfolio.jsx';
import Typewriter from './Typewriter.jsx';
import HowIWork from './HowIWork.jsx';
import NewNav from './NewNav.jsx';

/* Small live clock for the corner metadata */
function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(id);
  }, []);

  const day = now.toLocaleDateString('en-US', { weekday: 'long' });
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div className="meta flex gap-3 text-[var(--text-secondary)]">
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
}

/* Shapes sit on grid intersections. col/row/size are in grid cells
   (64px on desktop), so everything snaps to the lines. */
const SHAPES = [
  { type: 'square', col: 3, row: 3, size: 2 },
  { type: 'circle', col: 8, row: 2, size: 3 },
  { type: 'triangle', col: 13, row: 4, size: 3 },
];

function Shape({ type }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      style={{ overflow: 'visible' }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {type === 'square' && (
        <rect x="0" y="0" width="100" height="100" vectorEffect="non-scaling-stroke" />
      )}
      {type === 'circle' && (
        <circle cx="50" cy="50" r="50" vectorEffect="non-scaling-stroke" />
      )}
      {type === 'triangle' && (
        <polygon points="0,0 100,100 0,100" vectorEffect="non-scaling-stroke" />
      )}
    </svg>
  );
}

/* One layer = grid lines + shapes, drawn in currentColor.
   We render it twice: a quiet base, and a bright copy that is
   masked to a circle around the cursor. */
function GridLayer({ className }) {
  return (
    <div className={`grid-layer ${className}`}>
      {SHAPES.map((s, i) => (
        <div
          key={i}
          className="grid-shape hidden lg:block"
          style={{
            left: `calc(var(--off) + ${s.col} * var(--cell))`,
            top: `calc(${s.row} * var(--cell))`,
            width: `calc(${s.size} * var(--cell))`,
            height: `calc(${s.size} * var(--cell))`,
          }}
        >
          <Shape type={s.type} />
        </div>
      ))}
    </div>
  );
}

function GridField() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;

    const set = (x, y) => {
      el.style.setProperty('--x', `${x}px`);
      el.style.setProperty('--y', `${y}px`);
    };

    const onMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        set(e.clientX - r.left, e.clientY - r.top);
      });
    };
    const onLeave = () => set(-9999, -9999);

    window.addEventListener('pointermove', onMove);
    document.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid-field absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <GridLayer className="grid-base" />
      <GridLayer className="grid-lit" />
    </div>
  );
}

export default function Hero() {
  const portfolioRef = useRef(null);

  return (
    <div className=''>
      {/* Paper grain over the whole viewport (fixed, non-interactive).
          Move this to your App/layout if you want it on every page. */}

      <NewNav />
      <div>
        <section
          className="relative w-full h-[100vh] overflow-hidden bg-[var(--primary)]"
        >
          <GridField />



          {/* Corner metadata */}
          <div className="absolute top-6 right-6 lg:right-16 z-10">
            <LiveClock />
          </div>

          <div className="padding relative z-10 h-full flex flex-col">
            <div className="flex-1 flex items-end pb-12 w-full text-[var(--text-secondary)]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
                className="w-full"
              >
                <h1 className="display">
                  Hi, I’m Henry! I’m a designer and engineer{' '}

                  creating{' '}
                    <Typewriter
                      words={[
                        'interfaces',
                        'experiences',
                        'brands',
                        'motion',
                        'products',
                      ]}
                      styles={{ text: '' }}
                    />
                </h1>
              </motion.div>
            </div>
          </div>
        </section>
        <HowIWork />
      </div>

      {/* WORK */}
      <section id="work" ref={portfolioRef} className=''>
        <Portfolio />
      </section>


    </div>
  );
}