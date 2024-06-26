import React from 'react';
import './Common.css'; // Import the common CSS file

const Events: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Events</h1>
      <h2>Upcoming</h2>
      <ul>
        <li>...</li>
        <li>...</li>
      </ul>
      <h2>Past events</h2>
      <ul>
        <li><a href="#link-to-event-report">Event 1</a></li>
        <li><a href="#link-to-event-report">Event 2</a></li>
      </ul>
    </div>
  );
};

export default Events;
