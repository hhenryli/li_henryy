import React from 'react'
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import PortfolioCard from '../PortfolioCard.jsx';

const video = { type: 'youtube', videoId: '-fzAv9m9q5k'};

export default function AASAFormals() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      
      <div className='flex-1 ml-12 mr-12 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
      <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>Animation: </h1>
          <h1 className='text-gray-800'> Formals</h1>
        </div>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          
        <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>medium: </h1>
          <h1 className='text-gray-800'>2D animation</h1>
        </div>
        </div>

        <div className='col-span-2'>
          <PortfolioCard item={video} />
        </div>
        <div className='flex md:flex-row col-span-1 md:col-span-2 md:gap-6'>
          <div className='flex-1 flex flex-col gap-4 '>
            <h3>Formals</h3>
            <div className='flex flex-col gap-1'>
              <h1>Role: Animator</h1>
              <h1>Timeline: 2 weeks</h1>
              <h1>Tools: Procreate, Premiere Pro</h1>
            </div>
            <div>
              <p className='text-l mb-4'>A promotional video for the Asian American Student Association's class formals at Princeton.</p>

              <div className='flex flex-col gap-2'>
                <h5>Process</h5>
                <p className='text-l mb-4'>The animation was done frame by frame in Procreate and one of my first full animations. I focused on motion design and shot transitions to get a sense of movement and timing.</p>
              </div>
            </div>

          </div>
          <h4 className='flex flex-col leading-none'>
            <span>20</span>
            <span>24</span>
          </h4>
        </div>
      </div>

      <Footer />

    </div>
  )
}