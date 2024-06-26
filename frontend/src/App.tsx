import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaInfoCircle, FaDatabase, FaResearchgate, FaFileAlt, FaChartLine, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Data from './pages/Data';
import Research from './pages/Research';
import Dashboard from './pages/Dashboard';
import Network from './pages/Network';
import Events from './pages/Events';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <Link to="/" className="logo-link">
            <img src="/RESME_logo_blue.png" alt="RESME Logo" className="logo" />
          </Link>
          <ul className="nav-list">
            <li><Link to="/about"><FaInfoCircle /> About RESME</Link></li>
            <li><Link to="/data"><FaDatabase /> Data</Link></li>
            <li><Link to="/research"><FaResearchgate /> Research</Link></li>
            <li><Link to="/dashboard"><FaChartLine /> RESME Dashboard</Link></li>
            <li><Link to="/network"><FaUsers /> Network</Link></li>
            <li><Link to="/events"><FaCalendarAlt /> Events</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/data" element={<Data />} />
          <Route path="/research" element={<Research />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/network" element={<Network />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
