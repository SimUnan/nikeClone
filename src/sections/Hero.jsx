import React, { useState } from 'react'

import ShoeCard from '../components/ShoeCard.jsx'

import { statistics, shoes } from '../constants/index.js'
import { bigShoe1 } from '../assets/images/index.js'

const Hero = () => {

    const [bigShoe, setBigShoe] = useState(bigShoe1)

    return (
        <section id="home" className='xl:padding-l wide:padding-r padding-b w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
            <div className='relative xl:w-2/5 flex flex-col flex-wrap justify-center items-start w-full max-xl:padding-x pt-28'>
                <p className='text-lg text-coral-red font-montserrat'>Our Summer collections</p>
                <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] leading-normal font-bold'>
                    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
                    <br />
                    <span className='text-coral-red mt-3'>Nike</span> Shoe
                </h1>
                <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
            
                <div className='flex items-center justify-center gap-8'>
                    {statistics.map((item) => (
                        <p className='flex flex-col items-start justify-center leading-[5px]'>
                            <span className='font-bold font-montserrat text-4xl max-sm:text-3xl'>{item.value}</span>
                            <span className='text-slate-gray text-lg max-sm:text-base'>{item.label}</span>
                        </p>
                    ))}
                </div>
            </div>

            <div className='relative flex-1 flex items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
                <img src={bigShoe} alt="" width={610} height={500} className='object-contain relative z-10' />

                {/* card */}
                <div className='absolute flex items-center justify-center max-sm:gap-2 px-1 gap-4 w-full -bottom-[5%]'>
                    {shoes.map((item) => (
                        <div key={item}>
                            <ShoeCard 
                                imgUrl={item}
                                changeBigShoeImage={
                                    (item) => {setBigShoe(item)}
                                }
                                bigShoeImg={bigShoe}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    )
}

export default Hero
