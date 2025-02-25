import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='text-sm max-w-screen-xl mx-auto text-[12px] md:text-[14px] flex flex-col md:flex-row px-5 md:items-center justify-between py-8'>
        <div className='flex items-center gap-1'>
            <FaRegCopyright /> 2024 HomeownersBenifit. All rights reserved 
        </div>
        
        <ul className='flex gap-3 md:gap-5'>
            <li>Terms</li>
            <li>|</li>
            <li>Privacy Policy</li>
            <li>|</li>
            <li>Licence Information</li>
        </ul>
    </footer>
  )
}

export default Footer