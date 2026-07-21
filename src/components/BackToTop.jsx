import React, { useState, useEffect, useRef } from 'react';

export default function BackToTop({ targetRef, threshold = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scrollEl = targetRef?.current || window;

    const handleScroll = () => {
      if (targetRef?.current) {
        const el = targetRef.current;
        const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
        setVisible(nearBottom);
      } else {
        const nearBottom =
          window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - threshold;
        setVisible(nearBottom);
      }
    };

    scrollEl.addEventListener('scroll', handleScroll);
    handleScroll(); // check on mount too, in case content is already short enough to start "at bottom"

    return () => scrollEl.removeEventListener('scroll', handleScroll);
  }, [targetRef, threshold]);

  const scrollToTop = () => {
    if (targetRef?.current) {
      targetRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-[24px] left-1/2 -translate-x-1/2 z-40 w-[34px] h-[34px] cursor-pointer border flex items-center justify-center transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      ↑
    </button>
  );
}