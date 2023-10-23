import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {FaUserAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <nav className='p-3 w-[100vw]'>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div className='img'>
              <img src="./assets/logo.png" alt="logo" height="120px" width="120px" />
          </div>
          <div className='link'>
            <ul className='flex gap-10 text-base font-medium mt-2 poppins text-gray-500'>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={''} className={({isActive})=>`${isActive? "text-red-600":""}`}>Home</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'quizzes'} className={({isActive})=>`${isActive? "text-red-600":""}`}>Quizzes</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'about'} className={({isActive})=>`${isActive? "text-red-600":""}`}>About</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'contact'} className={({isActive})=>`${isActive? "text-red-600":""}`}>Contact Us</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'help'} className={({isActive})=>`${isActive? "text-red-600":""}`}>Help</NavLink> </li>
            </ul>
          </div>
          <div className='w-[15%]'>
             {isClicked ? (
                <h2 className='text-xl font-semibold text-indigo-500 flex mt-1'><span className='m-3 mt-1.5'><FaUserAlt /></span>Hey! Manu</h2>
              ) : (
                <button onClick={handleClick}>Sign up</button>
              )}
          </div>
        </div>
      </nav>
    </div>
  )
}
