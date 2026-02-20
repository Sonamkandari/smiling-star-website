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
      <h1><span>Technology That Drives Sustainable Development</span> Technology for Social Cause</h1>
      
      {/* brief description */}
      <p>
        Smiling Star Private Limited is a technology‑driven social impact organization focused on creating Tech for Good solutions that address real‑world challenges across education, sustainability, inclusion, and community development.
We partner with NGOs, educational institutions, social enterprises, and impact‑led organizations to design and deliver digital platforms, software systems, and data‑driven tools that advance sustainable development and long‑term social value.
Our work directly supports global goals such as Quality Education (SDG 4), Industry, Innovation & Infrastructure (SDG 9), Reduced Inequalities (SDG 10), Sustainable Cities & Communities (SDG 11), and Climate Action (SDG 13).

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
