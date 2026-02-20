// import React from 'react'
// // import the css file in this Hero component
// import './Hero.css'
// import profile_img from '../../assets/profile.png'
// import AnchorLink from 'react-anchor-link-smooth-scroll'

// function Hero() {
//   return (
//     <div id='home' className='hero'>
//       {/* add profile image here */}
//       <img src={profile_img} alt='' />
      
//       {/* main heading with name and title */}
//       <h1><span>Technology That Drives Sustainable Development</span> Technology for Social Cause</h1>
      
//       {/* brief description */}
//       <p>
//         Smiling Star Private Limited is a technology‑driven social impact organization focused on creating Tech for Good solutions that address real‑world challenges across education, sustainability, inclusion, and community development.
// We partner with NGOs, educational institutions, social enterprises, and impact‑led organizations to design and deliver digital platforms, software systems, and data‑driven tools that advance sustainable development and long‑term social value.
// Our work directly supports global goals such as Quality Education (SDG 4), Industry, Innovation & Infrastructure (SDG 9), Reduced Inequalities (SDG 10), Sustainable Cities & Communities (SDG 11), and Climate Action (SDG 13).

//       </p>
      
//       <div className='hero-action'>
//         {/* here we will create two action buttons */}
//         <div className='hero-connect'>
//           <AnchorLink
//             className='anchor-link'
//             offset={50}
//             href='#contact'
//           >
//            Connect with Us
//           </AnchorLink>
//         </div>

        
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <section id="home" className="hero">
      
      {/* Hero Image */}
      <img src={profile_img} alt="Smiling Star" className="hero-img" />

      {/* Eyebrow */}
      <span className="hero-eyebrow">Tech for Good</span>

      {/* Main Heading */}
      <h1 className="hero-title">
        <span>Building Technology</span> for Social Impact
        
      </h1>

      {/* Description */}
      <p className="hero-description">
        Smiling Star Private Limited is a purpose-led technology company
        creating scalable digital solutions for education, inclusion,
        sustainability, and community development.
      </p>

      {/* SDG Tags */}
      <div className="hero-sdgs">
        <span>SDG 4 · Quality Education</span>
        <span>SDG 9 · Innovation & Infrastructure</span>
        <span>SDG 10 · Reduced Inequalities</span>
        <span>SDG 11 · Sustainable Communities</span>
        <span>SDG 13 · Climate Action</span>
      </div>

      {/* CTA */}
      <div className="hero-action">
        <AnchorLink className="hero-connect" offset={50} href="#contact">
          Connect with Us
        </AnchorLink>
      </div>

    </section>
  )
}

export default Hero