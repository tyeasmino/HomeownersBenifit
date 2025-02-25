import React from 'react'
import Introduction from '../components/Introduction' 
import FormCard from '../components/FormCard'

const Home = () => {
    return (
        <div className='max-w-screen-xl px-4 mx-auto flex flex-col md:flex-row md:gap-48 items-center justify-between'>
            <div className='w-full md:w-1/2'>
                <Introduction />
            </div>

            <div className='w-full md:w-1/2'>
                <FormCard />
            </div>
        </div>
    )
}

export default Home