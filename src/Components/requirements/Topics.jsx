import React, { useState } from 'react'
import { Category } from '../Data';

export default function Topics(props) {
    const[topic, setTopic] = useState(Category);
    function handle(title){
        console.log(title)
    }
  return (
    <div>
      <div className='md:p-5 max-w-7xl mx-auto overflow-hidden'>
            <div className='text-center m-5'>
                <h1 className='text-4xl font-semibold'>{props.title}</h1>
                <p className='text-xl text-gray-400 m-5'>Test Your Skills With our topics with a varity of questions set for beginners and senior alike</p>
            </div>

            <div className='cards md:flex justify-center flex-wrap'>
                {
                    topic.map((item) =>{
                        return(
                            <div key={item.id} className='relative m-3 md:w-[20vw] h-[20vh] overflow-hidden hover:bg-gray-400 transition rounded-lg cursor-pointer'  onClick={() => handle(item.title)}>
                                <div className='dark-opacity'>{item.background}</div>
                                <div className='absolute top-[-20px] left-0 w-full h-full flex items-center justify-center object-cover img-color'>{item.icon}</div>
                                <div className='absolute top-5 left-0 flex items-center justify-center w-full h-full font-semibold text-xl mt-3 text-gray-200 '>{item.title}</div>
                            </div>  
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
