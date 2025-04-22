import React from 'react';

import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';

const LandingPage = () => {
  return (
    <>
      {/* <h1>Lvl 2 : LandingPage index</h1> */}
      <Navbar className="z-0"/>
      <Hero/>
    </>
  )
}

export default LandingPage