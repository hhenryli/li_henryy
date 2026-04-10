import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
      <Link to="/" className="text-gray-800 hover:underline font-garamond absolute text-xl left-0 justify-center flex ml-8 mt-6 z-50">
        henry li 
      </Link>
  );
}
