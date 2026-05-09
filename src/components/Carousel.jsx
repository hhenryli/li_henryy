// components/Carousel.jsx
import React, { useState } from 'react'

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <div className='relative w-full h-full flex justify-center aspect-video'>
      <img src={images[current]} className='h-full object-contain' alt={`slide ${current + 1}`} />
      
      <div className='absolute inset-0 flex'>
        <div onClick={prev} className='w-1/2 h-full cursor-w-resize' />
        <div onClick={next} className='w-1/2 h-full cursor-e-resize' />
      </div>

      <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
        {images.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full ${i === current ? 'bg-black/10' : 'bg-black/60'}`} />
        ))}
      </div>
    </div>
  )
}