import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { PiChatsCircleFill } from 'react-icons/pi';
import Swipper from '../requirements/Swipper';
import {RiTwitterXFill} from 'react-icons/ri';
import {GiChainedHeart} from 'react-icons/gi';



export default function About() {

  return (
    <>
      <div className='h-[100vh] font-poppins flex flex-col pt-10 items-center bg-[url(./assets/about-bg.jpg)] bg-cover bg-opacity-50'>
        <h2 className='text-[28px] text-gray-700 font-semibold'>Our Mission</h2>
        <h1 className='text-indigo-500 text-[74px] font-bold mt-[-15px]'>Motivate every student</h1>
        <div className='text-center w-[80%] mt-6 flex flex-col gap-4 justify-center items-center'>
          <p className='w-[700px]'><span className='text-xl text-indigo-500 font-semibold'>Quizzy</span> is more than gamified quizzes. We are assessment, instruction, and practice that motivate every student to mastery.
          </p>
          <p className='w-[900px]'>Quizzy is your gateway to a world of knowledge, trivia, and entertainment. Whether you're a student looking to enhance your learning experience or someone who enjoys testing their knowledge, our app is designed to cater to all ages and interests.</p>
        </div>
        <div className='text-center mt-10 text-[32px] w-[725px] font-semibold'>
          <p className=''>
            <span className='text-pink-600'><FaUserAlt className='inline-block mb-2' />&nbsp;50M+</span>
            &nbsp;people, in&nbsp;
            <span className='text-blue-800'><BsGlobe className='inline-block mb-2' />&nbsp;150+</span>
            &nbsp;countries answering&nbsp;
            <span className='text-[#2d9da6]'><PiChatsCircleFill className='inline-block mb-2' />&nbsp;50M</span>
            &nbsp; questions/day.
          </p>
        </div>
      </div>

      {/* Review */}

      <div className='max-h-max flex font-poppins text-white flex-col flex-wrap justify-center items-center bg-indigo-500'>
        <h2 className='text-[38px] font-semibold  py-7'>Reviews from our trusted users</h2>
        <div className='w-[100%] h-[100%] flex justify-around items-center mb-3'>
          <div className='w-[40%] h-[100%] text-center'>
            <h1 className='text-3xl font-bold py-5'>We Love Our Users' Reviews <GiChainedHeart className='inline text-yellow-400 text-4xl'/></h1>
            <p className='text-gray-100 text-xl pb-5'>Here's what some of our amazing users have to say about their Quizzy experience. We're thrilled to share their feedback with you.</p>
            <button className='mt-2 bg-yellow-400 hover:bg-yellow-300 text-slate-900'>Write your own <RiTwitterXFill className='inline mb-1 text-lg'/></button>
          </div>
          <div className='h-[300px] w-[400px]'>
            <Swipper />
          </div>
        </div>
      </div>
    </>
  );
}
