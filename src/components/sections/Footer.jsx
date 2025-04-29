import React from 'react';
import '../styles/Footer.css';
import img1 from '../../assets/image 1.png';
import img2 from '../../assets/image 2.png';
import img3 from '../../assets/image 3.png';
import img4 from '../../assets/image 4.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img className="faded" src={img1} alt="Company 1" />
        <img className="active" src={img2} alt="Company 2" />
        <img className="faded" src={img3} alt="Company 3" />
        <img className="faded" src={img4} alt="Company 4" />
      </div>
      <div className="footer-copyright">
        Copyright © 2017 APD Digital Services Sdn Bhd, All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;