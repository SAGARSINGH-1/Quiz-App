import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { PiChatsCircleFill } from 'react-icons/pi';

export default function About() {
  return (
    <div className='h-[100vh] font-poppins flex flex-col pt-10 items-center bg-[url(/assets/about-bg.jpg)] bg-cover bg-opacity-50'>
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
  );
}
