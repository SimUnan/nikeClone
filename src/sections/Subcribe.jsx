import React from 'react'

const Subcribe = () => {
    return (
        <section className='padding-x sm:py-32 py-16 w-full'>
            <div className='mt-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12'>
                <h1 className='flex-1 text-4xl font-bold font-palanquin'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h1>
                <div className='w-full flex-1 flex max-sm:flex-col items-center justify-between sm:border-[1px] border-slate-gray rounded-full max-sm:gap-5 px-3 py-2'>
                    <input type="text" placeholder='subscribe@nike.com' className='pl-10 font-montserrat flex-1 max-sm:w-full  focus:outline-none max-sm:px-8 max-sm:py-5 max-sm:border-[1px] max-sm:border-slate-gray max-sm:rounded-full'/>
                    <button className='max-sm:hidden bg-coral-red text-white px-8 py-3 rounded-full text-lg font-montserrat'>Sign Up</button>
                    <button className='hidden max-sm:block w-full bg-coral-red text-white px-8 py-5 rounded-full text-lg font-montserrat'>Sign Up</button>
                </div>
            </div>
        </section>
    )
}

export default Subcribe
