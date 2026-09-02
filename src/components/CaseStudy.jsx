import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Carousel from './Carousel.jsx';

// Accepts either a plain string ("some text") or an object
// { text, image, layout, name } for sections that want an image
// alongside them, and/or a custom project-specific name shown under
// the generic STAR label (e.g. label stays "SITUATION" for structural
// consistency across case studies, but name can be "The Brief").
function normalize(value) {
  if (!value) return null;
  if (typeof value === 'string') return { text: value };
  return value;
}

// quickLink can be a single { label, href } object (legacy) or an array
// of them ([{ label, href }, ...]) for multiple links. This always
// returns an array so the rendering code only has to handle one shape.
function normalizeQuickLinks(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export default function CaseStudy({
  cover,
  title,
  projectType,            // e.g. "Brand Identity" — shown under the title
  meta = {},              // { role, timeline, team, tools }
  backTo = '/work',
  backLabel = 'Back to Work',
  quickLink,              // optional: { label, href } OR [{ label, href }, ...]
  situation,              // string, or { text, image, layout, name }
  task,                   // string, or { text, image, layout, name }
  keyInsights,            // optional — string, or { text, image, layout, name }
  actions = [],           // [{ title, description, image, layout }]
  results = [],                // string, or { text, image, layout, name }
  mockups = [],           // images for the closing gallery/carousel
}) {
  const [navBottom, setNavBottom] = useState(0);

  useEffect(() => {
    const navEl = document.getElementById('site-nav');
    if (!navEl) return;
    const update = () => setNavBottom(navEl.getBoundingClientRect().bottom);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(navEl);
    return () => observer.disconnect();
  }, []);

  const situationData = normalize(situation);
  const taskData = normalize(task);
  const keyInsightsData = normalize(keyInsights);
  const resultsData = normalize(results);
  const quickLinks = normalizeQuickLinks(quickLink);

  const sections = [];
  if (situationData) {
    sections.push({
      key: 'situation',
      label: 'Situation',
      name: situationData.name,
      content: <SectionMedia {...situationData} alt="Situation" />,
    });
  }
  if (taskData) {
    sections.push({
      key: 'task',
      label: 'Task',
      name: taskData.name,
      content: <SectionMedia {...taskData} alt="Task" />,
    });
  }
  if (keyInsightsData) {
    sections.push({
      key: 'key-insights',
      label: 'Key Insights',
      name: keyInsightsData.name,
      content: <SectionMedia {...keyInsightsData} alt="Key Insights" />,
    });
  }
  if (actions.length > 0) {
    sections.push({
      key: 'actions',
      label: 'Actions',
      content: (
        <div className='flex flex-col gap-12'>
          {actions.map((action, i) => (
            <div key={i} className='flex flex-col gap-4'>
              <SectionMedia
                label={action.label || 'Action'}
                name={action.name}
                text={action.description}
                images={action.images}
                layout={action.layout || 'col'}
                alt={action.title}
              />
              {action.insights && (
                <div className='flex flex-col gap-4'>
                  {action.insights.map((insight, i) => (
                    <div className='p-6 flex items-center gap-4 border rounded-xl'>
                      <h2>{String(i + 1).padStart(2, '0')}</h2>
                      <h6 key={i}>{insight}</h6>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ),
    });
  }
  if (resultsData) {
    sections.push({
      key: 'results',
      label: 'Results',
      name: resultsData.name,
      content: (
        <div className='flex flex-col gap-12'>
          {results.map((result, i) => (
            <div key={i} className='flex flex-col gap-4'>
              <SectionMedia
                label={result.label || 'Result'}
                name={result.name}
                text={result.description}
                images={result.images}
                layout={result.layout || 'col'}
                alt={result.title}
              />
            </div>
          ))}
      </div>
      )
    });
  }
  // Renders a section's text/image pair. layout='col' (default) stacks the
// image below the text, full width — good for a single supporting shot.
// layout='row' puts text and image side by side on desktop (stacked on
// mobile), and both stretch to match each other's height (the default
// flex align-items: stretch) so the image fills the full row height
// instead of sitting at its own shorter intrinsic size.
//
// For multiple images: row layout keeps them cropped to equal width/height
// (object-cover) so they line up neatly against the text block. Col layout
// instead stacks them vertically at their natural aspect ratio (object-contain)
// so nothing gets cropped or squished.
function SectionMedia({ label, name, text, text2, images, layout = 'col', alt }) {
  const isRow = layout === 'row';
  return (
    <div className={`flex gap-12 ${isRow ? 'flex-col md:flex-row' : 'flex-col'}`}>
      <div className='w-full flex flex-col items-baseline gap-2'>
        <h6 className='italic'>{label}</h6>
        {name && <h1>{name}</h1>}
        <div className='flex flex-col gap-8'>
          {text && <h6 >{text}</h6>}
          {text2 && <h6 >{text2}</h6>}
        </div>

      </div>

      {images && (
        <div className={`w-full flex gap-4 ${isRow ? '' : 'flex-col'}`}>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={alt || `Image ${i + 1}`}
              className={
                isRow
                  ? 'flex-1 min-w-0 w-0 object-cover rounded-xl'
                  : 'w-full h-auto object-contain rounded-xl'
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

  const scrollToSection = (key) => {
    document.getElementById(key)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='relative flex flex-col'>
      <Nav />
      <div className='padding flex-1 mt-16 lg:mt-24'>
        <div className='flex flex-col lg:flex-row'>

          {/* Sidebar: back link + quick nav. Sticky. */}
          <div className='lg:w-96 lg:border-r-0 border-r w-full border-l relative'>
            <div className='sticky w-full flex flex-col gap-4 p-6 top-32'>
              <Link to={backTo} className='flex items-center gap-2 standard-hover'>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 12H4M4 12l6-6M4 12l6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{backLabel}</p>
              </Link>

              <div className='flex flex-col gap-3'>
                <p className='text-xs tracking-tight'>LINKS</p>
                <ul className='flex flex-col gap-2'>
                  {sections.map((section, i) => (
                    <li key={section.key}>
                      <button
                        onClick={() => scrollToSection(section.key)}
                        className='flex gap-2 items-center border-b pb-1 w-full standard-hover'
                      >
                        <span className='font-mono text-xs'>{String(i + 1).padStart(2, '0')}</span>
                        <span className='italic'>{section.label.toUpperCase()}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {quickLinks.length > 0 && (
                <div className='flex flex-col gap-2'>
                  {quickLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      className='px-4 py-3 border text-center standard-hover'
                    >
                      <p>{link.label}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <div className='order-2 w-full border-l border-r border-b flex flex-col'>
            <img src={cover} alt={`${title} cover`} className='h-64 object-cover' />

            <div className='md:px-16 md:py-12 px-3 py-6 flex flex-col gap-2 border-b'>
              <div>
                <h1 className='big-header'>{title}</h1>
                {projectType && <h6>{projectType}</h6>}
              </div>

              <div className='flex flex-wrap justify-between gap-8 mt-4'>
                {meta.role && <MetaItem label='Role' value={meta.role} />}
                {meta.timeline && <MetaItem label='Timeline' value={meta.timeline} />}
                {meta.team && <MetaItem label='Team' value={meta.team} />}
                {meta.tools && <MetaItem label='Tools' value={meta.tools} />}
              </div>
            </div>

            {sections.map((section, i) => (
              <div key={section.key} id={section.key} className='md:px-16 md:py-12 px-3 py-6 flex flex-col gap-6'>
                <div className='flex flex-col'>


                  {section.content}
                </div>


              </div>
            ))}

            {mockups.length > 0 && (
              <div className='md:px-16 md:py-12 px-3 py-6 flex flex-col gap-4'>
                <h6 className='italic'>Mockups</h6>
                <Carousel images={mockups} />
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div className='flex flex-col'>
      <p className='opacity-60'>{label.toUpperCase()}</p>
      <h5 className='max-w-64'>{value}</h5>
    </div>
  );
}