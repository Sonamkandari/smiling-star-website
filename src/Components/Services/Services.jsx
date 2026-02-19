import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Services = () => {
  return (
    <section id="services" className="services">

      {/* Section Title */}
      <div className="services-title">
        <h1>What We Do</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Optional short intro (recommended for NGO clarity) */}
      <p className="services-subtitle">
        We design and deliver technology solutions that help organizations
        working for social good operate more efficiently, reach wider
        communities, and create measurable impact.
      </p>

      {/* Services Grid */}
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">

            {/* Category / Identifier */}
            <h3>{service.s_no}</h3>

            {/* Service Title */}
            <h2>{service.s_name}</h2>

            {/* Service Description */}
            <p>{service.s_desc}</p>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Services
