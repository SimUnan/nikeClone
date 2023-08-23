import React from 'react'

const ServiceCard = ({imgURL ,label, subtext}) => {
    return (
        <div className='cursor-default  bg-white py-14 px-8 rounded-xl shadow-2xl flex-1 flex flex-col items-start justify-center gap-4'>
            <img src={imgURL} alt="" className='bg-coral-red w-12 h-12 p-2 rounded-full'/>
            <h1 className='text-2xl font-semibold font-montserrat'>{label}</h1>
            <p className='text-slate-gray text-lg font-palanquin'>{subtext}</p>
        </div>
    )
}

export default ServiceCard
