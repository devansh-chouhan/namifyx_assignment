import React from 'react'
import Intro from './Intro'
import Potrait from './Potrait'

export default function SectionOne() {
  return (
    <div className='h-68 w-220 flex gap-4'>
        <Intro/>
        <Potrait/>
    </div>
  )
}
