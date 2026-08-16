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