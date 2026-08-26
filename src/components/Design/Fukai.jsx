import React from 'react'

import one from '../../assets/portfolio/design/Fukai/1.jpg';
import two from '../../assets/portfolio/design/Fukai/2.jpg';
import three from '../../assets/portfolio/design/Fukai/3.jpg';
import four from '../../assets/portfolio/design/Fukai/4.jpg';
import five from '../../assets/portfolio/design/Fukai/5.jpg';
import six from '../../assets/portfolio/design/Fukai/6.jpg';
import seven from '../../assets/portfolio/design/Fukai/7.jpg';
import eight from '../../assets/portfolio/design/Fukai/8.jpg';
import nine from '../../assets/portfolio/design/Fukai/9.jpg';
import ten from '../../assets/portfolio/design/Fukai/10.jpg';
import eleven from '../../assets/portfolio/design/Fukai/11.jpg';
import twelve from '../../assets/portfolio/design/Fukai/12.jpg';
import thirteen from '../../assets/portfolio/design/Fukai/13.jpg';

import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

export default function Fukai() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
    <Nav />

      <div className='border-r border-l border-t flex-1 flex flex-col items-center md:px-0 px-6 py-48 md:py-40'>
        <div className='w-full max-w-3xl flex flex-col gap-8'>

          <div className='flex flex-col gap-1'>
            <h2 className='relative'>Fukai</h2>

            <h3>Role: Brand Designer</h3>
            <h3>Timeline: 4 days</h3>
            <h3>Tools: Figma, Adobe Illustrator, Photoshop</h3>


          </div>
          <div className='flex gap-2'>
            <a href='https://www.figma.com/design/4T3V9FesBZh4Dh5e0ZaRML/Fukai?node-id=0-1&t=MxqaL1zcjxdG85bi-1'
                target='_blank'
                rel='noreferrer'
                className='px-4 py-2 border w-fit'
              >
                Figma File
                </a>
                <a href='https://www.behance.net/gallery/254812199/Fukai'
                target='_blank'
                rel='noreferrer'
                className='px-4 py-2 border w-fit'
              >
                View on Behance
                </a>
          </div>


        <div>
          <img src={one} />
          <img src={two} />
          <img src={three} />
          <img src={four} />
          <img src={five} />
          <img src={six} />
          <img src={seven} />
          <img src={eight} />
          <img src={nine} />
          <img src={ten} />
          <img src={eleven} />
          <img src={twelve} />
          <img src={thirteen} />
        </div> 

      </div>


    </div>
    <Footer />
    </div>
  )
}