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

/* design */
import ds1 from '../assets/portfolio/design/1.png';
import ds2 from '../assets/portfolio/design/2.png';
import ds3 from '../assets/portfolio/design/3.png';
import ds3pdf from '../assets/portfolio/design/3.pdf';
import ds4 from '../assets/portfolio/design/4.png';
import ds4pdf from '../assets/portfolio/design/4.pdf';
import ds5 from '../assets/portfolio/design/5.jpg';

/* digital */
import d1 from '../assets/portfolio/digital/1.png';
import d2 from '../assets/portfolio/digital/2.png';
import d3 from '../assets/portfolio/digital/3.jpg';
import d4 from '../assets/portfolio/digital/4.jpg';
import d5 from '../assets/portfolio/digital/5.png';
import d6 from '../assets/portfolio/digital/6.png';
import d7 from '../assets/portfolio/digital/7.png';
import d8 from '../assets/portfolio/digital/8.jpg';
import d9 from '../assets/portfolio/digital/9.png';

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
import a1 from '../assets/portfolio/animation/1.gif';
import a2 from '../assets/portfolio/animation/2.gif';
import a3 from '../assets/portfolio/animation/3.gif';
import a4 from '../assets/portfolio/animation/4.gif';

const CATEGORIES = {
  painting: [
    { type: 'image', src: p1, caption: 'The Room, acrylic on canvas, 2025' },
    { type: 'image', src: p2, caption: 'Statues, acrylic, 2025' },
    { type: 'image', src: p3, caption: 'Foil, acrylic, 2025' },
    { type: 'image', src: p4, caption: 'Night, acrylic/oil, 2025' },
    { type: 'image', src: p5, caption: 'Day, acrylic/oil, 2025' },
    { type: 'image', src: p6, caption: 'self, acrylic/oil, 2025' },
    { type: 'image', src: p7, caption: 'Foil, acrylic, 2025' },
  ],
  design: [
    { type: 'pdf', src: ds3, caption: 'dots, 2026', pdf: ds3pdf },
    { type: 'image', src: ds2, caption: 'bach, 2026' },
    { type: 'pdf', src: ds4, caption: 'Super Frog Saves Tokyo, 2024', pdf: ds4pdf },
    { type: 'image', src: ds5, caption: 'prom, 2024' },
    { type: 'image', src: ds1, caption: 'dumplings, 2023' },
  ],
  digital: [
    { type: 'image', src: d1, caption: 'Kite, 2026' },
    { type: 'image', src: d2, caption: 'night, 2026' },
    { type: 'image', src: d5, caption: 'dessert (recreation), 2024' },
    { type: 'image', src: d6, caption: 'her (recreation), 2024' },
    { type: 'image', src: d7, caption: 'diner (recreation), 2024' },
    { type: 'image', src: d8, caption: 'Rain, 2024' },
    { type: 'image', src: d9, caption: 'covers, 2024' },
    { type: 'image', src: d3, caption: 'strands (recreation), 2023' },
    { type: 'image', src: d4, caption: 'dip (recreation), 2023' },
  ],
  typography: [
    { type: 'pdf', src: t1, caption: 'T-y-p-o-g-r-a-p-h-y, 2025', pdf: t1pdf },
    { type: 'pdf', src: t2, caption: 'The new graphic languages, 2025', pdf: t2pdf },
    { type: 'pdf', src: t3, caption: 'A Reexamination, 2025', pdf: t3pdf },
    { type: 'pdf', src: t4, caption: 'A Reexamination of a Reexamination, 2025', pdf: t4pdf },
    { type: 'pdf', src: t5, caption: 'Adam, why Arial?, 2025', pdf: t5pdf },
    {
      type: 'vimeo',
      embedUrl:
        'https://player.vimeo.com/video/1144629354?badge=0&autopause=0&player_id=0&app_id=58479',
      caption: 'Visualizer, 2025',
    },
  ],
  animation: [
    { type: 'youtube', videoId: '-Ov36-VGK28', caption: 'Collections-Draft 2, 2026' },
    { type: 'youtube', videoId: '0BhQXyzZz-Q', caption: 'Collections-Draft 1, 2026' },
    { type: 'image', src: a1, caption: '5-frame, 2025' },
    { type: 'youtube', videoId: 'iN-2GgZQPj0', caption: 'A diorama, 2025' },
    { type: 'youtube', videoId: 'KDwhUD2MsR8', caption: '5 Minute, 2025' },
    { type: 'image', src: a3, caption: 'cup, 2025' },
    { type: 'image', src: a2, caption: 'aasa-jump, 2025' },
    { type: 'image', src: a4, caption: 'aasa-biglittle, 2025' },
    { type: 'youtube', videoId: '-fzAv9m9q5k', caption: 'aasa-formals, 2024' },
    { type: 'youtube', videoId: 'rJ3zCO4GGBo', caption: 'snoopy, 2024' },
  ],
};

