import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/Haven/cover.webp';
import one from '../../assets/portfolio/design/Haven/00-01.webp';
import two from '../../assets/portfolio/design/Haven/02.webp';
import three from '../../assets/portfolio/design/Haven/03.webp';
import five from '../../assets/portfolio/design/Haven/05.webp';
import six from '../../assets/portfolio/design/Haven/06.webp';
import loading from '../../assets/portfolio/design/Haven/loading.gif';
import problem from '../../assets/portfolio/design/Haven/problem.png';
import app from '../../assets/portfolio/design/Haven/app.webp';
import brand from '../../assets/portfolio/design/Haven/brand.webp';
import color from '../../assets/portfolio/design/Haven/color.webp';
import onboard1 from '../../assets/portfolio/design/Haven/onboard1.jpg';
import onboard2 from '../../assets/portfolio/design/Haven/onboard2.jpg';
import flow from '../../assets/portfolio/design/Haven/flow.webp';
import home from '../../assets/portfolio/design/Haven/home.jpg';
import search from '../../assets/portfolio/design/Haven/search.jpg';
import preshow from '../../assets/portfolio/design/Haven/preshow.jpg';
import live from '../../assets/portfolio/design/Haven/live.jpg';
import profile from '../../assets/portfolio/design/Haven/profile.jpg';

export default function Haven() {
  return (
    <CaseStudy
      cover={cover}
      title="Haven"
      projectType="UI/UX"
      backTo="/work"
      meta={{
        role: 'UI/UX Designer',
        timeline: '2 weeks',
        team: 'Solo',
        tools: 'Figma, Adobe Illustrator, Photoshop',
      }}
      quickLink={[
        {
          label: 'Figma Prototype',
          href: 'https://www.figma.com/proto/UHS2PawiamcWey8Qb3A3oM/Haven?node-id=266-615&p=f&t=BSUzhhetran2Drub-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A93&show-proto-sidebar=1',
        },
        {
          label: 'View on Behance',
          href: 'https://www.behance.net/gallery/254337863/Haven-Concert-App-UIUX-Mobile-Design',
        },
      ]}
      situation={{
        label: 'Situation',
        name: 'The Problem',
        text: "At a concert, it's easy to feel a step behind. One second you're mouthing along to a song you don't fully know, while everyone else seems to know every word. Existing tools like Setlist.fm, Genius, and Bandsintown each solve a piece of the concert experience, but none of them are built for the moment you're actually standing in the crowd.",
        images: [problem],
        layout: 'row',
      }}
      task={{
        label: 'Task',
        name: 'A Live Concert App',
        text: "Design a concert companion app that helps someone feel oriented and present at a live show. They should be able to follow lyrics, understand context, and track the setlist in real time, making the concert experience more enjoyable and stranger-friendly.",
        images: [app],
        layout: 'col',
      }}
      actions={[
        {
          name: 'Insights',
          description: "I reached out to over 30+ friends, family, and online resources to determine the best approach to designing a concert app like this. We found the following insights:",
          layout: 'col',
          insights: [
            'The app should feel like a companion, not a tool.',
            'It should not take away from the live moment, and people could easily get stuck on their phones.',
            'It could be confusing and seen as an app to buy tickets or play music.',
          ],
        },
        {
          name: 'Structure and Flow',
          description: "A key decision was to design the app for three core moments: before, during, and after the show. Each moment has its own set of screens and features, but they all tie back to the same core promise: you don't have to know every lyric to belong in the crowd.",
          layout: 'col',
          images: [flow],
        },
        {
          name: 'Brand and Identity',
          description: "The core mark emerged from the North Star as a symbol of guidance and steadiness. Haven was chosen as a name to indicate the steady companion you can depend on.",
          images: [brand],
          layout: 'row',
        },
        {
          name: 'Color and Typography',
          description: "Bold, powerful, and illuminating against a dark background, the color palette is designed to feel like a concert stage. The typefaces are clean and legible, with a modern sans-serif for body copy and a bold display font for headings.",
          images: [color],
          layout: 'row',
        },
      ]}
      results={[
        {
          label: 'Results',
          name: 'Onboarding',
          description: "The final product spans onboarding through recap — a full, connected flow rather than a set of disconnected screens. Every screen ties back to one core promise: you don't have to know every lyric to belong in the crowd.",
          images: [onboard1, onboard2],
          layout: 'col',
        },
        {
          name: 'Home Page',
          description: "The final product spans onboarding through recap — a full, connected flow rather than a set of disconnected screens. Every screen ties back to one core promise: you don't have to know every lyric to belong in the crowd.",
          images: [home],
          layout: 'col',
        },
        {
          name: 'Search Features',
          description: "The final product spans onboarding through recap — a full, connected flow rather than a set of disconnected screens. Every screen ties back to one core promise: you don't have to know every lyric to belong in the crowd.",
          images: [search],
          layout: 'row',
        },
        {
          name: 'Pre-Show',
          description: "The final product spans onboarding through recap — a full, connected flow rather than a set of disconnected screens. Every screen ties back to one core promise: you don't have to know every lyric to belong in the crowd.",
          images: [preshow],
          layout: 'row',
        },
        {
          name: 'Live Mode',
          description: "The final product spans onboarding through recap — a full, connected flow rather than a set of disconnected screens. Every screen ties back to one core promise: you don't have to know every lyric to belong in the crowd.",
          images: [live],
          layout: 'row',
        },
        {
          name: 'History and Profile',
          description: "The final product spans onboarding through recap — a full, connected flow rather than a set of disconnected screens. Every screen ties back to one core promise: you don't have to know every lyric to belong in the crowd.",
          images: [profile],
          layout: 'col',
        },
      ]}
      mockups={[five, six]}
    />
  );
}