import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Form.css';

const Form = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      'service_x9awbp6',    // replace with your EmailJS service ID
      'template_em9mjr4',   // replace with your EmailJS template ID
      form.current,
      'CsHL-yZh44mhcwuXM'     // replace with your EmailJS public key
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
    <section className="form-section">
      <h2 className="form-title">
        <span>register</span> Your Interest
      </h2>
      <div className="form-card">
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
              <textarea name="message" placeholder="Message ..." rows={4} required></textarea>
            </div>
          </div>
          <button className="form-submit-btn" type="submit">
            SUBMIT MESSAGE
          </button>
          {status && <div className="form-status">{status}</div>}
        </form>
      </div>
    </section>
  );
};

export default Form;