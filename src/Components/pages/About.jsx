import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { PiChatsCircleFill } from 'react-icons/pi';
import Swipper from '../requirements/Swipper';
import {RiTwitterXFill} from 'react-icons/ri';
import {GiChainedHeart} from 'react-icons/gi';
import { NavLink } from 'react-router-dom'

export default function About() {

  return (
    <>
      <div className='md:h-[100vh] font-poppins flex mt-8 md:mt-0 flex-col pt-10 items-center bg-[url(./assets/about-bg.jpg)] bg-cover bg-opacity-50'>
        <h2 className='md:text-[28px] text-[1.5rem] text-gray-700 font-semibold'>Our Mission</h2>
        <h1 className='text-indigo-500 text-[1.8rem] md:text-[74px] font-bold md:mt-[15px]'>Motivate every student</h1>
        <div className='text-center md:w-[80%] mt-6 flex flex-col md:gap-4 justify-center items-center'>
          <p className='md:w-[700px] p-6'><span className='text-xl text-indigo-500 font-semibold'>Quizzy</span> is more than gamified quizzes. We are assessment, instruction, and practice that motivate every student to mastery.
          </p>
          <p className='md:w-[900px] p-2'>Quizzy is your gateway to a world of knowledge, trivia, and entertainment. Whether you're a student looking to enhance your learning experience or someone who enjoys testing their knowledge, our app is designed to cater to all ages and interests.</p>
        </div>
        <div className='text-center md:text-3xl text-xl mb-3 md:mb-0 bg-gray-300 md:bg-transparent py-2 md:py-0 mt-10 text-[32px] md:w-[725px] font-semibold'>
          <p className=''>
            <span className='text-pink-600'><FaUserAlt className='inline-block mb-2' />&nbsp;several</span>
            &nbsp;people, in&nbsp;
            <span className='text-blue-800'><BsGlobe className='inline-block mb-2' />&nbsp;different</span>
            &nbsp;countries answering&nbsp;
            <span className='text-[#2d9da6]'><PiChatsCircleFill className='inline-block mb-2' />&nbsp;many</span>
            &nbsp; questions/day.
          </p>
        </div>
      </div>

      {/* Review */}

      <div className='md:max-h-max md:flex font-poppins text-center text-white flex-col flex-wrap justify-center items-center bg-indigo-500'>
        <h2 className='md:text-[38px] text-3xl p-4 font-semibold md:py-7 '>Reviews from our trusted users</h2>
        <div className='md:w-[100%] md:h-[100%] flex md:flex-row flex-col justify-around items-center mb-3'>
          <div className='md:w-[40%] h-[100%] text-center'>
            <h1 className='text-3xl font-bold py-5'>We Love Our Users' Reviews <GiChainedHeart className='inline text-yellow-400 text-4xl'/></h1>
            <p className='text-gray-100 text-xl pb-5  md:px-0 px-3'>Here's what some of our amazing users have to say about their Quizzy experience. We're thrilled to share their feedback with you.</p>
            <NavLink to={'https://twitter.com/'} target='_blank' className='mt-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900 btn'>Write your own <RiTwitterXFill className='inline mb-1 text-lg'/></NavLink>

          </div>
          <div className='md:h-[300px] h-[350px] w-[350px] md:w-[400px]'>
            <Swipper />
          </div>
        </div>
      </div>
    </>
  );
}
