import React, { useState } from 'react';

export default function PortfolioCard({ item, onZoom }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-2xl">
        {item.type === 'image' && (
          <ZoomableImage src={item.src} caption={item.caption} onZoom={onZoom} item={item}/>
        )}

        {item.type === 'pdf' && (
          <>
            <ZoomableImage src={item.src} caption={item.caption} onZoom={onZoom} item={item}/>
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
          <div>
            <YouTubeVideo videoId={item.videoId} title={item.caption} />
          </div>
        )}

        {item.type === 'vimeo' && (
          <div>
            <VimeoVideo embedUrl={item.embedUrl} title={item.caption} />
          </div>
        )}
      </div>

      <p className="mt-2 text-sm text-gray-700">{item.caption}</p>
    </div>
  );
}

function ZoomableImage({ src, caption, onZoom, item }) {
  return (
    <img
      src={src}
      alt={caption}
      loading="lazy"
      className="w-full max-h-150 object-contain cursor-zoom-in"
      onClick={() => onZoom(item)} // Pass whole item instead of just src
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
            <p className="text-white rounded-full text-xl ">
              &#9654;
            </p>
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

