import React from 'react';
import { useLocation } from 'react-router-dom';

function Error() {
  const location = useLocation();

  return (
    <div className='p-10 md:p-0 flex flex-col justify-center items-center h-[70vh]'>
      <h2 className='md:text-5xl md:my-10'>404 - Not Found</h2>
      <p className='md:text-3xl text-gray-600 md:text-[#3b3c49]'>The page for URL "{location.pathname}" does not exist.</p>
    </div>
  );
}

export default Error;