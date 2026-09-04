import React from 'react';
import Nav from './Nav.jsx';
import plinkycover from '../assets/games/plinkyplights/cover.webp';
import rpgcover from '../assets/games/mousestopper/cover.webp';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import Sides from './Sides.jsx';

export default function Play() {
  return (
    <div className='padding  min-h-screen '>
      <Nav compact />
        <Sides />
      <Footer />
    </div>
  )
}