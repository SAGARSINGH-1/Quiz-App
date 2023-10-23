import React, { useEffect, useState } from 'react'

import Footer from './Footer'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'

import { RaceBy } from '@uiball/loaders'

export default function Layout() {

  const [isContentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContentLoaded(true);
    },1000);

    return () => {
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
        <RaceBy size={100} lineWeight={5} speed={1.4} color="#3f83f8" />
      )}
    </div>

    {!isContentLoaded && <p className="text-center text-gray-500 mt-5">Loading...</p>}
  </div>
  )
}




