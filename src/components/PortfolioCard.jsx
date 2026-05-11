import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

export default function PortfolioCard({ item, onZoom }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden">
        {item.type === 'image' && (
          <ZoomableImage src={item.src} caption={item.caption} onZoom={onZoom} item={item}/>
        )}

        {item.type === 'youtube' && (
          <div>
            <YouTubeVideo videoId={item.videoId} />
          </div>
        )}

        {item.type === 'link' && (
          <Link to={item.route} className="block">
            <LinkCard thumbnail={item.thumbnail} caption={item.caption} />
          </Link>
        )}
      </div>

      <div className="mt-2 flex gap-2">
        <p>{item.caption1}</p> 
        <p className='text-gray-400'>{item.caption2}</p>
      </div>
    </div>
  );
}

function ZoomableImage({ src, caption, onZoom, item }) {
  return (
    <img
      src={src}
      alt={caption}
      loading="lazy"
      className="h-full object-contain cursor-pointer"
      onClick={() => onZoom(item)}
    />
  );
}

function LinkCard({ thumbnail, caption }) {
  return (
    <div className="relative flex justify-center aspect-video overflow-hidden group cursor-pointer">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={caption}
          className="h-full w-full object-cover transition-transform group-hover:scale-101"
        />
      )}
      <div className="absolute inset-0 group-hover:bg-black/5 transition flex items-center justify-center">
      </div>
    </div>
  );
}

function YouTubeVideo({ videoId, title }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="w-full aspect-video overflow-hidden bg-black">
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
          className="relative w-full h-full block group"
          aria-label={`Play ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 group-hover:bg-red-700 transition rounded-xl px-5 py-3 flex items-center justify-center">
              <svg className="w-6 h-6 text-white fill-white" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}