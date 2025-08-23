import React from 'react'

export default function Navbar() {
    return (
        <nav className="w-full h-20 bg-[#FADCD9] rounded-xl flex justify-between items-center px-8">
            <h1 className='text-xl'><span className="italic font-thin">JULIA</span> <span className="font-semibold">HUANG</span></h1>
            <div className="flex gap-8">
                <h1 className='font-thin'>PROJECTS</h1>
                <h1 className='font-thin'>ABOUT</h1>
                <h1 className='font-thin'>CONTACT</h1>
            </div>
        </nav>
    )
}
