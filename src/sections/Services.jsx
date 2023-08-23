import React from 'react'

import ServiceCard from '../components/ServiceCard.jsx'

import {services} from '../constants/index.js'

const Services = () => {
    return (
        <section className='padding-x max-container py-10 mt-16'>
            <div className='flex items-center justify-center gap-10 flex-wrap'>
                {services.map((service) => (
                    <ServiceCard {...service}/>
                ))}
            </div>
        </section>
    )
}

export default Services
