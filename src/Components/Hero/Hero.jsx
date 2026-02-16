import React from 'react'
// import the css file in this Hero component
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
      {/* add profile image here */}
      <img src={profile_img} alt='' />
      
      {/* main heading with name and title */}
      <h1><span>Building Technology That Creates Social Impact,</span> Technology for Social Cause</h1>
      
      {/* brief description */}
      <p>
      We design and deliver technology solutions that empower communities and support meaningful social causes.
      </p>
      
      <div className='hero-action'>
        {/* here we will create two action buttons */}
        <div className='hero-connect'>
          <AnchorLink
            className='anchor-link'
            offset={50}
            href='#contact'
          >
           Connect with Us
          </AnchorLink>
        </div>

        
      </div>
    </div>
  )
}

export default Hero
