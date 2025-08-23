import React from 'react'
import portrait from '../assets/portrait.svg'

export default function Potrait() {
  return (
    <div className="h-68 w-86 rounded-xl">
      <img src={portrait} alt="portrait" className="w-full h-full object-cover object-[center_30%] rounded-xl" />
    </div>
  )
}
