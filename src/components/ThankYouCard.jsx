import React from 'react'
import { Link } from 'react-router'


const ThankYouCard = () => {
    return (
        <section className='text-black p-4'>
            <div className='flex flex-col gap-5 bg-white rounded-3xl mx-auto my-[20px] px-12 py-20'>
                <div className='w-fit flex flex-col gap-5 justify-center mx-auto'>
                    <h1 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className='text-[22px] font-semibold text-center '>Thank you for your response</h1>
                    <h1 className='text-center h-[1px] w-full bg-black'></h1>
                </div>

                <div className='flex flex-col gap-5'>
                    <h5 className='font-semibold text-[16px] '>You're about to save estimated <br />18,000 USD.</h5>
                    <h6 className='font-semibold text-[14px]'>We'll contact with you soon with <br /> proper credentials.</h6>
                </div>

                <div className='text-center my-7'>
                    <Link to='/' style={{ fontFamily: "'Space Grotesk', sans-serif" }} className='bg-[#033E8A] hover:bg-white hover:text-[#033E8A] hover:border hover:border-[#033E8A] transition-all duration-300 ease-in-out font-semibold text-sm text-white px-6 py-2.5 rounded-full'>Back To Home</Link>
                </div>
            </div>
        </section>
    )
}

export default ThankYouCard