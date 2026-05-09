import React from 'react'
import one from '../../assets/portfolio/typography/1.jpg'
import two from '../../assets/portfolio/typography/2.jpg'
import three from '../../assets/portfolio/typography/3.jpg'
import four from '../../assets/portfolio/typography/4.jpg'
import five from '../../assets/portfolio/typography/5.jpg'
import PortfolioCard from '../PortfolioCard.jsx';
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

const video = { type: 'youtube', videoId: 'nxyt4JzGlH0'};

export default function Typography() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      
      <div className='flex-1 ml-12 mr-12 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
      <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>Design: </h1>
          <h1 className='text-gray-800'> Typography</h1>
        </div>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          
        <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>medium: </h1>
          <h1 className='text-gray-800'> Design</h1>
        </div>
        </div>

        <div className='col-span-2'>

          <PortfolioCard item={video} />
        </div>
        <div className='flex md:flex-row col-span-1 md:col-span-2 md:gap-6'>
          <div className='flex-1 flex flex-col gap-4 '>
            <h3>Typography Studies</h3>
            <div className='flex flex-col gap-1'>
              <h1>Role: Designer</h1>
              <h1>Timeline: 1 semester</h1>
              <h1>Tools: Adobe Indesign</h1>
            </div>
            <div>
              <p className='text-l mb-4'>A series of images displaying typographic studies I did during a graphic design: typography class.</p>
            </div>

          </div>
          <h4 className='flex flex-col leading-none'>
            <span>20</span>
            <span>25</span>
          </h4>
        </div>
      </div>
      <div className='px-12 mb-12 max-w-4xl '>
        <h2>Extras</h2>
        <Carousel images={[one, two, three, four, five]} />
      </div>

      
      <Footer />
    </div>
  )
}