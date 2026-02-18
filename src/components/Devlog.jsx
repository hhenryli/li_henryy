import {React} from 'react';
import { Link } from 'react-router-dom';
import plinkycover from '../assets/plinkyplights/devlog_page.png';
import rpgcover from '../assets/RPG/devlog_sign.png';
import Nav from './Nav.jsx';

export default function Devlog() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-2 grid-flow-col gap-4 p-6">
          {/*Devlog Card  */}
          <div>
            <div className="relative">
              <Link
              to="/devlog/rpg"
              >
                <img src={rpgcover} className="w-full rounded cursor-pointer border-5 absolute -translate-x-1/2 left-1/2 top-4/7 transition-transform duration-250 hover:-translate-y-2"></img>
              </Link>
            </div>
          </div>

          <div>
            <div className="relative">
              <Link
              to="/devlog/plinky"
              >
                <img src={plinkycover} className="w-full rounded cursor-pointer border-2 absolute -translate-x-1/2 left-1/2 top-4/7 transition-transform duration-250 hover:-translate-y-2"></img>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}