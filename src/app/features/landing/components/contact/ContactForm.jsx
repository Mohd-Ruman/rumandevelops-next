import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full flex flex-col sm:w-1/2 font-outfit mt-20 gap-8'>

        <div className='flex flex-col sm:flex-row sm:justify-between gap-8'>

            <div className='flex flex-col w-full py-2 border-b-[1px] border-b-accent-primary'>
                <label>
                    Full Name <span className='text-accent-primary font-bold text-[18px] '>*</span>
                </label>
                <input 
                    placeholder='Enter your Full Name'
                    className=' outline-hidden'
                    type='text'
                    />
            </div>
            <div className='flex flex-col w-full py-2 border-b-[1px] border-b-accent-primary'>
                <label>
                    Email <span className='text-accent-primary font-bold text-[18px] '>*</span>
                </label>
                <input 
                    placeholder='Enter your Email address'
                    className=' outline-hidden'
                    type='email'
                    />
            </div>

        </div>

        <div className='flex flex-col w-full py-2 border-b-[1px] border-b-accent-primary'>
            <label>
                Message <span className='text-accent-primary font-bold text-[18px] '>*</span>
            </label>
            <input 
                placeholder='Write your message here...'
                className=' outline-hidden pb-8'
                type='text'
                />
        </div>

        <button className='py-2 px-4 bg-gray-900 mt-8 rounded-[12px] border-gradient-left border-[2px]'>
            Send Your Message
        </button>

    </div>
  )
}

export default ContactForm