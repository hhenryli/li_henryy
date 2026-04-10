import React from 'react';

export default function BackToTop() {

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="absolute bottom-4 right-4 md:right-8 text-m"
      >
      ↑
    </button>
  );
}

