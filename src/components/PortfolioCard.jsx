import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioCard({
  item,
  onZoom,
  muted,
  className,
}) {
  return (
    <div className="flex flex-col gap-4">

      {/* PROJECT STAGE */}
      <div className="w-full overflow-hidden">
        <div className="w-full">

          {item.type === 'image' && (
            <ZoomableImage
              src={item.src}
              caption={item.caption}
              onZoom={onZoom}
              item={item}
            />
          )}

          {item.type === 'youtube' && (
            <YouTubeVideo
              videoId={item.videoId}
              title={item.caption1}
              thumbnail={item.thumbnail}
            />
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
                className={className}
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
      </div>
      
      <div className='flex justify-between'>
        {/* CAPTION */}
        <div className="flex flex-col">
          <h3>{item.caption1}</h3>

          <p>{item.caption2}</p>

        </div>
        {/* CATEGORY / YEAR */}
        
        {(item.category || item.year) && (
            <p className="mb-1">
              {item.category || item.year}
            </p>
        )}
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
      className="rounded-[8px] w-full h-auto object-contain cursor-pointer scale-hover"
      onClick={() => onZoom?.(item)}
    />
  );
}


/* --------------------------------
   LINK CARD
-------------------------------- */

function LinkCard({ thumbnail, caption, className = '' }) {
  return (
    <div className="overflow-hidden">
      <img
        src={thumbnail}
        alt={caption}
        className={`block w-full object-cover duration-200 scale-hover ${className}`}
      />
    </div>
  );
}


/* --------------------------------
   YOUTUBE
-------------------------------- */

function YouTubeVideo({ videoId, title, thumbnail }) {
  const [play, setPlay] = useState(false);

  const [thumbnailSrc, setThumbnailSrc] = useState(
    thumbnail ||
      `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <div className="rounded-[8px] w-full aspect-video overflow-hidden bg-black">

      {play ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`}
          className="w-full h-full"
          title={title || 'YouTube video'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          className="relative w-full h-full block group"
          aria-label={`Play ${title || 'video'}`}
        >

          <img
            src={thumbnailSrc}
            alt={title || 'Video thumbnail'}
            className="w-full h-full object-cover"
            onError={() => {
              if (!thumbnail && thumbnailSrc.includes('maxresdefault')) {
                setThumbnailSrc(
                  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                );
              }
            }}
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-600 group-hover:bg-red-700 transition rounded-[8px] px-5 py-3 flex items-center justify-center">
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

function AutoPlayVideoCard({ src, poster, className = '' }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '300px 0px',
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        loop
        preload="none"
        className={`block w-full object-cover ${className}`}
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