// components/Carousel.jsx
import React, { useState, useRef } from 'react'

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const swipeThreshold = 40; // minimum px to count as an intentional swipe

    if (deltaX > swipeThreshold) {
      prev();
    } else if (deltaX < -swipeThreshold) {
      next();
    }
    touchStartX.current = null;
  };

  return (
    <div
      className='relative w-full flex justify-center items-center touch-pan-y mb-6'
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img
        src={images[current]}
        className='h-full w-full object-contain select-none'
        alt={`slide ${current + 1}`}
        draggable={false}
      />

      {/* Click zones: desktop-only fallback, hidden on touch devices via md: */}
      <div className='absolute inset-0 hidden md:flex'>
        <div onClick={prev} className='w-1/2 h-full cursor-w-resize' />
        <div onClick={next} className='w-1/2 h-full cursor-e-resize' />
      </div>

      <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 '>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-black' : 'bg-black/20'}`}
          />
        ))}
      </div>
    </div>
  )
}