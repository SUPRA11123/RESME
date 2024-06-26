import React from 'react';
import './Common.css'; // Import the common CSS file

const Data: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Data</h1>
      <p>We continuously collect data that provides insights into regional economics and businesses. Please note that data can only be accessed within the RESME network. Please contact us for data access and cooperations.</p>
      <h2>Available Data</h2>
      <ul>
        <li>Insolvencies</li>
        <li>Firm websites</li>
        <li>Websites of Higher Education Institutions</li>
        <li>...</li>
      </ul>
    </div>
  );
};

export default Data;
