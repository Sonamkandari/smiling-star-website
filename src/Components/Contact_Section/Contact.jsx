// import React, { useState } from 'react'; 
// //import css file here
// import './Contact.css';
// //import the pattern image here
// import theme_pattern from '../../assets/theme_pattern1.svg'
// // importing some icons
// import location_icon from '../../assets/location_icon.svg'
// import mail_icon from '../../assets/mail_icon.svg'
// import call__icon from '../../assets/call_icon.svg'

// function Contact() {
  
//   const [result, setResult] = useState('');

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");

//     const formData = new FormData(event.target);
//     formData.append("access_key", "2d872372-272c-4f51-9718-db8068a1f401"); 

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message || "Submission failed.");
//     }
//   };

//   return (
//     <div id='contact' className="contact">
//       <div className="contact-title">
//         <h1>Get in touch</h1>
//         <img src={theme_pattern} alt='' />
//       </div>

//       <div className="Contact-sections">
//         <div className="Contact-left">
//           <h1>Let's talk</h1>
//           <p>I'm currently free to take on work. If you have any project or role that fits, I'd love to hear from you!</p>
//           <div className="Contact-details">
//             <div className="Individual-Detail">
//               <img src={mail_icon} alt='' /><p>Smilingstar12@smilingstar.com</p>
//             </div>
//             <div className="Individual-Detail">
//               <img src={call__icon} alt='' /><p>+91 9876543210</p>
//             </div>
//             <div className="Individual-Detail">
//               <img src={location_icon} alt='' /><p>Noida, Uttar Pradesh</p>
//             </div>
//           </div>
//         </div>

//         <form onSubmit={onSubmit} className="Contact-right">
//           <label htmlFor='name'>Your Name</label>
//           <input id='name' type='text' placeholder='Enter your name' name='name' required />
//           <label htmlFor='email'>Your Email</label>
//           <input id='email' type='email' placeholder='Enter your email' name='email' required />
//           <label htmlFor='message'>Write Your Message here</label>
//           <textarea id='message' name='message' rows="8" placeholder='Enter your message' required></textarea>
//           <button type='submit' className='Contact-Submit'>Submit now</button>
//           <p>{result}</p>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contact;

// import React, { useState } from 'react';
// import './Contact.css';
// import theme_pattern from '../../assets/theme_pattern1.svg';
// import location_icon from '../../assets/location_icon.svg';
// import mail_icon from '../../assets/mail_icon.svg';
// import call_icon from '../../assets/call_icon.svg';

// function Contact() {

//   const [result, setResult] = useState('');

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult('Sending...');

//     const formData = new FormData(event.target);
//     formData.append('access_key', '2d872372-272c-4f51-9718-db8068a1f401');

//     const response = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult('Thank you for reaching out. We will get back to you shortly.');
//       event.target.reset();
//     } else {
//       setResult(data.message || 'Submission failed. Please try again.');
//     }
//   };

//   return (
//     <section id="contact" className="contact">

//       {/* Section Title */}
//       <div className="contact-title">
//         <h1>Connect With Us</h1>
//         <img src={theme_pattern} alt="" />
//       </div>

//       <div className="contact-sections">

//         {/* Left Content */}
//         <div className="contact-left">
//           <h1>Let’s Collaborate</h1>
//           <p>
//             Smiling Star works with NGOs, educational institutions, and
//             impact-focused organizations to build technology solutions for
//             social good. If you’re interested in partnering with us or learning
//             more about our work, we’d love to hear from you.
//           </p>

//           <div className="contact-details">
//             <div className="individual-detail">
//               <img src={mail_icon} alt="" />
//               <p>contact@smilingstar.com</p>
//             </div>

//             <div className="individual-detail">
//               <img src={call_icon} alt="" />
//               <p>+91 98765 43210</p>
//             </div>

//             <div className="individual-detail">
//               <img src={location_icon} alt="" />
//               <p>Noida, Uttar Pradesh, India</p>
//             </div>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form onSubmit={onSubmit} className="contact-right">

//           <label htmlFor="name">Your Name</label>
//           <input
//             id="name"
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//           />

//           <label htmlFor="email">Your Email</label>
//           <input
//             id="email"
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//           />

//           <label htmlFor="message">Your Message</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="7"
//             placeholder="Tell us about your organization or initiative"
//             required
//           />

//           <button type="submit" className="contact-submit">
//             Send Message
//           </button>

//           {result && <p className="form-status">{result}</p>}
//         </form>

//       </div>

//     </section>
//   );
// }

// export default Contact;



import React, { useState } from "react";
import "./Contact.css";

import theme_pattern from "../../assets/theme_pattern1.svg";
import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "2d872372-272c-4f51-9718-db8068a1f401");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for reaching out. We’ll get back to you shortly.");
      event.target.reset();
    } else {
      setResult(data.message || "Submission failed. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact">

      {/* Section Heading */}
      <div className="contact-title">
        <h1>Connect With Us</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Main Content */}
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Let’s Collaborate</h2>
          <p>
            Smiling Star works with NGOs, educational institutions, and
            impact-driven organizations to build technology solutions for
            social good. We’d love to explore how we can work together.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <img src={mail_icon} alt="email" />
              <span>contact@smilingstar.com</span>
            </div>

            <div className="contact-item">
              <img src={call_icon} alt="phone" />
              <span>+91 98765 43210</span>
            </div>

            <div className="contact-item">
              <img src={location_icon} alt="location" />
              <span>Noida, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – FORM CARD */}
        <div className="contact-form-card">
          <form onSubmit={onSubmit}>

            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>Your Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your organization or initiative"
              required
            />

            <button type="submit" className="contact-submit">
              Send Message
            </button>

            {result && <p className="form-status">{result}</p>}
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
