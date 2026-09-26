import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import veilcover from '../../assets/portfolio/design/Veil/veilcover.webp';
import exploration from '../../assets/portfolio/design/Veil/exploration.webp';
import initial from '../../assets/portfolio/design/Veil/initial.webp';
import logomark from '../../assets/portfolio/design/Veil/logomark.svg';
import wordmark from '../../assets/portfolio/design/Veil/wordmark.svg';

import hero1 from '../../assets/portfolio/design/Veil/Hero1.webp';
import hero2 from '../../assets/portfolio/design/Veil/Hero2.webp';
import hero3 from '../../assets/portfolio/design/Veil/Hero3.webp';

import mock1 from '../../assets/portfolio/design/Veil/mockup/1.webp';
import mock2 from '../../assets/portfolio/design/Veil/mockup/2.webp';
import mock3 from '../../assets/portfolio/design/Veil/mockup/3.webp';
import mock4 from '../../assets/portfolio/design/Veil/mockup/4.webp';

export default function Veil() {
  return (
    <CaseStudy
      cover={veilcover}
      title="Unveiling a luxury perfume brand"
      projectType="Brand Identity"
      backTo="/work"
      quickLink="https://www.figma.com/proto/aYxe4mVQJ3brRshRmh3ae0/VEIL?node-id=5-50&t=vMbrhf7AnvudIDhF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
      meta={{
        role: 'Brand Designer',
        timeline: '4 days',
        team: 'Solo',
        tools: 'Adobe Illustrator, Photoshop, Figma',
      }}

      situation={{
        label: 'Concept',
        name: 'A fragrance house built on restraint',
        text:
          'VEIL is a fragrance house built on restraint. The brief was simple: design a brand that says less and means more. No excess, no spectacle. Just a visual identity that knows when to stop.',
        text2:
          'The work covers a full brand system, including identity, typography, color, and packaging, as well as a set of hero sections exploring how the brand lives in the real world.',
        images: [exploration],
        layout: 'col',
      }}

      task={{
        label: 'Exploration',
        name: 'Finding a mark that could carry the brand',
        text:
          'I explored a range of logomarks and wordmarks before narrowing down the visual direction.',
        images: [exploration],
        layout: 'col',
      }}

      keyInsights={{
        label: 'Iteration',
        name: 'Knowing when to let the first idea go',
        text:
          'The initial concept felt incoherent. The colors were off, and the combination of the V and L to form a bottle was not sticking.',
        text2:
          'Rather than forcing the original idea, I returned to the underlying concept and looked for a simpler way to express the name.',
        images: [initial],
        layout: 'col',
      }}

      actions={[
        {
          label: 'Logomark',
          name: 'Building the mark from negative space',
          text:
            'The final logomark came from the idea of a cover and walls: a dome with a thick top, with a V cut into the negative space.',
          images: [logomark],
          imageLayout: 'col',
        },
        {
          label: 'Wordmark',
          name: 'Pairing the mark with a restrained wordmark',
          text:
            'The wordmark was developed alongside the logomark to keep the identity quiet, deliberate, and cohesive.',
          images: [wordmark],
          imageLayout: 'col',
        },
        {
          label: 'Application',
          name: 'The brand in life',
          text:
            'I then explored how the identity could extend into hero imagery, packaging, and other physical brand applications.',
          images: [hero1, hero2, hero3],
          imageLayout: 'stack',
        },
      ]}

      results={[
        {
          label: 'Final Identity',
          name: 'VEIL',
          text:
            'A restrained fragrance identity built around negative space, quiet typography, and a visual system designed to communicate through reduction rather than excess.',
          images: [hero1, hero2, hero3],
          layout: 'col',
        },
      ]}

      mockups={[
        veilcover,
        exploration,
        initial,
        logomark,
        wordmark,
        hero1,
        hero2,
        hero3,
        mock1,
        mock2,
        mock3,
        mock4,
      ]}
    />
  );
}