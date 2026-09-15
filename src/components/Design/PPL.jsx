import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/PPL/ppl_cover.webp';
import cover2 from '../../assets/portfolio/design/PPL/cover.webp';
import interior from '../../assets/portfolio/design/PPL/interior.webp';
import building from '../../assets/portfolio/design/PPL/building.jpg';
import old_web from '../../assets/portfolio/design/PPL/old_web.webp';
import history from '../../assets/portfolio/design/PPL/history.jpg';
import sketch1 from '../../assets/portfolio/design/PPL/sketch1.webp';
import sketch2 from '../../assets/portfolio/design/PPL/sketch2.webp';
import colors from '../../assets/portfolio/design/PPL/colors.webp';
import typography from '../../assets/portfolio/design/PPL/type.webp';
import wireframes from '../../assets/portfolio/design/PPL/wireframes.webp';
import sheet from '../../assets/portfolio/design/PPL/sheet.webp';
import diff from '../../assets/portfolio/design/PPL/diff.webp';
import exterior from '../../assets/portfolio/design/PPL/exterior.webp';
import stationary from '../../assets/portfolio/design/PPL/stationary.webp';
import card from '../../assets/portfolio/design/PPL/card.webp';
import pin_shirt from '../../assets/portfolio/design/PPL/pin_shirt.webp';
import merch from '../../assets/portfolio/design/PPL/merch.webp';
import favicon from '../../assets/portfolio/design/PPL/favicon.webp';
import website from '../../assets/portfolio/design/PPL/website.webp';
import thanks from '../../assets/portfolio/design/PPL/thanks.webp';

export default function PPL() {
  return (
    <CaseStudy
      cover={cover}
      title="Redesigning a library's identity for a community built across generations"
      projectType="Brand Identity"
      backTo="/work"
      meta={{
        role: 'Brand Designer',
        timeline: '1 week',
        team: 'Solo',
        tools: 'Adobe Illustrator, Photoshop, Figma',
      }}
      quickLink={{
        label: 'Open in Figma',
        href: 'https://www.figma.com/design/ZtqVzqNd4rcQoqz6YAuRAX/PPL?node-id=0-1&t=xfsRzXEDDpBlHtzZ-1',
      }}
      situation={{
        label: "CONTEXT",
        name: "A disconnected identity",
        text: "I spend a lot of time at the Princeton Public Library, and I've always been fascinated by the architecture. Modern, open space with multiple floors and tall glass windows, yet still grounded and cozy. I got curious about how that same sense of design carried over into the library's branding and website.",
        text2: "It didn't. The identity felt disconnected and outdated from a library that's actually a cornerstone for a community spanning multiple generations.",
        images: [old_web, building],
        layout: 'col',
        imageLayout: 'row'
      }}
      task={{
        label:"TASK",
        name: "A modern identity rooted in history",
        text: "The task was to build an identity both modern enough to match the library's current building, and rooted enough to reflect its history and role as a cornerstone of the community across generations.",
        text2: "Accessibility was a constraint from the start rather than an afterthought, since the library serves patrons of every age and ability.",
        images: [history],
        layout: 'row',
      }}
      actions={
        [
        {
          label: "ACTION",
          name: "Understanding the library",
          description: "After careful research of the library's core mission, values, and history, along with user research surveying random people around the area, I developed a set of insights to guide the design process.",
          insights: [
            "The library functions as a place to study, work, socialize, attend events, access technology, and simply spend time.",
            "“I feel like the logo is basic, like they just replaced the O in Princeton with a book.” - a survey respondent, reflecting the library's current logo and visual identity.",
            "The library's architecture and physical environment have a distinctive character that wasn't being carried through into its visual identity.",
          ],
          layout: 'col',
        },
        {
          name: 'Finding the idea',
          description: 'What could solve that problem? I started with sketches and drafts of different directions, exploring a range of ideas from literal to abstract. I wanted to find a solution that was both modern and rooted in history, while also being flexible enough to work across the library’s many touchpoints.',
          images: [sketch1, sketch2],
          layout: 'col',
          imageLayout: 'row',
        },
        {
          name: 'Building the brand — color',
          description: "With the mark settled, I moved on to thinking about the visual identity. I initially tried a muted cool blue color palette, but found that it felt too corporate and cold for the history the library was rooted in. Instead, I moved to a warm, bright yet contrasted color palette, grounded in the building's own materials: a terracotta pulled from stone and masonry, paired with a muted, glass-green secondary color pulled from the building's windows. Both sit on a full neutral scale, built to hold up across applications and meet accessibility contrast requirements throughout.",
          images: [colors],
          layout: 'col',
        },
        {
          name: 'Building the brand — typography',
          description: "The type system needed to finish the same thought the mark and palette had already started. I paired a slab serif, used only for large headline moments, with Public Sans for body copy and most headers, so the heavier, blockier serif could carry the history and weight of the building, while a clean, modern sans-serif carried the everyday reading experience. I chose Public Sans specifically over more common defaults like Helvetica or Arial, which have known legibility issues distinguishing similar characters, since accessibility had been a constraint from the very first research insight.",
          images: [typography],
          layout: 'row',
        },
        {
          name: 'Designing a reusable Experience',
          description: "I approached the website as a flexible system rather than a collection of individual pages, defining reusable components and core patterns for elements like navigation, heroes, footers, and content sections.",
          images: [wireframes, sheet],
          layout: 'col',
        },
      ]}
      results={[
        {
          label:"RESULTS",
          description: "",
          name: "Final design",
          images: [cover2, diff],
          layout: 'col',
        },
        {
          description: "The identity extends beyond the logo into the library itself, creating a cohesive visual experience across the interior, exterior, and wayfinding.",
          name: "A Brand in the building",
          images: [exterior, interior],
          layout: 'col',
        },
        {
          description: "Library cards, stationery, and other printed materials bring the identity into the everyday interactions patrons have with the library.",
          name: "Everyday Touchpoints",
          images: [stationary, card],
          layout: 'col',
        },
        {
          description: "The visual system translates naturally into merchandise, giving the identity a more playful and tangible presence beyond the library.",
          name: "Made to be shared",
          images: [pin_shirt, merch],
          layout: 'col',
        },
        {
          description: "The identity carries into the digital experience through the website, icons, and favicon, creating continuity between the physical and digital library.",
          name: "A digital presence",
          images: [favicon, website],
          layout: 'col',
        },
      ]
      }
      mockups={[thanks]}
    />
  );
}