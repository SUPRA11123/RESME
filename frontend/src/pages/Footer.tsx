import React from 'react';
import './Footer.css'; // Import the CSS file for the footer
//import logo1 from './path/to/logo1.png';
//import logo2 from './path/to/logo2.png';
//import logo3 from './path/to/logo3.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Legal Info</h4>
          <p>Some legal information here.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@resme.org</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Cooperation Partners</h4>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
