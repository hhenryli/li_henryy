import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/120es/cover.png';

export default function EastState() {
  return (
    <CaseStudy
      cover={cover}
      title="Designing a digital archive for Trenton’s community history"
      projectType="Product design + full stack"
      backTo="/"

      meta={{
        role: 'Product designer + frontend',
        timeline: '1 semester',
        team: '3 people',
        tools: 'Figma, React, Flask, PostgreSQL',
      }}

      quickLink={[
        {
          label: 'Visit 120 East State',
          href: 'https://120eaststate.org/',
        },
      ]}

      /*
       * ─────────────────────────────────────────
       * WHERE I STARTED
       * ─────────────────────────────────────────
       */

      situation={{
        label: 'Where I started',
        name: 'I started with the wrong idea of what “modern” meant.',
        text:
          "I was still learning Figma, and I skipped low fidelity wireframes to jump straight into polished screens. I used the brand colors too heavily, created poor contrast, and made almost everything overly rounded.",

        text2:
          "It looked contemporary, but it did not feel like 120 East State. That became the first real design problem I had to solve.",

        layout: 'col',
        images: [],
      }}

      /*
       * ─────────────────────────────────────────
       * WHAT I ACTUALLY HAD TO SOLVE
       * ─────────────────────────────────────────
       */

      task={{
        label: 'The problem',
        name: 'How do you make something feel new without designing over its history?',
        text:
          "120 East State is a digital archive for stories and media connected to First Presbyterian Church of Trenton and the surrounding community.",

        text2:
          "The system also had to work for three groups: people browsing stories, people submitting them, and administrators managing the archive.",

        layout: 'col',
        images: [],
      }}

      /*
       * ─────────────────────────────────────────
       * WHAT CHANGED
       * ─────────────────────────────────────────
       */

      keyInsights={{
        label: 'What changed',
        name: 'The project became less about making screens and more about making the system work.',

        text:
          "Working with the client and building the product changed how I approached the design.",

        insights: [
          {
            name: 'The visual direction needed to belong to the organization',
            description:
              "I pulled back on color and decoration and focused more on contrast, spacing, hierarchy, and the history behind the content.",
          },

          {
            name: 'Different users needed different experiences',
            description:
              "Readers, Writers, and Administrators shared one system but needed very different workflows.",
          },

          {
            name: 'The product had more states than I designed',
            description:
              "Building it exposed empty states, errors, authentication, submission feedback, and other moments I had not considered in my first Figma designs.",
          },

          {
            name: 'Client conversations became more collaborative',
            description:
              "Our meetings shifted from progress updates to brainstorming and deciding what the product should become together.",
          },
        ],

        conclusion: {
          text:
            'I stopped designing what I thought looked modern and started designing what made sense for the organization and its users.',
        },
      }}

      /*
       * ─────────────────────────────────────────
       * THE DESIGN
       * ─────────────────────────────────────────
       */

      actions={[
        {
          label: 'Visual direction',
          name: 'Pulling the design back',
          text:
            "I reworked the first direction around stronger hierarchy, better contrast, and a lighter use of the brand colors. The goal was to make the interface feel contemporary without making the history feel decorative.",

          layout: 'col',
          images: [],
        },

        {
          label: 'Information architecture',
          name: 'Designing three experiences within one system',
          text:
            "Readers needed to discover stories, Writers needed to submit them, and Administrators needed to review and manage them. Mapping those paths helped me stop thinking about individual screens and start thinking about the system as a whole.",

          layout: 'col',
          images: [],
        },

        {
          label: 'Product states',
          name: 'Designing what happens between the main screens',
          text:
            "As I built the product, I had to account for the moments my original designs skipped: empty archives, errors, authentication, submission feedback, and pending review.",

          layout: 'col',
          images: [],
        },

        {
          label: 'Responsive design',
          name: 'A lot of the mobile work happened in the browser',
          text:
            "I did not create a separate mobile frame for every screen. I worked through responsive layouts, grids, and spacing directly in the frontend, testing how the interface held together at different sizes.",

          layout: 'col',
          images: [],
        },

        {
          label: 'Working with the client',
          name: 'Learning what was actually useful to show',
          text:
            "Early on, I explained everything I had worked on. Over time, I learned to focus meetings on what changed, what was working, and what we needed to decide together. Prototypes and walkthroughs became more useful than explaining implementation details.",

          layout: 'col',
          images: [],
        },
      ]}

      /*
       * ─────────────────────────────────────────
       * TESTING + RESULT
       * ─────────────────────────────────────────
       */

      results={[
        {
          label: 'Testing',
          name: 'Real users caught things I missed',
          text:
            "120 East State administrators tested the public archive and admin tools with little guidance. Testing also exposed areas that were less clear, including search filtering and how visible the different submission states were.",

          text2:
            "It was a good reminder that something can make sense to me because I built it and still be unclear to someone seeing it for the first time.",

          layout: 'col',
          images: [],
        },

        {
          label: 'Reflection',
          name: 'A project that taught me the fundamentals',
          text:
            "I started by trying to make the site look modern. I finished thinking much more about hierarchy, accessibility, responsive behavior, system states, and whether the interface actually belonged to the people I was designing it for.",

          text2:
            "There are still things I would change. But a lot of what I know about designing interfaces now came from having to figure those things out while building a real product.",

          layout: 'col',
          images: [],
        },
      ]}
    />
  );
}