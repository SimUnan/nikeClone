import React from 'react'

import {shoe8} from '../assets/images/index.js'

const SuperQuality = () => {
    return (
        <section id="about-us" className='padding max-container mt-16 flex max-sm:flex-col items-center justify-around gap-10'>
            <div className='flex-1 flex flex-col items-start justify-center gap-4'>
                <h1 className='text-4xl font-bold font-palanquin leading-normal max-sm:leading-[3.8rem]'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
                <p className='text-lg max-sm:text-base leading-normal text-slate-gray font-montserrat'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, inovation, and a touch of elegance.</p>
                <p className='mt-4 text-lg max-sm:text-base leading-normal text-slate-gray font-montserrat'>Our dedication to detail and excellence ensures your satisfaction.</p>
                <button className='bg-coral-red px-10 py-3 rounded-full text-lg text-white'>View details</button>
            </div>
            <div className='flex-1'>
                <img src={shoe8} alt="" className='w-full h-full p-2 xl:w-4/5'/>
            </div>
        </section>
    )
}

export default SuperQuality
