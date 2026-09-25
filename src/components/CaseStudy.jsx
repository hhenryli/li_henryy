import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import Carousel from './Carousel.jsx';
import PortfolioCard from './PortfolioCard.jsx';

// Accepts either a plain string ("some text") or an object
// { text, image, layout, name } for sections that want an image
// alongside them.
function normalize(value) {
  if (!value) return null;
  if (typeof value === 'string') return { text: value };
  return value;
}

// quickLink can be a single { label, href } object or an array
// [{ label, href }, ...].
function normalizeQuickLinks(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

// Detects whether a media src is a video file by extension, so
// covers and section images can accept either images or videos
// without needing a separate prop at every call site.
function isVideoSrc(src) {
  if (typeof src !== 'string') return false;
  return /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(src);
}

export default function CaseStudy({
  cover,
  title,
  projectType,
  meta = {},
  backTo = '/work',
  backLabel = 'Back',
  quickLink,
  video,
  situation,
  task,
  keyInsights,
  actions = [],
  results = [],
  mockups = [],
}) {
  const [navBottom, setNavBottom] = useState(0);
  const [activeSection, setActiveSection] = useState('');

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
      label: 'Research',
      name: keyInsightsData.name,
      content: (
        <InsightSection
          {...keyInsightsData}
        />
      ),
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
                label={action.label || 'ACTIONS'}
                name={action.name}
                text={action.description}
                images={action.images}
                imageLayout={action.imageLayout || 'col'}
                layout={action.layout || 'col'}
                alt={action.title}
              />

              {action.insights && (
                <div className='flex flex-col gap-4'>
                  {action.insights.map((insight, i) => (
                    <div
                      key={i}
                      className='p-6 rounded-[16px] flex items-center gap-4 border border-[var(--border)]'
                    >
                      <h2>{String(i + 1).padStart(2, '0')}</h2>
                      <h6>{insight}</h6>
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

if (results.length > 0) {
  sections.push({
    key: 'results',
    label: 'Results',
    content: (
      <div className='flex flex-col gap-12'>
        {results.map((result, i) => (
          <div key={i} className='flex flex-col gap-4'>

            {/* YouTube */}
            {result.type === 'youtube' && result.youtube && (
              <>
                <div className='flex flex-col gap-2'>
                  {result.label && <h5>{result.label}</h5>}

                  {result.name && (
                    <h2>{result.name}</h2>
                  )}

                  {result.description && (
                    <p>{result.description}</p>
                  )}
                </div>

                <PortfolioCard
                  item={{
                    type: 'youtube',
                    videoId: result.youtube.videoId,
                    caption1: result.youtube.caption1,
                    caption2: result.youtube.caption2,
                  }}
                />
              </>
            )}

            {/* Images / normal result */}
            {result.type !== 'youtube' && (
              <SectionMedia
                label={result.label || 'RESULTS'}
                name={result.name}
                text={result.description}
                images={result.images}
                imageLayout={result.imageLayout || 'col'}
                layout={result.layout || 'col'}
                alt={result.title}
              />
            )}

          </div>
        ))}
      </div>
    ),
  });
}
  // Track the height of the navigation bar.
  useEffect(() => {
    const navEl = document.getElementById('site-nav');

    if (!navEl) return;

    const update = () => {
      setNavBottom(navEl.getBoundingClientRect().bottom);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(navEl);

    return () => observer.disconnect();
  }, []);

  // Track which case-study section is currently visible.
  useEffect(() => {
    if (!sections.length) return;

    setActiveSection(sections[0].key);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        // The section becomes active when it enters roughly
        // the upper-middle portion of the viewport.
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.key);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections.length]);

  const scrollToSection = (key) => {
    document
      .getElementById(key)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  };

  return (
    <div className='relative flex flex-col'>
      <Nav />

      <div className='flex-1'>
        <div className='md:max-w-[80%] py-12 w-full flex flex-col lg:flex-row'>

          {/* Sidebar */}
          <div className='lg:w-[35%] w-full'>
            <div className=' w-full flex flex-col gap-8 padding py-8'>

              {/* Back */}
              <Link
                to={backTo}
                className='flex items-center gap-1 standard-hover'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                >
                  <path
                    d='M20 12H4M4 12l6-6M4 12l6 6'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                <p>{backLabel}</p>
              </Link>

              {/* Section navigation */}
              <ul className='flex flex-col gap-1'>
                {sections.map((section) => {
                  const isActive = activeSection === section.key;

                  return (
                    <li key={section.key}>
                      <button
                        onClick={() => scrollToSection(section.key)}
                        className='flex items-center pb-1 w-full transition-colors'
                      >
                        <p
                          className={isActive ? 'active-section' : ''}
                        >
                          {section.label}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Quick links */}
              {quickLinks.length > 0 && (
                <div className='flex flex-col gap-2'>
                  {quickLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <p className='underline decoration-dotted'>{link.label}</p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <div className='padding w-full order-2 flex flex-col gap-24'>
            <div className='w-full'>


              {/* Title + metadata */}
              <div className='md:py-8 py-6 flex flex-col gap-2'>
                <div>
                  <p>{projectType}</p>
                </div>
                <div className='flex flex-col'>
                  <h1>{title}</h1>
                </div>

                <div className='flex flex-wrap justify-between mt-4'>
                  {meta.role && (
                    <MetaItem
                      label='Role'
                      value={meta.role}
                    />
                  )}

                  {meta.timeline && (
                    <MetaItem
                      label='Timeline'
                      value={meta.timeline}
                    />
                  )}

                  {meta.team && (
                    <MetaItem
                      label='Team'
                      value={meta.team}
                    />
                  )}

                  {meta.tools && (
                    <MetaItem
                      label='Tools'
                      value={meta.tools}
                    />
                  )}
                </div>
              </div>

              {/* Cover */}
              {isVideoSrc(cover) ? (
                <video
                  src={cover}
                  className='w-full h-96 object-cover rounded-[16px]'
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={cover}
                  alt={`${title} cover`}
                  className='w-full h-96 object-cover rounded-[16px]'
                />
              )}

            </div>

            {/* Video */}
            {video && (
              <div className='md:padding px-3 py-6'>
                <PortfolioCard item={video} />
              </div>
            )}

            {/* Case study sections */}
            {sections.map((section) => (
              <div
                key={section.key}
                id={section.key}
                className='flex flex-col gap-6'
              >
                <div className='flex flex-col'>
                  {section.content}
                </div>
              </div>
            ))}

            {/* Mockups */}
            {mockups.length > 0 && (
              <div className=' flex flex-col gap-4'>
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

function SectionMedia({
  label,
  name,
  text,
  text2,
  images,
  layout = 'col',
  imageLayout = 'col',
  alt,
}) {
  const isRow = layout === 'row';

  return (
    <div
      className={` flex gap-12 ${
        isRow ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >

      {/* Text */}
      <div
        className={`w-full flex flex-col items-baseline gap-2`}
      >
        <h5>{label}</h5>

        {name && <h2>{name}</h2>}

        <div className='flex flex-col gap-8'>
          {text && <p>{text}</p>}
          {text2 && <p>{text2}</p>}
        </div>
      </div>

      {/* Images */}
      {images && (
        <div
          className={`w-full flex gap-4 ${
            imageLayout === 'row'
              ? 'flex-row'
              : 'flex-col'
          }`}
        >
          {images.map((image, i) =>
            isVideoSrc(image) ? (
              <video
                key={i}
                src={image}
                className={
                  imageLayout === 'row'
                    ? 'flex-1 min-w-0 w-0 object-cover rounded-[16px]'
                    : 'w-full object-cover rounded-[16px]'
                }
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                key={i}
                src={image}
                alt={alt || `Image ${i + 1}`}
                className={
                  imageLayout === 'row'
                    ? 'flex-1 min-w-0 w-0 object-cover rounded-[16px]'
                    : 'w-full object-cover rounded-[16px]'
                }
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

function MetaItem({ label, value }) {
  return (
    <div className='flex flex-col'>
      <h5 className='caption'>
        {label.toUpperCase()}
      </h5>

      <p className='max-w-64'>
        {value}
      </p>
    </div>
  );
}

function InsightSection({
  label,
  name,
  text,
  text2,
  images,
  insights = [],
  conclusion,
}) {
  return (
    <div className='flex flex-col gap-12'>

      {/* Intro */}
      <div className='flex flex-col gap-2'>
        <h5>{label}</h5>

        {name && <h2>{name}</h2>}

        <div className='flex flex-col gap-8'>
          {text && <p>{text}</p>}
          {text2 && <p>{text2}</p>}
        </div>
      </div>

      {/* Research insights */}
      {insights.length > 0 && (
        <div className='flex flex-col gap-8'>
          {insights.map((insight, i) => (
            <div
              key={i}
              className='flex gap-6 items-start'
            >
              <h2 className='shrink-0 pt-1'>
                {String(i + 1).padStart(2, '0')}
              </h2>

              <div className='flex flex-col gap-2'>
                <h4>{insight.name}</h4>
                <p>{insight.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Research visuals */}
      {images && (
        <div className='flex flex-col gap-4'>
          {images.map((image, i) =>
            isVideoSrc(image) ? (
              <video
                key={i}
                src={image}
                className='w-full object-cover rounded-[16px]'
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                key={i}
                src={image}
                alt={`Research ${i + 1}`}
                className='w-full object-cover rounded-[16px]'
              />
            )
          )}
        </div>
      )}

      {/* Main synthesis */}
      {conclusion && (
        <div className='flex pt-8 gap-4'>
          <div className='h-full w-1 bg-(--text-secondary)'></div>

          <h2 className='italic'>
            Conclusion- {conclusion.text}
          </h2>
        </div>
      )}
    </div>
  );
}