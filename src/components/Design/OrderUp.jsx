import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import cover from '../../assets/portfolio/design/cue/cover.webp';
import orderupclip from '../../assets/motion/OrderUp.mp4';
import ppl from '../../assets/portfolio/design/OrderUp/ppl.mp4';
import process from '../../assets/portfolio/design/OrderUp/process.webp';
import ingredients from '../../assets/portfolio/design/OrderUp/ingredients.webp';
import overviewkitchen from '../../assets/portfolio/design/OrderUp/kitchenoverview.webp';
import synch from '../../assets/portfolio/design/OrderUp/synch.webp';
import submit from '../../assets/portfolio/design/OrderUp/submit.webp';
import components from '../../assets/portfolio/design/OrderUp/components.webp';
import interactableprocess from '../../assets/portfolio/design/OrderUp/interactableprefab.webp';
import graph1 from '../../assets/portfolio/design/OrderUp/graph1.webp';
import graph2 from '../../assets/portfolio/design/OrderUp/graph2.webp';
import graph3 from '../../assets/portfolio/design/OrderUp/graph3.webp';
import surveys from '../../assets/portfolio/design/OrderUp/surveys.webp';
import studies from '../../assets/portfolio/design/OrderUp/studies.webp';
import results from '../../assets/portfolio/design/OrderUp/results.webp';
import connection from '../../assets/portfolio/design/OrderUp/connection.webp';
import usability from '../../assets/portfolio/design/OrderUp/usability.webp';
import reliability from '../../assets/portfolio/design/OrderUp/reliability.webp';
import space from '../../assets/portfolio/design/OrderUp/space.webp';

