import React from 'react';
import CaseStudy from '../CaseStudy.jsx';

import workdaycover from '../../assets/portfolio/design/Workday/cover.webp';
import oldapp from '../../assets/portfolio/design/Workday/old_app.webp';
import oldapp1 from '../../assets/portfolio/design/Workday/old_app1.webp';
import oldsearch from '../../assets/portfolio/design/Workday/old_search.webp';

import lofi_search from '../../assets/portfolio/design/Workday/lofi_search.webp';
import lofi_apps from '../../assets/portfolio/design/Workday/lofi_apps.webp';
import lofi_app1 from '../../assets/portfolio/design/Workday/lofi_app1.webp';

import hifi_app from '../../assets/portfolio/design/Workday/hifi_app.webp';
import hifi_apps from '../../assets/portfolio/design/Workday/hifi_apps.webp';
import hifi_home from '../../assets/portfolio/design/Workday/hifi_home.webp';
import hifi_job from '../../assets/portfolio/design/Workday/hifi_job.webp';

export default function Workday() {
  return (
    <CaseStudy
      cover={workdaycover}
      title="Redesigning Workday to make the job search feel less like a chore"
      projectType="UI/UX Design"
      backTo="/work"

      meta={{
        role: 'UI/UX Designer',
        timeline: '5 days',
        team: 'Solo',
        tools: 'Figma',
      }}

      quickLink={[
        {
          label: 'Research Document',
          href: 'https://docs.google.com/presentation/d/1ADHfGyw7i2fLAaVnE9VqKuldOB48ahxcdWqKJVkzuIM/edit?pli=1&slide=id.p#slide=id.p',
        },
        {
          label: 'Figma Prototype',
          href: 'https://www.figma.com/proto/Qliad4mjQfM5NjVGt1t4tk/Workday-Redesign?node-id=163-1539&p=f&t=acudPNkUmkqfLFcq-0&scaling=scale-down-width&content-scaling=fixed&page-id=48%3A433&starting-point-node-id=163%3A1539&hide-ui=1',
        },
      ]}

      situation={{
        label: 'CONTEXT',
        name: 'A Frustrating Starting Point',
        text: "Workday is a massive enterprise platform spanning HR, Finance, and IT, but for job seekers, one of its most visible experiences is the application process. After repeatedly encountering frustrating Workday applications during my own job search, I wanted to understand what made the experience feel so cumbersome.",
        text2: "I began looking beyond my own experience, researching how candidates interacted with Workday and comparing its workflow with other job application platforms.",
        images: [oldsearch, oldapp],
        layout: 'col',
        imageLayout: 'row',
      }}

      task={{
        label: 'TASK',
        name: 'Reducing Friction',
        text: "The goal was to redesign Workday's job search and application experience to make applying for jobs faster, clearer, and less tedious.",
        text2: "I focused on reducing the number of actions required to apply from roughly 6–8 steps to 4–5, while modernizing the interface through improved typography, layout, hierarchy, and visual design.",
        images: [oldapp1],
        layout: 'row',
      }}

      actions={[
        {
          label: 'ACTION',
          name: 'Understanding the Problem',
          description: "I started with research into Workday's broader platform and then narrowed in on the candidate experience. I spoke with around 10 college students from different schools across the United States and reviewed online discussions, blogs, and articles about the application process.",
          text2: "Across both sources, the same frustrations appeared repeatedly: repetitive account creation, multiple logins, lengthy applications, and an interface that felt outdated and difficult to use across different screen sizes.",
          insights: [
            'The candidate experience feels secondary to Workday’s enterprise focus.',
            'Repetitive account and verification steps add unnecessary friction.',
            'Greenhouse demonstrates that the same application can take far fewer steps.',
            'The opportunity is to reduce the work required of candidates, not just refresh the UI.',
          ],
          layout: 'col',
        },

        {
          label: 'ACTION',
          name: 'Reframing the Experience',
          description: "The research showed that the problem went beyond visual design. Workday's application process asks candidates to move through a series of disconnected steps before they can even submit their information.",
          text2: "I wanted to rethink the experience around the candidate rather than the form: consolidating information, reducing unnecessary transitions, and making Workday feel more like a cohesive job-search platform.",
          images: [],
          layout: 'col',
        },

        {
          label: 'ACTION',
          name: 'Exploring the Flow',
          description: "I started with low-fidelity layouts to work through the new information architecture and application flow. I focused on a desktop-first experience while keeping the structure flexible enough to translate to mobile.",
          images: [lofi_search, lofi_apps, lofi_app1],
          layout: 'col',
          imageLayout: 'row',
        },

        {
          label: 'ACTION',
          name: 'Building the Interface',
          description: "Once the structure was established, I moved into high-fidelity designs, introducing real content, color, and interaction patterns. I retained elements of Workday's existing visual language so the redesign would remain recognizable while creating a cleaner and more contemporary experience.",
          images: [hifi_home],
          layout: 'col',
          imageLayout: 'row',
        },

        {
          label: 'ACTION',
          name: 'Testing the Experience',
          description: "I connected the screens into an interactive prototype to evaluate the redesigned workflow as a complete experience, from discovering a position through completing the application.",
          images: [hifi_job],
          layout: 'col',
        },
      ]}

      results={[
        {
          label: 'RESULTS',
          name: 'A More Cohesive Job Search',
          description: "The final redesign reframes Workday's candidate experience around a simpler, more cohesive workflow, reducing unnecessary friction while retaining the visual language of the existing platform.",
          images: [hifi_apps],
          layout: 'col',
          imageLayout: 'row',
        },

        {
          name: 'A Streamlined Application',
          description: "The redesigned application flow consolidates information and reduces the number of steps required to move from starting an application to submitting it.",
          images: [hifi_app],
          layout: 'col',
          imageLayout: 'row',
        },
      ]}
    />
  );
}