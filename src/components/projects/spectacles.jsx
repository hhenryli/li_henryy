import React from 'react';
import Nav from '../Nav.jsx';
import spectaclespic from '../../assets/spectacles/spectacles.png';

export default function Spectacles() {
  return (
    <div className='min-h-screen '>
      <Nav />

      <div className='ml-8 mr-8 py-20 grid grid-wrap gap-y-20 grid-cols-1 md:grid-cols-4 gap-x-6'>
        <h1 className='text-gray-500 text-3xl font-garamond col-span-2'>projects:  
          <p className='inline text-gray-800'> order up!</p>
        </h1>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          <div className='flex-1 flex flex-col gap-2'> {/* Added flex and flex-col */}
            <h1 className='text-gray-500 text-sm font-garamond'>created with snapchat spectacles</h1>
            <h1 className='text-gray-500 text-sm font-garamond'>thanks to andres monroy hernandez</h1>
          </div>
          

          <div className='flex flex-col flex-shrink-0 w-48'>
            <h1 className='text-gray-500'>category</h1>
            <p className='text-gray-500'>app development</p>
          </div>
        </div>

        <img src={spectaclespic} className='rounded-2xl w-full col-span-2'></img>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          <div className='flex-1'>
            <p className='text-l mb-4 indent-4'>order up! is an augmented reality game I developed in an independent work seminar at Princeton. The game is inspired by games such as Overcooked!, Diner Dash, and Family Style." </p>

            <p className='text-l mb-4'> The goal of this seminar was to study the use of an augmented reality application in a colocated, social environment.</p>

            <p className='text-l mb-4'>my research focused on the use and significance of physical space in teamwork exercises, particularly in comparison to  purely physical and digital teamwork options such as icebreakers and zoom/digital spaces respectively.  </p>
          </div>

          <div className='flex flex-col flex-shrink-0 w-48'>
            <ul>
              tech stack:
              <li>hardware: snapchat spectacles</li>
              <li>backend: javascript</li>
            </ul>

            <br></br>
            <a href="https://drive.google.com/drive/u/2/folders/1pD_i4L9UAvf_4Y2NMMzU-FpIWve5ggmu" target='_blank'>view my research &#8641;</a>
            <a href="https://github.com/hhenryli/OrderUp" target='_blank'>github &#8641;</a>
          </div>
        </div>

      </div>
    </div>
  )
}