import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className='p-3 w-[100vw]'>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div className='img'>
              <img src="./assets/logo.png" alt="logo" height="120px" width="120px" />
          </div>
          <div className='link'>
            <ul className='flex gap-10 text-base font-medium mt-2 poppins text-gray-500'>
              <li className='hover:text-pink-400 cursor-pointer'>Home</li>
              <li className='hover:text-pink-400 cursor-pointer'>Quizzes</li>
              <li className='hover:text-pink-400 cursor-pointer'>About</li>
              <li className='hover:text-pink-400 cursor-pointer'>Contact Us</li>
              <li className='hover:text-pink-400 cursor-pointer'>Help</li>
            </ul>
          </div>
          <div>
            <button className='prima' >Sign up</button>
          </div>
        </div>
      </nav>
    </div>
  )
}
