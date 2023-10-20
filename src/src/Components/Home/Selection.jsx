import React from 'react'
import Topicform from './Topic-form'
import Topics from './Topics'

export default function Selection() {
  return (
    <div>
        <div className='max-w-7xl flex  mx-auto'>
            <div className='form mt-10'>
                <Topicform/>
            </div>
            <div>
                <Topics/>
            </div>
        </div>
    </div>
  )
}
