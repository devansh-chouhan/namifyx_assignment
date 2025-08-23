import React from 'react'
import FlowerIntro from './FlowerIntro'

export default function Intro() {
  return (
    <div className="relative bg-[#FADCD9] h-68 w-126 rounded-xl">
      <FlowerIntro />
      <div className='top-24 left-6 absolute'>
        <h1><span className='font-bold text-4xl text-black'>Artist Redefining</span></h1>
        <h1 className='text-4xl text-black'><span className='font-thin italic'>Architecture</span> <span className='font-bold'>with</span></h1>
        <h1 className='font-bold text-4xl text-black'>AI-Driven Design</h1>
      </div>
    </div>
  )
}
