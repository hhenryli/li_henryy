import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PortfolioCard({
  item,
  onZoom,
  muted = true,
  className = '',
}) {
  const [zoomedClip, setZoomedClip] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-8">

        {/* PROJECT STAGE */}
        <div className="md:col-span-2 w-full">

          {/* IMAGE */}
          {item.type === 'image' && (
            <ZoomableImage
              src={item.src}
              caption={item.caption}
              onZoom={onZoom}
              item={item}
              className={className}
            />
          )}

          {/* YOUTUBE */}
          {item.type === 'youtube' && (
            <YouTubeVideo
              videoId={item.videoId}
              title={item.caption1}
              thumbnail={item.thumbnail}
            />
          )}

          {/* LINK PROJECT */}
          {item.type === 'link' && (
            <Link
              to={item.route}
              className="block"
            >
              <LinkCard
                thumbnail={item.thumbnail}
                caption={item.caption1}
                className={className}
              />
            </Link>
          )}

          {/* VIDEO CLIP WITH PROJECT ROUTE */}
          {item.type === 'clip' && item.route && (
            <Link
              to={item.route}
              className="block"
            >
              <VideoCard
                src={item.src}
                poster={item.poster}
                muted={muted}
                className={className}
              />
            </Link>
          )}

          {/* VIDEO CLIP WITHOUT ROUTE */}
          {item.type === 'clip' && !item.route && (
            <VideoCard
              src={item.src}
              poster={item.poster}
              muted={muted}
              className={className}
              onClick={() => setZoomedClip(item)}
            />
          )}

          {/* WEBSITE */}
          {item.type === 'website' && (
            <WebsiteCard
              name={item.name}
              description={item.description}
              href={item.href}
              src={item.src}
            />
          )}

        </div>


        {/* CAPTION */}
        <div className="md:col-span-1 flex flex-col justify-between gap-4">

          <div className="flex flex-col gap-2">
            {item.caption1 && (
              <h1>
                {item.caption1}
              </h1>
            )}

            {item.caption2 && (
              <h2>
                {item.caption2}
              </h2>
            )}
          </div>

          {(() => {
            const tags = [].concat(
              item.category ||
              item.year ||
              []
            );

            return (
              tags.length > 0 && (
                <ul className="flex flex-col">
                  {tags.map((tag) => (
                    <li key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )
            );
          })()}

        </div>
      </div>


      {/* VIDEO FULLSCREEN */}
      {zoomedClip && (
        <VideoZoomModal
          item={zoomedClip}
          onClose={() => setZoomedClip(null)}
        />
      )}
    </>
  );
}



/* --------------------------------
   IMAGE
-------------------------------- */

export function ZoomableImage({
  src,
  caption,
  onZoom,
  item,
  className = '',
}) {
  return (
    <img
      src={src}
      alt={caption || ''}
      loading="lazy"
      onClick={() => onZoom?.(item)}
      className={`
        block
        w-full
        h-auto
        object-contain
        cursor-pointer
        ${className}
      `}
    />
  );
}



/* --------------------------------
   LINK CARD
-------------------------------- */

function LinkCard({
  thumbnail,
  caption,
  className = '',
}) {
  return (
    <img
      src={thumbnail}
      alt={caption || ''}
      loading="lazy"
      className={`
        block
        w-full
        h-auto
        object-contain
        ${className}
      `}
    />
  );
}



/* --------------------------------
   VIDEO CLIP
-------------------------------- */

function VideoCard({
  src,
  poster,
  muted = true,
  className = '',
  onClick,
}) {
  return (
    <video
      src={src}
      poster={poster}
      muted={muted}
      autoPlay
      loop
      playsInline
      preload="metadata"
      onClick={onClick}
      className={`
        block
        w-full
        h-auto
        object-contain
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    />
  );
}



/* --------------------------------
   YOUTUBE
-------------------------------- */

function YouTubeVideo({
  videoId,
  title,
  thumbnail,
}) {
  const [play, setPlay] = useState(false);

  const [thumbnailSrc, setThumbnailSrc] = useState(
    thumbnail ||
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <div className="w-full aspect-video overflow-hidden bg-black">

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
          className="
            relative
            block
            w-full
            h-full
          "
          aria-label={`Play ${title || 'video'}`}
        >
          <img
            src={thumbnailSrc}
            alt={title || 'Video thumbnail'}
            className="
              w-full
              h-full
              object-cover
            "
            onError={() => {
              if (
                !thumbnail &&
                thumbnailSrc.includes('maxresdefault')
              ) {
                setThumbnailSrc(
                  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                );
              }
            }}
          />

          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                bg-red-600
                rounded-[8px]
                px-5
                py-3
                flex
                items-center
                justify-center
              "
            >
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
      className="flex flex-col gap-2"
    >
      <img
        src={src}
        loading="lazy"
        className="
          w-full
          h-auto
          object-contain
        "
        alt={name || ''}
      />

      <div className="flex gap-2">
        <p>
          {name}
        </p>

        {description && (
          <p className="opacity-60">
            {description}
          </p>
        )}
      </div>
    </a>
  );
}



/* --------------------------------
   VIDEO ZOOM MODAL
-------------------------------- */

function VideoZoomModal({
  item,
  onClose,
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]

        flex
        items-center
        justify-center

        bg-black/90

        p-4
        md:p-8
      "
      onClick={onClose}
    >
      <div
        className="
          relative

          flex
          items-center
          justify-center

          w-full
          h-full
        "
        onClick={(event) => event.stopPropagation()}
      >

        <video
          src={item.src}
          poster={item.poster}
          autoPlay
          loop
          controls
          playsInline
          className="
            max-w-full
            max-h-[90vh]

            w-auto
            h-auto

            object-contain
          "
        />

        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-0
            right-0

            text-[var(--text-secondary)]

            px-3
            py-2
          "
        >
          close
        </button>

      </div>
    </div>
  );
}