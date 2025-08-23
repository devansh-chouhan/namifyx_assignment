import React from 'react'
import CircleIcon from './CircleIcon'

export default function About() {
  return (
    <div className='mt-4 h-56 w-112 bg-[#FADCD9] rounded-xl relative'>
      <CircleIcon/>
      <div className='h-30 w-60 top-16 left-4 absolute text-black'>
        Julia Huang is an innovative AI artist, renowned for blending cutting-edge technology with creative expression. Based in LA, she crafts unique digital art experiences accessible globally.
      </div>
    </div>
  )
}
