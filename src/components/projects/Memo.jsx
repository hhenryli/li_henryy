import React from 'react'
import icons from '../../assets/portfolio/design/Memo/app icon.jpg';
import businesscards from '../../assets/portfolio/design/Memo/Business Cards.jpg'
import business from '../../assets/portfolio/design/Memo/business.jpg'
import colors from '../../assets/portfolio/design/Memo/Colors.jpg'
import full from '../../assets/portfolio/design/Memo/Full Logo.png'
import posters from '../../assets/portfolio/design/Memo/posters.png'
import largeposter from '../../assets/portfolio/design/Memo/posterlarge.jpg'
import cover from '../../assets/portfolio/design/Memo/memocover.png'
import typography from '../../assets/portfolio/design/Memo/Typography.jpg'
import sketches from '../../assets/portfolio/design/Memo/sketches.png'
import travel from '../../assets/portfolio/design/Memo/travel.png'

import PortfolioCard from '../PortfolioCard.jsx';
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

export default function Memo() {
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
                <h2 className='relative md:-left-2'>Memo</h2>
                <a href='https://www.figma.com/proto/FsjGZN7MsszHKZ4UAQaahI/Memo-Branding-Guide?node-id=31-1128&p=f&t=LxGuWsfysnmvOhWD-1&scaling=scale-down-width&content-scaling=fixed&page-id=31%3A1127'
                  target='_blank'
                  rel='noreferrer'
                  className='px-8 py-4 rounded-sm bg-[#D5F7F7]'
                >
                  <p>full branding guide &#x2197;</p>
                </a>
              </div>

              <div className='flex flex-col gap-1'>

                <h3>Role: Brand Designer</h3>
                <h3>Timeline: 1 week</h3>
                <h3>Tools: Adobe Illustrator, Photoshop, Procreate, Figma</h3>
              </div>

              <h5>
                This case study is for a startup travel company that focuses on shared travel planning,
                focusing on collaboration, warmth, and shared experience.
              </h5>

              <h5>
                My task was initially just to create a simple logo that represented the company well, was 
                travel inspired but not cliche, recognizable and timeless but not boring. The client wanted
                this logo to be used at multiple levels, from website headers to app icons to physical prints.</h5> 
            </div>

          <img src={full} alt='moodboard' className='w-full object-cover' />

          <div className='flex flex-col gap-16'>


            <div className='flex flex-col gap-3'>
              <h4>My Approach</h4>
              <h1 className='text-l'>
                I started off with, of course, brainstorming and sketching, which is especially important here 
                because if the logo was too obvious, then it would lose its sense of uniqueness in the marketplace.
                As you can see in the sketches, I was really trying to incorporate all the elements of the brief into 
                one simplified logo. 
              </h1>
            </div>

            <img src={sketches} alt='sketches' className='w-full object-cover' />

            <div className='flex flex-col gap-3'>
              <h1 className='text-l'>
                I also made sure to check other popular travel companies to steer away from sterotypical imagery
                such as planes or birds, though I did consider using them in my design initially.
              </h1>
            </div>
            <img src={travel} alt='sketches' className='w-full object-cover' />

            <div className='flex flex-col gap-3'>
              <h1 className='text-l'>
                After that came color and typography. The client had already decided that blue should be a
                primary color in the brand, so I decided to go for a subtle and classy ocean blue paired with 
                a beachy tan. This way, it wouldn't feel too cold or corporate but would still feel slightly
                on the higher end. The typography is a slightly customized font for the wordmark, but I chose a bold
                sans serif, Lexend Deca, to be the headers and DM Sans, a classic sans-serif font for clarity
                and readability. I added DM Mono as a sort of counterbalance to the traditional sans-serif and to
                give the brand a little more spunk and uniqueness.
              </h1>
            </div>

            <img src={colors} alt='color' className='w-full object-cover' />
            <img src={typography} alt='typography' className='w-full object-cover' />


            <h4>Mockups</h4>
            <Carousel images={[cover, full, icons, businesscards, business, posters, largeposter]} />
            <div className='flex flex-col gap-3'>
              <h4>Key Insights and Learning Points </h4>
              <h1 className='text-l'>
                The main thing I struggled with in this case study was the logo design and this delicate balance
                between professionality, cooperative and shared/warm experiences, while still being on the upper
                end of the market. I'm very happy with how the logo turned out and I think there could be more exploration
                with the stroke and animated strokes, gradients, and general movement so that's something I'll definitely
                revisit in the future.
              </h1>
            </div>

            <div className='px-8 py-4  w-fit rounded-sm bg-[#D5F7F7]'>
              <a href='https://www.figma.com/proto/FsjGZN7MsszHKZ4UAQaahI/Memo-Branding-Guide?node-id=31-1128&p=f&t=LxGuWsfysnmvOhWD-1&scaling=scale-down-width&content-scaling=fixed&page-id=31%3A1127'
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