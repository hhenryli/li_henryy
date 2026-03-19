import React from 'react';
import Nav from './Nav.jsx';
import aboutpic from '../assets/aboutpic.jpg';

export default function About() {
  return (
    <div className="min-h-[125vh] p-20 bg-[#EDEDED]">
      <div className='max-w-4xl mx-auto'>
        <Nav />

        <div className="font-garamond text-6xl mb-2">about</div>
        <hr />
        <br />

        <div className="grid grid-cols-3 items-start">
          <div className="border-r border-gray-300 flex flex-col">
            <div className="aspect-[3/4] overflow-hidden mr-2">
              <img
                src={aboutpic}
                loading="lazy"
                alt="project"
                className="w-full h-full object-cover mr-2"
              />
            </div>
            <p className='font-inter text-1sl mr-2'>Graphic Design: Typography</p>
            <div className='mr-2'>
              <p>A B C D E F G H I J K L M N O P Q R S T U V X Y Z</p>
              <p className='text-end'>A B C D E F G H I J</p>
              <p className='text-end'>K L M N O P Q R S T U V X Y Z</p>
            </div>
          </div>

          <div className="border-r border-gray-300 flex items-center justify-center">
            <div className='flex flex-col justify-start ml-2 mr-2 gap-4'>
              <p className='font-garamond text-3xl'>Welcome to my page!</p>
              <div className="w-24 h-[1px] bg-gray-400"></div>
              <p className='font-garamond text-xl'>My name is Henry Li, and I’m a student at Princeton interested in computer science, game dev, and design. </p>
              <p className='font-inter text-lg'>This website is a collection of works from various classes to personal projects</p>
              <p className='font-arvo text-l'>I’m currently invested in the intersection of design and technology</p>
              <div className="w-32 border-t-2 border-gray-400 border-dotted"></div>
            </div>
          </div>

          <div className="border-r border-gray-300 flex items-center justify-center">
            <div className='flex flex-col justify-start w-full ml-2 gap-1'>
              <p className='font-inter text-2xl'>My Skills</p>
              <ul className='font-garamond text-xl'>
                <li>-java</li>
                <li>-javascript</li>
                <li>-C, C++, C#</li>
                <li>-Unity</li>
                <li>-art, graphic design, and video editing</li>
                <li>-game design</li>
              </ul>
              <p className='font-arvo text-xl'>I'm listening to:</p>
              <p className='font-inter text-sm'>
                Nectar | Joji <br />
                SWAG | Justin Bieber <br />
                Sunburn | Dominic Fike <br />
                Charm | Clairo</p>
              <p className='font-garamond text-2xl'>My hobbies</p>
              <p className='font-inter text-l'>
                painting <br />
                exercising <br />
                music <br />
                cafe hopping!
                </p>
              <div className="w-24 h-[1px] bg-gray-400"></div>
              <div className='flex justify-between mr-2'>
              </div>
            </div>
          </div>
        </div>

        <br />
        <hr />
      </div>

    </div>
  );
}