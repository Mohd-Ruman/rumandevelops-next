import React from "react";

const About = () => {
  return (
    <>
        <div className="sm:px-20">
          <h1 className='text-[32px] text-left font-orbitron font-bold'>
          ABOUT ME
        </h1>
        <p className='text-[16px] font-outfit text-text-description'>
          A very brief overview of me, but you can always know more. 
        </p>
        </div>

      <div className="mt-10 flex flex-col justify-between sm:px-20 sm:flex sm:flex-row gap-6">
        
        <p className="font-outfit mt-10 sm:mt-0 text-text-description sm:w-1/2">
          Hey, I’m <span className="text-text-primary font-bold">Mohd Ruman</span><br/> 
          <br/>
          A digital sorcerer conjuring full-stack web apps
          with the power of the MERN stack and the speed of <span className="text-text-primary font-bold">Next.
          <span className="text-orange-400 font-bold">js</span></span>. I blend
          design and development to craft sleek, efficient, and highly
          interactive user experiences that feel as smooth as magic. <br/><br/> From
          <span className="text-text-primary font-bold"> authentication flows</span> and 
          <span className="text-text-primary font-bold"> RESTful APIs </span>to pixel-perfect interfaces
          styled with <span className="text-text-primary font-bold"> Tailwind </span>
          <span className="text-cyan-300 font-bold"> CSS </span>, I bring ideas to life with clean code and a
          sharp eye for detail. I thrive on building 
          <span className="text-text-primary font-bold"> Fast & Scalable solutions </span>
          that not only work great, but look great too.<br/><br/> I’m always leveling up,
          exploring new tools, and seeking that next big challenge. Whether it’s
          building components, designing systems, or just writing beautiful
          code, <span className="text-text-primary font-bold">I’m here for it.</span>
        </p>
        <h1 className="font-outfit mt-10 sm:mt-0 font-semibold text-[32px] sm:w-fit sm:text-right ">Let's create something <span className="text-gradient"><br/>legendary !</span></h1>
      </div>
    </>
  );
};

export default About;
