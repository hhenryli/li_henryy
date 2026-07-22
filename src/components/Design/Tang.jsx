import React from 'react'

import tangcover from '../../assets/portfolio/design/Tang/tangcover.webp';
import sketches from '../../assets/portfolio/design/Tang/sketches.webp';
import firstlogo from '../../assets/portfolio/design/Tang/firstlogo.webp';
import finallogo from '../../assets/portfolio/design/Tang/finallogo.webp';
import pattern from '../../assets/portfolio/design/Tang/pattern.webp';

import truck from '../../assets/portfolio/design/Tang/truck.webp';
import crunch from '../../assets/portfolio/design/Tang/crunch.webp';
import box from '../../assets/portfolio/design/Tang/box.webp';

import stamphaw from '../../assets/portfolio/design/Tang/stamphaw.webp';
import stampheader from '../../assets/portfolio/design/Tang/stampheader.webp';
import stampgrape from '../../assets/portfolio/design/Tang/stampgrape.webp';
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';
import BackToTop from '../BackToTop';

export default function Tang() {
  return (
    <div className='min-h-screen flex flex-col p-6'>
      <Nav />

      <div className='border-r border-l border-t flex-1 flex flex-col items-center md:px-0 py-48 md:py-40'>
        <div className='w-full max-w-3xl flex flex-col gap-8'>


            {/* Left — cover image */}
            <img src={tangcover} alt='Tang cover' className='w-full object-cover' />

            {/* Right — all the meta + description */}
            <div className='flex flex-col gap-6'>
              <div className='w-full flex justify-between items-center'>
                <h2 className='relative md:-left-2'>Tang</h2>
              </div>

              <div className='flex flex-col gap-1'>

                <h3>Role: Brand Designer</h3>
                <h3>Timeline: 3 days</h3>
                <h3>Tools: Adobe Illustrator, Photoshop</h3>
              </div>

              
              <h5>
                This summer, I traveled to China for a month and had this amazing dessert called Tanghulu. If you don't know what it is, it's basically fruit covered in a sticky syrup that hardens into a crunchy shell. Yum! Anyways, I had an idea to create a tanghulu brand because I saw that none of the stores in China had a strong brand to them
              </h5>

              <h5>
                Traditionally, hawthorn is used for tanghulu because of its tanginess and acidity, which balances out the sweetness of the sugar coat. Modern recipes often use other fruit like strawberry, grapes, or oranges. I was inspired by the shapes and colors of these fruits when designing this brand.</h5> 
            </div>
            <img src={sketches} alt="" />

            <h5>
                I eventually landed on a playful logo by customizing a handmade font using the shape of the strawberry in the A.</h5> 

            <img src={firstlogo} alt="" />

            <h5>
                But...something felt missing. It felt too basic, too rigid, and lacked movement for a brand that I envisioned to be bright, crunchy, dynamic, and offering the shiniest and glossiest tanghulu possible.</h5> 

            <h1> So I went back to the drawing board.</h1>

            <h5>And ended up with this!</h5>

            <img src={tangcover} alt="" className='h-auto' />
            <img src={finallogo} alt=""/>
            <img src={pattern} alt="" className=''/>

            <h3>In Usage</h3>
            <img src={truck} alt="" className='h-auto' />
            <img src={crunch} alt=""/>
            <img src={box} alt="" className=''/>

            <h3>And some stamps to go along for fun!</h3>
            <Carousel images={[stamphaw, stampheader, stampgrape]} />
        </div>
      </div>

      <Footer />
    </div>
  )
}