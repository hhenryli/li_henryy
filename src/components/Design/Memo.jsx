import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/Memo/memocover.webp';
import whatismemo from '../../assets/portfolio/design/Memo/whatismemo.webp';
import icons from '../../assets/portfolio/design/Memo/app icon.jpg';
import businesscards from '../../assets/portfolio/design/Memo/Business Cards.jpg';
import business from '../../assets/portfolio/design/Memo/business.jpg';
import colors from '../../assets/portfolio/design/Memo/Colors.jpg';
import full from '../../assets/portfolio/design/Memo/Full Logo.png';
import posters from '../../assets/portfolio/design/Memo/posters.png';
import largeposter from '../../assets/portfolio/design/Memo/posterlarge.jpg';
import typography from '../../assets/portfolio/design/Memo/Typography.jpg';
import sketches from '../../assets/portfolio/design/Memo/sketches.png';
import travel from '../../assets/portfolio/design/Memo/travel.png';

export default function Memo() {
  return (
    <CaseStudy
      cover={cover}
      title="Memo"
      projectType="Brand Identity"
      backTo="/work"
      meta={{
        role: 'Brand Designer',
        timeline: '1 week',
        team: 'Solo',
        tools: 'Adobe Illustrator, Photoshop, Procreate, Figma',
      }}
      quickLink={{
        label: 'Full branding guide',
        href: 'https://www.figma.com/proto/FsjGZN7MsszHKZ4UAQaahI/Memo-Branding-Guide?node-id=31-1128&p=f&t=LxGuWsfysnmvOhWD-1&scaling=scale-down-width&content-scaling=fixed&page-id=31%3A1127',
      }}
      situation={{
        label:"Context",
        text: "Memo is a startup travel company focused on shared travel planning and the experience of exploring together. The brand needed to feel warm, collaborative, and elevated while still feeling distinctly travel-oriented.",
        text2: "I designed the logo and brand identity, including color palette, typography, and brand guidelines.",
        name: "What is Memo?",
        images: [whatismemo],
        layout: 'row',
      }}
      task={{
        label:"Task",
        text: "I was brought on to develop Memo's visual identity, beginning with a logo that could capture the feeling of shared travel without relying on familiar imagery like planes, birds, or other obvious travel symbols. The identity also needed to work across a range of touchpoints, from a website and app icon to printed materials and other physical applications.",
        name: "The Challenge",
        images: [travel],
        layout: 'col',
      }}
      actions={
        [
        {
          label:"Action",
          name: 'Research and Insights',
          description: '',
          insights: [
            'Too many obvious symbols like planes, birds, and maps.',
            'Not many brands focus on the shared experience of travel.',
            'There was an opportunity to make travel branding feel more personal.'
          ],
          layout: 'col',
        },
        {
          name: 'Sketching',
          description: 'I explored a range of concepts through sketching, looking for ways to combine travel, connection, and shared experiences into a single simplified mark. The goal was to create something recognizable without becoming another generic travel logo.',
          images: [sketches],
          layout: 'col',
        },
        {
          name: 'Visual Language',
          description: "With the logo direction established, I developed the supporting visual language around it. The client wanted blue to be a primary brand color, so I paired a subtle ocean blue with a warm beach-inspired tan to balance sophistication with the warmth of travel.",
          images: [colors],
          layout: 'row',
        },
        {
          name: 'Typography',
          description: "I paired a lightly customized wordmark with Lexend Deca for headings, DM Sans for body copy, and DM Mono as a contrasting accent.",
          images: [typography],
          layout: 'col',
        },
      ]}
      results={[
        {
          label:"Results",
          description: "The final logo and brand identity successfully capture the feeling of shared travel experiences while remaining flexible enough to work across Memo's many touchpoints.",
          name: "A Flexible Identity",
          images: [full],
          layout: 'row',
        },
        {
          description: "An icon that works across sizes, remaining scalable and recognizable",
          name: "Digital Applications",
          images: [icons],
          layout: 'row',
        },
        {
          description: "Printed materials that feel elevated and cohesive with the brand identity",
          name: "Physicals",
          images: [business, businesscards],
          layout: 'col',
        },
      ]
      }
      mockups={[cover, full, posters, largeposter]}
    />
  );
}