import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isClicked, setClicked] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClick = () => {
    setClicked(true);
  };

  const Logout = () => {
    setClicked(false);
    setDropdownOpen(false);
  }

  return (
    <div className=''>
      <nav className='md:p-3 py-3 md:w-[100vw]'>
        <div className='flex justify-between md:max-w-6xl mx-auto relative'>
          <div className='img mt-2 px-1 md:px-0 md:ml-0 ml-1'>
            <NavLink to={''}><img src="./assets/logo-b.png" alt="logo" height="100px" width="100px" /></NavLink>
          </div>
          <div className='link absolute bottom-[-45px] md:bottom-0 text-white w-[100vw] md:w-auto bg-indigo-500 md:bg-transparent md:static py-2 md:py-0'>
            <ul className='flex justify-center items-center gap-4 md:gap-10 md:text-base font-medium md:mt-2 poppins md:text-gray-500'>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={''} className={({ isActive }) => `${isActive ? "md:text-indigo-500" : ""}`}>Home</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'/quizzes'} className={({ isActive }) => `${isActive ? "md:text-indigo-500" : ""}`}>Quizzes</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'/about'} className={({ isActive }) => `${isActive ? "md:text-indigo-500" : ""}`}>About</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "md:text-indigo-500" : ""}`}>Contact Us</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'/help'} className={({ isActive }) => `${isActive ? "md:text-indigo-500" : ""}`}>Help</NavLink> </li>
            </ul>
          </div>
          {isClicked ? (
            <div className="relative cursor-pointer custom-dropdown">
              <div className="selected-option text-md md:mr-0 mr-2 font-md:semibold text-indigo-500 flex mt-1 no-select  md:text-xl" onClick={toggleDropdown}><span className='md:m-3 mx-1 md:mt-[6px] mt-[5px]'><FaUserAlt /></span>
                Hey! Manu
              </div>
              {isDropdownOpen && (
                <div className="dropdown-options">
                  <button className="text-sm md:text-[1rem] absolute option-button md:w-[100%] z-10" onClick={Logout}>
                    Logout
                  </button>
                </div>
              )}
            </div>

          ) : (
            <button className='text-sm md:text-[1rem] md:mr-0 mr-2' onClick={handleClick}>Sign up</button>
          )}
        </div>
      </nav>
    </div>
  )
}
