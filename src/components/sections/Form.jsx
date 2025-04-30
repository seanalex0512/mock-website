import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Form.css';
import quotation from '../../assets/quotation.png';
import leftRight from '../../assets/left-right.png';

const OCCUPATIONS = [
  "Student",
  "Designer",
  "Engineer",
  "Doctor",
  "Software Developer",
  "Self-employed",
  "Unemployed",
  "Other"
];

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [occupation, setOccupation] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filtered list based on input
  const filteredOccupations = OCCUPATIONS.filter(occ =>
    occ.toLowerCase().includes(occupation.toLowerCase())
  );

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_x9awbp6',
      'template_em9mjr4',
      form.current,
      'CsHL-yZh44mhcwuXM'
    )
    .then(
      (result) => {
        setStatus('Message sent!');
        form.current.reset();
        setOccupation('');
      },
      (error) => {
        setStatus('Failed to send. Please try again.');
      }
    );
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.occupation-group')) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <div className="form-wrapper">
      <section className="form-section">
        <div className="form-card">
          <h2 className="form-title">
            Register Your Interest
          </h2>
          <form className="interest-form" ref={form} onSubmit={sendEmail} autoComplete="off">
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-group occupation-group">
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  value={occupation}
                  required
                  autoComplete="off"
                  onChange={e => {
                    setOccupation(e.target.value);
                    setDropdownOpen(true);
                  }}
                  onFocus={() => setDropdownOpen(true)}
                />
                <span
                  className="custom-select-icon"
                  onClick={() => setDropdownOpen((open) => !open)}
                  tabIndex={0}
                  style={{ cursor: 'pointer' }}
                  aria-label="Show occupation options"
                >
                  &#9660;
                </span>
                {dropdownOpen && filteredOccupations.length > 0 && (
                  <ul className="custom-dropdown">
                    {filteredOccupations.map((occ) => (
                      <li
                        key={occ}
                        onClick={() => {
                          setOccupation(occ);
                          setDropdownOpen(false);
                        }}
                      >
                        {occ}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="text" name="contact" placeholder="Contact No" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group full-width">
                <textarea name="message" placeholder="Message..." rows={4} required></textarea>
              </div>
            </div>
            <button className="form-submit-btn" type="submit">
              SUBMIT MESSAGE
            </button>
            {status && <div className="form-status">{status}</div>}
          </form>
        </div>
        <div className="quote-container">
          <div className="diamond-shape"></div>
          <img src={quotation} alt="Quote" className="quote-image" />
        </div>
      </section>
      
      {/* Testimonial part */}
      <div className="testimonial-part">
        <div className="testimonial-container">
          <div className="testimonial-badge">
            <span className="badge-name">ALEXIS SIMPSON</span>
            <span className="badge-title">-CEO & Developer</span>
          </div>
          <div className="testimonial-quote">
            <p>
              Lorem ipsum dolor sit amet, laudantium, totam rem. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel 
              interdum mi sapien ut justo consequat magna, id molestie ipsum volutpat quis
            </p>
          </div>
          <div className="testimonial-nav">
            <img src={leftRight} alt="Navigation Arrows" className="nav-arrows" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;