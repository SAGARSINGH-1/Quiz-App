import React from 'react'
import Topics from '../requirements/Topics'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <div>
      <div>
        <div className=' flex justify-center p-3 overflow-hidden'>
          <div className='text p-5 pt-10 mt-10' >
            <div className='w-[35vw]'>
              <p className='text-4xl m-2 text-purple-400 font-medium'>Welcome To antaira</p>
              <h1 className='text-4xl m-2 '>Where Every <span className='text-indigo-500 font-semibold'>Questions</span></h1>
              <h1 className='text-4xl m-2'> is a Step Towards</h1>
              <h1 className='text-5xl m-2 '>Mastery</h1>
              <p className='m-4 mt-10 text-gray-400 text-lg'> Get Ready to Test Your Knowledge, Elevate Embark on a Journey of Discovery, Wisdom, and Fun through Our Enriching World of Quizzes  </p>
            </div>
            <div className='ml-5'>
              <button className='m-5'>Get Started</button>
            </div>

          </div>
          <div className='img'>
            <img src="./assets/img.webp" alt="hero-img" height="550px" width="550px" />
          </div>
        </div>
      </div>
    </div>

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
      <div>
      <div className='flex p-5 justify-center bg-indigo-500 mt-10 overflow-hidden'>
            <div className='text m-5 p-5 w-[40vw]' >
                <h1 className='text-5xl font-semibold m-5 text-white'>Still Have Questions?</h1>
                <p className='m-6 text-gray-300'>Don't hesitate, Feel free to ask we're here to help!</p>
                <button className='ml-10 mt-5 bg-yellow-400 hover:bg-yellow-300 text-slate-900'>Ask Here</button>
            </div>

            <div className='img'>
                <img src="./assets/Bottom.webp" alt=""  height='300px' width="300px"/>
            </div>
      </div>
    </div>
    </div>
  )
}
