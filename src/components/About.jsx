import React, { useRef } from 'react';
import Nav from './Nav.jsx';
import aboutpic from '../assets/aboutpic.jpg';
import Footer from './Footer.jsx';
import Lottie from 'lottie-react';

import emailicon from '../assets/animations/email.json';
import phoneicon from '../assets/animations/phone.json';
import instaicon from '../assets/animations/insta.json';
import githubicon from '../assets/animations/linkedin.json';
import linkedinicon from '../assets/animations/github.json';

const SOCIAL_ICONS = [
  { key: 'instagram', src: instaicon, href: 'https://www.instagram.com/li_henryy/', label: 'Instagram' },
  { key: 'linkedin', src: linkedinicon, href: 'https://www.linkedin.com/in/henryyli0508/', label: 'LinkedIn' },
  { key: 'github', src: githubicon, href: 'https://github.com/hhenryli', label: 'Github' },
];

export default function About() {
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const instaRef = useRef(null);
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const socialRefs = { instagram: instaRef, linkedin: linkedinRef, github: githubRef };

  return (
    <div className='relative overflow-hidden flex flex-col'>
      <Nav />
      <div className='relative p-6 lg:mt-24 mt-16 flex-1'>
        <div className="w-full relative flex flex-col lg:flex-row h-full">

          {/* Left: only this column scrolls */}
          <div className='order-2 md:order-1 md:w-full border-l border-r border-b'>
            <div className='p-6 border-b flex justify-between items-end'>
              <h1>About me</h1>
              <h2>@2026</h2>
            </div>

            <div id="bio" className='flex md:flex-row flex-col gap-8 border-b p-6'>
              <img src={aboutpic} className='md:w-[45%] w-[100%] h-full'></img>
              <div className='flex flex-col justify-between'>
                <h3 className='mt-4 w-[75%] pb-4 border-b'>henry is a product designer, animator, and developer focused on finding ways to combine art with technology in both traditional and modern mediums.</h3>
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

            <div className='p-6 mt-16 flex flex-col'>
              <div className='w-full flex justify-between'>
              <h3 className='italic flex md:flex-row flex-col md:gap-2 gap-1'>
                  <span className='bold'>04</span> 
                  <span>SKILLS</span>
                </h3>
                <div className='w-[60%] border-t'>
                  <h3 className='mt-2'>I work on a variety of projects and constantly develop and expand my skills!</h3>
                  <div className='w-full py-16 justify-between'>

                  <ul className='flex flex-col gap-4'>
                    <div className='flex md:flex-row flex-col justify-between items-center gap-2'>
                      <h5 className='pill w-full'>UI/UX</h5>
                      <hr className='w-full'></hr>
                      <p className='w-full'>Websites, Apps, Menus, Digital Products</p>
                    </div>

                    <div className='flex md:flex-row flex-col justify-between items-center gap-2'>
                      <h5 className='pill w-full'>PRODUCT DESIGN</h5>
                      <hr className='w-full'></hr>
                      <p className='w-full'>Brands, Logos, Merch, Packaging, etc</p>
                    </div>

                    <div className='flex md:flex-row flex-col justify-between items-center gap-2'>
                      <h5 className='pill w-full'>MOTION DESIGN</h5>
                      <hr className='w-full'></hr>
                      <p className='w-full'>Advertisements, Lyrics/Music, Film</p>
                    </div>

                    <div className='flex md:flex-row flex-col justify-between items-center gap-2'>
                      <h5 className='pill w-full'>ILLUSTRATION</h5>
                      <hr className='w-full'></hr>
                      <p className='w-full'>Environment, Print, Digital, Icon</p>
                    </div>
                  </ul>
                  </div>
                </div>
              </div>

              <div className='w-full flex justify-between'>
                <h3 className='italic flex md:flex-row flex-col md:gap-2 gap-1'>
                  <span className='bold tab mr-4'>05</span> 
                  <span>EXPERIENCE</span>
                </h3>
                <div className='w-[60%] border-t'>
                  <h3 className='mt-2'>I spent a lot of my time at Princeton studying computer science before discovering how much I love design and am looking for new experiences to learn and apply </h3>
                  <div className='w-full py-16 justify-between'>
                  <ul className='flex flex-col gap-8'>
                    <div className='flex md:flex-row flex-col justify-between'>
                      <h3 className=''>2026-Present</h3>
                      <div className='md:w-[60%] w-full flex flex-col gap-2 mt-4 md:mt-0'>
                        <h2 className=''>Adobe Student Ambassador</h2>
                        <ul className='list-disc pl-8'>
                          <li className=''>As a student ambassador, I represent Adobe on campus by hosting events, workshops and tabling</li>
                          <li className=''>I also engage in social media and constantly create content to spread the use of Adobe tools!</li>
                        </ul>
                      </div>
                    </div>

                    <div className='flex md:flex-row flex-col justify-between'>
                      <h3 className=''>2025-Present</h3>
                      <div className='md:w-[60%] w-full flex flex-col gap-2 mt-4 md:mt-0'>
                        <h2 className=''>Princeton Digital Lab Assistant</h2>
                        <ul className='list-disc pl-8'>
                          <li className=''>The digital lab is a print, design, and media driven lab for students to create whatever they desire.</li>
                          <li className=''>I assisted over 100 students in printing, creating posters, designing digital media, and more.</li>
                        </ul>
                      </div>
                    </div>

                    <div className='flex md:flex-row flex-col justify-between'>
                      <h3 className=''>2024-2025</h3>
                      <div className='md:w-[60%] w-full flex flex-col gap-2 mt-4 md:mt-0'>
                        <h2 className=''>E-Club Design Team</h2>
                        <ul className='list-disc pl-8'>
                          <li className=''>Along with a team of designers, I worked for an entrepreneurship club to assist local agencies, campus clubs, and individual businesses with branding, logos, and product design.</li>
                          <li className=''>I learned a lot about communicating with clients, how to iterate on their feedback, and improve my designs through these discussions. </li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                  </div>
                </div>
              </div>
              
              <div className='w-full flex justify-between'>
                <h3 className='italic flex md:flex-row flex-col md:gap-2 gap-1'>
                  <span className='bold tab mr-4'>06</span> 
                  <span>TOOLS</span>
                </h3>
                <div className='w-[60%] border-t'>
                  <h3 className='mt-2'>I use a variety of tools in my projects:</h3>
                  <div className='w-full py-16 flex md:flex-row flex-col gap-4'>
                    <div className='w-full flex flex-col'>
                      <h3 className='border-r border-l border-t px-4 py-1'>UI/UX</h3>
                      <div className='border p-4 flex flex-col gap-2'>
                        <div className='flex gap-2'>
                          <img src="/icons/logos/figma.webp" className='w-4'/>
                          <p>Figma</p>
                        </div>

                        <div className='flex gap-2'>
                          <img src="/icons/logos/sketch.webp" className='logoicon'/>
                          <p>Sketch</p>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex flex-col'>
                      <h3 className='border-r border-l border-t px-4 py-1'>Motion/Editing</h3>
                      <div className='border p-4 flex flex-col gap-2'>
                        <div className='flex gap-2'>
                          <img src="/icons/logos/AE.webp" className='logoicon'/>
                          <p>After Effects</p>
                        </div>
                        <div className='flex gap-2'>
                          <img src="/icons/logos/premiere.webp" className='logoicon'/>
                          <p>Premiere Pro</p>
                        </div>
                        <div className='flex gap-2'>
                          <img src="/icons/logos/procreate.webp" className='logoicon'/>
                          <p>Procreate & Dreams</p>
                        </div>
                      </div>
                    </div>
                    <div className='w-full flex flex-col'>
                      <h3 className='border-r border-l border-t px-4 py-1'>Product</h3>
                      <div className='border p-4 flex flex-col gap-2'>
                        <div className='flex gap-2'>
                          <img src="/icons/logos/illustrator.webp" className='logoicon'/>
                          <p>Illustrator</p>
                        </div>
                        <div className='flex gap-2'>
                          <img src="/icons/logos/photoshop.webp" className='logoicon'/>
                          <p>Photoshop</p>
                        </div>
                        <div className='flex gap-2'>
                          <img src="/icons/logos/kittl.webp" className='logoicon'/>
                          <p>Kittl</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full flex justify-between'>
                <h3 className='italic flex md:flex-row flex-col md:gap-2 gap-1'>
                  <span className='bold tab mr-4'>07</span> 
                  <span>HONORS & AWARDS</span>
                </h3>
                <div className='w-[60%] border-t'>
                  <div className='w-full py-16 justify-between'>
                  <ul className='flex flex-col gap-8'>
                    <div className='flex justify-between'>
                      <h3 className=''>2026</h3>
                      <div className='w-[60%] flex flex-col'>
                        <h2 className=''>UCHV Short Movie Prize </h2>
                        <ul className='list-disc'>
                          <a href="https://uchv.princeton.edu/fellowships-funding/undergraduate/short-movie-prize" target="_blank" className='underline'>Honorable Mention- Henry Li, Collections</a>
                        </ul>
                      </div>
                    </div>

                    <div className='flex justify-between'>
                      <h3 className=''>2025</h3>
                      <div className='w-[60%] flex flex-col'>
                        <h2 className=''>Tower Club T-Shirt Design Winner </h2>
                        <ul className='list-disc'>
                          <a href="https://drive.google.com/drive/folders/1pQsPNG-BWEUbBnaylPoExQ37U9kIkK-A?usp=sharing" target="_blank" className='underline'>1st Choice </a>
                        </ul>
                      </div>
                    </div>
                  </ul>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Right: fixed in place, never scrolls */}
          <div className='lg:w-96 lg:border-l relative'>
            <div className="
              lg:fixed
              static
              flex
              flex-col
              gap-4
              p-6
              top-32
              border-r
              border-l
              border-b
              lg:border-0
            ">
              <h2>Contact Me!</h2>
              <div className='flex flex-col gap-2 align-center'>
                <a
                  href="mailto:li.henry0508@gmail.com"
                  onMouseEnter={() => emailRef.current?.goToAndPlay(0, true)}
                  className='flex justify-between gap-2 border-b pb-1 '
                >
                  <div className='w-4 h-4 shrink-0'>
                    <Lottie lottieRef={emailRef} animationData={emailicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                  </div>
                  <p>li.henry0508@gmail.com</p>
                </a>
                <a
                  href="tel:7705682988"
                  onMouseEnter={() => phoneRef.current?.goToAndPlay(0, true)}
                  className='flex justify-between gap-2 border-b pb-1'
                >
                  <div className='w-4 h-4 shrink-0'>
                    <Lottie lottieRef={phoneRef} animationData={phoneicon} loop={false} autoplay style={{ width: '100%', height: '100%' }} />
                  </div>
                  <p>770-568-2988</p>
                </a>
              </div>

              <div className='flex gap-2 items-center'>
                {SOCIAL_ICONS.map((social) => (
                  <a
                    key={social.key}
                    href={social.href}
                    target='_blank'
                    rel='noreferrer'
                    onMouseEnter={() => socialRefs[social.key].current?.goToAndPlay(0, true)}
                    className='w-8 h-8'
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
    </div>
  );
}