export default function OrderUp() {
  return (
    <CaseStudy
      cover={orderupclip}
      title="Order Up! A Collaborative AR Kitchen Game for Teamwork Training"
      projectType="Human Computer Interaction"
      backTo="/work"

      quickLink={[
        {
          label: 'Github',
          href: 'https://github.com/hhenryli/OrderUp',
        },
        {
          label: 'Presentation',
          href: 'https://drive.google.com/file/d/10l3uddo8ZWPYjEaqI-c62vAChNKhSDRp/view?usp=sharing',
        },
      ]}

      meta={{
        role: 'Product Engineer',
        timeline: '1 semester',
        team: '1 product engineer (me), 1 professor',
        tools: 'Figma, Lens Studio, Snapchat Spectacles',
      }}

      situation={{
        label: 'Context',
        type: 'youtube',
        name: 'How can we use AR to assist collaboration and teamwork training?',
        text: 'Order Up! is a co-located augmented reality (AR) multiplayer game designed to support teamwork training by placing small groups in a simulated kitchen environment.',
        text2: 'The goal was to determine whether AR could support collaboration practice while preserving the social engagement of in-person teamwork.',
        layout: 'col',
        youtube: {
          videoId: 'hwHwAgreE5k',
          caption1: 'Order Up!',
          caption2: 'AR gameplay',
        },
      }}

      task={{
        label: 'The Challenge',
        name: 'Teamwork is hard to practice',
        text: 'Have you ever felt like icebreakers and team-building exercises were awkward and artificial? Many organizations have turned to virtual collaboration tools to facilitate teamwork, but these tools often fail to capture the nuances of in-person collaboration.',
        text2: 'The goal was to create a system to support embodied teamwork that blends digital adaptability with real-world social engagement.',
        layout: 'row',
        images: [ppl],
      }}

      keyInsights={{
        label: 'Design Goals',
        name: 'Designing for collaboration, not just gameplay',
        text: 'I designed Order Up! with goal to balance mechanical and technical soundness with the goal of fostering meaningful interaction between players. We prioritized several key goals:',
        insights: [
          {
            name: 'Encourage communication',
            description: 'Players were encouraged to work with each other at all times to complete tasks'
          },
          {
            name: 'Support co-located play',
            description: 'Players were required to be physically present in the same space to play the game'
          },
          {
            name: 'Make virtual objects feel physical',
            description: 'Players were able to interact with virtual objects in a way that felt tangible and real'
          }
        ],
        conclusion: {
          text:
            'Together, these decisions were a deliberate emphasis on social interaction rather than technicality.',
        },
      }}

      actions={[
        {
          label: 'SYSTEM',
          name: 'The end to end user experience',
          text: 'Players enter a shared virtual kitchen and work together to gather, prepare, and plate ingredients before time runs out. Rather than assigning roles, the game let players naturally divide responsibilities, making communication and coordination a core part of the experience.',
          images: [overviewkitchen],
        },

        {
          label: 'GAMEPLAY',
          name: 'Designing a system around shared responsibilities',
          text:
            'I designed the gameplay around a shared task state: every player sees the same order, ingredients, and kitchen environment, but can take responsibility for different parts of the workflow. This naturally created role specialization such as gathering ingredients, chopping, or cooking while keeping communication necessary to complete the order.',
          images: [process],

        },
        
        {
          label: 'INTERACTION',
          name: 'Building reusable interactions for the kitchen',
          text:
            'Rather than scripting each ingredient independently, I built reusable food prefabs with their own mesh, physics, Interactable component, preparation state, and interaction events. Ingredients could be grabbed, moved, and snapped to kitchen stations, while actions like chopping and cooking updated the ingredient’s state through the same interaction system.',
          images: [components, interactableprocess],
        
        },
        
        {
          label: 'BUILDING THE SYSTEM',
          name: 'Synchronizing state across players',
          text:
            'The multiplayer system was built with Sync Kit so that interactions in the shared kitchen remained consistent across devices. SyncEntity and synchronized properties tracked changes to ingredient state and ownership, while SyncTransform kept shared objects aligned as players moved and manipulated them.',
          images: [synch],
        },
        
        {
          label: 'AR CONSTRAINTS',
          name: 'Designing around spatial and performance constraints',
          text:
            'AR tracking made precise spatial interactions difficult, so I intentionally designed interactions to be flexible rather than dependent on exact positioning. I also used low-poly assets to maintain performance, prioritizing reliable shared interaction and communication over visual or technical complexity.',
          images: [ingredients, submit],
        },
      ]}

      results={{
        type: 'insights',
        label: 'Results',
        name: 'What did we learn from putting the prototype in players’ hands?',
        text:
          'I evaluated the prototype with 14 participants in groups of 2–4, with each group completing two rounds of gameplay. I combined gameplay observations with a post-study survey to understand how players communicated, coordinated responsibilities, and used the shared physical space.',
        images: [studies, surveys],
      
        insights: [
          {
            name: 'Communication was necessary for coordination',
            text:
              'Participants rated the need for verbal coordination at 4.8/5. While coordination became more natural over time, communication remained central to completing the shared task.',
            images: [graph1, graph2, results, usability],
          },
      
          {
            name: 'Physical space shaped collaboration',
            description:
              'Participants rated the importance of physical space at 4.8/5. Players moved freely, observed teammates’ actions, and used the shared environment to coordinate.',
            images: [graph3, space],
            imageLayout: 'stack',
          },
      
          {
            name: 'Teamwork did not require strong interpersonal bonding',
            description:
              'Interpersonal connection received a mean score of 3.8/5, while participants reported increased confidence in working with teammates. Functional collaboration mattered more than social bonding.',
            images: [connection],
          },
      
          {
            name: 'Technical reliability affected collaboration',
            description:
              'Tracking, food snapping, plate spawning, and synchronization issues occasionally disrupted coordination, showing that reliability directly affected the collaborative experience.',
            images: [reliability],
          },
        ],
      
        conclusion: {
          text:
            'The study showed that AR can make communication, responsibility, gestures, and physical positioning visible parts of collaboration. My work earned an award for most creative project in the HCI Department',
        },
      }}
    />
  );
}