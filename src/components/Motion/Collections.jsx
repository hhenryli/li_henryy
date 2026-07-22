import React from 'react'
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import PortfolioCard from '../PortfolioCard.jsx';
import Carousel from '../Carousel.jsx';
import one from '../../assets/portfolio/animation/collections/1.jpg';
import two from '../../assets/portfolio/animation/collections/2.jpg';
import three from '../../assets/portfolio/animation/collections/3.jpg';
import four from '../../assets/portfolio/animation/collections/4.jpg';
import five from '../../assets/portfolio/animation/collections/5.jpg';
import six from '../../assets/portfolio/animation/collections/6.jpg';
import seven from '../../assets/portfolio/animation/collections/7.jpg';
import eight from '../../assets/portfolio/animation/collections/8.jpg';
import nine from '../../assets/portfolio/animation/collections/9.jpg';
import ten from '../../assets/portfolio/animation/collections/10.jpg';
import eleven from '../../assets/portfolio/animation/collections/11.jpg';
import twelve from '../../assets/portfolio/animation/collections/12.jpg';
import thirteen from '../../assets/portfolio/animation/collections/13.jpg';


const video = { type: 'youtube', videoId: '9N1gvXReOBY'};

export default function FreshlyDropped() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
      <Nav />
      
      <div className='flex-1 border p-6 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
      <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>Animation: </h1>
          <h1 className='text-gray-800'> Collections</h1>
        </div>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          
        <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>medium: </h1>
          <h1 className='text-gray-800'> 2D Animation</h1>
        </div>
        </div>

        <div className='col-span-2'>
          <PortfolioCard item={video} />
        </div>
        <div className='flex md:flex-row col-span-1 md:col-span-2 md:gap-6'>
          <div className='flex-1 flex flex-col gap-4 '>
            <h2>Collections</h2>
            <div className='flex flex-col gap-1'>
              <h1>Role: Animator</h1>
              <h1>Timeline: 1 semester</h1>
              <h1>Tools: Procreate Dreams, Procreate, After Effects, Premiere Pro</h1>
            </div>
            <div>
              <p className='text-l mb-4'>A young man sits alone in a darkened room, scrolling through fragments of a summer that feels impossibly distant.</p>

              <div className='flex flex-col gap-2'>
                <h5>Process</h5>
                <p className='text-l mb-4'>I initially started drawing backgrounds, because I wanted them to be beautiful, colorful, and generate the space in the scenes. After that, I animated over them in Procreate Dreams, composited and added effects in After Effects, and edited in Premiere Pro.</p>
              </div>

              <div className='flex flex-col gap-2'>
                <h5>Context</h5>
                <p className='text-l mb-4'>This film was created towards the end of a semester long animation course taught by Tim Szetela. Audio elements from freesound.org and embedded from Premiere Pro.</p>
              </div>
            </div>

          </div>
          <h4 className='flex flex-col leading-none'>
            <span>20</span>
            <span>26</span>
          </h4>
        </div>
      </div>
      <div className='p-6 border-r border-l flex flex-col gap-4'>
        <h2>Misc Scenes</h2>
        <Carousel images={[ four, one, two, three, five, six, seven, eight, nine, ten, eleven, twelve, thirteen]}/>
      </div>

      <Footer />

    </div>
  )
}