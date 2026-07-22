import React from 'react'

import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';

import veilcover from '../../assets/portfolio/design/Veil/veilcover.webp';
import exploration from '../../assets/portfolio/design/Veil/exploration.webp';
import initial from '../../assets/portfolio/design/Veil/initial.webp';
import logomark from '../../assets/portfolio/design/Veil/logomark.svg';
import wordmark from '../../assets/portfolio/design/Veil/wordmark.svg';
import hero1 from '../../assets/portfolio/design/Veil/Hero1.webp';
import hero2 from '../../assets/portfolio/design/Veil/Hero2.webp';
import hero3 from '../../assets/portfolio/design/Veil/Hero3.webp';

import mock1 from '../../assets/portfolio/design/Veil/mockup/1.webp';
import mock2 from '../../assets/portfolio/design/Veil/mockup/2.webp';
import mock3 from '../../assets/portfolio/design/Veil/mockup/3.webp';
import mock4 from '../../assets/portfolio/design/Veil/mockup/4.webp';

import Carousel from '../Carousel.jsx';

export default function Veil() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
      <Nav />

      <div className='border-r border-l border-t flex-1 flex flex-col items-center px-12 py-48 md:py-40'>
        <div className='w-full max-w-3xl flex flex-col gap-8'>


            {/* Left — cover image */}
            <img src={veilcover} alt='veil cover' className='w-full object-cover' />

            {/* Right — all the meta + description */}
            <div className='flex flex-col gap-6'>
              <div className='w-full flex justify-between items-center'>
                <h2 className='relative md:-left-2'>Veil</h2>
                <a href='https://www.figma.com/proto/aYxe4mVQJ3brRshRmh3ae0/VEIL?node-id=5-50&t=vMbrhf7AnvudIDhF-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1'
                  target='_blank'
                  rel='noreferrer'
                  className='px-8 py-4 border'
                >
                  <p>Quick Link &#x2197;</p>
                </a>
              </div>

              <div className='flex flex-col gap-1'>

                <h3>Role: Brand Designer</h3>
                <h3>Timeline: 4 days</h3>
                <h3>Tools: Adobe Illustrator, Photoshop, Figma</h3>
              </div>

              <h5>
                VEIL is a fragrance house built on restraint. The brief was simple: design a brand that says less and means more. No excess, no spectacle. Just a visual identity that knows when to stop.
                The work covers a full brand system, including identity, typography, color, and packaging, as well as a set of hero sections exploring how the brand lives in the real world.
              </h5>
            </div>

            <div className='flex flex-col items-end'>
              <img src={exploration} alt='exploration' className='w-full object-cover' />
              <h5>Exploration of Logomarks and Wordmarks</h5>
            </div>


            <div className='flex flex-col gap-4'>
              <img src={initial} alt='exploration' className='w-full object-cover' />
              <h5>Initial concept felt incoherent, colors were off, and the combination of the V and L to form a bottle wasn't sticking</h5>
            </div>

            <div className='flex flex-col gap-4 bg-[#061C31] p-7'>
              <div className='w-full flex gap-4 items-center'>
                <img src={logomark} alt='exploration' className='w-[40%] object-cover' />
                <h5 className='text-[#EEEEEE]'>Logomark born out of the idea of a cover and walls, a dome with a thick top, and a V cut into the negative space.</h5>
              </div>

              <div className='w-full flex gap-4 items-center'>
                <h5 className='text-[#EEEEEE]'>Logomark born out of the idea of a cover and walls, a dome with a thick top, and a V cut into the negative space.</h5>
                <img src={wordmark} className='w-[40%] object-cover' />
              </div>
            </div>
            <h4>The Brand in Life</h4>  

            <Carousel images={[hero1, hero2, hero3]} /> 

                        <Carousel images={[mock1, mock2, mock3, mock4]} />

                        <div className='px-8 py-4  w-fit border'>
              <a href='figma.com/proto/aYxe4mVQJ3brRshRmh3ae0/VEIL?node-id=0-1&p=f&t=8B8JBYqX556mCJpe-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&fuid=1446626046797897785'
                target='_blank'
                rel='noreferrer'
                className=''
              >
                <p>full branding guide &#x2197;</p>
              </a>
            </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}