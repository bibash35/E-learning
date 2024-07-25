import React from 'react'
import "./adminstyle.css";
import Sidebar from './Sidebar';


export default function AdminPanel({children}) {
  return (
    <>
        <div className='dashboard'>
        <Sidebar/>
        <div className="dashboard--content">
        <div className="flex justify-center items-center">
        {children}
        </div>
        </div>
        </div>
    </>
  )
}
