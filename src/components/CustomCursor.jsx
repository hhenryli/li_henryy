import React, { useEffect, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const reducedMotion = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 1200,
    damping: 40,
    mass: 0.2,
  });
  
  const y = useSpring(mouseY, {
    stiffness: 1200,
    damping: 40,
    mass: 0.2,
  });

  useEffect(() => {
    const pointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    );

    if (!pointer.matches || reducedMotion) return;

    document.documentElement.classList.add(
      'custom-cursor-enabled'
    );

    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setVisible(true);

      const target = event.target;

      setHovering(
        target instanceof Element &&
        Boolean(
          target.closest(
            'a, button, [role="button"], [data-cursor]'
          )
        )
      );
    };

    const handleLeave = (event) => {
      if (!event.relatedTarget) {
        setVisible(false);
      }
    };

    window.addEventListener('pointermove', handleMove);
    document.addEventListener('mouseout', handleLeave);

    return () => {
      document.documentElement.classList.remove(
        'custom-cursor-enabled'
      );

      window.removeEventListener(
        'pointermove',
        handleMove
      );

      document.removeEventListener(
        'mouseout',
        handleLeave
      );
    };
  }, [mouseX, mouseY, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <motion.div
      className="
        fixed
        top-0 left-0
        z-[9999]
        pointer-events-none
        mix-blend-difference
      "
      style={{ x, y }}
    >
      <motion.div
        className="
          -translate-x-1/2
          -translate-y-1/2
          w-4 h-4
          rounded-full
          bg-white
        "
        animate={{
          scale: hovering ? 2.5 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
}
