import Link from 'next/link'
import React from 'react'
import { SlCamrecorder } from "react-icons/sl";
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <nav className=" flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className='flex items-center gap-2'>
        <SlCamrecorder className='text-[32px] max-sm:size-10' />  
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Yoom</p>
      </Link>

      <div className="flex justify-between gap-5">
         <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar
