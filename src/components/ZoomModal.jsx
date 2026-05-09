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
        className="bg-white max-w-[90vw] max-h-[80vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}