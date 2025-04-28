import React from 'react';
import '../styles/Hero.css';
import squares from '../../assets/squares.png';
import arrow from '../../assets/arrow.png';
import Features from './Features';


const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="hero-content">
        <p className="hero-subtitle">WHAT ARE YOU WAITING FOR ?</p>
        <h1 className="hero-title">LET'S BE CREATIVE !</h1>
        <div className="hero-bar">
          <em>LOREM IPSUM DOLOR SI AMET</em>
        </div>
        <div className="hero-divider">
          <span className="double-line" />
          <img src={squares} alt="" className="squares-icon" />
          <span className="hero-start">
            <span className="start-text">START</span> DOING THAT
          </span>
          <img src={squares} alt="" className="squares-icon" />
          <span className="double-line" />
        </div>
        <div className="hero-down">
        <div className="hero-down">
         <img src={arrow} alt="Down arrow" className="down-arrow-img" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;