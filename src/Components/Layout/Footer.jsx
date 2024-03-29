import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import {AiOutlineStar} from 'react-icons/ai'


export default function Footer() {
    return (
        <div className='bg-black text-white'>
            <div className='max-w-7xl mx-auto'>
                <div className='footer flex justify-evenly gap-[15vw]'>
                    <div className='info p-10 md:w-[30vw]'>
                        <div className='img'>
                            <NavLink to={''}><img src="./assets/logo-wh.png" alt="logo" height="130px" width="130px" /></NavLink>   
                        </div>
                        <div className='text text-lg text-gray-500 my-3 font-normal'>
                            <p>Engage, Educate, and Entertain Yourself: Explore a World of Quizzes to Boost Your Knowledge and Skills.</p>
                        </div>

                        <div className='md:my-5'>
                            <ul className='flex flex-col gap-5 text-base font-semibold mt-2 poppins'>
                                <NavLink to={''} className='hover:text-yellow-200 cursor-pointer'>Home</NavLink>
                                <NavLink to={'/help'} className='hover:text-yellow-200 cursor-pointer'>Features</NavLink>
                                <li className='hover:text-yellow-200 cursor-pointer'>Blog</li>
                                <NavLink to={'/help'} className='hover:text-yellow-200 cursor-pointer'>Help</NavLink>
                                <NavLink to={'/help'} className='hover:text-yellow-200 cursor-pointer'>Privacy</NavLink>
                            </ul>
                        </div>
                    </div>

                    <div className='btns p-5 my-auto hidden md:block'>
                        <img src="./assets/Foot-img.webp" alt="" height='200px' width='200px' />
                    </div>
                </div>

                <hr className='max-w-5xl mx-auto' />

                <div className='subfoot flex justify-around mt-3'>
                    <div className='copyright'>
                        <p>@ 2045 Copyright Content</p>
                    </div>

                    <div className='social'>
                        <NavLink target='_blank' to={'https://github.com/SAGARSINGH-1/Quiz-App'} className='cursor-pointer hover:text-yellow-200 inline font-semibold border p-[2px] px-[3px] rounded-md hover:border-yellow-200'><AiOutlineStar className='inline mb-1 text-xl'/> Star on <AiFillGithub className='h-6 w-6 inline mb-1' /></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
