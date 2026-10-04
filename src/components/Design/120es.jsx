import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/120es/cover.png';
import wireframes from '../../assets/portfolio/design/120es/wireframes.webp';
import users from '../../assets/portfolio/design/120es/users.webp';
import change from '../../assets/portfolio/design/120es/change.webp';
import actions from '../../assets/portfolio/design/120es/action.webp';
import socials from '../../assets/portfolio/design/120es/socials.webp';
import states from '../../assets/portfolio/design/120es/states.webp';
import mobile from '../../assets/portfolio/design/120es/mobile.webp';
import quotes from '../../assets/portfolio/design/120es/quotes.webp';
import testing from '../../assets/portfolio/design/120es/testing.webp';
import userfeedback from '../../assets/portfolio/design/120es/userfeedback.webp';
import finals from '../../assets/portfolio/design/120es/finals.webp';

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
        name: 'I jumped into visual design before I really understood the product.',
        text:
          "Ok, looking back...this was not a great start to a design. I was still learning Figma, and instead of starting with rough layouts, I went straight into polished screens. I experimented heavily with the brand colors, photography, and different UI styles because I was focused on making the archive feel modern.",

        layout: 'col',
        images: [wireframes],
      }}

      /*
       * ─────────────────────────────────────────
       * WHAT I ACTUALLY HAD TO SOLVE
       * ─────────────────────────────────────────
       */

      task={{
        label: 'Defining the product',
        name: 'Once we mapped out who was using it, the product started to make more sense.',
        text:
          "The archive had to work for three very different people: someone discovering a story, someone contributing one, and someone deciding what became part of the archive.",
        layout: 'col',
        images: [users],
      }}

      /*
       * ─────────────────────────────────────────
       * WHAT CHANGED
       * ─────────────────────────────────────────
       */

      keyInsights={{
        label: 'Rethinking the direction',
        name: 'Understanding the product made another problem with my first designs obvious.',
      
        text:
          "Even once the structure made more sense, the visual direction still did not feel right. I had been using “modern” as a style rather than asking what modern should look like for 120 East State.",
      
        insights: [
          {
            name: 'The brand colors were doing too much',
            description:
              "I used yellow across entire backgrounds and large parts of the interface instead of using it more intentionally.",
          },
      
          {
            name: 'The hierarchy was getting lost',
            description:
              "Photography, color, borders, and UI elements were all competing for attention instead of helping the stories lead.",
          },
      
          {
            name: 'I was designing for a style, not the organization',
            description:
              "The rounded, graphic direction felt contemporary, but it did not say much about the history or character of 120 East State.",
          },
        ],
      
        conclusion: {
          text:
            'I did not need to make the archive less modern. I needed a better definition of what modern meant for this project.',
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
          name: 'So I started by simplifying.',
          text:
            "The first designs were trying to do too much at once. I pulled back on the yellow, simplified the components, and paid more attention to spacing, hierarchy, and contrast. I still wanted the site to feel contemporary, but I did not want the interface competing with the stories it was supposed to preserve.",
      
          layout: 'col',
          images: [change],
        },
      
        {
          label: 'Designing the system',
          name: 'I started thinking less about individual screens and more about what happened after someone clicked something.',
          text:
            "A good example was submitting a story. For the Writer, it looked like a form. But after they pressed submit, that story became pending, moved into the Admin workflow, could be approved or denied with feedback, and eventually became part of the public archive.",
      
          text2:
            "Following that flow made me realize that the product was not really three separate experiences. The same piece of content was moving between different people and changing state along the way.",
      
          layout: 'col',
          images: [actions],
        },
      
        {
          label: 'Finding stories',
          name: 'An archive is not very useful if people cannot find anything.',
          text:
            "As the archive grew, I had to think more about how someone would actually move through it. Readers could search by title or contributor, filter by date or tag, browse categories, open an individual story, and even arrive directly through a QR code.",
      
          text2:
            "I wanted those different entry points to lead back into the same experience, so discovering one story could make it easy to keep exploring.",
      
          layout: 'col',
          images: [socials],
        },
      
        {
          label: 'Building the product',
          name: 'Some of the design happened after I left Figma.',
          text:
            "I did not have every state or screen figured out before development. Once I started building the frontend, I ran into things I had not really designed for yet: empty states, errors, authentication, submission feedback, awkward screen sizes, and layouts that worked on desktop but fell apart on mobile.",
      
          text2:
            "A lot of the responsive work happened directly in the browser. It was messier than having everything perfectly planned beforehand, but it taught me to pay attention to how the interface behaved instead of only how it looked in a static frame.",
      
          layout: 'col',
          images: [states, mobile],
        },
      
        {
          label: 'Working with the client',
          name: 'Our meetings slowly became less about updates and more about making decisions together.',
          text:
            "Early on, our meetings were mostly about requirements, progress, and whether the core features were working. As the product became more complete, the conversations changed. We started testing the interface together, discussing new ideas, and using feedback from 120 East State to decide what should change next.",
      
          text2:
            "The conversations became more collaborative too. Instead of only showing progress, we started brainstorming features and figuring out the product together. Ideas like announcements and other ways of communicating through the site came out of those conversations.",
      
          layout: 'col',
          images: [quotes],
        },
      ]}
      /*
       * ─────────────────────────────────────────
       * TESTING + RESULT
       * ─────────────────────────────────────────
       */

      results={[
        {
          label: 'Testing the system',
          name: 'Before putting it in front of people, we tried to break it ourselves.',
          text:
            "We tested the product across both expected flows and edge cases. That included authentication, submissions, approvals, denials, file limits, missing fields, permissions, tags, email, and recovery states.",
        
          text2:
            "This was less about proving that each screen existed and more about making sure the system held together when something went wrong.",
        
          layout: 'col',
          images: [testing],
        },

        {
          label: 'User testing',
          name: 'We tested our app with users who had never seen it before.',
          text:
            "We tested the archive with 120 East State board members and other first time users. Most people were able to move through the product with very little guidance, which was reassuring after spending so much time close to it.",
        
          text2:
            "The useful part was seeing what still caused hesitation. Search filtering was not immediately clear to everyone, some admin actions needed stronger distinction, and a few readability issues became much easier to notice once someone outside the team used the site.",
        
          layout: 'col',
          images: [userfeedback],
        },

        {
          label: 'Outcome',
          name: 'What started as a rough class project became something 120 East State could actually take over.',
          text:
            "By the end of the semester, the archive was working across the full flow: people could discover stories, contribute their own, and administrators could review and manage what became public.",
        
          text2:
            "The next step was handing it off to 120 East State, including administrator access, organization email routing, and the infrastructure needed to support more stories and media over time.",
        
          layout: 'col',
          images: [finals],
        },
      ]}
    />
  );
}