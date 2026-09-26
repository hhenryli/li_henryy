import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/TwoReel/TwoReelCover.png';
import moodboard from '../../assets/portfolio/design/TwoReel/Moodboard.png';
import sketches from '../../assets/portfolio/design/TwoReel/sketches.jpeg';
import artboard from '../../assets/portfolio/design/TwoReel/artboard.png';
import color from '../../assets/portfolio/design/TwoReel/Color.png';
import typography from '../../assets/portfolio/design/TwoReel/Typography.png';

const video = {
  type: 'youtube',
  videoId: 'Q5eATvkVntA',
};

export default function TwoReel() {
  return (
    <CaseStudy
      cover={cover}
      title="A photography studio - film for two"
      projectType="Brand Identity"
      backTo="/work"
      quickLink="https://www.figma.com/proto/FsjGZN7MsszHKZ4UAQaahI/Memo-Branding-Guide?node-id=31-1128&p=f&t=LxGuWsfysnmvOhWD-1&scaling=scale-down-width&content-scaling=fixed&page-id=31%3A1127"
      meta={{
        role: 'Brand Designer',
        timeline: '5 days',
        team: 'Solo',
        tools: 'Adobe Illustrator, Photoshop, After Effects',
      }}

      situation={{
        label: 'Context',
        name: 'Creating a visual identity for a filmmaking company',
        text:
          'This case study articulates the work of a filmmaking company with the goal of creating high school curriculums for learning filmmaking. The brand needed to feel accessible and down-to-earth while standing out through its availability and appeal to couples.',
        images: [moodboard],
        layout: 'col',
      }}

      task={{
        label: 'Brief',
        name: 'Building the complete brand system',
        text:
          'The brief called for a total branding package: a brand name, consistent visual system, and logo.',
        layout: 'col',
      }}

      keyInsights={{
        label: 'Approach',
        name: 'Exploring before committing',
        text:
          'I started with a lot of brainstorming and sketching to explore different visual directions. The brief was particularly challenging because of the multiple elements that did not seem intuitively connected, so I spent a lot of time looking for visual cues and references.',
        text2:
          'I looked at Pinterest and current filmmaking companies to understand the visual language of the industry. I initially leaned toward a more playful and illustrative logo, but realized that a company positioned as a learning resource would benefit from something more grounded, timeless, recognizable, and minimal.',
        images: [sketches, artboard],
        layout: 'col',
      }}

      actions={[
        {
          label: 'Identity',
          name: 'Developing the logo',
          text:
            'Once I settled on a basic direction, I vectorized the idea and began refining the visual identity around it.',
          images: [artboard],
          imageLayout: 'col',
        },
        {
          label: 'Color & Type',
          name: 'Balancing professionalism with friendliness',
          text:
            'I wanted the identity to communicate a professional filmmaking curriculum while still feeling friendly, open, and down to earth.',
          images: [color, typography],
          imageLayout: 'stack',
        },
      ]}

      results={[
        {
          label: 'FINAL',
          name: 'A complete visual identity for TwoReel',
          text:
            'The final system combines a grounded logo with color, typography, imagery, and motion designed to make the brand feel professional without losing its approachable quality.',
          images: [color, typography],
          layout: 'col',
        },
      ]}

      video={video}

      mockups={[
        cover,
        moodboard,
        sketches,
        artboard,
        color,
        typography,
      ]}
    />
  );
}