export default function Portfolio() {
  const [active, setActive] = useState('painting');
  const [zoomSrc, setZoomSrc] = useState(null);

  const items = CATEGORIES[active] || [];
  const categories = Object.keys(CATEGORIES);

  return (
    <div className="min-h-screen flex">
      <Nav />

      <div className="flex-1 px-6 py-5">
        <h1 className="text-6xl font-garamond text-center mt-4 mb-8">portfolio</h1>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setZoomSrc(null);
              }}
              className={`px-4 py-2 rounded-full border transition ${
                active === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <div className="text-center text-gray-500">No items in this category</div>
        ) : (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            }}
          >
            {items.map((item, index) => (
              <PortfolioCard
                key={getItemKey(item, index)}
                item={item}
                onZoom={setZoomSrc}
              />
            ))}
          </div>
        )}
      </div>

      {zoomSrc && <ZoomModal src={zoomSrc} onClose={() => setZoomSrc(null)} />}
    </div>
  );
}

function PortfolioCard({ item, onZoom }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        {item.type === 'image' && (
          <ZoomableImage src={item.src} caption={item.caption} onZoom={onZoom} />
        )}

        {item.type === 'pdf' && (
          <>
            <ZoomableImage src={item.src} caption={item.caption} onZoom={onZoom} />
            <div className="px-4 pb-4 flex justify-center height-10">
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline text-gray-600 hover:text-black transition"
              >
                Open PDF
              </a>
            </div>
          </>
        )}

        {item.type === 'youtube' && (
          <div className="p-3">
            <YouTubeVideo videoId={item.videoId} title={item.caption} />
          </div>
        )}

        {item.type === 'vimeo' && (
          <div className="p-3">
            <VimeoVideo embedUrl={item.embedUrl} title={item.caption} />
          </div>
        )}
      </div>

      <p className="mt-2 text-sm text-center text-gray-700">{item.caption}</p>
    </div>
  );
}

function ZoomableImage({ src, caption, onZoom }) {
  return (
    <img
      src={src}
      alt={caption}
      loading="lazy"
      className="w-full max-h-150 object-contain cursor-zoom-in"
      onClick={() => onZoom(src)}
    />
  );
}

function YouTubeVideo({ videoId, title }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          className="w-full h-full"
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="relative w-full h-full block"
          aria-label={`Play ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white/90 px-4 py-2 rounded-full text-sm font-medium">
              Play Video
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

function VimeoVideo({ embedUrl, title }) {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
      <iframe
        src={embedUrl}
        className="w-full h-full"
        title={title}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function ZoomModal({ src, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <img
        src={src}
        alt=""
        className="max-w-[90vw] max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full"
      >
        Close
      </button>
    </div>
  );
}

function getItemKey(item, index) {
  if (item.src) return `${item.type}-${item.src}`;
  if (item.videoId) return `${item.type}-${item.videoId}`;
  if (item.embedUrl) return `${item.type}-${item.embedUrl}`;
  return `${item.type}-${item.caption}-${index}`;
}