import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

export default function Section() {
  return (
    <section className="h-128 w-220 rounded-xl">
        <SectionOne/>
        <SectionTwo/>
    </section>
  )
}
