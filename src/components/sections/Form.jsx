import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Form.css';
import quotation from '../../assets/quotation.png';
import leftRight from '../../assets/left-right.png';

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

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
      },
      (error) => {
        setStatus('Failed to send. Please try again.');
      }
    );
  };

  return (
    <div className="form-wrapper">
      <section className="form-section">
       
        <div className="form-card">
        <h2 className="form-title">
          Register Your Interest
        </h2>
          <form className="interest-form" ref={form} onSubmit={sendEmail}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="form-group occupation-group">
                <input type="text" name="occupation" placeholder="Occupation" required />
                <span className="custom-select-icon">&#9660;</span>
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
        
        {/* Quote icon at the junction */}
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
            <span className="badge-title">CEO & Developer</span>
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