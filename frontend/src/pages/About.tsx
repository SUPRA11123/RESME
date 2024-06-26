import React from 'react';
import './Common.css'; // Import the common CSS file
import './About.css'; // Import the About specific CSS file
import Footer from './Footer'; // Import the Footer component

const About: React.FC = () => {
  return (
    <div className="page-container">
      <h1>About RESME</h1>
      <div className="about-section">
        <div className="about-box">
          <h2>About RESME</h2>
          <p>
            The RESME data initiative, founded in 2020, continuously collects comprehensive regional data for research in the field of regional economics (RE) and for small and medium-sized enterprises (SME). Using modern data science methods, we collect and process data in real time to produce informative insights.
          </p>
        </div>
        <div className="about-box">
          <h2>Why SME and regional economic data?</h2>
          <ul>
            <li>Top-level SME and regional economic research is of great importance for social welfare and sound policy-making.</li>
            <li>Small and medium enterprises (SME) account for 50% of value added and employ around two thirds of the workforce in the EU.</li>
            <li>There is a large interest in supporting SMEs and providing them with the best conditions possible.</li>
            <li>The economic dynamics of an SME are often related to the local economic environment in which it operates.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
