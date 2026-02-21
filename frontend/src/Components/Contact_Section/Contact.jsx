import React, { useState } from "react";
import "./Contact.css";

import location_icon from "../../assets/location_icon.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    // Web3Forms access key from .env
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    // Optional but recommended
    formData.append("subject", "New Contact Message - Smiling Star");
    formData.append("from_name", "Smiling Star Website");

    try {
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
    } catch (error) {
      setResult("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
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

        {/* RIGHT SIDE – FORM */}
        <div className="contact-form-card">
          <form onSubmit={onSubmit}>
            {/* Honeypot field (anti-spam) */}
            <input
              type="text"
              name="botcheck"
              style={{ display: "none" }}
            />

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

            <button
              type="submit"
              className="contact-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result && <p className="form-status">{result}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;