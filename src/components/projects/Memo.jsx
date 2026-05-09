import React from 'react'
import icons from '../../assets/portfolio/design/Memo/app icon.jpg';
import businesscards from '../../assets/portfolio/design/Memo/Business Cards.jpg'
import business from '../../assets/portfolio/design/Memo/business.jpg'
import colors from '../../assets/portfolio/design/Memo/Colors.jpg'
import full from '../../assets/portfolio/design/Memo/Full Logo.png'
import fulllogos from '../../assets/portfolio/design/Memo/Full Logos.jpg'
import guidelines from '../../assets/portfolio/design/Memo/guidelines.jpg'
import horizontals from '../../assets/portfolio/design/Memo/horizontals.jpg'
import largeposter from '../../assets/portfolio/design/Memo/posterlarge.jpg'
import cover from '../../assets/portfolio/design/Memo/memocover.png'
import typography from '../../assets/portfolio/design/Memo/Typography.jpg'

import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

export default function Memo() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      
      <div className='flex-1 ml-12 mr-12 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
      <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>Design: </h1>
          <h1 className='text-gray-800'> Memo</h1>
        </div>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          
        <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>medium: </h1>
          <h1 className='text-gray-800'> Branding/Design</h1>
        </div>
        </div>

        <div className='col-span-2'>
          <Carousel images={[cover, full, typography, guidelines, fulllogos, colors, horizontals, icons, businesscards, business, largeposter]} />
        </div>
        <div className='flex md:flex-row col-span-1 md:col-span-2 md:gap-6'>
          <div className='flex-1 flex flex-col gap-4 '>
            <h3>Memo</h3>
            <div className='flex flex-col gap-1'>
              <h1>Role: Brand Designer</h1>
              <h1>Timeline: 1 week</h1>
              <h1>Tools: Adobe Illustrator, Adobe Photoshop</h1>
            </div>
            <div>
              <p className='text-l mb-4'>Memo, a group travel planning app startup, needed a brand identity that communicated trust and organization while feeling approachable and adventure-ready. The brand had to appeal to both spontaneous travelers and meticulous planners, balancing premium polish with youthful energy.</p>

              <div className='flex flex-col gap-2'>
                <h5>My Approach</h5>
                <p className='text-l mb-4'>I developed a brand system centered around connection and shared experiences. The logo—two interlocking location pin shapes forming an "M"—represents multiple travelers coming together to plan a journey. I focused on creating a warm color palette to differentiate Memo from the sea of cold, tech-blue travel apps while maintaining a sophisticated, timeless feel.</p>
              </div>

              <div className='flex flex-col gap-2'>
                <h5>Design Decisions</h5>
                <p className='text-l mb-4'>The symmetrical logo design ensures scalability across all touchpoints, from app icons to marketing materials, while the flowing curves add approachability. I chose Poppins as the brand typeface for its rounded, friendly geometry that complements the logo's warmth without sacrificing professionalism. </p>
              </div>

              <a href='https://drive.google.com/file/d/1AnuCMSiejXFO51XbkVQyd0JqaxPr511k/view?usp=sharing' target='_blank'>[View the Full Branding Guide]</a>
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