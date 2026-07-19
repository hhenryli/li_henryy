import React from 'react'
import cover from '../../assets/sides/120/120escover.png';
import home from '../../assets/sides/120/home.png';

import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Carousel from '../Carousel.jsx';

export default function OneTwentyEs() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Nav />
      
      <div className='flex-1 ml-12 mr-12 py-48 md:py-36 grid grid-wrap gap-y-6 md:gap-y-12 md:gap-x-12  grid-cols-1 md:grid-cols-4 '>
      <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>Projects: </h1>
          <h1 className='text-gray-800'> 120 East State</h1>
        </div>

        <div className='flex flex-col md:flex-row col-span-1 md:col-span-2 gap-6'>
          
        <div className='col-span-2 flex gap-1'>
          <h1 className='text-gray-500'>medium: </h1>
          <h1 className='text-gray-800'> Full Stack Development</h1>
        </div>
        </div>

        <div className='col-span-2'>
          <Carousel images={[cover, home]} />
        </div>
        <div className='flex md:flex-row col-span-1 md:col-span-2 md:gap-6'>
          <div className='flex-1 flex flex-col gap-4 '>
            <h3>120 East State</h3>
            <div className='flex flex-col gap-1'>
              <h1>Role: Full Stack Devleloper</h1>
              <h1>Timeline: 1 semester</h1>
              <h1>Tools: Flask, PostgresSQl, SQLAlchemy, React, Tailwind, Cloudinary</h1>
            </div>
            <div>
              <p className='text-l mb-4'>120 East State Street, a historic building in Ithaca, NY with deep roots in community activism, needed a digital platform to preserve and share its rich history. The archive had to serve multiple audiences such as community members and local historians while supporting active engagement through social features.</p>

              <div className='flex flex-col gap-2'>
                <h5>The Project</h5>
                <p className='text-l mb-4'>With a team of 3, we designed a full-stack web application that functions as both historical archive and living community platform. The interface supported historical materials (photos, documents, oral histories) along with modern social functionality (comments, likes, user profiles). I created distinct user experiences for three roles—admins, writers, and readers—each with tailored interfaces for their specific needs, from content moderation to research and contribution.</p>
              </div>

              <a href='https://drive.google.com/drive/folders/1m6aCGeS861GbRKoe2ebm0iERJ6v6Lgad?usp=drive_link' target='_blank'>[View the Project]</a>
            </div>

          </div>
          <h4 className='flex flex-col leading-none'>
            <span>20</span>
            <span>25</span>
          </h4>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}