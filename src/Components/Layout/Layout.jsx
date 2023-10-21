import React from 'react'

import Footer from './Footer'
import Navbar from './Navbar'
import Home from '../Home/01-Home'
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <div> 
      <div className='banner bg-indigo-400 text-white font-medium p-2'>
            <h3 className='text-center'>"Unlock Knowledge, One Question at a Time."</h3>
      </div>
        <Navbar />
            <Outlet />
        <Footer />
       
    </div>
  )
}
