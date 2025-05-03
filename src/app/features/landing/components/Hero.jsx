import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className='flex flex-col w-full h-screen justify-center items-center'>

        <div className='flex flex-col mt-34 items-center justify-center gap-6 border-gradient-horizontal w-full pb-20 text-center'>
          
          {/* Image icon, Heading */}
          <div className='flex flex-col sm:flex-row w-full items-center justify-center gap-6'>
            <Image src="/lab-82-icon-white.svg" width={100} height={100} alt="Lab 82 icon"/>
            <div className='flex flex-col gap-2'>

              <h1 className='uppercase font-orbitron font-bold text-[32px] sm:text-[64px] -mt-4'>Mohd <span className='text-gradient'>Ruman</span></h1>

              <div className='flex flex-row -mt-4 items-center text-[18px] sm:text-[24px] gap-2'>
                <p className='text-text-description uppercase font-orbitron font-semibold'>Frontend developer</p>
                <p className='hidden font-orbitron sm:block'>/////////////</p>
              </div>

            </div>  
          </div>

          {/* Hero description */}
          <p className='text-center text-text-description font-medium font-outfit'>Sorcerer who <strong className='text-text-primary'>Blends</strong> design and development to
           <strong className='text-text-primary'> Build</strong> sleek,
           efficient, and highly interactive web applications. </p>

        </div>

        {/* 3 Words */}
        <div className='w-full gap-4 font-orbitron text-[16px] sm:text-[24px] px-[24px] sm:px-20 text-text-description flex flex-row sm:flex-row text-center items-center justify-between mt-10'>
          <p>DESIGN</p>
          <p>DEVELOP</p>
          <p>EVOLVE</p>
        </div>
        
      </div>
    </>
  )
}

export default Hero