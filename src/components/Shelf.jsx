import React from 'react';
import styles from '../styles/Shelf.module.css';

const zines = [
  { month: 'jan', src: null, link: null },
  { month: 'feb', src: null, link: null },
  { month: 'mar', src: null, link: null },
  { month: 'apr', src: null, link: null },
  { month: 'may', src: '/zine/may26.png', link: 'https://your-link.com' },
  { month: 'jun', src: null, link: null },
  { month: 'jul', src: null, link: null },
  { month: 'aug', src: null, link: null },
  { month: 'sep', src: null, link: null },
  { month: 'oct', src: null, link: null },
  { month: 'nov', src: null, link: null },
  { month: 'dec', src: null, link: null },
];

const lastFilledMonth = zines.reduce((last, zine, i) => zine.src ? i : last, 0);

export default function Shelf() {
  return (
    <div className='flex flex-col w-full p-6 gap-4'>
      <div className='flex justify-between items-end'>
        <div>
          <h2 className='italic'>THE SHELF</h2>
          <h1>A digital shelf for my monthly zine magazines</h1>
        </div>
        <p className='flex-end'>updated May 25, 2026</p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-4 gap-2 w-full">
        {zines.map((zine, i) => {
          const isCurrent = i === lastFilledMonth;

          const inner = (
            <div className={`${styles.book} ${isCurrent ? styles.current : ''} flex flex-col items-center flex-shrink-0`}>
              {zine.src ? (
                <img src={zine.src} className="h-32 object-contain" />
              ) : (
                <div className="h-32 w-full border border-dashed border-black opacity-20 flex items-end justify-center pb-1">
                  <span className="text-xs">{zine.month}</span>
                </div>
              )}
            </div>
          );

          return zine.link ? (
            <a key={i} href={zine.link} target="_blank" rel="noopener noreferrer">{inner}</a>
          ) : (
            <div key={i}>{inner}</div>
          );
        })}
      </div>
    </div>

  );
}