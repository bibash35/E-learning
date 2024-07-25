import React from 'react'
import { BiHome,BiBookAlt,BiBook } from "react-icons/bi";
import { GiTeamIdea } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";

export default function Sidebar() {
  return (
<>
<div className='menu'>
<div className="logo">
<BiBookAlt  className='logo-icon'/>
<a href="/" className='font-bold text-2xl text-[#27374d]'>
Scholar    
  </a>
</div>
<div className="menu--list">
  <a href="/index" className='item'>
    <BiHome  className='icon'/>
    Dashboard
  </a>
  <a href="/addfaq" className='item'>
    <FaQuestion  className='icon'/>
    FAQ
  </a>
  <a href="/addcoursespages" className='item'>
    <BiBook  className='icon'/>
    Courses
  </a>
  <a href="/add-team" className='item'>
  <GiTeamIdea className='icon' />
Teams
  </a>
  <a href="/addeventpages" className='item'>
  <MdEvent className='icon' />
  Events
  </a>
</div>
</div>
</>
  )
}
