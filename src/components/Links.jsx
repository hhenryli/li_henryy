import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
  return (
    <ul className="flex flex-col ml-8 mt-20 1space-x-20 text-sm">
      <li><Link to="/about" className="text-gray-800">Work</Link></li>
      <li><Link to="/illustration" className="text-gray-800">About</Link></li>
      <li><Link to="/projects" className="text-gray-800">Contact</Link></li>
      <li><Link to="/games" className="text-gray-800">Games</Link></li>
  </ul>
  );
}