import React from "react";
import Carousel from "./Carousel"; // adjust path if your Carousel lives elsewhere

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

// Thin divider in the text colour
const Rule = () => <div className="h-px w-full bg-[var(--text-secondary)] opacity-30" />;

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
  const dateline = [date, location].filter(Boolean).join(", ");

  // Carousel gets plain image URLs, which works with any version of it.
  const urls = images.map((img) => (typeof img === "string" ? img : img.src));

  return (
    <article className="flex flex-col gap-12 py-12 text-[var(--text-secondary)]">
      {/* Title */}
      <header className="flex flex-col gap-3">
        {dateline && <p className="meta">{dateline}</p>}
        <h1>{title}</h1>
      </header>

      {/* Photos: 16:9, never taller than 60% of the screen */}
      {urls.length > 0 && (
        <div className="[&_img]:aspect-[16/9] [&_img]:object-cover">
          <Carousel images={urls} />
        </div>
      )}

      <div className="grid gap-12 md:grid-cols-12">
        {/* About */}
        <section className="flex flex-col gap-5 md:col-span-7">
          {summary && <h3>{summary}</h3>}
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
          {link && (
            <a
              href={link.href}
              className="mt-4 w-fit border border-current px-6 py-3 hover:opacity-70"
            >
              {link.label}
            </a>
          )}
        </section>

        <div className="flex flex-col gap-12 md:col-span-5">
          {/* Details */}
          {facts.length > 0 && (
            <section className="flex flex-col gap-4">
              <h4>Details</h4>
              <div className="flex flex-col">
                {facts.map(({ label, value }) => (
                  <div key={label} className="flex flex-col">
                    <Rule />
                    <div className="grid grid-cols-[6rem_1fr] gap-4 py-3">
                      <p className="opacity-70">{label}</p>
                      <p>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Schedule */}
          {schedule.length > 0 && (
            <section className="flex flex-col gap-4">
              <h4>Schedule</h4>
              <div className="flex flex-col">
                {schedule.map(({ time, title: item, note }) => (
                  <div key={time + item} className="flex flex-col">
                    <Rule />
                    <div className="grid grid-cols-[6rem_1fr] gap-4 py-3">
                      <p className="tabular-nums opacity-70">{time}</p>
                      <div className="flex flex-col gap-1">
                        <p>{item}</p>
                        {note && <p className="text-sm opacity-70">{note}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}