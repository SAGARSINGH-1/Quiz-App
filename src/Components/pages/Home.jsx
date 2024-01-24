import React from 'react'
import Topics from '../requirements/Topics'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='overflow-x-visible overflow-y-visible'>
      <div>
      <div>
        <div className='flex md:flex-row flex-col-reverse text-center md:text-left justify-center p-3 overflow-visible'>
          <div className='text md:p-5 pt-10 mt-10' >
            <div className='md:w-[35vw]'>
              <p className='text-4xl m-2 text-purple-400 font-medium'>Welcome <span className='text-black'>To QUIZZY</span> </p>
              <h1 className='text-4xl m-2 '>Where Every <span className='text-indigo-500 font-semibold'>Questions</span></h1>
              <h1 className='text-4xl m-2'> is a Step Towards</h1>
              <h1 className='text-5xl m-2 '>Mastery</h1>
              <p className='md:m-4 mt-10 text-gray-400 text-lg'> Get Ready to Test Your Knowledge, Elevate Embark on a Journey of Discovery, Wisdom, and Fun through Our Enriching World of Quizzes  </p>
            </div>
            <div className='md:ml-7 mt-12'>
              <NavLink to={'/quizzes'} className='button'>Get Started</NavLink>
            </div>

          </div>
          <div className='img mt-10 md:mt-0'>
            <img src="./assets/img.webp" alt="hero-img" height="550px" width="550px" />
          </div>
        </div>
      </div>
    </div>

      {/* About section */}
      <div className='flex md:flex-row flex-col-reverse mt-10 md:mt-0 justify-center p-5 md:gap-10 overflow-visible'>
        <div className='img'>
          <img src="./assets/About.gif" alt="about" height='450px' width='450px' />
        </div>
        <div className='content md:p-5  md:mt-[8vh] md:w-[30vw] md:py-10' >
          <div className='text'>
            <h4 className='text-2xl text-indigo-500 font-semibold ml-5'> Lifelong Learning</h4>
            <h1 className='text-4xl font-semibold m-3'>Nurturing Curiosity Through Quizzes</h1>
            <p className='text-lg text-gray-500 m-5 mb-9'>At our platform, we believe in the power of quizzes to enhance your learning adventure.</p>
          </div>
          <div className='flex justify-center items-center'>
            <NavLink to={'/help'} className='button ml-10'>Know more</NavLink>
          </div>
        </div>
      </div>
      <Topics title="Discover Tech Challenges Quizzes"/>
      <div className='flex justify-center'>
          <button className=''><NavLink to={'/quizzes'}>And More</NavLink> </button>
      </div>
      <div>
      <div className='md:flex md:p-5 justify-center bg-indigo-500 mt-10 overflow-visible'>
            <div className='text md:m-5 p-5 md:w-[40vw]' >
                <h1 className='text-5xl font-semibold m-5 text-white'>Still Have Questions?</h1>
                <p className='m-6 text-gray-300 mb-12'>Don't hesitate, Feel free to ask we're here to help!</p>
                <NavLink to={'/contact'} className='btn ml-10 mt-5 bg-yellow-400 hover:bg-yellow-300 text-slate-900'>Ask Here</NavLink>
            </div>

            <div className='img pb-3 md:pb-0 '>
                <img src="./assets/Bottom.webp" alt=""  height='300px' width="300px"/>
            </div>
      </div>
    </div>
    </div>
  )
}
