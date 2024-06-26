import React from 'react';
import './Common.css'; // Import the common CSS file
import Footer from './Footer'; // Import the Footer component

const Research: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Research</h1>
      <p>As a data and research initiative, we conduct and promote research in two broad fields: Economics and SME/Entrepreneurship.</p>
      
      <div className="sections">
        <div className="section">
          <h2>Research Areas</h2>
          <p>Exploiting soft information from website texts of higher education institutions, we proxy their transfer activities. This helps understanding - in real time - the scope and variety of knowledge transfer from higher education institutions and provides a basis for further research on the effects of such transfer activities on the regional economy and society.</p>
          <a href="#link-to-paper">Link to paper</a>
        </div>
        <div className="section">
          <h2>Another Research Area</h2>
          <p>Details about this research area...</p>
          <a href="#link-to-paper">Link to paper</a>
        </div>
      </div>
      
      <div className="papers-section">
        <h2>Recent Papers</h2>
        <ul>
          <li><a href="#link-to-paper-2024">Real-Time Insolvency Analysis (2024)</a></li>
          <li><a href="#link-to-paper-2023">IAB Case Study for Siegen-Wittgenstein (2023)</a></li>
          <li><a href="#link-to-paper-2023-kt">Knowledge Transfer (2023)</a></li>
        </ul>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Research;
