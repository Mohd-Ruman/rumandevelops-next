import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
    <div className='relative'>

    
        <div className='flex w-full flex-row justify-between items-center 
        border-t-[1px] border-b-[1px] fixed border-white/20 backdrop-blur-sm p-4'>


            <Image src="/lab-82-icon-white.svg" width={62} height={62} alt='Lab-82 Icon'/>
                <div className='z-10 hidden sm:flex flex-row gap-20 font-orbitron text-[14px] font-semibold uppercase'>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Skills</p>
                    <div>
                        <p>Lab-82</p>
                    </div>
                </div>

            <div className='w-1/2 z-0 h-full rounded-full blur-[100px] bg-accent-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
            <div className='w-1/5 z-0 h-1/2 rounded-full blur-[50px] bg-accent-secondary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>

            <div className='font-orbitron font-semibold'>RV1</div>

        </div>
        </div>
    </>
  )
}

export default Navbar