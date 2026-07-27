import React from 'react'

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

import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';
import BackToTop from '../BackToTop';

export default function Workday() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
      <Nav />

      <div className='border-r border-l border-t flex-1 flex flex-col items-center px-6 md:px-0 py-48 md:py-40'>
        <div className='w-full max-w-3xl flex flex-col gap-8'>


            {/* Left — cover image */}
            <img src={workdaycover} alt='workday cover' className='w-full object-cover' />

            {/* Right — all the meta + description */}
            <div className='flex flex-col gap-6'>
              <div className='w-full flex justify-between items-center'>
                <h2 className='relative md:-left-2'>Workday</h2>
              </div>

              <div className='flex flex-col gap-1'>

                <h3>Role: UI/UX Designer</h3>
                <h3>Timeline: 3 days</h3>
                <h3>Tools: Figma</h3>
              </div>

              
              <h5>
                Let's be honest, have you ever clicked on a job application for a position you really want, only for the link to send you to a Workdays application? After a past year of a frustrating job search experience, I decided to take it upon myself to redesign Workday's job application to make it more modern and satisfying to use rather than frustrating.
              </h5>

              <h5>
              I started with a deep dive on research and figuring out information about the company, because even though I personally don't enjoy using it, there could be many people out there who disagree. I started with my peers, about a study size of 10 junior college students going to different schools across the United States. All of them said they weren't particularly fond of Workdays, stating that they "preferred when it was a Greenhouse or one of those applications where you can just autofill and move on".</h5> 
              <h5>Online forums, blogs, and posts also generally believe that Workdays is simply a nightmare to use. Issues like requiring multiple logins, long application times, bad UI and UX decisions, and unresponsiveness to multiple screen sizes were common complaints.</h5>
              <div className=''>
                <a href='https://docs.google.com/presentation/d/1ADHfGyw7i2fLAaVnE9VqKuldOB48ahxcdWqKJVkzuIM/edit?pli=1&slide=id.p#slide=id.p' target='_blank' className='border px-6 py-3'>Planning and Research Document</a>
              </div>

            </div>

            <Carousel images={[oldsearch, oldapp, oldapp1, ]} />

            <h5>After my research, I started on some low fidelity prototypes to see what direction I wanted to take, focusing on a desktop flow that would be easy to convert to a mobile format later on if necessary. I made the decision to make the Workday more of a platform or hub for job applications rather than the one off aplication feel it currently has.</h5>
            <Carousel images={[lofi_search, lofi_apps, lofi_app1, ]} />

            <h5>I then started implementing real text, colors, and building out the UI, still deriving colors and styles from the current Workday branding guide so it still felt like Workdays, just more modern. </h5>

            <Carousel images={[hifi_home, hifi_job, hifi_apps, hifi_app]} />

            <h5>I also implemented an interactive prototype to test out the flow:</h5>

              <div className=''>
                <a href='https://www.figma.com/proto/Qliad4mjQfM5NjVGt1t4tk/Workday-Redesign?node-id=163-1539&p=f&t=r37COOZLG9zass5p-0&scaling=min-zoom&content-scaling=fixed&page-id=48%3A433&starting-point-node-id=66%3A645&hide-ui=1' target='_blank' className='border px-6 py-3'>Figma Prototype</a>
              </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}