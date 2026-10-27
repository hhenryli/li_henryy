import React from "react";
import { Link, useParams } from "react-router-dom";
import Workshop from "./Workshop";
import NewNav from "./NewNav.jsx";
import adobe1 from "../assets/workshops/adobe1/cover.webp";
import adobe2 from "../assets/workshops/adobe1/1.webp";
import adobe3 from "../assets/workshops/adobe1/2.webp";
import adobe4 from "../assets/workshops/adobe1/3.webp";

// Add, remove, or reorder workshops here. Each one needs a unique `id`,
// which becomes its URL: /workshops/<id>
const workshops = [
  {
    id: "adobe-princeton",
    title: "Adobe@Princeton",
    date: "October 9, 2026",
    location: "Princeton University",
    summary:
      "We explored Adobe Express, and made posters that represent us.",
    body: [
      "This was our first event. We kicked it off with a quick intro to Adobe and a talk from a guest, then everyone spent the night making posters in Adobe Express.",
      "The only rule was to make something that felt like you. Each poster needed a headline, an image, and some text. The rest was up to you.",
      "No design experience needed. At the end we looked at everyone's posters, and gave out swag and prizes for a few favorites and a couple of raffle winners.",
    ],
    facts: [
      { label: "Started", value: "5:00 pm" },
      { label: "Cost", value: "Free" },
      { label: "Food", value: "Free boba" },
      { label: "Format", value: "Hands-on workshop" },
    ],
    schedule: [
      { time: "5:00 pm", title: "Arrival and check-in" },
      { time: "5:05 pm", title: "Welcome" },
      {
        time: "5:10 pm",
        title: "Guest talk",
        note: "Creativity and visual communication",
      },
      { time: "5:20 pm", title: "Boba break" },
      { time: "5:25 pm", title: "Introduction to Adobe and Adobe Express" },
      { time: "5:35 pm", title: "Live demo", note: "A poster from a blank canvas" },
      {
        time: "5:42 pm",
        title: "Poster workshop",
        note: "About 30 minutes, with help on hand",
      },
      { time: "6:15 pm", title: "Showcase and prizes" },
    ],
    images: [
      { src: adobe1, alt: "Adobe@Princeton Workshop" },
      { src: adobe2, alt: "Adobe@Princeton Workshop" },
      { src: adobe3, alt: "Adobe@Princeton Workshop" },
      { src: adobe4, alt: "Adobe@Princeton Workshop" },
    ],
  },
];

/* The separate page for one workshop (route: /workshops/:id) */
export function WorkshopPage() {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === id);

  return (
    <div className="min-h-dvh bg-[var(--primary)] text-[var(--text-secondary)]">
      <NewNav />

      <div className="padding py-24">
        {workshop ? (
          <Workshop {...workshop} />
        ) : (
          <p className="py-16">Workshop not found.</p>
        )}
      </div>
    </div>
  );
}

function getCover(workshop) {
  const first = workshop.images?.[0] ?? workshop.image;
  if (!first) return null;
  return typeof first === "string"
    ? { src: first, alt: "" }
    : { src: first.src, alt: first.alt || "" };
}

function WorkshopEntry({ workshop }) {
  const { id, title, date, location, summary } = workshop;
  const cover = getCover(workshop);

  return (
    <Link
      to={`/workshops/${id}`}
      className="group grid grid-cols-12 gap-x-4 gap-y-6 border-t border-black/20 pt-4"
    >
      <div className="col-span-12 md:col-span-7 flex flex-col justify-between gap-10">
        <div>
          <h3
            className="display text-[var(--text-primary)]"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
          >
            {title}
          </h3>

          <p className="mt-3 max-w-sm text-base text-[var(--text-primary)] leading-relaxed">
            {summary}
          </p>
        </div>

        <div className="flex gap-8 text-sm text-[var(--text-primary)]">
          <span>{date}</span>
          <span>{location}</span>
        </div>
      </div>

      {cover && (
        <div className="col-span-12 md:col-span-4 md:col-start-9 overflow-hidden">
          <img
            src={cover.src}
            alt={cover.alt}
            loading="lazy"
            className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>
      )}
    </Link>
  );
}

export default function Workshops() {
  const year = new Date(workshops[0].date).getFullYear();
  const count = workshops.length;

  return (
    <div className="padding bg-[var(--background)] text-[var(--text-darker)] pt-24 lg:pt-32 pb-32 w-full">
      <h2
        className="display text-[var(--text-primary)]"
        style={{ fontSize: "clamp(4rem, 15vw, 15rem)", lineHeight: 0.88 }}
      >
        Workshops
      </h2>

      {/* Small row above the line */}
      <div
        className="mt-6 lg:mt-8 mb-3 flex justify-end opacity-60"
        style={{ fontSize: "13px", fontWeight: 400, letterSpacing: 0 }}
      >
        <span>{year}</span>
      </div>

      <div className="flex flex-col gap-16">
        {workshops.map((workshop) => (
          <WorkshopEntry key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
  );
}