import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

const video = {
  type: 'youtube',
  videoId: 'fUwadhtOiqw',
};

export default function Supercut() {
  return (
    <CaseStudy
      title="Supercut"
      projectType="Motion Design"
      backTo="/work"
      meta={{
        role: 'Motion Designer',
        timeline: '3 days',
        team: 'Solo',
        tools: 'After Effects',
      }}

      video={video}

      situation={{
        label: 'Concept',
        name: 'A lyric video built around a deliberately choppy rhythm',
        text:
          'I wanted to create a series of lyric videos for music I enjoy, using each song as an opportunity to explore a different motion language.',
        layout: 'col',
      }}

      task={{
        label: 'Direction',
        name: 'Matching motion to the feeling of the song',
        text:
          'While other music videos seemed better suited to clean and seamless motion, I felt Supercut called for a lower frame rate and a choppier visual language.',
        text2:
          'I gathered inspiration from Behance, Envato, and Pinterest before creating a short storyboard.',
        layout: 'col',
      }}

      keyInsights={{
        label: 'Process',
        name: 'Starting with references, then building the motion',
        text:
          'The process began with visual research and a storyboard before moving into After Effects, where the lower-frame-rate style became part of the visual identity.',
        layout: 'col',
      }}

      mockups={[]}
    />
  );
}