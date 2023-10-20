import React from 'react'

export default function Question() {
  return (
    <div>
      <div className='flex p-5 justify-center bg-indigo-500 mt-10'>
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
  )
}
