import React from 'react'
import { star } from '../assets/icons'

const PopularProductsCard = ({imgURL, name, price}) => {
    return (
        <div className='flex-1 flex-col w-full max-sm:w-full'>
            <img src={imgURL} alt="img" className='w-full'/>
            <div className='mt-5 flex justify-start gap-2.5'>
                <img src={star} alt="star" width={24} height={24}/>
                <p className='text-slate-gray font-palanquin text-xl'>(4.5)</p>
            </div>
            <div className='flex flex-col items-start justify-center gap-1 mt-5'>
                <h1 className='text-2xl font-montserrat font-semibold'>{name}</h1>
                <p className='text-xl font-palanquin font-semibold'>{price}</p>
            </div>
        </div>
    )
}

export default PopularProductsCard
