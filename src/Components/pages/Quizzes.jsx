import React from 'react'
import Topicform from '../requirements/Topic-form'
import Topics from '../requirements/Topics'

export default function Quizzes() {
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
