import React from 'react';
import Nav from './Nav.jsx';
import dropdeadcover from '../assets/motion/dropdeadcover.png';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

export default function Games() {
  return (
    <div className='min-h-screen '>
      <Nav />
      <h1 className='ml-12 mt-[20vh]'>Motion</h1>
      <div className='ml-12 mr-8 py-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Link to="/dropdead">
              <img
                src={dropdeadcover}
                alt="drop dead cover"
                className="w-full object-contain hover:opacity-90 transition"
              />
            </Link>
            <p className='mt-4 text-l'>drop dead</p>
            <p className=' text-l text-gray-500'>motion lyrics video</p>
          </div>
          <div>

          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}