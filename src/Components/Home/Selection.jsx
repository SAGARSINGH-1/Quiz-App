import React from 'react'
import Topicform from './Topic-form'
import Topics from './Topics'

export default function Selection() {
  return (
    <div>
        <div className='max-w-7xl flex  mx-auto overflow-x-auto overflow-y-hidden'>
            <div className='form mt-10'>
                <Topicform/>
            </div>
            <div>
                <Topics title="Tech Quiz Genre Selection"/>
            </div>
        </div>
    </div>
  )
}
