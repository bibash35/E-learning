import React from 'react';
import { Link } from 'react-router-dom';
import {  BiBookAlt, BiBook } from "react-icons/bi";
import { GiTeamIdea } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      <div className='menu'>
        <div className="logo">
          <BiBookAlt className='logo-icon' />
          <Link to="/" className='font-bold text-2xl text-[#27374d]'>
            Scholar
          </Link>
        </div>
        <div className="menu--list">
          
          <Link to="/addfaq" className='item'>
            <FaQuestion className='icon' />
            FAQ
          </Link>
          <Link to="/addcoursespages" className='item'>
            <BiBook className='icon' />
            Courses
          </Link>
          <Link to="/add-team" className='item'>
            <GiTeamIdea className='icon' />
            Teams
          </Link>
          <Link to="/addeventpages" className='item'>
            <MdEvent className='icon' />
            Events
          </Link>
        </div>
      </div>
    </>
  );
}
