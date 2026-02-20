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
           Who We Are
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="about-content">

        {/* LEFT: TEXT */}
        <div className="about-text">
          <p>
            <strong>Smiling Star Private Limited</strong> is a purpose-driven technology company building
    digital solutions for social good. We create accessible, scalable, and
    sustainable platforms that enable organizations to deliver measurable
    social and environmental impact.
          </p>

          <p>
             Our approach blends strong technical expertise with a deep understanding
    of social challenges, ensuring solutions that are user-centric,
    data-driven, and designed for long-term sustainability.
          </p>

          <p>
            Our work bridges the gap between technology and real-world social
            challenges by improving access to education, streamlining
            operations, and enabling data-driven decision-making for social
            impact initiatives.
              Our approach blends strong technical expertise with a deep understanding
    of social challenges, ensuring solutions that are user-centric,
    data-driven, and designed for long-term sustainability.

          </p>

          
        </div>

        {/* RIGHT: CAPABILITIES */}
        <div className="about-capabilities">
          <h3> Our Mission</h3>

          <div className="capability">
            <span>Strengthen NGOs and social enterprises through reliable digital infrastructure</span>
            <div className="bar"><span className="fill w80"></span></div>
          </div>

          <div className="capability">
            <span>Develop technology aligned with the UN Sustainable Development Goals (SDGs)</span>
            <div className="bar"><span className="fill w70"></span></div>
          </div>

          <div className="capability">
            <span>Improve access to education, information, and essential services
</span>
            <div className="bar"><span className="fill w75"></span></div>
          </div>

          <div className="capability">
            <span>Enable data‑driven decision‑making for social impact and accountability
</span>
            <div className="bar"><span className="fill w60"></span></div>
          </div>
        </div>
      </div>


   
      {/* VALUES / IMPACT */}
      <h1>Values and Impact</h1>
      <div className="about-values">  
        
  <div className="value-card">
    <h3>Impact-Driven Solutions</h3>
    <p>
      Technology built to create measurable social and environmental impact,
      not just digital outputs.
    </p>
  </div>

  <div className="value-card">
    <h3>Purpose-Led Technology</h3>
    <p>
      Every system is designed with accessibility, ethics, and long-term
      sustainability at its core.
    </p>
  </div>

  <div className="value-card">
    <h3>Communities We Serve</h3>
    <p>
      NGOs, educators, social enterprises, and grassroots organizations
      driving positive change.
    </p>
  </div>

  <div className="value-card">
    <h3>Aligned with SDGs</h3>
    <p>
      Our solutions support the UN Sustainable Development Goals to address
      inequality, education, and inclusion.
    </p>
  </div>

  <div className="value-card">
    <h3>Data for Social Impact</h3>
    <p>
      We enable data-driven insights to improve decision-making,
      transparency, and accountability.
    </p>
  </div>

  <div className="value-card">
    <h3>Scalable & Reliable Systems</h3>
    <p>
      Digital infrastructure that grows with organizations and supports
      long-term mission success.
    </p>
  </div>
</div>

    </section>
  );
}

export default About;
