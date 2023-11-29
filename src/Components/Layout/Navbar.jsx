import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import Login from '../pages/Login'


export default function Navbar() {
  const [isClicked, setClicked] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleClick = () => {
    setClicked(true);
  };

  const Logout=()=>{
    setClicked(false);
    setDropdownOpen(false);
  }

  return (
    <div>
      <nav className='p-3 w-[100vw]'>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div className='img mt-2'>
            <NavLink to={''}><img src="./assets/logo-b.png" alt="logo" height="100px" width="100px" /></NavLink>
          </div>
          <div className='link'>
            <ul className='flex gap-10 text-base font-medium mt-2 poppins text-gray-500'>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={''} className={({ isActive }) => `${isActive ? "text-indigo-500" : ""}`}>Home</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'/quizzes'} className={({ isActive }) => `${isActive ? "text-indigo-500" : ""}`}>Quizzes</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'/about'} className={({ isActive }) => `${isActive ? "text-indigo-500" : ""}`}>About</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "text-indigo-500" : ""}`}>Contact Us</NavLink> </li>
              <li className='hover:text-pink-400 cursor-pointer'><NavLink to={'/help'} className={({ isActive }) => `${isActive ? "text-indigo-500" : ""}`}>Help</NavLink> </li>
            </ul>
          </div>
          {isClicked ? (
            <div className=" relative cursor-pointer custom-dropdown">
              <div className="selected-option text-xl font-semibold text-indigo-500 flex mt-1 no-select" onClick={toggleDropdown}><span className='m-3 mt-1.5'><FaUserAlt /></span>
                <Login handleLogout={Logout} />
              </div>
              {isDropdownOpen && (
                <div className="dropdown-options">
                </div>
              )}
            </div>

          ) : (
            <button onClick={handleClick}>Sign up</button>
          )}
        </div>
      </nav>
    </div>
  )
}
