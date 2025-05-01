import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <>
      <div className='mt-20'>
        
        <h1 className='text-[32px] text-left font-orbitron font-bold'>
          SKILLS POSSESSED
        </h1>
        <p className='text-[16px] font-outfit text-text-description'>
          Technologies and there brief of important concepts i know. 
        </p>

        <div className='mt-8'>

          {/* Card */}
          <div className='w-[150px] h-[150px] rounded-[12px] card-bg border-outline border-[1px]
          flex flex-col items-center justify-center
          '>
            <Image src="/skills/html.png" alt="Html icon" width={100} height={100}  />
            <p className='text-[14px] font-outfit font-semibold text-text-description'>HTML</p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Skills