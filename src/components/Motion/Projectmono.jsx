import React from 'react';
import CaseStudy from '../CaseStudy.jsx';


const video = {
  type: 'youtube',
  videoId: 'Z1A2rPsKPFo',
};

export default function Mono() {
  return (
    <CaseStudy
      title="Mono"
      projectType="Motion Design"
      backTo="/work"
      meta={{
        role: 'Motion Designer',
        timeline: '3 hours',
        team: 'Solo',
        tools: 'After Effects',
      }}

      video={video}

      situation={{
        label: 'Concept',
        name: 'Exploring gradients and gooey motion',
        text:
          'Mono started as a quick experiment in After Effects, exploring gradients, fluid forms, and a gooey visual language.',
        layout: 'col',
      }}

      task={{
        label: 'Process',
        name: 'A three-hour motion study',
        text:
          'The piece was built as a short exercise to explore how gradients and organic movement could work together in motion.',
        images: [],
        layout: 'col',
      }}
    />
  );
}