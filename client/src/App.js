import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul style={navStyles}>
            <li style={navItemStyles}>
              <Link to="/" style={linkStyles}>Login</Link>
            </li>
            <li style={navItemStyles}>
              <Link to="/admin" style={linkStyles}>Admin Panel</Link>
            </li>
            <li style={navItemStyles}>
              <Link to="/signup" style={linkStyles}>Signup</Link>
            </li>
            <li style={navItemStyles}>
              <Link to="/home" style={linkStyles}>Home</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

const navStyles = {
  backgroundColor: '#333',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '10px',
};

const navItemStyles = {
  listStyle: 'none',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '16px',
};

export default App;
