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
