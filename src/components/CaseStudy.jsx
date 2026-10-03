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

// Detects whether a media src is a video file by extension.
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

  /*
   * SITUATION
   */
  if (situationData) {
    sections.push({
      key: 'situation',
      label: situationData.label || 'Situation',
      name: situationData.name,
      content:
        situationData.type === 'youtube' && situationData.youtube ? (
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-3'>
              {situationData.name && <h1>{situationData.name}</h1>}

              <div className='flex flex-col gap-8'>
                {situationData.text && <p>{situationData.text}</p>}
                {situationData.text2 && <p>{situationData.text2}</p>}
              </div>
            </div>

            <PortfolioCard
              item={{
                type: 'youtube',
                videoId: situationData.youtube.videoId,
                thumbnail: situationData.youtube.thumbnail,
                caption1: situationData.youtube.caption1,
                caption2: situationData.youtube.caption2,
              }}
            />
          </div>
        ) : (
          <SectionMedia {...situationData} alt='Situation' />
        ),
    });
  }

  /*
   * TASK
   */
  if (taskData) {
    sections.push({
      key: 'task',
      label: taskData.label || 'Task',
      name: taskData.name,
      content: <SectionMedia {...taskData} alt='Task' />,
    });
  }

  /*
   * KEY INSIGHTS
   */
  if (keyInsightsData) {
    sections.push({
      key: 'key-insights',
      label: keyInsightsData.label || 'Research',
      name: keyInsightsData.name,
      content: <InsightSection {...keyInsightsData} />,
    });
  }

  /*
   * ACTIONS
   */
  if (actions.length > 0) {
    sections.push({
      key: 'actions',
      label: 'Actions',
      content: (
        <div className='flex flex-col gap-24'>
          {actions.map((action, i) => (
            <div key={i} className='flex flex-col gap-8'>
              <SectionMedia
                label={action.label || 'Action'}
                name={action.name}
                text={action.text}
                images={action.images}
                imageLayout={action.imageLayout || 'col'}
                layout={action.layout || 'col'}
                alt={action.title}
              />

              {action.insights && (
                <div className='flex flex-col gap-6'>
                  {action.insights.map((insight, i) => (
                    <div
                      key={i}
                      className='p-8 rounded-[16px] flex items-center gap-6 border border-[var(--border)]'
                    >
                      <h1>{String(i + 1).padStart(2, '0')}</h1>
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

  /*
   * RESULTS
   */
  if (
    resultsData &&
    (resultsData.type === 'insights' || resultsData.length)
  ) {
    sections.push({
      key: 'results',
      label: resultsData.label || 'Results',
      content:
        resultsData.type === 'insights' ? (
          <InsightSection {...resultsData} />
        ) : (
          <div className='flex flex-col gap-12'>
            {resultsData.map((result, i) =>
              result.type === 'youtube' && result.youtube ? (
                <PortfolioCard
                  key={i}
                  item={{
                    type: 'youtube',
                    videoId: result.youtube.videoId,
                    thumbnail: result.youtube.thumbnail,
                    caption1: result.youtube.caption1,
                    caption2: result.youtube.caption2,
                  }}
                />
              ) : (
                <SectionMedia
                  key={i}
                  {...result}
                  alt={result.label || 'Results'}
                />
              )
            )}
          </div>
        ),
    });
  }

  /*
   * Track navigation height
   */
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

  /*
   * Track active case-study section
   */
  useEffect(() => {
    if (!sections.length) return;

    setActiveSection(sections[0].key);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
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

      <div className='flex-1'>
        <div className='md:max-w-[85%] py-12 w-full flex flex-col lg:flex-row'>

          {/* Sidebar */}
          <div className='md:w-[35%] lg:sticky top-24 self-start'>
            <div className='w-full flex flex-col gap-8 padding py-8'>

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
              <ul className='flex flex-col gap-2'>
                {sections.map((section) => {
                  const isActive =
                    activeSection === section.key;

                  return (
                    <li key={section.key}>
                      <button
                        onClick={() =>
                          scrollToSection(section.key)
                        }
                        className='flex items-center pb-1 w-full transition-colors'
                      >
                      <span
                        className={`
                        transition-all
                        duration-200
                        font-[var(--font-sans)]
                        ${isActive
                          ? 'text-[var(--text-primary)] font-bold'
                          : 'text-[var(--text-primary)] font-light'
                        }
                      `}
                      >
                        {section.label}
                      </span>
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
                      <p className='underline decoration-dotted'>
                        {link.label}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main content */}
          <div className='padding w-full order-2 flex flex-col gap-24 lg:gap-40'>
            <div className='w-full'>

              {/* Title + metadata */}
              <div className='py-8 md:py-12 flex flex-col gap-3'>
                <div>
                  <p>{projectType}</p>
                </div>

                <div className='flex flex-col'>
                  <h1>{title}</h1>
                </div>

                <div className='flex md:flex-wrap md:flex-row flex-col gap-6 md:justify-between mt-8'>
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

              {/* Hero media */}
              {isVideoSrc(cover) ? (
                <video
                  src={cover}
                  className='w-full object-cover rounded-[16px]'
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : cover ? (
                <img
                  src={cover}
                  alt={`${title} cover`}
                  className='w-full h-auto object-cover rounded-[16px]'
                />
              ) : video?.type === 'youtube' ? (
                <PortfolioCard item={video} />
              ) : null}

            </div>

            {/*
             * Video
             *
             * Only render this separately when a cover exists.
             *
             * If there is no cover, the YouTube video has already
             * been used as the hero above.
             */}
            {cover && video && (
              <div className='md:padding px-3 py-6'>
                <PortfolioCard item={video} />
              </div>
            )}

            {/* Case study sections */}
            {sections.map((section) => (
              <div
                key={section.key}
                id={section.key}
                className='flex flex-col gap-10'
              >
                <div className='flex flex-col'>
                  {section.content}
                </div>
              </div>
            ))}

            {/* Mockups */}
            {mockups.length > 0 && (
              <div className='flex flex-col gap-6'>
                <Carousel images={mockups} />
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}


/*
 * SECTION MEDIA
 */
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
      className={`flex gap-16 ${
        isRow
          ? 'flex-col md:flex-row'
          : 'flex-col'
      }`}
    >

      {/* Text */}
      <div className='w-full flex flex-col items-baseline gap-3'>
        <h5>{label}</h5>

        {name && <h1>{name}</h1>}

        <div className='flex flex-col gap-8'>
          {text && <p>{text}</p>}
          {text2 && <p>{text2}</p>}
        </div>
      </div>

      {/* Images */}
      {images && (
        <div
          className={`w-full flex gap-6 ${
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


/*
 * META
 */
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


/*
 * INSIGHT SECTION
 */
function InsightSection({
  label,
  name,
  text,
  text2,
  images = [],
  insights = [],
  conclusion,
}) {
  return (
    <div className='flex flex-col gap-16'>

      {/* Intro */}
      <div className='flex flex-col gap-3'>
        {label && <h5>{label}</h5>}

        {name && <h1>{name}</h1>}

        <div className='flex flex-col gap-8'>
          {text && <p>{text}</p>}
          {text2 && <p>{text2}</p>}
        </div>
      </div>

      {/* Intro images */}
      {images.length > 0 && (
        <div className='flex flex-col gap-6'>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=''
              loading='lazy'
              className='rounded-[16px] w-full h-auto object-contain'
            />
          ))}
        </div>
      )}

      {/* Insights */}
      <div className='flex flex-col gap-20'>
        {insights.map((insight, index) => (
          <div
            key={index}
            className='flex flex-col gap-10'
          >

            {/* Insight text */}
            <div className='flex gap-8 md:gap-12'>
              <h1>
                {String(index + 1).padStart(2, '0')}
              </h1>

              <div className='flex flex-col gap-3'>
                <h4>{insight.name}</h4>

                {insight.description && (
                  <p>{insight.description}</p>
                )}
              </div>
            </div>

            {/* Insight images */}
            {insight.images?.length > 0 && (
              <div
                className={
                  insight.imageLayout === 'grid'
                    ? 'grid grid-cols-2 gap-6'
                    : 'flex flex-col gap-6'
                }
              >
                {insight.images.map(
                  (image, imageIndex) => (
                    <img
                      key={imageIndex}
                      src={image}
                      alt={insight.name}
                      loading='lazy'
                      className='rounded-[16px] w-full h-auto object-contain'
                    />
                  )
                )}
              </div>
            )}

          </div>
        ))}
      </div>

      {/* Conclusion */}
      {conclusion && (
        <div className='flex pt-16 gap-6'>
          <div className='h-full w-1 bg-(--text-primary)'></div>

          <h3 className=''>
            Conclusion- {conclusion.text}
          </h3>
        </div>
      )}

    </div>
  );
}