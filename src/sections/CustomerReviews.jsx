import React from 'react'

import {customer1, customer2} from '../assets/images/index'
import {star} from '../assets/icons/index'

import {reviews} from '../constants/index.js'

const CustomerReviews = () => {
    return (
        <section className='bg-pale-blue padding mt-16'>
            <div className='max-container'>
                <div className='flex flex-col items-center justify-center gap-16'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-4xl font-bold font-palanquin'>What Our <span className='text-coral-red'>Customers</span> Say?</h1>
                        <p className='text-xl text-slate-gray w-[80%] max-sm:w-full max-sm:text-start text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
                    </div>
                    <div className='flex max-lg:flex-col flex-wrap items-center justify-around max-lg:gap-16 gap-12 mt-8'>
                        {reviews.map((review) => (
                            <div className='flex-1 xl:max-w-[30%] max-lg:max-w-[60%] max-sm:min-w-full flex flex-col items-center justify-center gap-5'>
                                <img src={review.imgURL} alt="" className='w-[120px] h-[120px] rounded-full object-center'/>
                                <p className='text-xl text-center font-montserrat text-slate-gray leading-normal'>{review.feedback}</p>
                                <p className='flex items-center justify-center gap-3 text-xl text-slate-gray font-palanquin'><img src={star} alt="" /> ({review.rating})</p>
                                <h1 className='text-2xl font-bold font-montserrat'>{review.customerName}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CustomerReviews
