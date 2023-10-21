import React from 'react';
import { useLocation } from 'react-router-dom';

function Error() {
  const location = useLocation();

  return (
    <div className='flex flex-col justify-center items-center h-[70vh]'>
      <h2 className='text-5xl my-10'>404 - Not Found</h2>
      <p className='text-3xl text-[#D0D6F9]'>The page for URL "{location.pathname}" does not exist.</p>
    </div>
  );
}

export default Error;