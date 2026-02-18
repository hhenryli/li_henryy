import Nav from './Nav.jsx';
import { useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import ChurchPic from "../assets/120/church.jpeg";
import PlinkyPic from "../assets/plinkyplights/cover.png";
import SpectaclesPic from "../assets/spectacles/spectacles.png";
import IntoTimePic from "../assets/IntoTimeCover.png";

const projects = [
  {name: "120EastState", pic: ChurchPic, desc:"120EastState is a historic Presbyterian church in Trenton. In a class focused on full stack development, me and 2 teammates created a React app focusing on digitally archiving submissions of pdfs, images, videos, and all sorts of media as a way to remember the history of Trenton. We featured admin, viewer, and writer controls, allowing public users to interact with the site through commenting and liking.", link: "https://one20es-archive-b05baf7b3364.herokuapp.com/", brief: "A digital archive dedicated to remembering Trenton's history", lat: -70, lon: 32},
  {name: "OrderUp!", pic: SpectaclesPic, desc:"Order Up! is an augmented reality game I developed in an independent work seminar at Princeton. The game is inspired by games such as Overcooked!, Diner Dash, and Family Style. The goal of this seminar was to study the use of an augmented reality application in a colocated, social environment. The project was developed using Snapchat Spectacles, in Lens Studio, a 3D editor similar to Unity.", link:"https://drive.google.com/file/d/1eL4KlAhaV7_2LruQ4TVwfHHJpulr1Rpk/view?usp=sharing", brief: "An augmented reality application for collaborative cooking ", lat: 20, lon: -45},
  {name: "PlinkyPlights", pic: PlinkyPic, desc: "PlinkyPlights is a game I independently made over the summer in Unity! I felt inspired by games such as Peak and Getting Over It, where one mistake could send you falling down several levels. The game is a 2D vertical platformer, with precise physics controls allowing users to drag and release to jump up. I'm really proud of this because it's my first game, and I handdrew/designed all the assets! Have fun reaching the top!", link: "https://benryhenry.itch.io/plinkyplights", brief: "A fast paced, vertical platfomer made in Unity!", lat: 40, lon: 105},
  {name: "IntoTime", pic: IntoTimePic, desc: "IntoTime is a project I designed, based on an original design piece by Rafaël Rozendaal. Her work features an infinitely partitioning screen of gradients that shift and shimmer over time. I wanted to replicate and edit/alter this artifact, so I came up with the idea of creating a 3D version of it. A click will change the colors on the screen, allowing you to see how the colors shimmer and change over time.", link: "https://hhenryli.github.io/IntoTime/", brief: "A graphic design project representing a time interface/artifact", lat: -30, lon: 25}
]

function toGlobe(latDeg, lonDeg, r) {
  const lat = THREE.MathUtils.degToRad(latDeg);
  const lon = THREE.MathUtils.degToRad(lonDeg);
  const x = r * Math.cos(lat) * Math.sin(lon);
  const y = r * Math.sin(lat);
  const z = r * Math.cos(lat) * Math.cos(lon);
  return new THREE.Vector3(x, y, z);
}

function Globe({ radius = 2.25 }) {

  return (
    <mesh>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial color="#ADD8E6" roughness={0.9} metalness={0.05} wireframe />
    </mesh>
  );
}

function Pins({ radius = 2.25, onSelect, selected }) {
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
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color={isHovered ? "#ff766d" : "#F74C3F"}
                emissive={isHovered ? "#ff3b30" : "#000000"}
                emissiveIntensity={isHovered ? 0.6 : 0}
              />
            </mesh>


            {isHovered && (
              <Html position={[0, 0, 0]}
              style={{pointerEvents: "none"}}
              >
                <div className="bg-black/70 text-white p-3 rounded w-[200px]">
                  <img src={p.pic} alt="" className="w-full rounded mb-2" />
                  <h1 className="text-xl font-garamond mb-1">{p.name}</h1>
                  <p className="text-sm font-garamond">{p.brief}</p>
                </div>
              </Html>
            )}
          </group>
        );
      })}
    </>
  );
}

function RotatedTotal( {radius = 2.25, onSelect, selected }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (selected) return;
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.x += delta * 0.03;
  });

  return (
    <group ref={groupRef}>
      <Globe radius={radius} />
      <Pins radius={radius} onSelect={onSelect} selected={selected}/>
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
    <div className='h-screen bg-[#070e17]'>
      <Nav />
      <Canvas   
        onPointerMissed={() => {
        setSelected(null);
      }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <MovingStars />

        <RotatedTotal radius={2.25} onSelect={setSelected} selected={selected}/>

        <OrbitControls enablePan={false} rotateSpeed={0.5} minDistance={4} maxDistance={10}/>
      </Canvas>

      {selected && (
        <div className={`cyber-panel ${selected ? "animate-in" : ""}`}>
          <div className="cyber-sweep" />
          <div className="cyber-scanlines" />
          <div className="cyber-notch" />

          <div className='img-container'>
            <img src={selected.pic} alt="" className="cyber-img" />
          </div>
          <div>
            <h2 className="cyber-title">{selected.name}</h2>
            <p className="cyber-body">{selected.desc}</p>
          </div>
          <a className='cyber-link' href={selected.link} target='_blank'>Check Out More</a>
        </div>
      )}

    </div>


  )
}