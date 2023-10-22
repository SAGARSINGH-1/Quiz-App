import React from 'react'
import Hero from './Hero'
import About from './About'
import Question from './AskQuestion'
import Topics from './Topics'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Hero />

      {/* About section */}
      <div className='flex justify-center p-5 gap-10 overflow-hidden'>
        <div className='img'>
          <img src="./assets/About.gif" alt="about" height='450px' width='450px' />
        </div>
        <div className='content p-5  mt-[8vh] w-[30vw] py-10' >
          <div className='text'>
            <h4 className='text-2xl text-indigo-500 font-semibold ml-5'> Lifelong Learning</h4>
            <h1 className='text-4xl font-semibold m-3'>Nurturing Curiosity Through Quizzes</h1>
            <p className='text-lg text-gray-500 m-5'>At our platform, we believe in the power of quizzes to enhance your learning adventure.</p>
          </div>
          <div>
            <button className='ml-10'>Know More</button>
          </div>
        </div>
      </div>
      <Topics title="Discover Tech Challenges Quizzes"/>
      <div className='flex justify-center'>
          <button className=''><NavLink to={'quizzes'}>And More</NavLink> </button>
      </div>
      <Question />
    </div>
  )
}
