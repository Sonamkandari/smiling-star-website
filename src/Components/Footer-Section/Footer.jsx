import React from 'react'
//import css file here
import './Footer.css'
//import footer image here
//import user icon
import user_icon from '../../assets/user_icon.svg'


function Footer() {
  return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                  
                    <p>Smiling Star Private Limited is committed to building technology solutions that create meaningful social impact..</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                          
                    </div>
                </div>
             </div>
             <hr/>
              <div className="footer-bottom">
             <p className='footer-bottom-left'>© 2025 Smiling Star Private Limited. All rights reserved.</p>
             <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Us</p>
             </div>
           </div> 
     </div>
    
  )
}
export default Footer