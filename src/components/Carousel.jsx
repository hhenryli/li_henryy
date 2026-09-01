// components/Carousel.jsx
import React, { useState, useRef } from 'react';

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);

  const prev = () => {
    setCurrent((i) => (i - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrent((i) => (i + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    const deltaX =
      e.changedTouches[0].clientX - touchStartX.current;

    const swipeThreshold = 40;

    if (deltaX > swipeThreshold) {
      prev();
    } else if (deltaX < -swipeThreshold) {
      next();
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full flex justify-center items-center touch-pan-y mb-8"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image */}
      <img
        src={images[current]}
        className="h-full w-full object-contain select-none rounded-xl"
        alt={`slide ${current + 1}`}
        draggable={false}
      />

      {/* Left button */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          w-10 h-10
          flex items-center justify-center
          rounded-full
          border
          hover:bg-white
          transition
          cursor-pointer
        "
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Right button */}
      <button
        onClick={next}
        aria-label="Next image"
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          w-10 h-10
          flex items-center justify-center
          rounded-full
          
          border
          hover:bg-white
          transition
          cursor-pointer
        "
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M9 18l6-6-6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Progress dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              w-2 h-2 rounded-full transition-colors
              ${i === current ? 'bg-black' : 'bg-[#ebebeb]'}
            `}
          />
        ))}
      </div>
    </div>
  );
}