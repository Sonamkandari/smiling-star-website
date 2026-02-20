// Services.jsx
import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-title">
        <h1>What We Do</h1>
      </div>

      <div className="services-container">
        <div className="services-format">
          <h3>01</h3>
          <h2>Web Design & Web Development for NGOs</h2>
          <p>
            SEO-optimized, responsive, and accessible websites that amplify
            social missions and increase community engagement.
          </p>
        </div>

        <div className="services-format">
          <h3>02</h3>
          <h2>Software & Backend Development</h2>
          <p>
            Secure, scalable backend systems built to support impact platforms
            and mission-critical applications.
          </p>
        </div>

        <div className="services-format">
          <h3>03</h3>
          <h2>Application Development</h2>
          <p>
            Custom applications designed to improve service delivery, learning
            access, and data-driven participation.
          </p>
        </div>

        <div className="services-format">
          <h3>04</h3>
          <h2>UI/UX & Visual Design</h2>
          <p>
            Inclusive, user-centric design focused on accessibility and
            usability for diverse communities.
          </p>
        </div>

        <div className="services-format">
          <h3>05</h3>
          <h2>Data & System Management</h2>
          <p>
            Structured data solutions supporting monitoring, evaluation,
            transparency, and SDG impact reporting.
          </p>
        </div>

        <div className="services-format">
          <h3>06</h3>
          <h2>API & System Integration</h2>
          <p>
            Seamless API integrations that allow platforms and services to
            communicate efficiently.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;