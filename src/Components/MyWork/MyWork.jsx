import React from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

function MyWork() {
  return (
    <section id="work" className="my-work">

      {/* Section Title */}
      <div className="my-work-title">
        <h1>Our Impact Initiatives</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Optional short description (recommended) */}
      <p className="my-work-subtitle">
        A snapshot of technology solutions designed to support education,
        accessibility, and community-driven social impact.
      </p>

      {/* Impact Projects Grid */}
      <div className="my-work-container">
        {mywork_data.map((work, index) => (
          <a
            key={index}
            href={work.w_url}
            target="_blank"
            rel="noopener noreferrer"
            className="my-work-item"
          >
            <img src={work.w_img} alt={work.w_name} />
            <p>{work.w_name}</p>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="my-work-show-more">
        <span>Explore More Initiatives</span>
        <img src={arrow_icon} alt="" />
      </div>

    </section>
  );
}

export default MyWork;
