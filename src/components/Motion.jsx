import React from 'react';
import Nav from './Nav.jsx';
import dropdeadcover from '../assets/motion/dropdeadcover.png';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import MOTION from '../assets/animations/MOTION.gif';
export default function Motion() {
  return (
    <div className='p-6 min-h-screen '>
      <Nav />
      <div className='mt-[96px] flex border-l border-r justify-between items-center'>
        <div className='w-[70%] p-6 flex flex-col items-center gap-6'>
          <img src={MOTION} />
        </div>
      </div>
      <div className='border p-6'>
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