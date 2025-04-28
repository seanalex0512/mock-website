import React from 'react';
import '../styles/Features.css';
import squares from '../../assets/squares.png';

const features = [
  {
    icon: <i className="fa fa-desktop" aria-hidden="true"></i>,
    title: 'RESPONSIVE & MULTIPURPOSE',
    desc: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.',
    button: 'READ MORE',
    active: false,
  },
  {
    icon: <i className="fa fa-puzzle-piece" aria-hidden="true"></i>,
    title: 'EASY CUSTOMIZATION',
    desc: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.',
    button: 'READ MORE',
    active: true,
  },
  {
    icon: <i className="fa fa-support" aria-hidden="true"></i>,
    title: 'AWESOME FRIENDLY SUPPORT',
    desc: 'Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.',
    button: 'READ MORE',
    active: false,
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-header">
        <div className="features-divider">
          <span className="features-line" />
          <img src={squares} alt="" className="features-squares" />
          <span className="features-title">
            WHAT WE <span className="features-offer">OFFER</span>
          </span>
          <img src={squares} alt="" className="features-squares" />
          <span className="features-line" />
        </div>
        <p className="features-subtitle">
          We offer our customers the best services &amp; solutions, this is our main services list
        </p>
      </div>
      <div className="features-list">
        {features.map((feature, idx) => (
          <div className={`feature-card${feature.active ? ' active' : ''}`} key={idx}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
            <button className={`feature-btn${feature.active ? ' active' : ''}`}>{feature.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;