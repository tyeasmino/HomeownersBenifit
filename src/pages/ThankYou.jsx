import React from 'react'
import ThankYouCard from '../components/ThankYouCard'
import Introduction from '../components/Introduction'

const ThankYou = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex gap-48 items-center justify-between'>
            <div className='w-1/2'>
                <Introduction />
            </div>

            <div className='w-1/2'>
                <ThankYouCard />
            </div>
        </div>
    )
}

export default ThankYou