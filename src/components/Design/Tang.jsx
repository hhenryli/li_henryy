import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import tangcover from '../../assets/portfolio/design/Tang/tangcover.webp';
import sketches from '../../assets/portfolio/design/Tang/sketches.webp';
import firstlogo from '../../assets/portfolio/design/Tang/firstlogo.webp';
import finallogo from '../../assets/portfolio/design/Tang/finallogo.webp';
import pattern from '../../assets/portfolio/design/Tang/pattern.webp';

import truck from '../../assets/portfolio/design/Tang/truck.webp';
import crunch from '../../assets/portfolio/design/Tang/crunch.webp';
import box from '../../assets/portfolio/design/Tang/box.webp';

import stamphaw from '../../assets/portfolio/design/Tang/stamphaw.webp';
import stampheader from '../../assets/portfolio/design/Tang/stampheader.webp';
import stampgrape from '../../assets/portfolio/design/Tang/stampgrape.webp';

export default function Tang() {
  return (
    <CaseStudy
      cover={tangcover}
      title="Tanghulu! Crunchy, bright, bold"
      projectType="Brand Identity"
      backTo="/work"
      meta={{
        role: 'Brand Designer',
        timeline: '3 days',
        team: 'Solo',
        tools: 'Adobe Illustrator, Photoshop',
      }}

      situation={{
        label: 'Concept',
        name: 'Building a brand around tanghulu',
        text:
          "This summer, I traveled to China for a month and had this amazing dessert called Tanghulu. It's basically fruit covered in a sticky syrup that hardens into a crunchy shell. I had an idea to create a tanghulu brand because I noticed that many of the stores I visited didn't have a strong visual identity.",
        text2:
          'Traditionally, hawthorn is used for tanghulu because of its tanginess and acidity, which balances out the sweetness of the sugar coat. Modern recipes often use strawberry, grapes, or oranges. I was inspired by the shapes and colors of these fruits when designing the brand.',
        images: [sketches],
        layout: 'col',
      }}

      task={{
        label: 'Exploration',
        name: 'Finding the right personality',
        text:
          'I started by exploring different visual directions and eventually landed on a playful logo built around a handmade type treatment, using the shape of a strawberry in the A.',
        images: [firstlogo],
        layout: 'col',
      }}

      keyInsights={{
        label: 'Iteration',
        name: 'The first idea was not enough',
        text:
          'Something felt missing. The logo felt too basic and rigid for a brand that I imagined as bright, crunchy, dynamic, and offering the shiniest and glossiest tanghulu possible.',
        text2:
          'So I went back to the drawing board and pushed the identity toward something more expressive and energetic.',
        images: [finallogo, pattern],
        layout: 'col',
      }}

      actions={[
        {
          label: 'Applicaton',
          name: 'Putting the identity into the real world',
          text:
            'I extended the identity beyond the logo into packaging, vehicles, and other brand applications, using the visual system to make the brand feel like a complete business rather than just a mark.',
          images: [truck, crunch, box],
          imageLayout: 'stack',
        },
        {
          label: 'Details',
          name: 'Adding a few things just for fun',
          text:
            'I also created a small set of custom stamps using different fruits and graphic elements from the identity.',
          images: [stamphaw, stampheader, stampgrape],
          imageLayout: 'stack',
        },
      ]}

      results={[
        {
          label: 'Final Identity',
          name: 'Tang',
          text:
            'A playful tanghulu brand built around fruit-inspired forms, bright color, and a visual language designed to feel crunchy, glossy, and energetic.',
          images: [tangcover, finallogo, pattern],
          layout: 'col',
        },
      ]}

      mockups={[
        tangcover,
        sketches,
        firstlogo,
        finallogo,
        pattern,
        truck,
        crunch,
        box,
        stamphaw,
        stampheader,
        stampgrape,
      ]}
    />
  );
}