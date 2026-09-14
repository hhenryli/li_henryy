import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';

import ChurchPic from "../assets/sides/120/120escover.png";
import SpectaclesPic from "../assets/sides/spectacles/spectacles.png";
import sprencover from "../assets/sides/spren/sprencover.jpg";
import plinkycover from "../assets/games/plinkyplights/cover.webp";
import rpgcover from "../assets/games/mousestopper/cover.webp";
import ArtBox from './Artbox.jsx';

const projects = [
  {
    name: "120EastState",
    image: ChurchPic,
    description: "A digital archive dedicated to remembering Trenton's history.",
    link: "https://drive.google.com/drive/folders/1m6aCGeS861GbRKoe2ebm0iERJ6v6Lgad?usp=sharing",
  },
  {
    name: "OrderUp!",
    image: SpectaclesPic,
    description: "An augmented reality application for collaborative cooking.",
    link: "https://drive.google.com/drive/u/2/folders/1pD_i4L9UAvf_4Y2NMMzU-FpIWve5ggmu",
  },
  {
    name: "spren",
    image: sprencover,
    description: "A browser extension to help you take a break and notice the world.",
    link: "https://github.com/hhenryli/spren",
  },
  {
    name: "Plinky Plights",
    image: plinkycover,
    description: "A punishing physics-based vertical platformer.",
    link: "/plinky",
  },
  {
    name: "Mousestopper",
    image: rpgcover,
    description: "An in-development RPG.",
    link: "/mousestopper",
  },
];

export default function Play() {
  return (
    <div className="min-h-screen">
      <Nav compact />

      <main className="padding py-24 flex flex-col gap-12">
        <div className='flex flex-col gap-8'>
          <h1 className="">Fun Little Things</h1>
          <p>In my free time and in my classes, I like making cool things! Some projects are fully finished while others are in development.</p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {projects.map((project) => (
            <div key={project.name} className="group">
              
              {project.link.startsWith("/") ? (
                <Link to={project.link}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full object-cover"
                  />
                </a>
              )}

              <div className="mt-4">
                <div className="flex justify-between items-baseline gap-4">
                  <h2 className="whitespace-nowrap">
                    {project.name}
                  </h2>

                  <span className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                    SIDE PROJECT
                  </span>
                </div>

                <p className="mt-2 text-sm text-[var(--text-secondary)] max-w-md">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>


        <ArtBox />
      </main>

      <Footer />
    </div>
  );
}