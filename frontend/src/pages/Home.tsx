import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './Common.css';// Import the common CSS file
import Footer from './Footer'; // Correct import for Footer component

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <h1>RESME - New Data for Regional Economic and SME research</h1>
      <p>
        The RESME data initiative, founded in 2020, continuously collects comprehensive regional data for research in the field of regional economics (RE) and for small and medium-sized enterprises (SME). Using modern data science methods, we collect and process data in real time to produce informative insights.
      </p>
      <div className="sections">
        <div className="section">
          <h2>Data</h2>
          <p>
            Various data sources provide valuable information about regions and firms. We make them usable for economic research.
          </p>
          <Link to="/data">Get more information on our data</Link> {/* Use Link component */}
        </div>
        <div className="section">
          <h2>Research</h2>
          <p>
            As a data and research initiative we conduct and promote research in two broad fields: Economics and SME/Entrepreneurship.
          </p>
          <Link to="/research-areas">Get more information about our research areas</Link> {/* Use Link component */}
        </div>
        <div className="section">
          <h2>Network</h2>
          <p>
            We support interdisciplinary research and knowledge transfer between researchers and data users.
          </p>
          <Link to="/network">Get to know our network of researchers and cooperation partners</Link> {/* Use Link component */}
        </div>
      </div>
      <div className="news-section">
        <h2>News</h2>
        <p>Dynamic field with latest news (e.g. new paper, conference visits, events, new indicator) sliding into view.</p>
      </div>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default Home;
