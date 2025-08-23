import React from 'react'
import ArrowIcon from './ArrowIcon'
import scenerio from '../assets/scenerio.svg'

export default function Work() {
    return (
        <div className='h-108 w-114 bg-[#FADCD9] rounded-xl p-4 text-black'>
            <div className='flex justify-between'>
                <h1 className='text-black font-semibold'>Musea</h1>
                <ArrowIcon />
            </div>
            <img src={scenerio} alt="portrait" className="w-108 h-46 mt-2 object-cover object-[center_top%] rounded-xl" />
            <div className='h-[0.2vw] rounded-xl w-full my-4 bg-[#F8AFA6]'></div>
            <h1 className='font-bold text-base'>Elara</h1>
            <div className='h-[0.2vw] rounded-xl w-full my-4 bg-[#F8AFA6]'></div>
            <h1 className='font-bold text-base'>Verve</h1>
            <div className='h-[0.2vw] rounded-xl w-full my-4 bg-[#F8AFA6]'></div>
            <h1 className='font-bold text-base'>Zephyr</h1>

        </div>
    )
}
