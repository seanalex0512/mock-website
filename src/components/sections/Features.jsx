import React from 'react';
import '../styles/Features.css';
import squares from '../../assets/squares.png';
import friendlySupport from '../../assets/friendly-support.png';

const features = [
  {
    id: 1,
    icon: "desktop",
    title: "RESPONSIVE & MULTIPURPOSE",
    description: "Enjoy our designs that work on all device sizes perfectly. Each layout adapts fluidly to screens while maintaining visual appeal across different viewing contexts.",
    buttonColor: "grey"
  },
  {
    id: 2,
    icon: "puzzle-piece",
    title: "EASY CUSTOMIZATION",
    description: "Modify any element with our intuitive editing tools quickly. Our system provides simple controls allowing you to personalize features without technical knowledge required.",
    buttonColor: "teal"
  },
  {
    id: 3,
    img: friendlySupport,
    title: "AWESOME FRIENDLY SUPPORT",
    description: "Access our expert team whenever you encounter any issues. Our specialists respond promptly to inquiries ensuring your project continues smoothly without unnecessary delays.",
    buttonColor: "grey"
  }
];

const Features = () => (
  <section className="features-section" id='features'>
    <div className="features-header">
      <span className="double-lines"></span>
      <div className="title-container">
        <img src={squares} alt="Squares" className="squares-left" />
        <h2 className="features-title">
          WHAT WE <span>OFFER</span>
        </h2>
        <img src={squares} alt="Squares" className="squares-right" />
      </div>
      <span className="double-lines"></span>
    </div>
    <p className="features-subtitle">
      We offer our customers the best services & solutions, this is our main services list
    </p>
    <div className="features-container">
      {features.map((feature) => (
        <div key={feature.id} className="feature-card">
          <div className={`feature-icon ${feature.id === 2 ? 'teal-bg' : 'dark-bg'}`}>
            {feature.img ? (
              <img src={feature.img} alt={feature.title} className="feature-img" />
            ) : (
              <i className={`fa fa-${feature.icon}`}></i>
            )}
          </div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
          <button className={`read-more-btn ${feature.buttonColor === 'teal' ? 'teal-btn' : 'grey-btn'}`}>
            READ MORE
          </button>
        </div>
      ))}
    </div>
  </section>
);

export default Features;