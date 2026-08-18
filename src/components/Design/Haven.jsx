import React from 'react'

import intro from '../../assets/portfolio/design/haven/00-01.webp';
import two from '../../assets/portfolio/design/haven/02.webp';
import three from '../../assets/portfolio/design/haven/03.webp';
import four from '../../assets/portfolio/design/haven/04.jpg';
import five from '../../assets/portfolio/design/haven/05.webp';
import six from '../../assets/portfolio/design/haven/06.webp';

import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

export default function Haven() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
      <Nav />
      <div className='pt-24'>
      <div className='w-full flex justify-between items-center'>
                <h2 className='relative md:-left-2'>Tang</h2>
              </div>

              <div className='flex flex-col gap-1'>

                <h3>Role: Brand Designer</h3>
                <h3>Timeline: 3 days</h3>
                <h3>Tools: Adobe Illustrator, Photoshop</h3>
              </div>

        <img src={intro} />
        <img src={two} />
        <img src={three} />
        <img src={four} />
        <img src={five} />
        <img src={six} />
      </div>

      <Footer />
    </div>
  )
}