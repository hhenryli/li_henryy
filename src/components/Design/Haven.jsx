import React from 'react'

import intro from '../../assets/portfolio/design/Haven/00-01.webp';
import two from '../../assets/portfolio/design/Haven/02.webp';
import three from '../../assets/portfolio/design/Haven/03.webp';
import four from '../../assets/portfolio/design/Haven/04.jpg';
import five from '../../assets/portfolio/design/Haven/05.webp';
import six from '../../assets/portfolio/design/Haven/06.webp';

import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

export default function Haven() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
    <Nav />

      <div className='border-r border-l border-t flex-1 flex flex-col items-center md:px-0 px-6 py-48 md:py-40'>
        <div className='w-full max-w-3xl flex flex-col gap-8'>

          <div className='flex flex-col gap-1'>
            <h2 className='relative'>Haven</h2>

            <h3>Role: Brand Designer</h3>
            <h3>Timeline: 3 days</h3>
            <h3>Tools: Adobe Illustrator, Photoshop</h3>


          </div>
          <div className='flex gap-2'>
            <a href='https://www.figma.com/proto/UHS2PawiamcWey8Qb3A3oM/Haven?node-id=266-615&p=f&t=BSUzhhetran2Drub-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=12%3A93&show-proto-sidebar=1'
                target='_blank'
                rel='noreferrer'
                className='px-4 py-2 border w-fit'
              >
                Figma Prototype
                </a>
                <a href='https://www.behance.net/gallery/254337863/Haven-Concert-App-UIUX-Mobile-Design'
                target='_blank'
                rel='noreferrer'
                className='px-4 py-2 border w-fit'
              >
                View on Behance
                </a>
          </div>


        <div>
          <img src={intro} />
          <img src={two} />
          <img src={three} />
          <img src={four} />
          <img src={five} />
          <img src={six} />
          </div> 

      </div>

      <Footer />
    </div>
    </div>
  )
}