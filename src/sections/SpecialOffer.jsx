import React from 'react'

import {offer} from '../assets/images/index'
import {arrowRight} from '../assets/icons/index'

const SpecialOffer = () => {
    return (
        <section className='padding max-container mt-16'>
            <div className='flex max-xl:flex-col-reverse items-center justify-center flex-wrap gap-10'>
                <img src={offer} alt="" className='xl:w-6/12'/>
                <div className='flex-1 flex flex-col items-start justify-center gap-8'>
                    <h1 className='text-4xl font-bold font-palanquin'><span className='text-coral-red'>Special</span> Offer</h1>
                    <p className='text-lg text-slate-gray -mt-4 leading-normal font-montserrat'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                    <p className='text-lg text-slate-gray leading-normal font-montserrat'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                    <div className='flex items-center justify-start flex-wrap max-lg:gap-4 gap-10'>
                        <button className='bg-coral-red px-10 py-4 rounded-full border-[1px] border-coral-red text-white text-lg font-montserrat flex items-center justify-center'>Shop now <img src={arrowRight} alt="arrow" className='ml-3'/> </button>
                        <button className='bg-white px-10 py-4 rounded-full text-slate-gray text-lg font-montserrat border-[1px] border-slate-gray flex items-center justify-center'>Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SpecialOffer
