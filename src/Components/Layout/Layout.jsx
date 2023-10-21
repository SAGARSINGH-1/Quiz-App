import React, { useEffect, useState } from 'react'

import Footer from './Footer'
import Navbar from './Navbar'
import Home from '../Home/01-Home'
import {Outlet} from 'react-router-dom'

import { RaceBy } from '@uiball/loaders'

export default function Layout() {

  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate a 1-second delay
    const timeoutId = setTimeout(() => {
      setContentLoaded(true);
    },1);

    return () => {
      // Clear the timeout if the component unmounts before the delay completes
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <div>
      {isContentLoaded ? (
        <div className='overflow-hidden'>
          <div className='banner bg-indigo-400 text-white font-medium p-2'>
            <h3 className='text-center'>"Unlock Knowledge, One Question at a Time."</h3>
          </div>
          <div className='page'>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        </div>
      ) : (
        <RaceBy size={100} lineWeight={5} speed={1.4} color="black" />
      )}
    </div>

    {!isContentLoaded && <p className="text-center text-gray-500">Loading...</p>}
  </div>
  )
}




