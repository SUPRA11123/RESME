import React, { useState } from 'react';
import './Dashboard.css'; // Import the CSS file for the dashboard
import Footer from './Footer'; // Import the Footer component

const Dashboard: React.FC = () => {
  const [iframeSrc, setIframeSrc] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1); // State for zoom level

  const handleLinkClick = (src: string) => {
    setIframeSrc(src);
  };

  const handleZoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoomLevel(parseFloat(event.target.value));
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
      <p>
          RESME data enables us to gain real-time insights into various topics.
          <br />
          The RESME Dashboard provides easy access to these insights.
          <br />
          To switch visualization, please choose a topic from the Indicators list.
        </p>
      </div>
      <div className="dashboard-container">
        <div className="sidebar">
          <h2>Indicators</h2>
          <ul>
            <li>
              <a href="#!" onClick={() => handleLinkClick('https://mschmitt-resme.shinyapps.io/InsolvencyTestApp/')}>Insolvencies</a>
            </li>
            <li>
              <a href="#!" onClick={() => handleLinkClick('#link-to-economic-sentiment')}>Economic Sentiment</a>
            </li>
            <li>
              <a href="#!" onClick={() => handleLinkClick('#link-to-local-bank-price-monitor')}>Local Bank Price Monitor</a>
            </li>
          </ul>
        </div>
        <div className="iframe-container">
          <div className="zoom-controls">
            <label htmlFor="zoom">Zoom: </label>
            <input
              type="range"
              id="zoom"
              name="zoom"
              min="0.5"
              max="2"
              step="0.1"
              value={zoomLevel}
              onChange={handleZoomChange}
            />
          </div>
          {iframeSrc ? (
            <iframe
              className="iframe"
              src={iframeSrc}
              allowFullScreen
              style={{ transform: `scale(${zoomLevel})` }}
            ></iframe>
          ) : (
            <div className="placeholder">
              Select an indicator from the left to see the visualization.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
