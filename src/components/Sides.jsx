import Nav from './Nav.jsx';
import Footer from './Footer.jsx';
import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
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

import plinkycover from "../assets/games/plinkyplights/cover.webp";
import rpgcover from "../assets/games/mousestopper/cover.webp";


const projects = [
  {
    name: "120EastState",
    pics: [ChurchPic],
    desc: "120EastState is a historic Presbyterian church in Trenton. In a class focused on full stack development, me and 2 teammates created a React app focusing on digitally archiving submissions of pdfs, images, videos, and all sorts of media as a way to remember the history of Trenton. We featured admin, viewer, and writer controls, allowing public users to interact with the site through commenting and liking. The site is not longer active, but check out the work we did.",
    link: "https://drive.google.com/drive/folders/1m6aCGeS861GbRKoe2ebm0iERJ6v6Lgad?usp=sharing",
    brief: "A digital archive dedicated to remembering Trenton's history",
    lat: -70,
    lon: 32,
  },
  {
    name: "OrderUp!",
    pics: [SpectaclesPic],
    desc: "Order Up! is an augmented reality game I developed in an independent work seminar at Princeton. The game is inspired by games such as Overcooked!, Diner Dash, and Family Style. The goal of this seminar was to study the use of an augmented reality application in a colocated, social environment. The project was developed using Snapchat Spectacles, in Lens Studio, a 3D editor similar to Unity.",
    link: "https://drive.google.com/drive/u/2/folders/1pD_i4L9UAvf_4Y2NMMzU-FpIWve5ggmu",
    brief: "An augmented reality application for collaborative cooking",
    lat: 20,
    lon: -45,
  },
  {
    name: "spren",
    pics: [sprencover,],
    desc: "spren is a google extension I created with the basic idea of helping people to take breaks from staring at their computers and notice something about the world. It works by choosing a random time of the day to prompt you to tell your 'spren,' a spirit from Brandon Sanderson's story, The Stormlight Archives, something cool or interesting you see around you.",
    link: "https://github.com/hhenryli/spren",
    brief: "A google extension to help you take a break and notice the world around you.",
    lat: -20,
    lon: 180,
  },
  {
    name: "Plinky Plights",
    pics: [plinkycover],
    desc: "Plinky Plights is a punishing, physics-based vertical platformer built in Unity and C#. It features custom bouncing mechanics and a full-loss-on-fall system inspired by Getting Over It, where a single mistake can send you all the way back down.",
    link: "/plinky",
    brief: "A punishing physics-based vertical platformer",
    lat: 55,
    lon: -150,
  },
  {
    name: "Mousestopper",
    pics: [rpgcover],
    desc: "Mousestopper is an in-development RPG. Check back soon for more details as the project comes together.",
    link: "/mousestopper",
    brief: "An in-development RPG",
    lat: -45,
    lon: 60,
  },
];


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
      <meshStandardMaterial
        color="#ADD8E6"
        roughness={0.9}
        metalness={0.05}
        wireframe
      />
    </mesh>
  );
}


function Pins({
  radius = 2,
  pinSize = 0.15,
  onSelect,
  selected
}) {
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
              <sphereGeometry args={[pinSize, 16, 16]} />

              <meshStandardMaterial
                color={isHovered ? "#ff766d" : "#F74C3F"}
                emissive={isHovered ? "#ff3b30" : "#000000"}
                emissiveIntensity={isHovered ? 0.6 : 0}
              />
            </mesh>

            {isHovered && (
              <Html
                position={[0, 0.5, 0]}
                center
                style={{ pointerEvents: "none" }}
              >
                <div className="
                  w-64
                  sm:w-72
                  md:w-96
                  rounded-xl
                  bg-[#1c1c1c]
                  p-4
                  md:p-5
                  flex
                  flex-col
                  gap-3
                  md:gap-4
                ">
                  <img
                    src={p.pics[0]}
                    alt=""
                    className="
                      w-full
                      h-28
                      md:h-36
                      object-cover
                      rounded
                    "
                  />

                  <div>
                    <h4 className="text-sm md:text-base">
                      {p.name}
                    </h4>

                    <p className="text-xs md:text-sm leading-relaxed">
                      {p.brief}
                    </p>
                  </div>
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </>
  );
}


function RotatedTotal({
  radius = 3,
  onSelect,
  selected,
  position = [0, 0, 0]
}) {
  const groupRef = useRef();
  const { size } = useThree();

  const responsiveRadius = size.width < 768 ? 1.5 : 2;

  useFrame((state, delta) => {
    if (selected) return;

    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.x += delta * 0.03;
  });

  return (
    <group ref={groupRef} position={position}>
      <Globe radius={responsiveRadius} />

      <Pins
        radius={responsiveRadius}
        pinSize={size.width < 768 ? 0.1 : 0.15}
        onSelect={onSelect}
        selected={selected}
      />
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
      <Stars
        radius={100}
        depth={60}
        count={6000}
        factor={5}
        saturation={0}
        fade
        speed={2}
      />
    </group>
  );
}


function ProjectPopup({ project, onClose }) {
  return (
    <div className="
      absolute
      top-12
      left-4
      right-4
      z-10
      md:left-6
      md:right-auto
      md:w-96
      max-h-[70vh]
      overflow-y-auto
      bg-black/80
      backdrop-blur
      border
      border-white/20
      rounded-xl
      p-4
      md:p-6
      flex
      flex-col
      gap-4
      text-[#dddcd3]
    ">
      
      <div className="flex items-start justify-between gap-4">
        {project.pics.length > 0 && (
          <div className="w-full">
            {project.pics.map((pic, i) => (
              <img
              src={project.pics[0]}
              alt=""
              className="w-full h-full md:h-32 object-cover rounded"
            />
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          aria-label="Close"
          className="
            shrink-0
            border
            border-white/30
            rounded-full
            w-8
            h-8
            flex
            items-center
            justify-center
            hover:bg-white/10
            transition
          "
        >
          ×
        </button>
      </div>
      <h1>{project.name}</h1>


      <p className="text-sm md:text-base leading-relaxed">
        {project.desc}
      </p>

      {project.link.startsWith('/') ? (
        <Link
          to={project.link}
          className="
            inline-block
            border
            border-white/30
            px-4
            py-2
            w-fit
            hover:bg-white/10
            transition
          "
        >
          Check Out More
        </Link>
      ) : (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            border
            border-white/30
            px-4
            py-2
            w-fit
            hover:bg-white/10
            transition
          "
        >
          Check Out More
        </a>
      )}
    </div>
  );
}


export default function ThreeDProjects() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-16 relative w-full md:h-[150vh] h-screen border-l border-r">

      {!selected && (
        <div className="
          absolute
          top-8
          left-4
          right-4
          md:top-16
          md:left-1/2
          md:right-auto
          md:-translate-x-1/2
          z-10
          px-6
          py-4
          md:px-5
          md:py-3
          bg-black/60
          backdrop-blur
          rounded-full
          text-center
          text-xs
          md:text-sm
          text-[#dddcd3]
        ">
          Click and drag on the globe to pan around. Click a pin to see project details.
        </div>
      )}

      <Canvas
        className="w-full h-full"
        onPointerMissed={() => {
          setSelected(null);
        }}
      >
        <ambientLight intensity={0.6} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
        />

        <MovingStars />

        <RotatedTotal
          radius={2}
          pinSize={0.15}
          onSelect={setSelected}
          selected={selected}
          position={[0, -0.2, 0]}
        />

        <OrbitControls
          enablePan={false}
          rotateSpeed={0.5}
          enableZoom={false}
        />
      </Canvas>

      {selected && (
        <ProjectPopup
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}