import React from 'react';
import '../styles/Socials.css';
import socials from '../../assets/socials.png';

const team = [
  {
    name: 'ALEXIS SIMPSON',
    role: 'CEO & Developer',
    email: 'a.simpson@unique.com',
    phone: '+1 911 (77) 222-1111',
    highlight: false,
  },
  {
    name: 'STEVEN COLE',
    role: 'User Interface Designer',
    email: 's.cole@unique.com',
    phone: '+1 911 (77) 222-1111',
    highlight: true,
    socials: socials,
  },
  {
    name: 'FRANK PIENER',
    role: 'Sales Manager',
    email: 'fpiener@unique.com',
    phone: '+1 911 (77) 222-1111',
    highlight: false,
  },
  {
    name: 'ASHLEY LENNON',
    role: 'IT Specialist',
    email: 'a.lennon@unique.com',
    phone: '+1 911 (77) 222-1111',
    highlight: false,
  },
];

const Socials = () => {
  return (
    <section className="socials-section">
      <div className="socials-container">
        <div className="socials-list">
          {team.map((member, idx) => (
            <div className="social-card" key={idx}>
              <div 
                className="social-card-top"
                style={{ backgroundColor: member.highlight ? '#06BDB4' : '#747474' }}
              >
                {member.socials ? (
                  <img src={member.socials} alt="Socials" className="socials-icons-img" />
                ) : (
                  <div className="socials-photo-placeholder" />
                )}
              </div>
              <div 
                className="social-card-bottom"
                style={{ backgroundColor: '#333333' }}
              >
                <div className="social-card-name-container">
                  <div 
                    className="social-card-name-btn"
                    style={{ 
                      backgroundColor: member.highlight ? '#333333' : '#06BDB4',
                      position: 'relative',
                      top: '-24px',
                      marginBottom: '-12px'
                    }}
                  >
                    {member.name}
                  </div>
                </div>
                <div className="social-card-role">
                  {member.role}
                </div>
                <hr className="social-card-divider" />
                
                <div className="social-card-contact">
                  <div>
                    <span className="fa fa-envelope" /> {member.email}
                  </div>
                  <div>
                    <span className="fa fa-phone" /> {member.phone}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="socials-view-btn">VIEW ALL WORKS</button>
      </div>
    </section>
  );
};

export default Socials;