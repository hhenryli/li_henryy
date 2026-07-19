import React from 'react'
import Cover from '../../assets/games/plinkyplights/cover.webp'
import Game1 from '../../assets/games/plinkyplights/gameplay1.webp'
import Game2 from '../../assets/games/plinkyplights/gameplay2.webp'
import Game3 from '../../assets/games/plinkyplights/gameplay3.webp'
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

export default function PlinkyPlights() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      
      <div className='flex-1 ml-12 mr-12 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
        <h1 className=' col-span-2 text-gray-500'>games:  
          <h1 className='inline text-gray-800'> plinkyplights</h1>
        </h1>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          
        <h1 className=' col-span-2 text-gray-500'>medium:  
          <h1 className='inline text-gray-800'> game development</h1>
        </h1>
        </div>

        <div className='col-span-2'>
          <Carousel images={[Cover, Game1, Game2, Game3]} />
        </div>
        <div className='flex md:flex-row col-span-1 md:col-span-2 md:gap-6'>
          <div className='flex-1 flex flex-col gap-4 '>
            <h3>Plinky Plights</h3>
            <div className='flex flex-col gap-1'>
              <h1>Role: Developer</h1>
              <h1>Timeline: Summer break</h1>
              <h1>Tools: Unity, Procreate</h1>
            </div>
            <div>
              <p className='text-l mb-4'>plinky plights is a rage-inducing vertical platformer created in Unity. Bounce your way to the top through brutal platforms and obstacles—but beware, one fall sends you all the way back down.</p>

              <p className='text-l mb-4'> inspired by games like Getting Over It, Chained Together, and Peak, this game will test your patience and precision. </p>

              <p className='text-l mb-4'>It's the first game I developed, after seeing a streamer boxbox create a similar game, floppy fish in 3 days, so I'm quite proud even though the mechanics are basic. enjoy!</p>
              <a href="https://benryhenry.itch.io/plinkyplights" target='_blank' rel="noopener noreferrer">[play it now]</a>
            </div>

          </div>
          <h4 className='flex flex-col md:flex-row leading-none'>
            <span>20</span>
            <span>26</span>
          </h4>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}