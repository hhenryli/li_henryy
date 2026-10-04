import React, {
  useRef,
  useState,
  useEffect,
} from 'react';

import { motion, useReducedMotion } from 'framer-motion';

import Portfolio from './Portfolio.jsx';
import Typewriter from './Typewriter.jsx';
import HowIWork from './HowIWork.jsx';
import NewNav from './NewNav.jsx';

/* Small live clock for the corner metadata */
function LiveClock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
    }, 60000);

    return () => clearInterval(id);
  }, []);

  const day = now.toLocaleDateString('en-US', {
    weekday: 'long',
  });

  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <div
      className="
        meta
        flex
        gap-3
        tabular-nums
        text-[var(--text-secondary)]
      "
    >
      <p>{day}</p>
      <p>{time}</p>
    </div>
  );
}

const SHAPES = [
  {
    type: 'square',
    col: 3,
    row: 3,
    size: 2,
  },
  {
    type: 'circle',
    col: 8,
    row: 2,
    size: 3,
  },
  {
    type: 'triangle',
    col: 13,
    row: 4,
    size: 3,
  },
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
      aria-hidden="true"
    >
      {type === 'square' && (
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          vectorEffect="non-scaling-stroke"
        />
      )}

      {type === 'circle' && (
        <circle
          cx="50"
          cy="50"
          r="50"
          vectorEffect="non-scaling-stroke"
        />
      )}

      {type === 'triangle' && (
        <polygon
          points="0,0 100,100 0,100"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  );
}

function GridLayer({ className }) {
  return (
    <div className={`grid-layer ${className}`}>
      {SHAPES.map((shape, index) => (
        <div
          key={`${shape.type}-${index}`}
          className="grid-shape hidden lg:block"
          style={{
            left: `calc(var(--off) + ${shape.col} * var(--cell))`,
            top: `calc(${shape.row} * var(--cell))`,
            width: `calc(${shape.size} * var(--cell))`,
            height: `calc(${shape.size} * var(--cell))`,
          }}
        >
          <Shape type={shape.type} />
        </div>
      ))}
    </div>
  );
}

function GridField({ containerRef }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    const container = containerRef.current;

    if (!grid || !container) return;

    /*
     * No cursor spotlight on devices without
     * an actual hover capable pointer.
     */
    const supportsHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );

    if (!supportsHover.matches) return;

    let raf = 0;

    const setPosition = (x, y) => {
      grid.style.setProperty('--x', `${x}px`);
      grid.style.setProperty('--y', `${y}px`);
    };

    const onPointerMove = (event) => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();

        setPosition(
          event.clientX - rect.left,
          event.clientY - rect.top
        );
      });
    };

    const onPointerLeave = () => {
      setPosition(-9999, -9999);
    };

    container.addEventListener(
      'pointermove',
      onPointerMove,
      { passive: true }
    );

    container.addEventListener(
      'pointerleave',
      onPointerLeave
    );

    return () => {
      cancelAnimationFrame(raf);

      container.removeEventListener(
        'pointermove',
        onPointerMove
      );

      container.removeEventListener(
        'pointerleave',
        onPointerLeave
      );
    };
  }, [containerRef]);

  return (
    <div
      ref={gridRef}
      className="
        grid-field
        absolute
        inset-0
        z-0
        pointer-events-none
      "
      aria-hidden="true"
    >
      <GridLayer className="grid-base" />
      <GridLayer className="grid-lit" />
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef(null);

  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <NewNav />

      <div>
        <section
          ref={heroRef}
          className="
            relative
            w-full
            h-dvh
            min-h-[600px]
            overflow-hidden
            bg-[var(--primary)]
          "
        >
          <GridField containerRef={heroRef} />

          <div
            className="
              absolute
              top-6
              right-6
              lg:right-16
              z-10
            "
          >
            <LiveClock />
          </div>

          <div
            className="
              padding
              relative
              z-10
              h-full
              flex
              flex-col
            "
          >
            <div
              className="
                flex-1
                flex
                items-end
                pb-12
                w-full
                text-[var(--text-secondary)]
              "
            >
              <motion.div
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={
                  shouldReduceMotion
                    ? {
                        duration: 0,
                      }
                    : {
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                      }
                }
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
                    styles={{
                      text: '',
                    }}
                  />
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        <HowIWork />
      </div>

      <section id="work">
        <Portfolio />
      </section>
    </div>
  );
}