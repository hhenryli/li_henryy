import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

const video = { type: 'youtube', videoId: 'xapkzj8-1Lg' };
const cover = 'https://img.youtube.com/vi/xapkzj8-1Lg/maxresdefault.jpg';

export default function DropDead() {
  return (
    <CaseStudy
      cover={cover}
      title="Drop Dead"
      projectType="Motion Graphics"
      backTo="/work"
      meta={{
        role: 'Motion Graphic Artist',
        timeline: '1 week',
        team: 'Solo',
        tools: 'After Effects, Premiere Pro',
      }}
      video={video}
      situation={{
        label: 'Situation',
        name: 'The Spark',
        text: "This project came about out of the blue after hearing Olivia Rodrigo's song \"Drop Dead.\" I'd been seeing a lot of content on TikTok and Instagram about After Effects, motion graphics, and editing, and wanted to try creating something myself.",
      }}
      task={{
        label: 'Task',
        name: 'Process',
        text: "I explored a lot of Pinterest and looked at the official music and lyric videos for inspiration, eventually landing on a scrapbook, textured, almost collage-like look and feel. From there, I experimented heavily in After Effects, putting together motion, transitions, typography, and different effects to see what I could do.",
      }}
      results={[
        {
          label: 'Results',
          name: 'What I Learned',
          description: "This project taught me a lot, both technically in After Effects and structurally as a process. Going forward, I want to start future projects with more structure, real storyboarding and planning before diving in, and I'll keep exploring motion graphics, especially for potential branding and UI/UX movement work.",
        },
      ]}
    />
  );
}