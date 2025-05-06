import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
        <div className='mt-20 sm:mt-40 card-bg p-8 gap-8 flex flex-col'>
    
            <div className='flex flex-row items-center gap-2'>
                <Image 
                    src="/lab-82-icon-white.svg" 
                    width={42}
                    height={42} 
                    alt='Lab 82 Icon'/>
                <h1 className='text-[24px] font-orbitron font-semibold'>Ruman Develops</h1>
            </div>

            <p className='text-[16px] font-outfit text-text-description text-center'>@ 2025 Mohd Ruman. All rights reserved.</p>
            
        </div>
    </>
  )
}

export default Footer