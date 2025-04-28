import React from 'react';
import '../styles/Services.css';
import chevron from '../../assets/chevron.png'; // Use your own chevron/hexagon icon

const services = [
  {
    title: 'RESPONSIVE & MULTIPURPOSE',
    subtitle: 'Desktops, Tablets & Phones',
    desc: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
  },
  {
    title: 'EASY CUSTOMIZATION',
    subtitle: 'One Click Demo Content Installation',
    desc: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
  },
  {
    title: 'UNLIMITED FEATURES',
    subtitle: 'Shortcodes, Typography & Different Layouts',
    desc: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
  },
  {
    title: 'CLEAN & MODULAR CODING',
    subtitle: '100% Clean, Valid & Well-Commented Coding',
    desc: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
  },
  {
    title: 'THE BEST E-COMMERCE SOLUTIONS',
    subtitle: 'WooCommerce Fully Integration',
    desc: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
  },
  {
    title: 'AWESOME FRIENDLY SUPPORT',
    subtitle: 'Free Lifetime Support & Updates',
    desc: 'Proin in magna a ipsum viverra scelerisque eu nec turp, Nunc vestibulum fringilla accumsan. Praesent arcu turpis.',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-list">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img src={chevron} alt="" className="service-icon" />
            <div>
              <div className="service-title">{service.title}</div>
              <div className="service-subtitle">{service.subtitle}</div>
              <div className="service-desc">{service.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;