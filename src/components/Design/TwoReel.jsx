import React from 'react'
import cover from '../../assets/portfolio/design/TwoReel/TwoReelCover.png'
import moodboard from '../../assets/portfolio/design/TwoReel/Moodboard.png'
import sketches from '../../assets/portfolio/design/TwoReel/sketches.jpeg'
import artboard from '../../assets/portfolio/design/TwoReel/artboard.png'
import color from '../../assets/portfolio/design/TwoReel/Color.png'
import typography from '../../assets/portfolio/design/TwoReel/Typography.png'

import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import PortfolioCard from '../PortfolioCard'

export default function TwoReel() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />

      <div className='flex-1 flex flex-col items-center px-6 md:px-0 py-48 md:py-24'>
        <div className='w-full max-w-3xl flex flex-col gap-8'>


            {/* Left — cover image */}
            <img src={cover} alt='TwoReel cover' className='w-full object-cover' />

            {/* Right — all the meta + description */}
            <div className='flex flex-col gap-6'>
              <div className='w-full flex justify-between items-center'>
                <h2 className='relative md:-left-2'>TwoReel</h2>
                <a href='https://www.figma.com/proto/FsjGZN7MsszHKZ4UAQaahI/Memo-Branding-Guide?node-id=31-1128&p=f&t=LxGuWsfysnmvOhWD-1&scaling=scale-down-width&content-scaling=fixed&page-id=31%3A1127'
                  target='_blank'
                  rel='noreferrer'
                  className='px-8 py-4 rounded-sm bg-[#D5F7F7]'
                >
                  <p>check it out &#x2197;</p>
                </a>
              </div>

              <div className='flex flex-col gap-1'>

                <h3>Role: Brand Designer</h3>
                <h3>Timeline: 5 days</h3>
                <h3>Tools: Adobe Illustrator, Photoshop, After Effects</h3>
              </div>

              <h5>
                This case study articulates the work of a filmmaking company with the following goal: to
                make highschool curriculums for learning filmmaking. We stand out because of our availability. 
                Our target audience is couples. We want to convey a sense of delight, while at the same time 
                being down-to-earth.
              </h5>

              <h5>
                You must create the total branding package. This includes 
                creating an appropriate brand name, a consistent visual system, 
                and of course a great logo.</h5> 
            </div>

          <img src={moodboard} alt='moodboard' className='w-full object-cover' />

          <div className='flex flex-col gap-16'>


            <div className='flex flex-col gap-3'>
              <h4>My Approach</h4>
              <h1 className='text-l'>
                I started off with a lot of brainstorming and sketching to explore different visual directions. 
                This job brief was particularly challenging because of the multiple elements that don't seem
                intuitively connected. However, I kept looking for inspiration and visual cues. A lot of my
                process is slow at first because of how many ideas I like to explore.
              </h1>
            </div>

            <img src={sketches} alt='sketches' className='w-full object-cover' />

            <div className='flex flex-col gap-3'>
              <h1 className='text-l'>
                I looked at a lot of pinterest and current famous film companies to see what 
                the vibe was and to get a sense of the visual language of the industry. I was initially
                leaning towards a more playful and illustrative logo, but then I realized that for a
                company that is aiming to be a resource for learning, it would be more effective to 
                have a logo that is more grounded, timeless, recognizable, and minimal. 
              </h1>
            </div>

            <img src={artboard} alt='artboard' className='w-full object-cover' />

            <div className='flex flex-col gap-3'>
              <h4></h4>
              <h1 className='text-l'>
                Once I was happy with a basic idea of the logo, I vectorized it and took to the process of color, 
                and typography. I wanted to focus in on the concept of being both a professional filmmaking curriculum
                while keeping that friendliness, openness, and down to earth feeling.
              </h1>
            </div>

            <img src={color} alt='color' className='w-full object-cover' />
            <img src={typography} alt='typography' className='w-full object-cover' />


            <div className='flex flex-col gap-3'>
              <h4>Key Insights and Things to Learn </h4>
              <h1 className='text-l'>
                One thing I really struggled to capture here that I don't believe comes across in the final 
                logo is the target audience of couples. I found it difficult to place it into the logo itself,
                so I resorted to using more imagery, photography, and created a motion graphic to try and 
                capture that target audience.
              </h1>
            </div>


            <PortfolioCard item={{ type: 'youtube', videoId: 'Q5eATvkVntA' }} />
            <div className='px-8 py-4  w-fit rounded-sm bg-[#D5F7F7]'>
              <a href='https://www.figma.com/proto/sb5SrUk4lb7796RzxJQWk3/TwoReel?node-id=13-41&t=CzDYWtAh1y4TTDOX-1&scaling=min-zoom&content-scaling=fixed&page-id=8%3A2'
                target='_blank'
                rel='noreferrer'
                className=''
              >
                <p>full branding guide &#x2197;</p>
              </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}