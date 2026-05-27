import React from 'react';
import Nav from './Nav.jsx';
import aboutpic from '../assets/aboutpic.jpg';
import Footer from './Footer.jsx';

export default function About() {
  return (
    <div className='min-h-screen relative'>
      <Nav />

      <div id="bio" className='flex md:flex-row flex-col gap-4 ml-12 mr-12 mt-48'>
        <div className='md:w-[55%]'>
          <h2 className='mb-2'>about me</h2>
          <h1>henry is a product designer, animator, and illustrator focused on finding ways to combine art with technology in both traditional and modern mediums.</h1>
          <br></br>
          <h1>he is a current junior studying computer science at Princeton and is looking for internships and (soon to come) new grad roles, open to design, animation, game development, and full stack development roles.</h1>
          <br></br>
          <h1>has worked as a software developer intern for Nashtech, a full stack developer for HoagieClub, a course planning application, and a teaching intern for the CS department.</h1>
          <br></br>
          <h1>has worked as a digital lab assistant for printing and adobe suite guidance</h1>
          <br></br>
          <h1>extracurriculars: VTone Acapella, P Pop Up Chef, HackPrinceton graphic designer, Science Olympiad webmaster</h1>
          <br></br>
        </div>
        <img src={aboutpic} className='md:w-[45%] w-[100%] h-full'></img>
      </div>
      <hr className='m-12'></hr>


      <div id="contact" className='mt-8 ml-12 mr-12 flex flex-wrap pb-32'>
        <div className='w-1/2'>
          <h4>contact</h4>
          <br></br>
          <p>students, alumni, education</p>
          <p className='indent-4'>hl3547@princeton.edu</p>
          <p>general inquiries</p>
          <p className='indent-4'>li.henry0508@gmail.com</p>
          <br></br>


          <div className='flex flex-col gap-2'>
          <a className="links" href="https://drive.google.com/file/d/14hZaPfVeeYZeVkcLLniogw4FRIE5Q4MS/view?usp=sharing" target='_blank'>[resume]</a>
            <a className="links" href="https://github.com/hhenryli" target='_blank'>[Github]</a>
            <a className="links" href="https://www.linkedin.com/in/henryyli0508/" target='_blank'>[Linkedin]</a>
            <a className="links" href="https://www.instagram.com/li_henryy/" target='_blank'>[Instagram]</a>
          </div>

        </div>

        <ul className='flex flex-col'>
          <h4>mediums</h4>
          <br></br>
          <li>-acrylic, oil painting</li>
          <li>-illustration, animation </li>
          <li>-typography, graphic design </li>
          <li>-full stack development, game design </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}