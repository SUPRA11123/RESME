import React from 'react';
import './Common.css'; // Import the common CSS file
import './Network.css'; // Import the Network specific CSS file
import Footer from './Footer'; // Import the Footer component

const Network: React.FC = () => {
  return (
    <div className="page-container">
      <h1>The RESME Network</h1>
      <p>We support interdisciplinary research and knowledge transfer between researchers and data users. Our network currently consists of researchers from the fields of economics and SME/Entrepreneurship research.</p>
      <div className="network-section">
        <div className="network-box">
          <h2>(Regional) Economics</h2>
          <p>Prof. Dr. Günter W. Beck – Head of the economics group, University of Siegen</p>
          <p>Michelle Schmitt – University of Siegen</p>
        </div>
        <div className="network-box">
          <h2>SME/Entrepreneurship</h2>
          <p>Prof. Dr. Arndt Werner – Head of the SME group, University of Siegen</p>
          <p>Christian Schröder – University of Siegen</p>
        </div>
        <div className="network-box">
          <h2>Cooperation partners</h2>
          <ul>
            <li>Deutsche Nationalbibliothek</li>
            <li>Kallisto Consulting</li>
            <li>IAB Nürnberg</li>
            <li>...</li>
          </ul>
        </div>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Network;
