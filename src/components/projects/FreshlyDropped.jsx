import React from 'react'
import home from '../../assets/portfolio/design/freshlydropped/home.png';
import filter from '../../assets/portfolio/design/freshlydropped/filter.png';
import favorite from '../../assets/portfolio/design/freshlydropped/favorite.png';
import shopping from '../../assets/portfolio/design/freshlydropped/shopping.png';
import about from '../../assets/portfolio/design/freshlydropped/about.png';
import cart from '../../assets/portfolio/design/freshlydropped/cart.png';
import brief from '../../assets/portfolio/design/freshlydropped/brief.png';
import palette from '../../assets/portfolio/design/freshlydropped/palette.png';
import logo from '../../assets/portfolio/design/freshlydropped/logo.png';
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

export default function FreshlyDropped() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      
      <div className='flex-1 ml-12 mr-12 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
        <h1 className=' col-span-2 text-gray-500'>Design:  
          <h1 className='inline text-gray-800'> FreshlyDropped</h1>
        </h1>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          
        <h1 className=' col-span-2 text-gray-500'>medium:  
          <h1 className='inline text-gray-800'> UI/UX</h1>
        </h1>
        </div>

        <div className='col-span-2'>
          <Carousel images={[home, filter, favorite, shopping, about, cart, brief, palette, logo]} />
        </div>
        <div className='flex md:flex-row col-span-1 md:col-span-2 md:gap-6'>
          <div className='flex-1 flex flex-col gap-4 '>
            <h3>Freshly Dropped</h3>
            <div className='flex flex-col gap-1'>
              <h1>Role: UI/UX Designer</h1>
              <h1>Timeline: 1 week</h1>
              <h1>Tools: Figma</h1>
            </div>
            <div>
              <p className='text-l mb-4'>Freshly Dropped, a meal kit delivery service, wanted to expand their offering by creating a standalone recipe app. Users needed the ability to browse recipes, filter by dietary preferences, save favorites, and seamlessly transition from recipe discovery to ingredient ordering whether through Freshly Dropped's service or their own grocery shopping.</p>

              <div className='flex flex-col gap-2'>
                <h5>My Approach</h5>
                <p className='text-l mb-4'>I designed a mobile-first interface that balances inspiration with functionality. The app needed to serve two user paths: those cooking with ingredients they already have, and those who want the convenience of doorstep delivery. I focused on creating an intuitive navigation system with quick-access filters, a smart shopping list that groups ingredients by recipe, and clear calls-to-action that guide users toward ordering without being pushy. </p>
              </div>

              <div className='flex flex-col gap-2'>
                <h5>Design Decisions</h5>
                <p className='text-l mb-4'>I chose a light green color palette to reinforce the "fresh" brand identity while maintaining readability and accessibility. The typography-focused logo keeps the brand name prominent without relying on overused food iconography.  The logo focuses on the unique naming of the brand and integrates the color palette to put it in the space of the industry. The typography was intentionally chosen to be friendly and inviting but not overly simplistic or childish</p>
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