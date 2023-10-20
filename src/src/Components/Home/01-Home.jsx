import React from 'react'
import Hero from './Hero'
import About from './About'
import Selection from './Selection'
import Question from './AskQuestion'

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Selection />
      <Question />
    </div>
  )
}
