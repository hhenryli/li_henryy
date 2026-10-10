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
    title: "Introducing Adobe @ Princeton",
    date: "October 9, 2026",
    location: "Princeton University",
    summary:
      "We shared free boba, explored Adobe Express, and made posters that represent us.",
    body: [
      "We kicked off Adobe @ Princeton with an interactive introduction to Adobe and a hands-on Adobe Express workshop. After a short intro and a talk from a Princeton guest, we spent most of the night making something.",
      "The prompt was simple: create something that represents you. Each poster needed a headline, at least one image, and some supporting text, and everything else was up to the designer.",
      "No design experience was needed. We shared posters at the end, with Adobe swag and prizes for standout designs and a few raffle winners.",
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

function getCover(workshop) {
  const first = workshop.images?.[0] ?? workshop.image;
  if (!first) return null;
  return typeof first === "string"
    ? { src: first, alt: "" }
    : { src: first.src, alt: first.alt || "" };
}

function WorkshopCard({ workshop }) {
  const { id, title, date, location, summary } = workshop;
  const cover = getCover(workshop);
  const dateline = [date, location].filter(Boolean).join(", ");

  return (
    <Link
      to={`/workshops/${id}`}
      className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8"
    >
      {cover ? (
        <img
          src={cover.src}
          alt={cover.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover"
        />
      ) : (
        <div className="aspect-[4/3] w-full bg-[var(--text-secondary)] opacity-10" />
      )}

      {dateline && <p className="meta mt-5">{dateline}</p>}

      <h3 className="group-hover:underline group-hover:underline-offset-4 group-hover:decoration-1">
        {title}
      </h3>

      {summary && <p className="mt-3 leading-relaxed">{summary}</p>}
    </Link>
  );
}

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

/* The list on your home page */
export default function Workshops() {
  return (
    <div className="padding bg-[var(--primary)] py-24 w-full flex justify-between text-[var(--text-secondary)]">
      <header className="flex flex-col gap-2">
        <h1>Workshops</h1>
        <p className="t">Small, hands-on sessions run throughout the year.</p>
      </header>

      <div className="max-w-sm">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
      </div>
    </div>
  );
}