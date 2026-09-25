import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/cue/cover.webp';
import cueclip from '../../assets/motion/cue.mp4';
import cuejoinclip from '../../assets/portfolio/design/cue/cuejoin.mp4';
import flow from '../../assets/portfolio/design/cue/flows.jpg';
import features from '../../assets/portfolio/design/cue/corefeatures.jpg';
import wireframe from '../../assets/portfolio/design/cue/wireframe.jpg';
import components from '../../assets/portfolio/design/cue/components.jpg';
import sidebarproto from '../../assets/portfolio/design/cue/sidebarproto.mp4';
import notif from '../../assets/portfolio/design/cue/notif.mp4';
import addcourse from '../../assets/portfolio/design/cue/addcourse.png';
import mobile from '../../assets/portfolio/design/cue/mobile.mp4';
import lockscreen from '../../assets/portfolio/design/cue/lockscreen.png';
import studentactions from '../../assets/portfolio/design/cue/studentactions.png';
import TAactions from '../../assets/portfolio/design/cue/TAactions.png';
import TAcheckin from '../../assets/portfolio/design/cue/TAcheckin.png';

export default function Cue() {
  return (
    <CaseStudy
      cover={cueclip}
      title="Real-time coordination for a campus help queue"
      projectType="UI/UX"
      backTo="/work"

      meta={{
        role: 'Product designer',
        timeline: '2 weeks',
        team: '1 product designer (me)',
        tools: 'Figma',
      }}

      quickLink={[
        {
          label: 'Figma Files',
          href: 'https://www.figma.com/design/KbvYKUqRPww4d9Nayu2nTa/Lab-TA?node-id=413-11097&t=tpLlr2UAf2tGBMnZ-1',
        },
        {
          label: 'Motion Graphic on Youtube',
          href: 'https://www.youtube.com/watch?v=TcEHFbM32YU',
        },
      ]}

      /*
       * ─────────────────────────────────────────
       * WHY I STARTED CUE
       * ─────────────────────────────────────────
       */

      situation={{
        label: 'CONTEXT',
        name: `What if we made Princeton's Lab TA queue system more transparent and manageable?`,
        text:
          "I started CUE because of my own experience using our lab TA system. After waiting 30-45 minutes every time in a queue managed by Google forms and sheets, I decided something needed to change.",

        layout: 'col',
        images: [cuejoinclip],
      }}

      /*
       * ─────────────────────────────────────────
       * WHAT I WANTED TO BUILD
       * ─────────────────────────────────────────
       */

      task={{
        label: 'THE TASK',
        name: 'What should the new system look like?',
        text:
          "My initial goal was simple: replace the manual Google Form and spreadsheet workflow with a system that could actually manage the queue. Instead of asking students and TAs to constantly check, refresh, and update the queue themselves, I wanted the system to keep track of what was happening.",
        text2:
          "But before deciding what that system needed to look like, I wanted to know whether other Princeton students and TAs were experiencing the same problems.",
        layout: 'col',
      }}

      /*
       * ─────────────────────────────────────────
       * WHAT I LEARNED
       * ─────────────────────────────────────────
       */


      /*
       * ─────────────────────────────────────────
       * HOW THE RESEARCH CHANGED THE PRODUCT
       * ─────────────────────────────────────────
       */
      keyInsights={{
        label: 'RESEARCH',
        name: 'What I heard from students and TAs',
        text: 'I spoke with Princeton students and TAs to understand how the existing help queue worked in practice.',
        insights: [
          {
            name: 'Students couldn’t see their place in line',
            description:
              'Without a visible queue position, students had no idea how long they would be waiting or when they should expect their turn.',
          },
          {
            name: 'Students adapted by joining early',
            description:
              'Some students would enter the queue 30 minutes early so that their turn would hopefully come up when they arrived.',
          },
          {
            name: 'Students didn’t want to leave',
            description:
              'Because they could miss their turn, students felt like they had to stay nearby and keep checking the queue.',
          },
          {
            name: 'TAs had to constantly monitor the queue',
            description:
              'TAs repeatedly checked the spreadsheet for new requests and had to manually keep track of who was waiting.',
          },
        ],
      
        conclusion: {
          label: 'THE MAIN PROBLEM',
          text:
            'The queue created uncertainty for students and extra coordination work for TAs.',
        },
      }}
      actions={[
        {
          label: 'ACTION',
          name: 'Pivoting to a new system',
          description:
            'What had originally started out as a "replace Google Sheets" became something more focused as a centralized system that could support different courses, students, and TAs.',
          layout: 'col',
        },
        {
          name: 'Defining our MVPs, constraints, and information architecture',
          description:
            "We had direction, now we needed to refine the exact steps to achieve our goal. Using our research as guidance, we defined the steps a user would take through our app.",
          layout: 'col',
          images: [flow, features],
        },
        {
          name: 'Wireframing a core dashboard for mobile and desktop',
          description:
            "We decided on a dashboard as the central hub for students and TAs to manage their queue. Students could see their place in line, step away, and receive notifications when their turn was approaching. TAs could check in, view the live queue, claim students, and handle exceptions without manually maintaining a shared spreadsheet.",
          layout: 'col',
          images: [wireframe],
        },
        {
          label: 'BUILDING A SYSTEM',
          name: 'Building something that could grow beyond one course',
          description:
            "Because CUE was intended to support multiple courses and queues, I also developed a reusable component system so the same patterns could carry across the product rather than designing each screen independently.",
          layout: 'col',
          images: [components, sidebarproto],
        },
      
        {
          label: 'A NOVEL APPROACH',
          name: 'How can we keep students and TAs updated without requiring them to constantly check the queue?',
          description:
            "I designed a notification system that would alert students when their turn was approaching, allowing them to step away from the queue and return when they were ready. TAs could also receive notifications when a student was ready to be claimed, reducing the need for constant monitoring.",
          layout: 'col',
          images: [notif],
        },

        {
          label: 'RESPONSIVE DESIGN',
          name: `Wouldn't notifications be delivered on a mobile interface?`,
          description:
            "After completing the desktop layout, I decided to create a mobile version of the dashboard to ensure that students and TAs could access the queue from anywhere. The mobile interface was designed to be simple and intuitive, with clear notifications and easy navigation.",
          layout: 'col',
          images: [mobile, lockscreen],
        },
      
      ]}

      /*
       * ─────────────────────────────────────────
       * THE RESULT
       * ─────────────────────────────────────────
       */

      results={[
        {
          label: 'FINAL SCREENS',
          name: 'A different way to wait for help.',
          description:
            "CUE turns the lab help queue into a system that students and TAs can interact with rather than a spreadsheet they have to monitor. Students can join a course queue, track their place, step away, and receive notifications. TAs can check in, manage the live queue, claim students, and handle exceptions without manually maintaining a shared spreadsheet.",
          layout: 'col',
        },

        {
          name: 'A system built for more than one queue.',
          description:
            "The product is structured around courses rather than a single lab, allowing students and TAs to add the queues that are relevant to them.",
          layout: 'col',
          images: [addcourse],
        },

        {
          label: 'TA WORKFLOW',
          name: 'Giving TAs a clearer way to manage the queue.',
          description:
            "On the TA side, I designed the workflow around checking into a shift, viewing the live queue, claiming a student, and handling situations where a student was not ready or needed to be sent back into the queue.",
          layout: 'col',
          images: [TAcheckin, TAactions]
        },
        {
          label: 'STUDENT WORKFLOW',
          name: 'Helping students manage their place in line.',
          description:
            "On the student side, I designed the workflow around joining a queue, tracking their place, stepping away, and receiving notifications when their turn was approaching.",
          layout: 'col',
          images: [studentactions],
        },

        {
          type: 'youtube',
          label: 'PRODUCT WALKTHROUGH',
          name: 'This is your cue to watch this awesome motion graphic.',
          description:
            'A short walkthrough of the student and TA experience.',
          youtube: {
            videoId: 'TcEHFbM32YU',
            caption1: 'cue it!',
            caption2: '50 sec',
          },
        },
      ]}
    />
  );
}