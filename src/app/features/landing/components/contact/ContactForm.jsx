"use client"
import React, { useState } from 'react'

import { useForm } from 'react-hook-form'

const ContactForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    // const onSubmit = data => console.log(data);

    const onSubmit = async (data) => {
        setLoading(true);
        setStatus('');

        try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            setStatus('Message sent successfully!');
            reset();
        } else {
            const { error } = await res.json();
            setStatus(`Error: ${error}`);
        }
        } catch (error) {
        setStatus('Something went wrong. Try again later.');
        }

        setLoading(false);
    };


    console.log(watch("example")); // watch input value by passing the name of it
    
    

  return (
    <div className='w-full flex flex-col sm:w-1/2 font-outfit mt-20 gap-8'>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='flex flex-col sm:flex-row sm:justify-between gap-8'>

                <div className='flex flex-col w-full py-2 border-b-[1px] border-b-accent-primary'>
                    <label>
                        Full Name <span className='text-accent-primary font-bold text-[18px] '>*</span>
                    </label>
                    <input 
                        {...register("fullName")}
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
                        {...register("email")}
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
                    {...register("message")}
                    placeholder='Write your message here...'
                    className=' outline-hidden pb-8'
                    type='text'
                    />
            </div>

            <button 
                className='py-2 px-4 bg-gray-900 mt-8 rounded-[12px] border-gradient-left border-[2px]'
                type='submit'>
                Send Your Message
            </button>
        </form>

    </div>
  )
}

export default ContactForm