'use client'

import React, { useState } from 'react'

const SkillsDetail = ( {skillName, skillDescription}) => {

  

  return (
    <>
       <div className='card-bg hidden md:flex md:flex-col rounded-[12px] w-[50%] p-8 '>

        <div className='flex flex-row justify-between'>
          <div className='flex flex-row gap-2'>
            <div className='w-[18px] h-[18px] rounded-full bg-accent-primary'></div>
            <div className='w-[18px] h-[18px] rounded-full bg-accent-primary/80'></div>
            <div className='w-[18px] h-[18px] rounded-full bg-accent-primary/60'></div>
            <div className='w-[18px] h-[18px] rounded-full bg-accent-primary/40'></div>
          </div>
          <p className='font-outfit'>{skillName}</p>
        </div>

        <div className='w-full h-10 mt-4 border-t-1 border-outline'>
        </div>

        <p className='font-outfit font-medium text-gray-400' style={{ whiteSpace: 'pre-line' }}>
          {skillDescription}
        </p>

       </div>
    </>
  )
}

export default SkillsDetail