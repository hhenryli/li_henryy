import React from "react";

/**
 * Workshop – the full detail view for one workshop.
 *
 * Props
 *  title, date, location, summary
 *  body       string | string[]
 *  facts      { label, value }[]
 *  schedule   { time, title, note? }[]
 *  images     (string | { src, alt? })[]
 *  link       { href, label }
 */

const Rule = () => <div className="h-px w-full bg-[var(--text-secondary)] opacity-30" />;

const bodyText = {
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: 0,
  lineHeight: 1.5,
};

const smallText = { ...bodyText, fontSize: "14px", lineHeight: 1.4 };

// Column spans for the photo grid: wide/narrow, then narrow/wide, repeating
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export default function Workshop({
  title,
  date,
  location,
  summary,
  body = [],
  facts = [],
  schedule = [],
  images = [],
  link,
}) {
  const paragraphs = Array.isArray(body) ? body : [body];

  const photos = images.map((img) =>
    typeof img === "string"
      ? { src: img, alt: "" }
      : { src: img.src, alt: img.alt || "" }
  );

  return (
    <article className="flex flex-col gap-8 lg:gap-10 pt-12 pb-24 text-[var(--text-secondary)]">
      {/* Top: small text left, big statement right */}
      <header className="grid gap-10 md:grid-cols-12 md:gap-x-4 md:items-end md:min-h-[40vh]">
        <div className="md:col-span-3 flex flex-col gap-1 opacity-80">
          <p style={bodyText}>{title}</p>
          {date && <p style={smallText}>{date}</p>}
          {location && <p style={smallText}>{location}</p>}
        </div>

        <h1
          className="display md:col-span-8 md:col-start-5"
          style={{ fontSize: "clamp(2.25rem, 4.8vw, 4.75rem)", lineHeight: 1.02 }}
        >
          {summary}
        </h1>
      </header>

      {/* Photos: staggered grid that continues down the page */}
      {photos.length > 0 && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`overflow-hidden aspect-[4/3] md:aspect-auto md:h-[clamp(20rem,36vw,36rem)] ${SPANS[i % SPANS.length]}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <section className="mt-8 lg:mt-12 flex flex-col gap-5 max-w-xl">
        {paragraphs.map((text, i) => (
          <p key={i} className="opacity-80" style={bodyText}>
            {text}
          </p>
        ))}
        {link && (
          <a
            href={link.href}
            className="mt-2 w-fit border border-current px-6 py-3 hover:opacity-70"
          >
            {link.label}
          </a>
        )}
      </section>

      {/* Details left, schedule right */}
      {(facts.length > 0 || schedule.length > 0) && (
        <div className="mt-8 lg:mt-12 grid gap-12 md:grid-cols-12 md:gap-x-4">
          {facts.length > 0 && (
            <section className="flex flex-col gap-3 md:col-span-5">
              <p className="opacity-60" style={smallText}>Details</p>
              <div className="flex flex-col">
                {facts.map(({ label, value }) => (
                  <div key={label} className="flex flex-col">
                    <Rule />
                    <div className="grid grid-cols-[6rem_1fr] gap-4 py-2.5">
                      <p className="opacity-70" style={bodyText}>{label}</p>
                      <p style={bodyText}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {schedule.length > 0 && (
            <section className="flex flex-col gap-3 md:col-span-5 md:col-start-8">
              <p className="opacity-60" style={smallText}>Schedule</p>
              <div className="flex flex-col">
                {schedule.map(({ time, title: item, note }) => (
                  <div key={time + item} className="flex flex-col">
                    <Rule />
                    <div className="grid grid-cols-[5rem_1fr] gap-4 py-2.5">
                      <p className="tabular-nums opacity-70" style={bodyText}>
                        {time}
                      </p>
                      <div className="flex flex-col">
                        <p style={bodyText}>{item}</p>
                        {note && (
                          <p className="opacity-70" style={smallText}>{note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </article>
  );
}