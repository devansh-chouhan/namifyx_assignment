import React from 'react'
import ArrowIcon from './ArrowIcon'

export default function Contact() {
  return (
    <div className='h-56 mt-4 w-100 bg-[#F8AFA6] rounded-xl'>
      <div className='relative text-black'>
        <div className='absolute top-4 left-4'>
          <h1>have some</h1>
          <h1>questions</h1>
        </div>
        <div className='absolute top-6 right-4'>
          <ArrowIcon/>
        </div>
        <div className='absolute top-40 left-4 text-4xl font-semibold'>
          Contact me
        </div>
      </div>
    </div>
  )
}
