import React, { useState } from 'react';
import Nav from './Nav.jsx';

/* paintings */
import p1 from '../assets/portfolio/painting/1.jpg';
import p2 from '../assets/portfolio/painting/2.jpg';
import p3 from '../assets/portfolio/painting/3.jpg';
import p4 from '../assets/portfolio/painting/4.jpg';
import p5 from '../assets/portfolio/painting/5.jpg';
import p6 from '../assets/portfolio/painting/6.jpg';
import p7 from '../assets/portfolio/painting/7.jpg';

/* digital */
import d1 from '../assets/portfolio/digital/1.png';
import d2 from '../assets/portfolio/digital/2.png';
import d3 from '../assets/portfolio/digital/3.png';
import d4 from '../assets/portfolio/digital/4.png';
import d5 from '../assets/portfolio/digital/5.png';
import d6 from '../assets/portfolio/digital/6.png';
import d7 from '../assets/portfolio/digital/7.png';

/* typography */
import t1 from '../assets/portfolio/typography/1.jpg';
import t1pdf from '../assets/portfolio/typography/1.pdf';
import t2 from '../assets/portfolio/typography/2.jpg';
import t2pdf from '../assets/portfolio/typography/2.pdf';
import t3 from '../assets/portfolio/typography/3.jpg';
import t3pdf from '../assets/portfolio/typography/3.pdf';
import t4 from '../assets/portfolio/typography/4.jpg';
import t4pdf from '../assets/portfolio/typography/4.pdf';
import t5 from '../assets/portfolio/typography/5.jpg';
import t5pdf from '../assets/portfolio/typography/5.pdf';

/* animation */


const CATEGORIES = {
  painting: [
    { src: p1, caption: "The Room, acrylic on canvas, 2025" },
    { src: p2, caption: "Statues, acrylic, 2025" },
    { src: p3, caption: "Foil, acrylic, 2025" },
    { src: p4, caption: "Night, acrylic/oil, 2025" },
    { src: p5, caption: "Day, acrylic/oil, 2025" },
    { src: p6, caption: "self, acrylic/oil, 2025" },
    { src: p7, caption: "Foil, acrylic, 2025" },
  ],

  digital: [
    { src: d1, caption: "Rain, 2024" },
    { src: d2, caption: "covers, 2024" },
    { src: d3, caption: "strands (recreation), 2023" },
    { src: d4, caption: "dip (recreation), 2023" },
    { src: d5, caption: "dessert (recreation), 2024" },
    { src: d6, caption: "her (recreation), 2024" },
    { src: d7, caption: "diner (recreation), 2024" },
  ],
  typography: [
    { src: t1, caption: "T-y-p-o-g-r-a-p-h-y, 2025", pdf: t1pdf },
    { src: t2, caption: "The new graphic languages, 2025", pdf: t2pdf },
    { src: t3, caption: "A Reexamination, 2025", pdf: t3pdf },
    { src: t4, caption: "A Reexamination of a Reexamination, 2025", pdf: t4pdf },
    { src: t5, caption: "Adam, why Arial?, 2025", pdf: t5pdf },
    { vimeo: 'https://player.vimeo.com/video/1144629354?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479', caption: 'Visualizer, 2025' },
  ],
};

export default function Portfolio() {
  const [active, setActive] = useState('painting');
  const [zoomSrc, setZoomSrc] = useState(null);

  const imgs = CATEGORIES[active] || [];

  return (
    <div className="min-h-[180vh] flex">
      <Nav />
      <div className='p-5'>
        <h1 className="text-6xl font-garamond text-center mt-4">portfolio</h1>

        <div className="flex flex-col justify-left mt-5 gap-3">
          {Object.keys(CATEGORIES).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded ${active === cat ? 'bg-black text-white' : 'bg-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>


      <div className="grid gap-4 p-4 grid-flow-row-dense"   style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      }}>
        {imgs.length === 0 ? (
          <div className="col-span-4 text-center text-gray-500">No items in this category</div>
        ) : (
          imgs.map((item, index) => {
            const key = item.src ? String(item.src) : `${item.vimeo || item.video || item.caption}-${index}`;

            if (item.vimeo) {
              return (
                <div key={key} className="flex flex-col">
                  <div className="aspect-video">
                    <iframe
                      src={item.vimeo}
                      className="w-full h-full rounded"
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title={item.caption}
                    />
                  </div>
                  <p className="mt-2 text-sm text-center text-gray-700">{item.caption}</p>
                </div>
              );
            }

            const imageContent = (
              <>
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full object-contain cursor-zoom-in"
                  onClick = {() => setZoomSrc(item.src)}
                />
                <p className="mt-2 text-sm text-center text-gray-700">{item.caption}</p>
              </>
            );

            if (item.pdf) {
              return (
                <div key={key} className="min-w-0 flex flex-col">
                  {imageContent}
            
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-center underline text-gray-500 hover:text-black mt-1"
                  >
                    Open PDF
                  </a>
                </div>
              );
            }

            return (
              <div key={key} className="flex flex-col ">
                {imageContent}
              </div>
            );
          })
        )}
        {zoomSrc && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setZoomSrc(null)}
          >
            <img
              src={zoomSrc}
              className="max-w-[90vw] max-h-[90vh] object-contain"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}