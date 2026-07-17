import React, { useRef } from 'react';
import Nav from './Nav.jsx';
import aboutpic from '../assets/aboutpic.jpg';
import Footer from './Footer.jsx';
import Lottie from 'lottie-react';

/* contact icons - swap these paths for your actual exported files */
import emailicon from '../assets/animations/email.json';
import phoneicon from '../assets/animations/phone.json';
import instaicon from '../assets/animations/insta.json';
import githubicon from '../assets/animations/linkedin.json';
import linkedinicon from '../assets/animations/github.json';

const SOCIAL_ICONS = [
  { key: 'instagram', src: instaicon, href: 'https://www.instagram.com/li_henryy/', label: 'Instagram' },
  { key: 'linkedin', src: linkedinicon, href: 'https://www.linkedin.com/in/henryyli0508/', label: 'LinkedIn' },
  { key: 'linkedin', src: githubicon, href: 'https://github.com/hhenryli', label: 'Github' },
];

export default function About() {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const instaRef = useRef(null);
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const socialRefs = { instagram: instaRef, linkedin: linkedinRef, github: githubRef };

  return (
    <div className='min-h-screen relative'>
      <Nav />
      <div className='p-6 mt-24'>
        <div className='p-6 border-l border-r border-b flex justify-between items-end'>
          <h2 className='about'>About me</h2>
          <h3>@2026</h3>
        </div>

        <div id="bio" className='flex md:flex-row flex-col gap-8 border-b border-l border-r p-6'>
          <img src={aboutpic} className='md:w-[45%] w-[100%] h-full'></img>
          <div className='flex flex-col justify-between'>
            <h3 className='mt-4 w-[75%] pb-4 border-b'>henry is a product designer, animator, and illustrator focused on finding ways to combine art with technology in both traditional and modern mediums.</h3>
            <div className='grid grid-cols-3 gap-16'>
              <div>
                <h1 className='bold'>01</h1>
                <p>Senior studying computer science at Princeton. Searching for new grad roles!</p>
              </div>

              <div>
                <h1 className='bold'>02</h1>
                  <p>Big time hobbyist, including painting, swimming, reading, and more.</p>
              </div>
              <div>
                <h1 className='bold'>03</h1>
                  <p>Part time (not so great) cook, gamer, and acapella singer</p>
              </div>
            </div>
          </div>
        </div>
        <div className='min-h-screen border-l border-r border-b flex'>
          <div className='w-full mt-24 p-6 flex flex-col'>
            <div className='w-full flex justify-between h-30'>
              <h3>Mediums</h3>
              <div className='w-[50%] border-t border-b '>
                <h1> I work on a lot of different projects, using both physical and digital methods</h1>

                <div className='w-full justify-between'>
                <ul>
                  <h5>Digital</h5>
                  <li>Adobe</li>
                  <li>Adobe</li>
                </ul>
                
                </div>

              </div>
            </div>
            <div className='w-full flex justify-between h-30'>
              <h3>Experience</h3>
              <div className='w-[50%] border-t border-b '>
                
              </div>
            </div>
          </div>
          <div className='w-[250px] border-l p-6 sticky gap-8 flex flex-col'>
            <h3>Contact Me!</h3>
            <div className='flex flex-col gap-2'>
              <a
                href="mailto:li.henry0508@gmail.com"
                onMouseEnter={() => emailRef.current?.goToAndPlay(0, true)}
                className='flex justify-between gap-2 border-b pb-1 '
              >
                <div className='w-4 h-4 shrink-0'>
                  <Lottie lottieRef={emailRef} animationData={emailicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
                <h1>li.henry0508@gmail.com</h1>
              </a>

              <a
                href="tel:7705682988"
                onMouseEnter={() => phoneRef.current?.goToAndPlay(0, true)}
                className='flex items-center gap-2 border-b pb-1'
              >
                <div className='w-4 h-4 shrink-0'>
                  <Lottie lottieRef={phoneRef} animationData={phoneicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                </div>
                <h1>770-568-2988</h1>
              </a>
            </div>

            {/* Social icons still stacked below */}
            <div className='flex flex-col gap-6 items-center mt-4'>
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  target='_blank'
                  rel='noreferrer'
                  onMouseEnter={() => socialRefs[social.key].current?.goToAndPlay(0, true)}
                  className='w-6 h-6'
                  aria-label={social.label}
                >
                  <Lottie
                    lottieRef={socialRefs[social.key]}
                    animationData={social.src}
                    loop={false}
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}