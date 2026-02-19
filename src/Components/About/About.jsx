import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern1.svg";

function About() {
  return (
    <section id="about" className="about">

      {/* SECTION TITLE */}
      <div className="about-title">
        <h1>About Smiling Star</h1>
        <img src={theme_pattern} alt="" />
        <p className="about-subtitle">
          Technology with purpose. Impact with heart.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="about-content">

        {/* LEFT: TEXT */}
        <div className="about-text">
          <p>
            <strong>Smiling Star Private Limited</strong> is a technology-driven
            organization focused on creating meaningful digital solutions for
            social good.
          </p>

          <p>
            We collaborate with NGOs, educational institutions, and
            impact-focused organizations to design and build technology that is
            accessible, scalable, and purpose-driven.
          </p>

          <p>
            Our work bridges the gap between technology and real-world social
            challenges by improving access to education, streamlining
            operations, and enabling data-driven decision-making for social
            impact initiatives.
          </p>
        </div>

        {/* RIGHT: CAPABILITIES */}
        <div className="about-capabilities">
          <h3>What We Do</h3>

          <div className="capability">
            <span>Web & Platform Development</span>
            <div className="bar"><span className="fill w80"></span></div>
          </div>

          <div className="capability">
            <span>Technology for Social Impact</span>
            <div className="bar"><span className="fill w70"></span></div>
          </div>

          <div className="capability">
            <span>Scalable & Secure System Design</span>
            <div className="bar"><span className="fill w75"></span></div>
          </div>

          <div className="capability">
            <span>Data Management & Insights</span>
            <div className="bar"><span className="fill w60"></span></div>
          </div>
        </div>
      </div>

      {/* VALUES / IMPACT */}
      <div className="about-values">
        <div className="value-card">
          <h3>Impact-Driven Solutions</h3>
          <p>
            Digital platforms built to support education, inclusion, and social
            initiatives.
          </p>
        </div>

        <div className="value-card">
          <h3>Purpose-Led Technology</h3>
          <p>
            Systems designed with accessibility, reliability, and long-term
            scale in mind.
          </p>
        </div>

        <div className="value-card">
          <h3>Communities We Serve</h3>
          <p>
            NGOs, educators, and organizations working to create positive social
            change.
          </p>
        </div>
      </div>

    </section>
  );
}

export default About;
