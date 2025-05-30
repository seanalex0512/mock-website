import React from 'react';
import '../styles/Skills.css';
import squares from '../../assets/squares.png';

const skills = [
  { label: 'WEB DESIGN', value: 75 },
  { label: 'WEB DEVELOPMENT', value: 92 },
  { label: 'SPEED OPTIMIZATION', value: 68 },
  { label: 'CUSTOMER SUPPORT', value: 100 },
  { label: 'MARKETING', value: 83 },
  { label: 'ADVERTISEMENT', value: 50 },
];

const CIRCLE_RADIUS = 54;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <div className="skills-divider">
          <img src={squares} alt="" className="skills-squares" />
          <span className="skills-title">
            OUR POWERFUL <span className="skills-highlight">SKILLS</span>
          </span>
          <img src={squares} alt="" className="skills-squares" />
        </div>
        <p className="skills-subtitle">
          We’re good and experienced at different things and areas and we promise about quality of our works
        </p>
      </div>
      <div className="skills-list">
        {skills.map((skill, idx) => (
          <div className="skill-item" key={idx}>
            <div className="skill-circle">
              <svg className="skill-svg" viewBox="0 0 120 120">
                <circle
                  className="skill-bg"
                  cx="60"
                  cy="60"
                  r={CIRCLE_RADIUS}
                  stroke="#444"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  className="skill-progress"
                  cx="60"
                  cy="60"
                  r={CIRCLE_RADIUS}
                  stroke="#1abc9c"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={CIRCLE_CIRCUMFERENCE}
                  strokeDashoffset={CIRCLE_CIRCUMFERENCE * (1 - skill.value / 100)}
                />
              </svg>
              <div className="skill-value">{skill.value}%</div>
            </div>
            <div className="skill-label">{skill.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;