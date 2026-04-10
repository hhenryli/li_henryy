import React from 'react';
import Nav from '../Nav.jsx';
import Dropdown from '../Dropdown.jsx';
import churchpic from '../../assets/120/church.jpeg'
import oesarchive from '../../assets/120/120archive.png'
import { Link } from 'react-router-dom';

export default function OneTwentyEs() {
  return (
    <div className='min-h-screen '>
      <Nav />
      <Dropdown />

      <div className='ml-8 mr-8 py-20 grid grid-wrap gap-y-20 grid-cols-1 md:grid-cols-4 gap-x-6'>
        <h1 className='text-gray-500 text-3xl font-garamond col-span-2'>projects:  
          <p className='inline text-gray-800'> one twenty east state</p>
        </h1>
        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          <div className='flex-1 flex flex-col gap-2'>
            <h1 className='text-gray-500 text-sm font-garamond'>created in 2026</h1>
            <h1 className='text-gray-500 text-sm font-garamond'>*the archive is unforunately not longer supported as of 2025*</h1>
          </div>

          <div className='flex flex-col flex-shrink-0 w-48'>
                <h1 className='text-gray-500'>category</h1>
                <p className='text-gray-500'>full stack</p>
              </div>
        </div>


        <img src={churchpic} className='rounded-2xl w-full col-span-2'></img>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          <div className='flex-1'>
            <p className='text-l mb-4 indent-4'>one twenty east state is a digital archive of the history of 120 east state street, a building in Ithaca, NY with a rich history of community and activism. the archive includes photos, documents, and oral histories from the building's past and supports social features such as comments and likes</p>

            <p className='text-l mb-4'>the archive was created in collaboration with the current tenants of 120 east state street, as well as local historians and community members. it is intended to be a resource for anyone interested in the history of the building and its role in the community.</p>

            <p className='text-l mb-4'>the archive supports several views, including an admin, reader, and writer view, allowing profile customization and post monitoring.</p>
          </div>

          <div className='flex flex-col flex-shrink-0 w-48'>
            <ul>
              tech stack:
              <li>frontend: React, Tailwind</li>
              <li>backend: flask</li>
              <li>database: postgreSQL</li>
              <li>storage: cloudinary</li>
            </ul>

            <br></br>
            <a href="https://drive.google.com/drive/folders/1m6aCGeS861GbRKoe2ebm0iERJ6v6Lgad?usp=sharing" target='_blank'>view &#8641;</a>
            <a href="https://github.com/BseoY/120EastState3" target='_blank'>github &#8641;</a>
          </div>
        </div>

      </div>
    </div>
  )
}