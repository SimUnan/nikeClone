import React from 'react'

import PopularProductsCard from '../components/PopularProductsCard.jsx'

import {products} from '../constants/index.js'

const PopularProducts = () => {
    return (
        <section id="products" className='padding max-container'>
            <div className='mt-16 w-full max-sm:w-full flex flex-col items-start justify-center'>
                <h1 className='text-4xl font-bold font-montserrat'>Our <span className='text-coral-red'>Popular</span> Products</h1>
                <p className='text-xl text-slate-gray font-palanquin lg:max-w-xl mt-8'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.</p>
                <div className='w-full mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-lg:gap-6 gap-10 items-center justify-center'>
                    {products.map((product) => (
                        <PopularProductsCard key={product.name} {...product}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularProducts
