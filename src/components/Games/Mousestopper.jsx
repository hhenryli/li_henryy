import React from 'react'
import mousestoppercover from '../../assets/mousestopper/devlog_sign.png';
import Nav from '../Nav.jsx';

/*Progress pictures*/
import progress1 from '../../assets/mousestopper/progresspics/progress1.gif';

export default function Mousestopper() {
  return (
    <div className='min-h-screen '>
      <Nav />

      <div className='ml-8 mr-8 py-20 grid grid-wrap gap-y-20 grid-cols-1 md:grid-cols-4 gap-x-6'>
        <h1 className='text-gray-500 text-3xl font-garamond col-span-2'>games:  
          <p className='inline text-gray-800'> mousestopper</p>
        </h1>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          <div className='flex-1 flex flex-col gap-2'>
            <h1 className='text-gray-500 text-sm font-garamond'>in development stages</h1>
            <h1 className='text-gray-500 text-sm font-garamond'></h1>
          </div>
          

          <div className='flex flex-col flex-shrink-0 w-48'>
            <h1 className='text-gray-500'>category</h1>
            <p className='text-gray-500'>game development</p>
          </div>
        </div>

        <img src={mousestoppercover} className='rounded-2xl w-full col-span-2'></img>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          <div className='flex-1'>
            <p className='text-l mb-4 indent-4'>mousestopper is an rpg game I am developing following the journey of a mouse into a fantasy world of atlantia and the world beyond. </p>

            <p className='text-l mb-4'> it's a game inspired by a book I read a long time ago called mouseheart, following a courageous mouse named Hopper.</p>

            <p className='text-l mb-4'> I wanted to turn the book into a game, though I am still in the early stages of development.</p>
          </div>

          <div className='flex flex-col flex-shrink-0 w-48'>
            <ul>
              tech stack:
              <li>assets: aesprite for pixel art</li>
              <li>system: unity</li>
            </ul>

            <br></br>
            <a href="https://drive.google.com/drive/u/2/folders/1pD_i4L9UAvf_4Y2NMMzU-FpIWve5ggmu" target='_blank'>developing features &#8641;</a>
          </div>
        </div>

      </div>
      <hr className='ml-8 mr-8'></hr>

      <div className='min-h-screen'>
        <div className='ml-8 mr-8 mt-8 max-w-4xl'>
          <h1 className='text-3xl mb-8'>progress check</h1>
          
          <div className='mb-12'>
            <h2 className='text-xl mb-4'>April 2026</h2>
            <img src={progress1} className='rounded-2xl mb-4' />
            <p>Added dialogue system and NPC interactions</p>
          </div>
          
          <div className='mb-12'>
            <h2 className='text-xl mb-4'>March 2026</h2>
            <img src={progress1} className='rounded-2xl mb-4' />
            <p>Implemented inventory UI</p>
          </div>
        </div>
      </div>
    </div>
  )
}
