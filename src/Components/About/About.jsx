import React from 'react'
//importing about.cc file here
import './About.css'
//importing a theme pattern image
import theme_pattern from '../../assets/theme_pattern1.svg'
//importing a profile image
function About() {
  return (
    <div id='about' className='about'>
        {/*lets add the html structure for this About component */}
        <div className="about-tittle">
            <h1>About Us</h1>
            <img src={theme_pattern} alt="" />
        </div>
         {/* creating a self section */}
         <div className="about-sections">
           
            <div className="right-section">
                {/* we will write some */}
                <div className="about-para">
                    <p>Smiling Star Private Limited specializes in delivering scalable and impactful technology solutions tailored for social causes. Our expertise lies in building reliable digital systems, user-friendly web platforms, and data-driven solutions that empower communities and organizations. We focus on innovation, accessibility, and long-term social impact.</p>
                  
                 </div>
                 <div className="about-skills">
                   <div className="about-skill"><p>Web Application Development</p><hr style={{width:"80%"}}/></div>
                   <div className="about-skill"><p>Technology Solutions for Social Impact</p><hr style={{width:"60%"}}/></div>
                   <div className="about-skill"><p>Scalable System Design</p><hr style={{width:"70%"}}/></div>
                   <div className="about-skill"><p>Data & Database Management</p><hr style={{width:"50%"}}/></div>
                 </div>
            </div>
         </div>
        <div className="about-achievements">
           <div className="about-achievement">
            <h1>Solutions Delivered</h1>
            <p>Web & digital platforms for social causes</p>
           </div>
            <hr/>
           <div className="about-achievement">
            <h1>Technology Focus</h1>
            <p>Web, databases, scalable systems</p>
            
           </div>
           <hr/>
           <div className="about-achievement">
            <h1>Social Impact</h1>
            <p>Education, awareness, and accessibility</p>
           </div>
        </div> 
    </div>
  )
}

export default About