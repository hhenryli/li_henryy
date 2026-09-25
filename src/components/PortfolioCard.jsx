import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioCard({ item, onZoom, muted, className }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden">
        {item.type === 'image' && (
          <ZoomableImage
            src={item.src}
            caption={item.caption}
            onZoom={onZoom}
            item={item}
          />
        )}

        {item.type === 'youtube' && (
          <YouTubeVideo videoId={item.videoId} title={item.caption1} />
        )}

        {item.type === 'link' && (
          <Link to={item.route} className="block">
            <LinkCard
              thumbnail={item.thumbnail}
              caption={item.caption1}
              className={className}
            />
          </Link>
        )}

        {item.type === 'clip' && (
          <Link to={item.route} className="block">
            <AutoPlayVideoCard
              src={item.src}
              poster={item.poster}
            />
          </Link>
        )}

        {item.type === 'website' && (
          <WebsiteCard
            name={item.name}
            description={item.description}
            href={item.href}
            src={item.src}
          />
        )}
      </div>
      
      <div className='flex items-center justify-between'>
        <h4>{item.caption1}</h4>
        <p className="caption">{item.caption2}</p>
      </div>

    </div>
  );
}


/* --------------------------------
   IMAGE
-------------------------------- */

function ZoomableImage({ src, caption, onZoom, item }) {
  return (
    <img
      src={src}
      alt={caption}
      loading="lazy"
      className="rounded-[16px] w-full h-auto object-contain cursor-pointer scale-hover"
      onClick={() => onZoom(item)}
    />
  );
}


/* --------------------------------
   LINK CARD
-------------------------------- */

function LinkCard({ thumbnail, caption, className = '' }) {
  return (
    <div className="overflow-hidden rounded-[16px]">
      <img
        src={thumbnail}
        alt={caption}
        className={`block w-full duration-200 scale-hover ${className}`}
      />
    </div>
  );
}


/* --------------------------------
   YOUTUBE
-------------------------------- */

function YouTubeVideo({ videoId, title }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="rounded-[16px] w-full aspect-video overflow-hidden bg-black">
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
            <div className="bg-red-600 group-hover:bg-red-700 transition rounded-[16px] px-5 py-3 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}


/* --------------------------------
   AUTOPLAY PORTFOLIO VIDEO
-------------------------------- */

function AutoPlayVideoCard({ src, poster }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can occasionally be blocked by the browser.
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="rounded-[16px] relative w-full overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        loop
        preload="metadata"
        className="block w-full h-auto object-cover"
      />
    </div>
  );
}


/* --------------------------------
   WEBSITE
-------------------------------- */

export function WebsiteCard({
  name,
  description,
  href,
  src,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col"
    >
      <img
        src={src}
        loading="lazy"
        className="w-full h-auto object-cover hover:scale-102 transition"
        alt={name}
      />

      <div className="flex gap-2">
        <p>{name}</p>
        <p className="text-gray-400">{description}</p>
      </div>
    </a>
  );
}