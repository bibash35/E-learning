import React from 'react'
import { BiSearch,BiNotification } from "react-icons/bi";

export default function ContentHeader() {
  return (
    <>
        <div className='content--header'>
<h1 className="header--title">Dashboard</h1>
<div className="header--activity">
    <div className="search-box">
        <input type="text" placeholder='Search Anything Here'/>
        <BiSearch className='search-icon'/>
    </div>
    <div className="notify">
        <BiNotification className='notify-icon' />

    </div>
</div>
        </div>

    </>
  )
}
