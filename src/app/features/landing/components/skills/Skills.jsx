import React from 'react'
import Image from 'next/image'

import SkillsObject from './SkillsObject.js'

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

        {/* Cards Container */}
        <div className='mt-8 flex flex-wrap sm:flex-row gap-8'>
          {/* Cards Mapped */}
          {
            SkillsObject.map((skill, index) => (
              <div className='w-[150px] h-[150px] rounded-[12px] card-bg border-outline border-[1px]
              flex flex-col items-center justify-center
              ' key={index}>
                <Image  
                  className={`w-[100px] h-[100px] object-contain`}
                  src={skill.icon} 
                  alt={skill.description} 
                  width={100} 
                  height={100}
                   />

                <p className='text-[14px] font-outfit font-semibold text-text-description'>{skill.title}</p>
              </div>
            ))
          }

          
          
             
            
          

        </div>

      </div>
    </>
  )
}

export default Skills


{/* Card Non Mapped*/}
{/* <div className='w-[150px] h-[150px] rounded-[12px] card-bg border-outline border-[1px]
flex flex-col items-center justify-center
'>
  <Image src="/skills/html.png" alt="Html icon" width={100} height={100}  />
  <p className='text-[14px] font-outfit font-semibold text-text-description'>HTML</p>
</div> */}