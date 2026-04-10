import React from 'react';
import Nav from './Nav.jsx';
import Dropdown from './Dropdown.jsx';
import aboutpic from '../assets/aboutpic.jpg';
import { Link } from 'react-router-dom';
import BackToTop from './BackToTop.jsx';

export default function About() {
  const scrollToBio = (e) => {
    e.preventDefault();
    const element = document.getElementById('bio');
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <div className='min-h-screen relative'>
      <Nav />
      <Dropdown />
      <BackToTop />
      <ul className='absolute flex flex-col gap-4 text-l ml-8 mt-20'>
        <a href="#bio" onClick={scrollToBio}>bio</a>
        <a href="#contact" onClick={scrollToContact}>contact</a>
        <a href="https://drive.google.com/file/d/1m96CaANpJ9aLFWf4t0ftiA2Xqpfvn-AK/view?usp=sharing" target='_blank'>resume &#8641;</a>
      </ul>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-8 min-h-screen'>
        <div className='flex flex-col justify-start md:justify-end pb-8 pt-20 md:pt-0 order-2 md:order-1'>
          <p>henry li is interested in the intersection of technology and design</p>
        </div>
        <div className='flex items-start md:pt-20 pt-55 order-1 md:order-2'>
          <div>
            <img src={aboutpic} className='w-full max-w-[300px] rounded-2xl' alt="Henry Li"></img>
            <p className='mt-2'>a moment in painting 1</p>
          </div>
        </div>
      </div>

      <hr className='m-8'></hr>

      <div id="bio" className='ml-8 mr-8  md:w-[50%] text-l'>
        <h1 className='text-2xl'>about me</h1>
        <p className='mt-8'>henry is a software developer, game designer, designer, animator, and illustrator focused on finding ways to combine art with technology in both traditional and modern mediums.</p>
        <br></br>
        <p className=''>he is a current junior studying computer science at Princeton and is looking for internships and (soon to come) new grad roles, open to design, animation, game development, and full stack development roles.</p>
        <br></br>
        <p>has worked as a software developer intern for Nashtech, a full stack developer for HoagieClub, a course planning application, and a teaching intern for the CS department.</p>
        <br></br>
        <p>and a designer for E-Club Design at Princeton.</p>
        <br></br>
        <ul className='mb-8'>mediums
          <li>-acrylic, oil painting</li>
          <li>-illustration, animation </li>
          <li>-typography, graphic design </li>
          <li>-front-end web development, game design </li>
        </ul>

      </div>
      <hr className='m-8'></hr>


      <div id="contact" className='mt-8 ml-8 mr-8 flex flex-wrap h-screen text-l'>
        <div className='w-1/2'>
          <h1 className='text-2xl'>socials</h1>
          <br></br>
          <ul className='flex flex-col gap-4 '>
            <a href="https://github.com/hhenryli" target='_blank'>github &#8641;</a>
            <a href="https://www.linkedin.com/in/henryli0508/" target='_blank'>linkedin &#8641;</a>
            <a href="https://www.instagram.com/li_henryy/" target='_blank'>ig &#8641;</a>
          </ul>
        </div>
        <div className='w-1/2 h-full'>
          <h1 className='text-2xl'>contact</h1>
          <br></br>
          <p>students, alumni, education</p>
          <p>hl3547@princeton.edu</p>
          <br></br>
          <p>general inquiries</p>
          <p>li.henry0508@gmail.com</p>
        </div>
        <p className="text-gray-800 text-sm absolute left-8 bottom-4">
          last updated apr 9, 2026
        </p>
      </div>


    </div>
  );
}