import React from 'react'
import Image from 'next/image'

const Love = () => {
  return (
    <>
        <div className='flex mt-20 items-center justify-center'>
        <h1 className='font-orbitron text-[64px] items-center sm:text-[64px] text-center flex uppercase'>
            I l<Image className='w-[72px] h-[72px] sm:w-[72px] sm:h-[72px] animate-heart ' src="/pixel-heart.svg" width={72} height={72} alt='Pixel heart image'/>ve</h1>
        </div>
    </>
  )
}

export default Love