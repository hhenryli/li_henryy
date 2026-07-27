import React from 'react'
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import PortfolioCard from '../PortfolioCard.jsx';
import Carousel from '../Carousel.jsx';

const video = { type: 'youtube', videoId: 'fUwadhtOiqw'};

export default function Supercut() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
      <Nav />
      
      <div className='flex-1 border-r border-l p-6 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
      <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>Motion: </h1>
          <h1 className='text-gray-800'> </h1>
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
            <h2>Supercut</h2>
            <div className='flex flex-col gap-1'>
              <h1>Role: Motion Designer</h1>
              <h1>Timeline: 3 days</h1>
              <h1>Tools: After Effects</h1>
            </div>
            <div>
              <p className='text-l mb-4'></p>

              <div className='flex flex-col gap-2'>
                <h5>Process</h5>
                <p className='text-l mb-4'>I'm currently looking to start a series where I create lyrics videos for music I enjoy listening to, trying to build my skills in After Effects and motion design. While other music videos seemed more suited for clean and seamless motion, I felt like supercut needed a lower frame rate and a "choppier" look to capture the feeling that Lorde was going for.</p>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-l mb-4'>I got a lot of inspiration from Behance, Envato, and Pinterest before creating a short storyboard. </p>
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