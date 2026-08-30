import React from 'react';
import styles from '../styles/Shelf.module.css';

const zine = { month: 'may', src: '/zine/may26.png', link: 'https://issuu.com/henryli.design/docs/main' };

export default function Shelf() {
  return (
    <div className='flex justify-between w-full h-full gap-4'>
      <a href={zine.link} target="_blank" rel="noopener noreferrer" className=''>
        <a className={`${styles.book} ${styles.current} w-40 flex flex-col items-center flex-shrink-0`}>
          <img src={zine.src} className="w-full object-contain" />
        </a>
      </a>
      <div className='text-end flex flex-col justify-between'>
        <div>
          <h2 className='italic'>Featured Zine</h2>
          <h3>A periodic news editorial</h3>
        </div>
        <p>Last Updated May 26, 2026</p>
      </div>

    </div>
  );
}