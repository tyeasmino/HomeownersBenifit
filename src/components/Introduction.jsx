import React from 'react'

const Introduction = () => {
  return (
    <section className='flex flex-col gap-10 md:gap-20 my-5 md:my-44'>
        <h1 className='text-[24px] md:text-[48px] font-bold'>
            Power Your Home.  
            Empower Your Future.
            Switch to Solar Today!
        </h1>

        <ul className='list-disc ml-1 text-[11px] md:text-[16px] '>
            <li>Experience Lower Electricity Bills with Solar Power</li>
            <li>Clean Energy Independence. Invest in a Greener Future</li>
            <li>Transform Your Roof into a Revenue Stream. Monetize Surplus Solar Energy Through Grid Export</li>
        </ul>
    </section>
  )
}

export default Introduction