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

const video = {
  type: 'youtube',
  videoId: '9N1gvXReOBY',
};

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
        label: 'Concept',
        name: 'A young man revisits a summer that feels impossibly distant.',
        text:
          'A young man sits alone in a darkened room, scrolling through fragments of a summer that feels impossibly distant.',
        images: [one],
        layout: 'row',
      }}

      task={{
        label: 'Context',
        name: 'A semester-long animation project',
        text:
          'This film was created toward the end of a semester-long animation course taught by Tim Szetela. Audio elements were sourced from freesound.org and edited into the final piece in Premiere Pro.',
        images: [two],
        layout: 'col',
      }}

      keyInsights={{
        label: 'Process',
        name: 'Building the world before animating it',
        text:
          'I started by drawing the backgrounds first, using color, light, and composition to establish the space of each scene. I then animated over them in Procreate Dreams before compositing and editing the final piece.',
        images: [three, five],
        layout: 'row',
      }}

      actions={[
        {
          label: 'Background',
          name: 'Backgrounds first',
          description:
            'Every scene began as a background, establishing the color, light, and mood before any character animation was added.',
          images: [six, seven],
          layout: 'col',
        },

        {
          label: 'Animation',
          name: 'Animating the moment',
          description:
            'Character and motion work was layered on top in Procreate Dreams, matching the quiet and reflective pacing of the film.',
          images: [eight, nine],
          layout: 'col',
        },

        {
          label: 'Composite',
          name: 'Compositing and edit',
          description:
            'Effects and compositing came together in After Effects, with the final cut, timing, and sound assembled in Premiere Pro.',
          images: [ten, eleven],
          layout: 'col',
        },
      ]}

      results={[
        {
          label: 'Final',
          name: 'Collections',
          description:
            'The finished film turns a single scrolling moment into a small, nostalgic world built from hand-drawn backgrounds and animation.',
          images: [twelve, thirteen],
          layout: 'row',
        },
      ]}

      mockups={[
        four,
        one,
        two,
        three,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirteen,
      ]}
    />
  );
}