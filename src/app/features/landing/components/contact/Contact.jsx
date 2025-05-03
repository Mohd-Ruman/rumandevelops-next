import React from 'react'
import ContactForm from './ContactForm.jsx'

const Contact = () => {
  return (
    <>
        <div className='mt-20 sm:mt-40'>

            <div>
                <h1 className='text-[32px] text-sm/tight sm:text-[64px] text-left font-orbitron font-extrabold'>
                GET IN TOUCH !
                </h1>
                <p className='text-[16px] font-outfit text-text-description'>
                    Great ideas are shaped by a conversation, Share with me what's on your mind.  
                </p>
            </div>

            <ContactForm/>

        </div>
       
    </>
  )
}

export default Contact