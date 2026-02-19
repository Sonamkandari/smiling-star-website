import React from "react";
import "./Footer.css";

import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

// IMPORT SOCIAL DATA
import mysocial from "../../assets/mysocial";

function Footer() {
  return (
    <>
      {/* ================= CTA SECTION ================= */}
      <section className="cta-section">
        <h2>Join Smiling Star Today</h2>
        <p>
          Be part of Smiling Star’s journey to create meaningful social impact
          through technology, education, and compassion.
        </p>

        <button className="cta-btn">Become a Smiling Star Volunteer</button>

        <div className="cta-info">
          <div>
            <img src={mail_icon} alt="email" />
            <span>connect@smilingstar.org</span>
          </div>
          <div>
            <img src={call_icon} alt="phone" />
            <span>+91 9XXXXXXXXX</span>
          </div>
          <div>
            <img src={location_icon} alt="location" />
            <span>India</span>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-content">

          {/* Brand */}
          <div className="footer-brand">
            <h3>Smiling Star</h3>
            <p>
              Smiling Star Private Limited is committed to building technology
              solutions that create meaningful and inclusive social impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>About Us</li>
              <li>Our Vision</li>
              <li>Programs</li>
              <li>Impact</li>
              <li>Get Involved</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Stories of Change</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="footer-newsletter">
            <h4>Connect With Us</h4>

            {/* ✅ SOCIAL ICONS (MAPPED) */}
            <div className="footer-socials">
              {mysocial.map((item) => (
                <a
                  key={item.w_no}
                  href={item.w_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  title={item.w_name}
                >
                  <img src={item.w_img} alt={item.w_name} />
                </a>
              ))}
            </div>

            <p>Subscribe to our newsletter</p>
            <div className="newsletter-box">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 Smiling Star Private Limited. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
