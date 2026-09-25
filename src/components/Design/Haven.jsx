import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/Haven/cover.webp';
import havenvideo from '../../assets/motion/haven.mp4';
import final from '../../assets/portfolio/design/Haven/final.webp';
import research from '../../assets/portfolio/design/Haven/research.webp';
import researchstudy from '../../assets/portfolio/design/Haven/researchstudy.png';
import wireframes from '../../assets/portfolio/design/Haven/wireframes.png';
import sketch1 from '../../assets/portfolio/design/Haven/sketch1.webp';
import sketch2 from '../../assets/portfolio/design/Haven/sketch2.webp';
import logo from '../../assets/portfolio/design/Haven/logo.svg';
import logoscreen from '../../assets/portfolio/design/Haven/logoscreen.webp';
import loadmotion from '../../assets/portfolio/design/Haven/loadmotion.gif';
import login from '../../assets/portfolio/design/Haven/login.webp';
import search from '../../assets/portfolio/design/Haven/search.webp';
import preshow from '../../assets/portfolio/design/Haven/preshow.webp';
import live from '../../assets/portfolio/design/Haven/live.webp';
import five from '../../assets/portfolio/design/Haven/05.webp';
import six from '../../assets/portfolio/design/Haven/06.webp';
import color from '../../assets/portfolio/design/Haven/color.webp';
import onboard2 from '../../assets/portfolio/design/Haven/onboard2.jpg';
import flow from '../../assets/portfolio/design/Haven/flow.jpg';
import home from '../../assets/portfolio/design/Haven/home.png';
import profile from '../../assets/portfolio/design/Haven/profile.jpg';

export default function Haven() {
  return (
    <CaseStudy
      cover={havenvideo}
      title="Transforming the concert experience"
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
        label: 'CONTEXT',
        name: 'Mumbling Along',
        text: "Most concert goers aren't experts. A lot of us like going because our friends are going and we only really know the songs everyone knows. After going to a concert where I knew almost none of the lyrics, I created Haven as a personal, live concert companion",
        images: [final],
        layout: 'row',
      }}
      task={{
        label: 'OVERVIEW',
        name: 'A Familiar Feeling',
        text: "I conducted informal conversations with friends, family, and concert-goers, pairing their experiences with secondary research on concert FOMO, social connection, and live music.",
        images: [researchstudy, research],
        layout: 'col',
      }}

      keyInsights={{
        label: 'RESEARCH',
        name: 'What I heard from students and TAs',
        text: 'I spoke with Princeton students and TAs to understand how the existing help queue worked in practice.',
        insights: [
          {
            name: 'Concert information is scattered across different places',
            description:
              'Setlists, artist information, and venue details live across different sources, making it difficult to get a complete picture of a concert in one place.',
          },
          {
            name: 'People want enough context to participate',
            description:
              "Users don't need to become superfans. They want just enough context about the artist, music, and show to feel like they can follow along and participate.",
          },
          {
            name: 'Friends can make concerts more meaningful, but also create FOMO',
            description:
              'Going to concerts with friends can make the experience more meaningful, but social features can also amplify comparison and the feeling of missing out.',
          },
        ],
      
        conclusion: {
          label: 'THE MAIN PROBLEM',
          text:
            'People want enough information to feel involved while social features needed to connect people without turning the experience into comparison.',
        },
      }}
      actions={[

        {
          name: 'Sketching and Wireframing',
          description: "My first version of Haven drew from sources like Beli and BeReal as highly social apps, allowing you to rate the concerts you've been to, see what your friends are going to, and build a social layer around live music the way people already do around restaurants.",
          layout: 'col',
          images: [sketch1, sketch2, wireframes],
        },
        {
          name: 'Pivoting the Core Loop',
          description: "After further development, a critical flaw came up: wouldn't this highly social layer potentially make FOMO worse, not better. If the app's central loop is 'see what your friends went to and rate it,' it reinforces the exact feeling I was trying to design away from. So the social layer came out as the core mechanic. Haven turned into a solo companion first, with social reduced to something quiet and functional rather than something you perform.",
          layout: 'row',
          images: [logo],
        },
        {
          name: 'Structure and Flow',
          description: "With the pivot settled, I designed Haven around three core moments — before, during, and after the show — each with its own screens, all tying back to the same promise: you don't have to know every lyric to belong in the crowd.",
          layout: 'col',
          images: [flow],
        },
        {
          name: 'Before creating screens, we design the brand',
          description: "The core mark emerged from the North Star as a symbol of guidance and steadiness. Haven was chosen as a name to indicate the steady companion you can depend on.",
          images: [logoscreen],
          layout: 'row',
        },
        {
          name: 'A high contrast system',
          description: "Bold, powerful, and illuminating against a dark background, the color palette is designed to feel like a concert stage. The typefaces are clean and legible, with a modern sans-serif for body copy and a bold display font for headings.",
          images: [color],
          layout: 'row',
        },
      ]}
      results={[
        {
          label: 'RESULTS',
          name: 'Experimenting with motion',
          description: "I experimented with motion to retain user engagement, particularly at app launch",
          images: [loadmotion],
          layout: 'row',
        },
        {
          name: 'A simple, guided onboarding experience',
          description: "Onboarding is desinged to directly ask about the user's existing music interests so recommendations and upcoming shows can feel relevant immediately. Placing the navigation buttons at the bottom of the screen encourages user flow and the progress bar at the top of the screen gives users a sense of accomplishment as they move through the onboarding process.",
          images: [login, onboard2],
          layout: 'col',
        },
        {
          name: 'Home Page',
          description: "I designed the home page as less of a discovery and more of a hub. It opens on the shows you've already added or a clear CTA to add a concert if not. The app orients around what's actually relevant to you first, and general discovery second.",
          images: [home],
          layout: 'col',
        },
        {
          name: 'Discovery Without Distraction',
          description: "Search keeps discovery separate from the user's core experience, using clear categories and trending content to help users find new artists and shows without overwhelming the personalized Home.",
          images: [search],
          layout: 'col',
        },
        {
          name: 'Everything Before the Show',
          description: "A bento-style layout uses information hierarchy to surface the details users need most—weather, venue, countdown, and friends—at a glance. Social features stay action-oriented, helping friends coordinate without introducing comparison.",
          images: [preshow],
          layout: 'col',
        },
        {
          name: 'Designed for the Moment',
          description: "Live Mode reduces cognitive load by keeping lyrics and lightweight artist context visible while the show is happening. The interface prioritizes glanceable information so users can stay engaged with the performance.",
          images: [live],
          layout: 'col',
        },
        {
          name: 'A Personal Record',
          description: "History turns each concert into a visual memory, using cards and lightweight personal stats to make past shows easy to revisit. Social information stays private and contextual rather than becoming a public leaderboard.",
          images: [profile],
          layout: 'row',
        },
      ]}
      mockups={[five, six]}
    />
  );
}