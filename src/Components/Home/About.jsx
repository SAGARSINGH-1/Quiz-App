import React from 'react'

export default function About() {
  return (
    <div>
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
    </div>
  )
}