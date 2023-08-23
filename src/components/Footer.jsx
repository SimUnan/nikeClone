import React from 'react'

import {footerLogo} from '../assets/images/index'
import {facebook, twitter, instagram, copyrightSign} from '../assets/icons/index'

import {footerLinks} from '../constants/index'

const Footer = () => {
    return (
        <footer id='contact-us' className='bg-black padding-x padding-t pb-8'>
            <div className='max-container flex items-start justify-between max-lg:flex-col gap-20 text-white'>
                <div className='flex flex-col items-start gap-5'>
                    <img src={footerLogo} alt="footer Logo" className='w-[150px]'/>
                    <p className='sm:max-w-sm text-base font-montserrat text-gray-400 leading-normal'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                    <div className='mt-8 flex items-center justify-center gap-5'>
                        <img src={facebook} alt="footerFacebookLogo" className='bg-white p-3 rounded-full'/>
                        <img src={twitter} alt="footerTwitterLogo" className='bg-white p-3 rounded-full'/>
                        <img src={instagram} alt="footerInstagramLogo" className='bg-white p-3 rounded-full'/>
                    </div>
                </div>
                <div className='flex flex-1 flex-wrap items-starts justify-between lg:gap-10 gap-20'>
                    {footerLinks.map((footerLink) => (
                        <div className='flex-1 flex flex-wrap flex-col items-start'>
                            <h1 className='text-2xl font-montserrat'>{footerLink.title}</h1>
                            <div className='mt-7 flex flex-col items-start justify-center gap-3'>
                                {footerLink.links.map((link) => (
                                    <p className='text-gray-300 font-montserrat text-[17px] cursor-pointer hover:text-slate-gray'>{link.name}</p> 
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='max-container mt-16 font-montserrat text-white-400 flex items-center justify-between max-sm:flex-col max-sm:gap-y-3'>
                <div className='flex items-center justify-center gap-2 cursor-pointer'>
                    <img src={copyrightSign} alt="" />
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className='cursor-pointer'>Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer
