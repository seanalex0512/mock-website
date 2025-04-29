import React from 'react';
import '../styles/Features.css';
import squares from '../../assets/squares.png';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "desktop",
      title: "RESPONSIVE & MULTIPURPOSE",
      description: "Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.",
      buttonColor: "grey"
    },
    {
      id: 2,
      icon: "puzzle-piece",
      title: "EASY CUSTOMIZATION",
      description: "Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.",
      buttonColor: "teal"
    },
    {
      id: 3,
      icon: "search",
      title: "AWESOME FRIENDLY SUPPORT",
      description: "Proin in magna a ipsum viverra scelerisq enec turp. Nunc vestibulum fringilla accumsan ornare quis.",
      buttonColor: "grey"
    }
  ];

  return (
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
              <i className={`fa fa-${feature.icon}`}></i>
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
};

export default Features;