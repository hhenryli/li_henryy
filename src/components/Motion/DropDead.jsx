import React from 'react'
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import PortfolioCard from '../PortfolioCard.jsx';
import Carousel from '../Carousel.jsx';

const video = { type: 'youtube', videoId: 'xapkzj8-1Lg'};

export default function DropDead() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
      <Nav />
      
      <div className='flex-1 border-r border-l p-6 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
      <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>Motion: </h1>
          <h1 className='text-gray-800'> Drop Dead</h1>
        </div>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          
        <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>medium: </h1>
          <h1 className='text-gray-800'> After Effects</h1>
        </div>
        </div>

        <div className='col-span-2'>
          <PortfolioCard item={video} />
        </div>
        <div className='flex md:flex-row col-span-1 md:col-span-2 md:gap-6'>
          <div className='flex-1 flex flex-col gap-4 '>
            <h2>Drop Dead</h2>
            <div className='flex flex-col gap-1'>
              <h1>Role: Motion Graphic Artist</h1>
              <h1>Timeline: 1 week</h1>
              <h1>Tools: After Effects, Premiere Pro</h1>
            </div>
            <div>
              <p className='text-l mb-4'>This project arose kind of out of the blue when I heard Olivia Rodrigo's new song, "Drop Dead". I had been seeing a lot of content on TikTok and Instagram about After Effects, motion graphics, and editing and I wanted to try creating something myself.</p>

              <div className='flex flex-col gap-2'>
                <h5>Process</h5>
                <p className='text-l mb-4'>I explored a lot of Pinterest, looked at the official music and lyrics videos for inspiration, and eventually decided to go for a scrapbook, textured, and almost collage look and feel. I experimented a LOT with After Effects, putting together motion, transitions, typography, and different effects to see what I could do. </p>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-l mb-4'>I definitely learned a lot from this project, both technically with After Effects but also structurally. In my future projects, I definitely want to start with more structure, such as real storyboarding and planning before diving in. I'll definitely continue exploring motion graphics, particularly for potential branding and UI/UX movement as well!</p>
              </div>
            </div>

          </div>
          <h4 className='flex flex-col leading-none'>
            <span>20</span>
            <span>26</span>
          </h4>
        </div>
      </div>

      <Footer />

    </div>
  )
}