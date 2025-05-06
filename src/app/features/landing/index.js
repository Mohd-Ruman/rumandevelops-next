import React from 'react';

import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Love from './components/Love.jsx';
import TextMarquee from './components/TextMarquee.jsx';
import Skills from './components/skills/Skills.jsx';
import TextMarqueeRight from './components/TextMarqueeRight.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/Footer.jsx';

const LandingPage = () => {
  return (
    <>
      {/* <h1>Lvl 2 : LandingPage index</h1> */}
      <Navbar className="z-0"/>
      <div className='px-[24px] sm:px-[44px]'>
        <Hero/>
        <About/>
        <Love/>
        <TextMarquee className=""/>
        <TextMarqueeRight/>
        <Skills/>
        <Contact/> 
        
      </div>
      <Footer/>
      <h1 className='h-[400px] mt-40'>This is bottom</h1>
    </>
  )
}

export default LandingPage