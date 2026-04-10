import React from 'react';

export default function ZoomModal({ src, caption, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4 flex flex-col gap-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt=""
        className="bg-white max-w-[90vw] max-h-[80vh] rounded-2xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <div className='relative bg-gray-200 px-15 py-2'>
        <h1 className=''>{caption}</h1>
      </div>
    </div>
  );
}