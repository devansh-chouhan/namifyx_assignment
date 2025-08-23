import React from 'react'
import Section from './Section'
import Aside from './Aside'

export default function Main() {
  return (
    <div className="mt-4 h-128 rounded-xl flex text-white">
        <Section/>
        <Aside/>
    </div>
  )
}
