import React from 'react'
import {AiFillGithub , AiFillLinkedin } from 'react-icons/ai'
import {FaXTwitter} from 'react-icons/fa6'


export default function Footer() {
  return (
    <div className='bg-black text-white'>
      <div className='max-w-7xl mx-auto'>
            <div className='footer flex justify-evenly gap-[15vw]'>
                <div className='info p-10 w-[30vw]'>
                    <div className='img'>
                        <img className='img-color' src="./assets/logo.png" alt="" height='150px' width='150px' />
                    </div>
                    <div className='text text-lg text-gray-500 my-3 font-normal'>
                        <p>Engage, Educate, and Entertain Yourself: Explore a World of Quizzes to Boost Your Knowledge and Skills.</p>
                    </div>

                    <div className='my-5'>
                        <ul className='flex gap-5 text-base font-semibold mt-2 poppins'>
                            <li className='hover:text-yellow-200 cursor-pointer'>Home</li>
                            <li className='hover:text-yellow-200 cursor-pointer'>Features</li>
                            <li className='hover:text-yellow-200 cursor-pointer'>Blog</li>
                            <li className='hover:text-yellow-200 cursor-pointer'>Help</li>
                            <li className='hover:text-yellow-200 cursor-pointer'>Privacy</li>
                        </ul>
                    </div>
                </div>

                <div className='btns p-5 my-auto'>
                    <img src="./assets/Foot-img.webp" alt=""  height='200px' width='200px'/>
                </div>
            </div>

            <hr className='max-w-5xl mx-auto' />

            <div className='subfoot flex justify-around m-5'>
                <div className='copyright'>
                    <p>@ 2045 Copyright Content</p>
                </div>

                <div className='social'>
                    <ul className='flex gap-5 text-base font-semibold poppins mb-2 text-white h-8 w-8'>
                        <li className='cursor-pointer hover:text-pink-400'><AiFillGithub className='h-6 w-6'/> </li>
                        <li className='cursor-pointer hover:text-pink-400'><AiFillLinkedin className='h-6 w-6' /></li>
                        <li className='cursor-pointer hover:text-pink-400'><FaXTwitter className='h-6 w-6' /></li>
                    </ul>
                </div>
            </div>
      </div>
    </div>
  )
}
