import React from 'react'
import Cover from '../../assets/plinkyplights/cover.png'
import Game1 from '../../assets/plinkyplights/gameplay1.png'
import Game2 from '../../assets/plinkyplights/gameplay2.png'
import Game3 from '../../assets/plinkyplights/gameplay3.png'
import Train from '../../assets/plinkyplights/trainsprite.png'
import Nav from '../Nav.jsx';
import Dropdown from '../Dropdown.jsx';

export default function PlinkyPlights() {
  return (
    <div className='min-h-screen '>
      <Nav />
      <Dropdown />

      <div className='ml-8 mr-8 py-20 grid grid-wrap gap-y-20 grid-cols-1 md:grid-cols-4 gap-x-6'>
        <h1 className='text-gray-500 text-3xl font-garamond col-span-2'>games:  
          <p className='inline text-gray-800'> plinkyplights</p>
        </h1>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          <div className='flex-1 flex flex-col gap-2'> {/* Added flex and flex-col */}
            <h1 className='text-gray-500 text-sm font-garamond'>last updated 2025</h1>
            <h1 className='text-gray-500 text-sm font-garamond'>make ur way up!</h1>
          </div>
          

          <div className='flex flex-col flex-shrink-0 w-48'>
            <h1 className='text-gray-500'>category</h1>
            <p className='text-gray-500'>game development</p>
          </div>
        </div>

        <img src={Cover} className='rounded-2xl w-full col-span-2'></img>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          <div className='flex-1'>
            <p className='text-l mb-4 indent-4'>plinky plights is a rage-inducing vertical platformer created in Unity. Bounce your way to the top through brutal platforms and obstacles—but beware, one fall sends you all the way back down.</p>

            <p className='text-l mb-4'> inspired by games like Getting Over It, Chained Together, and Peak, this game will test your patience and precision. </p>

            <p className='text-l mb-4'>It's the first game I developed, after seeing a streamer boxbox create a similar game, floppy fish in 3 days, so I'm quite proud even though the mechanics are basic. enjoy!</p>
          </div>

          <div className='flex flex-col flex-shrink-0 w-48'>
            <ul>
              tech stack:
              <li>assets: procreate</li>
              <li>system: unity</li>
            </ul>

            <br></br>
            <a href="https://benryhenry.itch.io/plinkyplights" target='_blank'>play it now &#8641;</a>
          </div>
        </div>

      </div>
    </div>
  )
}
