import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import ChurchPic from "../assets/sides/120/120escover.png";
import SpectaclesPic from "../assets/sides/spectacles/spectacles.png";
import spectacle1 from "../assets/sides/spectacles/1.webp";
import spectacle2 from "../assets/sides/spectacles/2.webp";
import spectacle3 from "../assets/sides/spectacles/3.webp";

import sprencover from "../assets/sides/spren/sprencover.jpg";
import sprencalendar from "../assets/sides/spren/sprencalendar.png";
import sprenprompt from "../assets/sides/spren/sprenprompt.jpg";

const projects = [
  {
    name: "120EastState",
    pics: [ChurchPic],
    desc: "120EastState is a historic Presbyterian church in Trenton. In a class focused on full stack development, me and 2 teammates created a React app focusing on digitally archiving submissions of pdfs, images, videos, and all sorts of media as a way to remember the history of Trenton. We featured admin, viewer, and writer controls, allowing public users to interact with the site through commenting and liking. The site is not longer active, but check out the work we did.",
    link: "https://drive.google.com/drive/folders/1m6aCGeS861GbRKoe2ebm0iERJ6v6Lgad?usp=sharing",
    brief: "A digital archive dedicated to remembering Trenton's history",
    lat: -70, lon: 32,
  },
  {
    name: "OrderUp!",
    pics: [SpectaclesPic, spectacle1, spectacle2, spectacle3],
    desc: "Order Up! is an augmented reality game I developed in an independent work seminar at Princeton. The game is inspired by games such as Overcooked!, Diner Dash, and Family Style. The goal of this seminar was to study the use of an augmented reality application in a colocated, social environment. The project was developed using Snapchat Spectacles, in Lens Studio, a 3D editor similar to Unity.",
    link: "https://drive.google.com/drive/u/2/folders/1pD_i4L9UAvf_4Y2NMMzU-FpIWve5ggmu",
    brief: "An augmented reality application for collaborative cooking ",
    lat: 20, lon: -45,
  },
  {
    name: "spren",
    pics: [sprencover, sprencalendar, sprenprompt],
    desc: "spren is a google extension I created with the basic idea of helping people to take breaks from staring at their computers and notice something about the world. It works by choosing a random time of the day to prompt you to tell your 'spren,' a spirit from Brandon Sanderson's story, The Stormlight Archives, something cool or interesting you see around you.",
    link: "https://github.com/hhenryli/spren",
    brief: "A google extension to help you take a break and notice the world around you.",
    lat: -20, lon: 180,
  },
]

function toGlobe(latDeg, lonDeg, r) {
  const lat = THREE.MathUtils.degToRad(latDeg);
  const lon = THREE.MathUtils.degToRad(lonDeg);
  const x = r * Math.cos(lat) * Math.sin(lon);
  const y = r * Math.sin(lat);
  const z = r * Math.cos(lat) * Math.cos(lon);
  return new THREE.Vector3(x, y, z);
}

function Globe({ radius = 2 }) {
  return (
    <mesh>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color="#ADD8E6" roughness={0.9} metalness={0.05} wireframe />
    </mesh>
  );
}

function Pins({ radius = 3, onSelect, selected }) {
  const [hovered, setHover] = useState(null);

  const pinData = useMemo(
    () =>
      projects.map((p) => ({
        ...p,
        pos: toGlobe(p.lat, p.lon, radius),
      })),
    [radius]
  );

  return (
    <>
      {pinData.map((p) => {
        const isHovered = hovered === p.name;

        return (
          <group key={p.name} position={p.pos}>
            <mesh
              scale={isHovered ? 1.25 : 1}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(p);
              }}
              onPointerEnter={(e) => {
                e.stopPropagation();
                setHover(p.name);
                document.body.style.cursor = "pointer";
              }}
              onPointerLeave={() => {
                setHover(null);
                document.body.style.cursor = "default";
              }}
            >
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial
                color={isHovered ? "#ff766d" : "#F74C3F"}
                emissive={isHovered ? "#ff3b30" : "#000000"}
                emissiveIntensity={isHovered ? 0.6 : 0}
              />
            </mesh>

            {isHovered && (
              <Html position={[0, 0, 0]} style={{pointerEvents: "none"}}>
                <div className="bg-black/70 text-[#dddcd3] p-3 rounded w-[200px]">
                  <img src={p.pics[0]} alt="" className="w-full rounded mb-2" />
                  <h1 className="">{p.name}</h1>
                  <p className="">{p.brief}</p>
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </>
  );
}

function RotatedTotal({ radius = 3, onSelect, selected }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (selected) return;
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.x += delta * 0.03;
  });

  return (
    <group ref={groupRef}>
      <Globe radius={radius} />
      <Pins radius={radius} onSelect={onSelect} selected={selected} />
    </group>
  );
}

function MovingStars() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.01;
  });

  return (
    <group ref={groupRef}>
      <Stars radius={100} depth={60} count={6000} factor={5} saturation={0} fade speed={2} />
    </group>
  );
}

export default function ThreeDProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <div className='p-6'>
      <div className='mt-24 h-[80vh] flex'>
      <div className='w-[35%] border-r border-l flex flex-col h-full'>
        <div className='p-6 flex flex-col gap-2 border-b'>
          <h2 className="p-6">
            Side Projects
          </h2>
          <h1>Random things that I've crafted :D</h1>
        </div>

        <div className='flex-1'>
          <Canvas
            onPointerMissed={() => {
              setSelected(null);
            }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <MovingStars />
            <RotatedTotal radius={2.5} onSelect={setSelected} selected={selected}/>
            <OrbitControls enablePan={false} rotateSpeed={0.5} enableZoom={false} />
          </Canvas>
        </div>
      </div>

        <Nav />

        {/* Right column: shows selected project details, or a placeholder if none selected */}
        <div className='border-r w-[65%] h-full overflow-y-auto'>
          {selected ? (
            <div className='w-full p-6 flex flex-col gap-6'>
              {selected.pics.length > 0 && (
                <div className='w-full flex gap-4 overflow-x-auto flex-wrap'>
                  {selected.pics.slice(0).map((pic, i) => (
                    <img
                      key={i}
                      src={pic}
                      alt=""
                      className="h-40 w-auto object-cover flex-shrink-0"
                    />
                  ))}
                </div>
              )}

              <div className='flex flex-col gap-4'>
                <h2>{selected.name}</h2>
                <h1>{selected.desc}</h1>
              </div>
              <a
                href={selected.link}
                target='_blank'
                rel='noreferrer'
                className='inline-block border px-4 py-2 w-fit'
              >
                Check Out More
              </a>
            </div>
          ) : (
            <div className='p-6 h-full flex items-center justify-center text-center'>
              <p className='text-gray-500'>Click and drag on the globe to pan around. Click a pin on the globe to see project details</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}