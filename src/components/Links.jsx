import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Links() {
  return (
    <ul className="flex flex-col ml-8 mt-20 1space-x-20 font-garamond text-3xl">
      <li><Link to="/about" className="text-gray-800">about</Link></li>
      <li><Link to="/illustration" className="text-gray-800">illustration</Link></li>
      <li><Link to="/projects" className="text-gray-800">projects</Link></li>
      <li><Link to="/games" className="text-gray-800">games</Link></li>
      <li><Link to="/misc" className="text-gray-800">misc</Link></li>
  </ul>
  );
}