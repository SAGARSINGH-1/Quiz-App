import React from 'react'

export default function Hero() {
  return (
    <div>
      <hero>
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
      </hero>
    </div>
  )
}
