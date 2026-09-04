import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import one from '../../assets/portfolio/animation/collections/1.jpg';
import two from '../../assets/portfolio/animation/collections/2.jpg';
import three from '../../assets/portfolio/animation/collections/3.jpg';
import four from '../../assets/portfolio/animation/collections/4.jpg';
import five from '../../assets/portfolio/animation/collections/5.jpg';
import six from '../../assets/portfolio/animation/collections/6.jpg';
import seven from '../../assets/portfolio/animation/collections/7.jpg';
import eight from '../../assets/portfolio/animation/collections/8.jpg';
import nine from '../../assets/portfolio/animation/collections/9.jpg';
import ten from '../../assets/portfolio/animation/collections/10.jpg';
import eleven from '../../assets/portfolio/animation/collections/11.jpg';
import twelve from '../../assets/portfolio/animation/collections/12.jpg';
import thirteen from '../../assets/portfolio/animation/collections/13.jpg';

const video = { type: 'youtube', videoId: '9N1gvXReOBY' };

export default function Collections() {
  return (
    <CaseStudy
      cover={four}
      title="Collections"
      projectType="2D Animation"
      backTo="/work"
      meta={{
        role: 'Animator',
        timeline: '1 semester',
        team: 'Solo',
        tools: 'Procreate Dreams, Procreate, After Effects, Premiere Pro',
      }}
      video={video}
      situation={{
        label: 'Situation',
        name: 'The Concept',
        text: "A young man sits alone in a darkened room, scrolling through fragments of a summer that feels impossibly distant.",
        images: [one],
        layout: 'row',
      }}
      task={{
        label: 'Task',
        name: 'Context',
        text: "This film was created toward the end of a semester-long animation course taught by Tim Szetela. Audio elements were sourced from freesound.org and embedded in Premiere Pro.",
        images: [two],
        layout: 'col',
      }}
      keyInsights={{
        label: 'Key Insights',
        name: 'Process',
        text: "I started by drawing backgrounds first, since I wanted them to be beautiful, colorful, and to generate the space of each scene before anything moved through it. From there, I animated over them in Procreate Dreams, composited and added effects in After Effects, and edited the final piece together in Premiere Pro.",
        images: [three, five],
        layout: 'row',
      }}
      actions={[
        {
          name: 'Backgrounds First',
          description: "Every scene began as a background — establishing color, light, and mood before any character animation was added, so each space felt intentional rather than incidental.",
          images: [six, seven],
          layout: 'col',
        },
        {
          name: 'Animating the Moment',
          description: "Character and motion work was layered on top in Procreate Dreams, built to match the quiet, reflective pacing the film called for.",
          images: [eight, nine],
          layout: 'col',
        },
        {
          name: 'Compositing & Edit',
          description: "Effects and compositing came together in After Effects, with the final cut, timing, and sound assembled in Premiere Pro.",
          images: [ten, eleven],
          layout: 'col',
        },
      ]}
      results={[
        {
          label: 'Results',
          name: 'Collections',
          description: "The finished film captures a quiet, nostalgic mood — a single scrolling moment stretched into a small, complete world built entirely from hand-drawn backgrounds and animation.",
          images: [twelve, thirteen],
          layout: 'row',
        },
      ]}
      mockups={[four, one, two, three, five, six, seven, eight, nine, ten, eleven, twelve, thirteen]}
    />
  );
}